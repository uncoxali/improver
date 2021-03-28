webpackHotUpdate_N_E("pages/index",{

/***/ "./node_modules/@fullpage/react-fullpage/dist/react-fullpage.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@fullpage/react-fullpage/dist/react-fullpage.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * @fullpage/react-fullpage 0.1.19
 * https://github.com/alvarotrigo/react-fullpage
 * @license https://github.com/alvarotrigo/react-fullpage#license
 *
 * Copyright (C) 2018 alvarotrigo.com - A project by Alvaro Trigo & Michael Walker
 */
module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 48);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(29)('wks');
var uid = __webpack_require__(14);
var Symbol = __webpack_require__(1).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __webpack_require__(/*! react */ "./node_modules/react/index.js");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var createDesc = __webpack_require__(18);
module.exports = __webpack_require__(10) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return MAIN_SELECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return ID_SELECTOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DEFAULT_SECTION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DEFAULT_SLIDE; });
var MAIN_SELECTOR='fullpage';var ID_SELECTOR="#".concat(MAIN_SELECTOR);var DEFAULT_SECTION='.section';var DEFAULT_SLIDE='.SLIDE';

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(39);
var defined = __webpack_require__(17);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(13);
var hide = __webpack_require__(3);
var redefine = __webpack_require__(15);
var ctx = __webpack_require__(41);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(9)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(19);
var IE8_DOM_DEFINE = __webpack_require__(47);
var toPrimitive = __webpack_require__(30);
var dP = Object.defineProperty;

exports.f = __webpack_require__(10) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(40);
var enumBugKeys = __webpack_require__(25);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var hide = __webpack_require__(3);
var has = __webpack_require__(4);
var SRC = __webpack_require__(14)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(13).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 17 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(debug,compName){return debug?function(){var _console;for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return(_console=console).log.apply(_console,["<".concat(compName,"/> Debug Log: ")].concat(args));}:function(){};});

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(17);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(0)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(3)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 25 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(29)('keys');
var uid = __webpack_require__(14);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 27 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(11).f;
var has = __webpack_require__(4);
var TAG = __webpack_require__(0)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(13);
var global = __webpack_require__(1);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(16) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(5);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(23);
var step = __webpack_require__(72);
var Iterators = __webpack_require__(22);
var toIObject = __webpack_require__(7);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(71)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(40);
var hiddenKeys = __webpack_require__(25).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(19);
var dPs = __webpack_require__(77);
var enumBugKeys = __webpack_require__(25);
var IE_PROTO = __webpack_require__(26)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(46)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(76).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(27);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 36 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(36);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(7);
var toLength = __webpack_require__(37);
var toAbsoluteIndex = __webpack_require__(78);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(27);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(4);
var toIObject = __webpack_require__(7);
var arrayIndexOf = __webpack_require__(38)(false);
var IE_PROTO = __webpack_require__(26)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(81);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(1);
var has = __webpack_require__(4);
var DESCRIPTORS = __webpack_require__(10);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(15);
var META = __webpack_require__(80).KEY;
var $fails = __webpack_require__(9);
var shared = __webpack_require__(29);
var setToStringTag = __webpack_require__(28);
var uid = __webpack_require__(14);
var wks = __webpack_require__(0);
var wksExt = __webpack_require__(43);
var wksDefine = __webpack_require__(44);
var enumKeys = __webpack_require__(79);
var isArray = __webpack_require__(34);
var anObject = __webpack_require__(19);
var isObject = __webpack_require__(5);
var toIObject = __webpack_require__(7);
var toPrimitive = __webpack_require__(30);
var createDesc = __webpack_require__(18);
var _create = __webpack_require__(33);
var gOPNExt = __webpack_require__(75);
var $GOPD = __webpack_require__(74);
var $DP = __webpack_require__(11);
var $keys = __webpack_require__(12);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(32).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(24).f = $propertyIsEnumerable;
  __webpack_require__(35).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(16)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(3)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(0);


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);
var core = __webpack_require__(13);
var LIBRARY = __webpack_require__(16);
var wksExt = __webpack_require__(43);
var defineProperty = __webpack_require__(11).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44)('asyncIterator');


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
var document = __webpack_require__(1).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(10) && !__webpack_require__(9)(function () {
  return Object.defineProperty(__webpack_require__(46)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.match.js
var es6_regexp_match = __webpack_require__(84);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(2);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./components/Wrapper/index.js
/* eslint-disable import/no-extraneous-dependencies */var Wrapper_Wrapper=function Wrapper(_ref){var children=_ref.children;return external_react_default.a.createElement(external_react_["Fragment"],null,children);};/* harmony default export */ var components_Wrapper = (Wrapper_Wrapper);
// CONCATENATED MODULE: ./components/index.js
/* eslint-disable */var windowExists=function windowExists(){if(typeof window==='undefined'){return false;}try{var env="production".toLowerCase();return!env.match(/test/);}catch(e){return true;}};/* harmony default export */ var components = __webpack_exports__["default"] = ((function(){var exported;if(windowExists()){exported=__webpack_require__(82).default;}else{// NOTE: SSR support
exported=__webpack_require__(49).default;}exported.Wrapper=components_Wrapper;return exported;})());

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(20);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}/* eslint-disable import/no-extraneous-dependencies */ /* eslint-disable react/prop-types */// NOTE: SSR support
var ReactFullpageShell=/*#__PURE__*/function(_React$Component){_inherits(ReactFullpageShell,_React$Component);function ReactFullpageShell(props){var _this;_classCallCheck(this,ReactFullpageShell);_this=_possibleConstructorReturn(this,_getPrototypeOf(ReactFullpageShell).call(this,props));_this.state={};_this.log=Object(_Logger__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])(_this.props.debug,'ReactFullpageShell');_this.log('Building component');return _this;}_createClass(ReactFullpageShell,[{key:"render",value:function render(){return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div",{id:_selectors__WEBPACK_IMPORTED_MODULE_4__[/* MAIN_SELECTOR */ "d"]},this.props.render(this));}}]);return ReactFullpageShell;}(react__WEBPACK_IMPORTED_MODULE_2___default.a.Component);/* harmony default export */ __webpack_exports__["default"] = (ReactFullpageShell);

/***/ }),
/* 50 */
/***/ (function(module, exports) {

window.fp_easings={def:"easeOutQuad",linear:function(n,t,e,u){return e*n/u+t},swing:function(n,t,e,u){return window.fp_easings[window.fp_easings.def](n,t,e,u)},easeInQuad:function(n,t,e,u){return e*(n/=u)*n+t},easeOutQuad:function(n,t,e,u){return-e*(n/=u)*(n-2)+t},easeInOutQuad:function(n,t,e,u){return(n/=u/2)<1?e/2*n*n+t:-e/2*(--n*(n-2)-1)+t},easeInCubic:function(n,t,e,u){return e*(n/=u)*n*n+t},easeOutCubic:function(n,t,e,u){return e*((n=n/u-1)*n*n+1)+t},easeInOutCubic:function(n,t,e,u){return(n/=u/2)<1?e/2*n*n*n+t:e/2*((n-=2)*n*n+2)+t},easeInQuart:function(n,t,e,u){return e*(n/=u)*n*n*n+t},easeOutQuart:function(n,t,e,u){return-e*((n=n/u-1)*n*n*n-1)+t},easeInOutQuart:function(n,t,e,u){return(n/=u/2)<1?e/2*n*n*n*n+t:-e/2*((n-=2)*n*n*n-2)+t},easeInQuint:function(n,t,e,u){return e*(n/=u)*n*n*n*n+t},easeOutQuint:function(n,t,e,u){return e*((n=n/u-1)*n*n*n*n+1)+t},easeInOutQuint:function(n,t,e,u){return(n/=u/2)<1?e/2*n*n*n*n*n+t:e/2*((n-=2)*n*n*n*n+2)+t},easeInSine:function(n,t,e,u){return-e*Math.cos(n/u*(Math.PI/2))+e+t},easeOutSine:function(n,t,e,u){return e*Math.sin(n/u*(Math.PI/2))+t},easeInOutSine:function(n,t,e,u){return-e/2*(Math.cos(Math.PI*n/u)-1)+t},easeInExpo:function(n,t,e,u){return 0==n?t:e*Math.pow(2,10*(n/u-1))+t},easeOutExpo:function(n,t,e,u){return n==u?t+e:e*(1-Math.pow(2,-10*n/u))+t},easeInOutExpo:function(n,t,e,u){return 0==n?t:n==u?t+e:(n/=u/2)<1?e/2*Math.pow(2,10*(n-1))+t:e/2*(2-Math.pow(2,-10*--n))+t},easeInCirc:function(n,t,e,u){return-e*(Math.sqrt(1-(n/=u)*n)-1)+t},easeOutCirc:function(n,t,e,u){return e*Math.sqrt(1-(n=n/u-1)*n)+t},easeInOutCirc:function(n,t,e,u){return(n/=u/2)<1?-e/2*(Math.sqrt(1-n*n)-1)+t:e/2*(Math.sqrt(1-(n-=2)*n)+1)+t},easeInElastic:function(n,t,e,u){var a=1.70158,r=0,i=e;if(0==n)return t;if(1==(n/=u))return t+e;if(r||(r=.3*u),i<Math.abs(e)){i=e;a=r/4}else a=r/(2*Math.PI)*Math.asin(e/i);return-i*Math.pow(2,10*(n-=1))*Math.sin((n*u-a)*(2*Math.PI)/r)+t},easeOutElastic:function(n,t,e,u){var a=1.70158,r=0,i=e;if(0==n)return t;if(1==(n/=u))return t+e;if(r||(r=.3*u),i<Math.abs(e)){i=e;a=r/4}else a=r/(2*Math.PI)*Math.asin(e/i);return i*Math.pow(2,-10*n)*Math.sin((n*u-a)*(2*Math.PI)/r)+e+t},easeInOutElastic:function(n,t,e,u){var a=1.70158,r=0,i=e;if(0==n)return t;if(2==(n/=u/2))return t+e;if(r||(r=u*(.3*1.5)),i<Math.abs(e)){i=e;a=r/4}else a=r/(2*Math.PI)*Math.asin(e/i);return n<1?i*Math.pow(2,10*(n-=1))*Math.sin((n*u-a)*(2*Math.PI)/r)*-.5+t:i*Math.pow(2,-10*(n-=1))*Math.sin((n*u-a)*(2*Math.PI)/r)*.5+e+t},easeInBack:function(n,t,e,u,a){return null==a&&(a=1.70158),e*(n/=u)*n*((a+1)*n-a)+t},easeOutBack:function(n,t,e,u,a){return null==a&&(a=1.70158),e*((n=n/u-1)*n*((a+1)*n+a)+1)+t},easeInOutBack:function(n,t,e,u,a){return null==a&&(a=1.70158),(n/=u/2)<1?e/2*(n*n*((1+(a*=1.525))*n-a))+t:e/2*((n-=2)*n*((1+(a*=1.525))*n+a)+2)+t},easeInBounce:function(n,t,e,u){return e-window.fp_easings.easeOutBounce(u-n,0,e,u)+t},easeOutBounce:function(n,t,e,u){return(n/=u)<1/2.75?e*(7.5625*n*n)+t:n<2/2.75?e*(7.5625*(n-=1.5/2.75)*n+.75)+t:n<2.5/2.75?e*(7.5625*(n-=2.25/2.75)*n+.9375)+t:e*(7.5625*(n-=2.625/2.75)*n+.984375)+t},easeInOutBounce:function(n,t,e,u){return n<u/2?.5*window.fp_easings.easeInBounce(2*n,0,e,u)+t:.5*window.fp_easings.easeOutBounce(2*n-u,0,e,u)+.5*e+t}};
//# sourceMappingURL=easings.min.js.map


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/**
* Customized version of iScroll.js 0.1.3
* It fixes bugs affecting its integration with fullpage.js
* @license
*/
!function(r,n,p){var f=r.requestAnimationFrame||r.webkitRequestAnimationFrame||r.mozRequestAnimationFrame||r.oRequestAnimationFrame||r.msRequestAnimationFrame||function(t){r.setTimeout(t,1e3/60)},m=function(){var e={},o=n.createElement("div").style,i=function(){for(var t=["t","webkitT","MozT","msT","OT"],i=0,s=t.length;i<s;i++)if(t[i]+"ransform"in o)return t[i].substr(0,t[i].length-1);return!1}();function t(t){return!1!==i&&(""===i?t:i+t.charAt(0).toUpperCase()+t.substr(1))}e.getTime=Date.now||function(){return(new Date).getTime()},e.extend=function(t,i){for(var s in i)t[s]=i[s]},e.addEvent=function(t,i,s,e){t.addEventListener(i,s,!!e)},e.removeEvent=function(t,i,s,e){t.removeEventListener(i,s,!!e)},e.prefixPointerEvent=function(t){return r.MSPointerEvent?"MSPointer"+t.charAt(7).toUpperCase()+t.substr(8):t},e.momentum=function(t,i,s,e,o,n){var r,h,a=t-i,l=p.abs(a)/s;return h=l/(n=void 0===n?6e-4:n),(r=t+l*l/(2*n)*(a<0?-1:1))<e?(r=o?e-o/2.5*(l/8):e,h=(a=p.abs(r-t))/l):0<r&&(r=o?o/2.5*(l/8):0,h=(a=p.abs(t)+r)/l),{destination:p.round(r),duration:h}};var s=t("transform");return e.extend(e,{hasTransform:!1!==s,hasPerspective:t("perspective")in o,hasTouch:"ontouchstart"in r,hasPointer:!(!r.PointerEvent&&!r.MSPointerEvent),hasTransition:t("transition")in o}),e.isBadAndroid=function(){var t=r.navigator.appVersion;if(!/Android/.test(t)||/Chrome\/\d/.test(t))return!1;var i=t.match(/Safari\/(\d+.\d)/);return!(i&&"object"==typeof i&&2<=i.length)||parseFloat(i[1])<535.19}(),e.extend(e.style={},{transform:s,transitionTimingFunction:t("transitionTimingFunction"),transitionDuration:t("transitionDuration"),transitionDelay:t("transitionDelay"),transformOrigin:t("transformOrigin")}),e.hasClass=function(t,i){return new RegExp("(^|\\s)"+i+"(\\s|$)").test(t.className)},e.addClass=function(t,i){if(!e.hasClass(t,i)){var s=t.className.split(" ");s.push(i),t.className=s.join(" ")}},e.removeClass=function(t,i){if(e.hasClass(t,i)){var s=new RegExp("(^|\\s)"+i+"(\\s|$)","g");t.className=t.className.replace(s," ")}},e.offset=function(t){for(var i=-t.offsetLeft,s=-t.offsetTop;t=t.offsetParent;)i-=t.offsetLeft,s-=t.offsetTop;return{left:i,top:s}},e.preventDefaultException=function(t,i){for(var s in i)if(i[s].test(t[s]))return!0;return!1},e.extend(e.eventType={},{touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2,pointerdown:3,pointermove:3,pointerup:3,MSPointerDown:3,MSPointerMove:3,MSPointerUp:3}),e.extend(e.ease={},{quadratic:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},circular:{style:"cubic-bezier(0.1, 0.57, 0.1, 1)",fn:function(t){return p.sqrt(1- --t*t)}},back:{style:"cubic-bezier(0.175, 0.885, 0.32, 1.275)",fn:function(t){return(t-=1)*t*(5*t+4)+1}},bounce:{style:"",fn:function(t){return(t/=1)<1/2.75?7.5625*t*t:t<2/2.75?7.5625*(t-=1.5/2.75)*t+.75:t<2.5/2.75?7.5625*(t-=2.25/2.75)*t+.9375:7.5625*(t-=2.625/2.75)*t+.984375}},elastic:{style:"",fn:function(t){return 0===t?0:1==t?1:.4*p.pow(2,-10*t)*p.sin((t-.055)*(2*p.PI)/.22)+1}}}),e.tap=function(t,i){var s=n.createEvent("Event");s.initEvent(i,!0,!0),s.pageX=t.pageX,s.pageY=t.pageY,t.target.dispatchEvent(s)},e.click=function(t){var i,s=t.target;/(SELECT|INPUT|TEXTAREA)/i.test(s.tagName)||((i=n.createEvent(r.MouseEvent?"MouseEvents":"Event")).initEvent("click",!0,!0),i.view=t.view||r,i.detail=1,i.screenX=s.screenX||0,i.screenY=s.screenY||0,i.clientX=s.clientX||0,i.clientY=s.clientY||0,i.ctrlKey=!!t.ctrlKey,i.altKey=!!t.altKey,i.shiftKey=!!t.shiftKey,i.metaKey=!!t.metaKey,i.button=0,i.relatedTarget=null,i._constructed=!0,s.dispatchEvent(i))},e}();function t(t,i){for(var s in this.wrapper="string"==typeof t?n.querySelector(t):t,this.scroller=this.wrapper.children[0],this.scrollerStyle=this.scroller.style,this.options={resizeScrollbars:!0,mouseWheelSpeed:20,snapThreshold:.334,disablePointer:!m.hasPointer,disableTouch:m.hasPointer||!m.hasTouch,disableMouse:m.hasPointer||m.hasTouch,startX:0,startY:0,scrollY:!0,directionLockThreshold:5,momentum:!0,bounce:!0,bounceTime:600,bounceEasing:"",preventDefault:!0,preventDefaultException:{tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT|LABEL)$/},HWCompositing:!0,useTransition:!0,useTransform:!0,bindToWrapper:void 0===r.onmousedown},i)this.options[s]=i[s];this.translateZ=this.options.HWCompositing&&m.hasPerspective?" translateZ(0)":"",this.options.useTransition=m.hasTransition&&this.options.useTransition,this.options.useTransform=m.hasTransform&&this.options.useTransform,this.options.eventPassthrough=!0===this.options.eventPassthrough?"vertical":this.options.eventPassthrough,this.options.preventDefault=!this.options.eventPassthrough&&this.options.preventDefault,this.options.scrollY="vertical"!=this.options.eventPassthrough&&this.options.scrollY,this.options.scrollX="horizontal"!=this.options.eventPassthrough&&this.options.scrollX,this.options.freeScroll=this.options.freeScroll&&!this.options.eventPassthrough,this.options.directionLockThreshold=this.options.eventPassthrough?0:this.options.directionLockThreshold,this.options.bounceEasing="string"==typeof this.options.bounceEasing?m.ease[this.options.bounceEasing]||m.ease.circular:this.options.bounceEasing,this.options.resizePolling=void 0===this.options.resizePolling?60:this.options.resizePolling,!0===this.options.tap&&(this.options.tap="tap"),this.options.useTransition||this.options.useTransform||/relative|absolute/i.test(this.scrollerStyle.position)||(this.scrollerStyle.position="relative"),"scale"==this.options.shrinkScrollbars&&(this.options.useTransition=!1),this.options.invertWheelDirection=this.options.invertWheelDirection?-1:1,this.x=0,this.y=0,this.directionX=0,this.directionY=0,this._events={},this._init(),this.refresh(),this.scrollTo(this.options.startX,this.options.startY),this.enable()}function h(t,i,s){var e=n.createElement("div"),o=n.createElement("div");return!0===s&&(e.style.cssText="position:absolute;z-index:9999",o.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px"),o.className="iScrollIndicator",e.className="h"==t?(!0===s&&(e.style.cssText+=";height:7px;left:2px;right:2px;bottom:0",o.style.height="100%"),"iScrollHorizontalScrollbar"):(!0===s&&(e.style.cssText+=";width:7px;bottom:2px;top:2px;right:1px",o.style.width="100%"),"iScrollVerticalScrollbar"),e.style.cssText+=";overflow:hidden",i||(e.style.pointerEvents="none"),e.appendChild(o),e}function a(t,i){for(var s in this.wrapper="string"==typeof i.el?n.querySelector(i.el):i.el,this.wrapperStyle=this.wrapper.style,this.indicator=this.wrapper.children[0],this.indicatorStyle=this.indicator.style,this.scroller=t,this.options={listenX:!0,listenY:!0,interactive:!1,resize:!0,defaultScrollbars:!1,shrink:!1,fade:!1,speedRatioX:0,speedRatioY:0},i)this.options[s]=i[s];if(this.sizeRatioX=1,this.sizeRatioY=1,this.maxPosX=0,this.maxPosY=0,this.options.interactive&&(this.options.disableTouch||(m.addEvent(this.indicator,"touchstart",this),m.addEvent(r,"touchend",this)),this.options.disablePointer||(m.addEvent(this.indicator,m.prefixPointerEvent("pointerdown"),this),m.addEvent(r,m.prefixPointerEvent("pointerup"),this)),this.options.disableMouse||(m.addEvent(this.indicator,"mousedown",this),m.addEvent(r,"mouseup",this))),this.options.fade){this.wrapperStyle[m.style.transform]=this.scroller.translateZ;var e=m.style.transitionDuration;if(!e)return;this.wrapperStyle[e]=m.isBadAndroid?"0.0001ms":"0ms";var o=this;m.isBadAndroid&&f(function(){"0.0001ms"===o.wrapperStyle[e]&&(o.wrapperStyle[e]="0s")}),this.wrapperStyle.opacity="0"}}t.prototype={version:"5.2.0",_init:function(){this._initEvents(),(this.options.scrollbars||this.options.indicators)&&this._initIndicators(),this.options.mouseWheel&&this._initWheel(),this.options.snap&&this._initSnap(),this.options.keyBindings&&this._initKeys()},destroy:function(){this._initEvents(!0),clearTimeout(this.resizeTimeout),this.resizeTimeout=null,this._execEvent("destroy")},_transitionEnd:function(t){t.target==this.scroller&&this.isInTransition&&(this._transitionTime(),this.resetPosition(this.options.bounceTime)||(this.isInTransition=!1,this._execEvent("scrollEnd")))},_start:function(t){if(1!=m.eventType[t.type]&&0!==(t.which?t.button:t.button<2?0:4==t.button?1:2))return;if(this.enabled&&(!this.initiated||m.eventType[t.type]===this.initiated)){!this.options.preventDefault||m.isBadAndroid||m.preventDefaultException(t.target,this.options.preventDefaultException)||t.preventDefault();var i,s=t.touches?t.touches[0]:t;this.initiated=m.eventType[t.type],this.moved=!1,this.distX=0,this.distY=0,this.directionX=0,this.directionY=0,this.directionLocked=0,this.startTime=m.getTime(),this.options.useTransition&&this.isInTransition?(this._transitionTime(),this.isInTransition=!1,i=this.getComputedPosition(),this._translate(p.round(i.x),p.round(i.y)),this._execEvent("scrollEnd")):!this.options.useTransition&&this.isAnimating&&(this.isAnimating=!1,this._execEvent("scrollEnd")),this.startX=this.x,this.startY=this.y,this.absStartX=this.x,this.absStartY=this.y,this.pointX=s.pageX,this.pointY=s.pageY,this._execEvent("beforeScrollStart")}},_move:function(t){if(this.enabled&&m.eventType[t.type]===this.initiated){this.options.preventDefault&&t.preventDefault();var i,s,e,o,n=t.touches?t.touches[0]:t,r=n.pageX-this.pointX,h=n.pageY-this.pointY,a=m.getTime();if(this.pointX=n.pageX,this.pointY=n.pageY,this.distX+=r,this.distY+=h,e=p.abs(this.distX),o=p.abs(this.distY),!(300<a-this.endTime&&e<10&&o<10)){if(this.directionLocked||this.options.freeScroll||(e>o+this.options.directionLockThreshold?this.directionLocked="h":o>=e+this.options.directionLockThreshold?this.directionLocked="v":this.directionLocked="n"),"h"==this.directionLocked){if("vertical"==this.options.eventPassthrough)t.preventDefault();else if("horizontal"==this.options.eventPassthrough)return void(this.initiated=!1);h=0}else if("v"==this.directionLocked){if("horizontal"==this.options.eventPassthrough)t.preventDefault();else if("vertical"==this.options.eventPassthrough)return void(this.initiated=!1);r=0}r=this.hasHorizontalScroll?r:0,h=this.hasVerticalScroll?h:0,i=this.x+r,s=this.y+h,(0<i||i<this.maxScrollX)&&(i=this.options.bounce?this.x+r/3:0<i?0:this.maxScrollX),(0<s||s<this.maxScrollY)&&(s=this.options.bounce?this.y+h/3:0<s?0:this.maxScrollY),this.directionX=0<r?-1:r<0?1:0,this.directionY=0<h?-1:h<0?1:0,this.moved||this._execEvent("scrollStart"),this.moved=!0,this._translate(i,s),300<a-this.startTime&&(this.startTime=a,this.startX=this.x,this.startY=this.y)}}},_end:function(t){if(this.enabled&&m.eventType[t.type]===this.initiated){this.options.preventDefault&&!m.preventDefaultException(t.target,this.options.preventDefaultException)&&t.preventDefault();t.changedTouches&&t.changedTouches[0];var i,s,e=m.getTime()-this.startTime,o=p.round(this.x),n=p.round(this.y),r=p.abs(o-this.startX),h=p.abs(n-this.startY),a=0,l="";if(this.isInTransition=0,this.initiated=0,this.endTime=m.getTime(),!this.resetPosition(this.options.bounceTime)){if(this.scrollTo(o,n),!this.moved)return this.options.tap&&m.tap(t,this.options.tap),this.options.click&&m.click(t),void this._execEvent("scrollCancel");if(this._events.flick&&e<200&&r<100&&h<100)this._execEvent("flick");else{if(this.options.momentum&&e<300&&(i=this.hasHorizontalScroll?m.momentum(this.x,this.startX,e,this.maxScrollX,this.options.bounce?this.wrapperWidth:0,this.options.deceleration):{destination:o,duration:0},s=this.hasVerticalScroll?m.momentum(this.y,this.startY,e,this.maxScrollY,this.options.bounce?this.wrapperHeight:0,this.options.deceleration):{destination:n,duration:0},o=i.destination,n=s.destination,a=p.max(i.duration,s.duration),this.isInTransition=1),this.options.snap){var c=this._nearestSnap(o,n);this.currentPage=c,a=this.options.snapSpeed||p.max(p.max(p.min(p.abs(o-c.x),1e3),p.min(p.abs(n-c.y),1e3)),300),o=c.x,n=c.y,this.directionX=0,this.directionY=0,l=this.options.bounceEasing}if(o!=this.x||n!=this.y)return(0<o||o<this.maxScrollX||0<n||n<this.maxScrollY)&&(l=m.ease.quadratic),void this.scrollTo(o,n,a,l);this._execEvent("scrollEnd")}}}},_resize:function(){var t=this;clearTimeout(this.resizeTimeout),this.resizeTimeout=setTimeout(function(){t.refresh()},this.options.resizePolling)},resetPosition:function(t){var i=this.x,s=this.y;return t=t||0,!this.hasHorizontalScroll||0<this.x?i=0:this.x<this.maxScrollX&&(i=this.maxScrollX),!this.hasVerticalScroll||0<this.y?s=0:this.y<this.maxScrollY&&(s=this.maxScrollY),(i!=this.x||s!=this.y)&&(this.scrollTo(i,s,t,this.options.bounceEasing),!0)},disable:function(){this.enabled=!1},enable:function(){this.enabled=!0},refresh:function(){this.wrapper.offsetHeight;this.wrapperWidth=this.wrapper.clientWidth,this.wrapperHeight=this.wrapper.clientHeight,this.scrollerWidth=this.scroller.offsetWidth,this.scrollerHeight=this.scroller.offsetHeight,this.maxScrollX=this.wrapperWidth-this.scrollerWidth,this.maxScrollY=this.wrapperHeight-this.scrollerHeight,this.hasHorizontalScroll=this.options.scrollX&&this.maxScrollX<0,this.hasVerticalScroll=this.options.scrollY&&this.maxScrollY<0,this.hasHorizontalScroll||(this.maxScrollX=0,this.scrollerWidth=this.wrapperWidth),this.hasVerticalScroll||(this.maxScrollY=0,this.scrollerHeight=this.wrapperHeight),this.endTime=0,this.directionX=0,this.directionY=0,this.wrapperOffset=m.offset(this.wrapper),this._execEvent("refresh"),this.resetPosition()},on:function(t,i){this._events[t]||(this._events[t]=[]),this._events[t].push(i)},off:function(t,i){if(this._events[t]){var s=this._events[t].indexOf(i);-1<s&&this._events[t].splice(s,1)}},_execEvent:function(t){if(this._events[t]){var i=0,s=this._events[t].length;if(s)for(;i<s;i++)this._events[t][i].apply(this,[].slice.call(arguments,1))}},scrollBy:function(t,i,s,e){t=this.x+t,i=this.y+i,s=s||0,this.scrollTo(t,i,s,e)},scrollTo:function(t,i,s,e){e=e||m.ease.circular,this.isInTransition=this.options.useTransition&&0<s;var o=this.options.useTransition&&e.style;!s||o?(o&&(this._transitionTimingFunction(e.style),this._transitionTime(s)),this._translate(t,i)):this._animate(t,i,s,e.fn)},scrollToElement:function(t,i,s,e,o){if(t=t.nodeType?t:this.scroller.querySelector(t)){var n=m.offset(t);n.left-=this.wrapperOffset.left,n.top-=this.wrapperOffset.top,!0===s&&(s=p.round(t.offsetWidth/2-this.wrapper.offsetWidth/2)),!0===e&&(e=p.round(t.offsetHeight/2-this.wrapper.offsetHeight/2)),n.left-=s||0,n.top-=e||0,n.left=0<n.left?0:n.left<this.maxScrollX?this.maxScrollX:n.left,n.top=0<n.top?0:n.top<this.maxScrollY?this.maxScrollY:n.top,i=null==i||"auto"===i?p.max(p.abs(this.x-n.left),p.abs(this.y-n.top)):i,this.scrollTo(n.left,n.top,i,o)}},_transitionTime:function(t){if(this.options.useTransition){t=t||0;var i=m.style.transitionDuration;if(i){if(this.scrollerStyle[i]=t+"ms",!t&&m.isBadAndroid){this.scrollerStyle[i]="0.0001ms";var s=this;f(function(){"0.0001ms"===s.scrollerStyle[i]&&(s.scrollerStyle[i]="0s")})}if(this.indicators)for(var e=this.indicators.length;e--;)this.indicators[e].transitionTime(t)}}},_transitionTimingFunction:function(t){if(this.scrollerStyle[m.style.transitionTimingFunction]=t,this.indicators)for(var i=this.indicators.length;i--;)this.indicators[i].transitionTimingFunction(t)},_translate:function(t,i){if(this.options.useTransform?this.scrollerStyle[m.style.transform]="translate("+t+"px,"+i+"px)"+this.translateZ:(t=p.round(t),i=p.round(i),this.scrollerStyle.left=t+"px",this.scrollerStyle.top=i+"px"),this.x=t,this.y=i,this.indicators)for(var s=this.indicators.length;s--;)this.indicators[s].updatePosition()},_initEvents:function(t){var i=t?m.removeEvent:m.addEvent,s=this.options.bindToWrapper?this.wrapper:r;i(r,"orientationchange",this),i(r,"resize",this),this.options.click&&i(this.wrapper,"click",this,!0),this.options.disableMouse||(i(this.wrapper,"mousedown",this),i(s,"mousemove",this),i(s,"mousecancel",this),i(s,"mouseup",this)),m.hasPointer&&!this.options.disablePointer&&(i(this.wrapper,m.prefixPointerEvent("pointerdown"),this),i(s,m.prefixPointerEvent("pointermove"),this),i(s,m.prefixPointerEvent("pointercancel"),this),i(s,m.prefixPointerEvent("pointerup"),this)),m.hasTouch&&!this.options.disableTouch&&(i(this.wrapper,"touchstart",this),i(s,"touchmove",this),i(s,"touchcancel",this),i(s,"touchend",this)),i(this.scroller,"transitionend",this),i(this.scroller,"webkitTransitionEnd",this),i(this.scroller,"oTransitionEnd",this),i(this.scroller,"MSTransitionEnd",this)},getComputedPosition:function(){var t,i,s=r.getComputedStyle(this.scroller,null);return i=this.options.useTransform?(t=+((s=s[m.style.transform].split(")")[0].split(", "))[12]||s[4]),+(s[13]||s[5])):(t=+s.left.replace(/[^-\d.]/g,""),+s.top.replace(/[^-\d.]/g,"")),{x:t,y:i}},_initIndicators:function(){var t,i=this.options.interactiveScrollbars,s="string"!=typeof this.options.scrollbars,e=[],o=this;this.indicators=[],this.options.scrollbars&&(this.options.scrollY&&(t={el:h("v",i,this.options.scrollbars),interactive:i,defaultScrollbars:!0,customStyle:s,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenX:!1},this.wrapper.appendChild(t.el),e.push(t)),this.options.scrollX&&(t={el:h("h",i,this.options.scrollbars),interactive:i,defaultScrollbars:!0,customStyle:s,resize:this.options.resizeScrollbars,shrink:this.options.shrinkScrollbars,fade:this.options.fadeScrollbars,listenY:!1},this.wrapper.appendChild(t.el),e.push(t))),this.options.indicators&&(e=e.concat(this.options.indicators));for(var n=e.length;n--;)this.indicators.push(new a(this,e[n]));function r(t){if(o.indicators)for(var i=o.indicators.length;i--;)t.call(o.indicators[i])}this.options.fadeScrollbars&&(this.on("scrollEnd",function(){r(function(){this.fade()})}),this.on("scrollCancel",function(){r(function(){this.fade()})}),this.on("scrollStart",function(){r(function(){this.fade(1)})}),this.on("beforeScrollStart",function(){r(function(){this.fade(1,!0)})})),this.on("refresh",function(){r(function(){this.refresh()})}),this.on("destroy",function(){r(function(){this.destroy()}),delete this.indicators})},_initWheel:function(){m.addEvent(this.wrapper,"wheel",this),m.addEvent(this.wrapper,"mousewheel",this),m.addEvent(this.wrapper,"DOMMouseScroll",this),this.on("destroy",function(){clearTimeout(this.wheelTimeout),this.wheelTimeout=null,m.removeEvent(this.wrapper,"wheel",this),m.removeEvent(this.wrapper,"mousewheel",this),m.removeEvent(this.wrapper,"DOMMouseScroll",this)})},_wheel:function(t){if(this.enabled){r.navigator.userAgent.match(/(MSIE|Trident)/)||t.preventDefault();var i,s,e,o,n=this;if(void 0===this.wheelTimeout&&n._execEvent("scrollStart"),clearTimeout(this.wheelTimeout),this.wheelTimeout=setTimeout(function(){n.options.snap||n._execEvent("scrollEnd"),n.wheelTimeout=void 0},400),"deltaX"in t)s=1===t.deltaMode?(i=-t.deltaX*this.options.mouseWheelSpeed,-t.deltaY*this.options.mouseWheelSpeed):(i=-t.deltaX,-t.deltaY);else if("wheelDeltaX"in t)i=t.wheelDeltaX/120*this.options.mouseWheelSpeed,s=t.wheelDeltaY/120*this.options.mouseWheelSpeed;else if("wheelDelta"in t)i=s=t.wheelDelta/120*this.options.mouseWheelSpeed;else{if(!("detail"in t))return;i=s=-t.detail/3*this.options.mouseWheelSpeed}if(i*=this.options.invertWheelDirection,s*=this.options.invertWheelDirection,this.hasVerticalScroll||(i=s,s=0),this.options.snap)return e=this.currentPage.pageX,o=this.currentPage.pageY,0<i?e--:i<0&&e++,0<s?o--:s<0&&o++,void this.goToPage(e,o);e=this.x+p.round(this.hasHorizontalScroll?i:0),o=this.y+p.round(this.hasVerticalScroll?s:0),this.directionX=0<i?-1:i<0?1:0,this.directionY=0<s?-1:s<0?1:0,0<e?e=0:e<this.maxScrollX&&(e=this.maxScrollX),0<o?o=0:o<this.maxScrollY&&(o=this.maxScrollY),this.scrollTo(e,o,0)}},_initSnap:function(){this.currentPage={},"string"==typeof this.options.snap&&(this.options.snap=this.scroller.querySelectorAll(this.options.snap)),this.on("refresh",function(){var t,i,s,e,o,n,r=0,h=0,a=0,l=this.options.snapStepX||this.wrapperWidth,c=this.options.snapStepY||this.wrapperHeight;if(this.pages=[],this.wrapperWidth&&this.wrapperHeight&&this.scrollerWidth&&this.scrollerHeight){if(!0===this.options.snap)for(s=p.round(l/2),e=p.round(c/2);a>-this.scrollerWidth;){for(this.pages[r]=[],o=t=0;o>-this.scrollerHeight;)this.pages[r][t]={x:p.max(a,this.maxScrollX),y:p.max(o,this.maxScrollY),width:l,height:c,cx:a-s,cy:o-e},o-=c,t++;a-=l,r++}else for(t=(n=this.options.snap).length,i=-1;r<t;r++)(0===r||n[r].offsetLeft<=n[r-1].offsetLeft)&&(h=0,i++),this.pages[h]||(this.pages[h]=[]),a=p.max(-n[r].offsetLeft,this.maxScrollX),o=p.max(-n[r].offsetTop,this.maxScrollY),s=a-p.round(n[r].offsetWidth/2),e=o-p.round(n[r].offsetHeight/2),this.pages[h][i]={x:a,y:o,width:n[r].offsetWidth,height:n[r].offsetHeight,cx:s,cy:e},a>this.maxScrollX&&h++;this.goToPage(this.currentPage.pageX||0,this.currentPage.pageY||0,0),this.options.snapThreshold%1==0?(this.snapThresholdX=this.options.snapThreshold,this.snapThresholdY=this.options.snapThreshold):(this.snapThresholdX=p.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].width*this.options.snapThreshold),this.snapThresholdY=p.round(this.pages[this.currentPage.pageX][this.currentPage.pageY].height*this.options.snapThreshold))}}),this.on("flick",function(){var t=this.options.snapSpeed||p.max(p.max(p.min(p.abs(this.x-this.startX),1e3),p.min(p.abs(this.y-this.startY),1e3)),300);this.goToPage(this.currentPage.pageX+this.directionX,this.currentPage.pageY+this.directionY,t)})},_nearestSnap:function(t,i){if(!this.pages.length)return{x:0,y:0,pageX:0,pageY:0};var s=0,e=this.pages.length,o=0;if(p.abs(t-this.absStartX)<this.snapThresholdX&&p.abs(i-this.absStartY)<this.snapThresholdY)return this.currentPage;for(0<t?t=0:t<this.maxScrollX&&(t=this.maxScrollX),0<i?i=0:i<this.maxScrollY&&(i=this.maxScrollY);s<e;s++)if(t>=this.pages[s][0].cx){t=this.pages[s][0].x;break}for(e=this.pages[s].length;o<e;o++)if(i>=this.pages[0][o].cy){i=this.pages[0][o].y;break}return s==this.currentPage.pageX&&((s+=this.directionX)<0?s=0:s>=this.pages.length&&(s=this.pages.length-1),t=this.pages[s][0].x),o==this.currentPage.pageY&&((o+=this.directionY)<0?o=0:o>=this.pages[0].length&&(o=this.pages[0].length-1),i=this.pages[0][o].y),{x:t,y:i,pageX:s,pageY:o}},goToPage:function(t,i,s,e){e=e||this.options.bounceEasing,t>=this.pages.length?t=this.pages.length-1:t<0&&(t=0),i>=this.pages[t].length?i=this.pages[t].length-1:i<0&&(i=0);var o=this.pages[t][i].x,n=this.pages[t][i].y;s=void 0===s?this.options.snapSpeed||p.max(p.max(p.min(p.abs(o-this.x),1e3),p.min(p.abs(n-this.y),1e3)),300):s,this.currentPage={x:o,y:n,pageX:t,pageY:i},this.scrollTo(o,n,s,e)},next:function(t,i){var s=this.currentPage.pageX,e=this.currentPage.pageY;++s>=this.pages.length&&this.hasVerticalScroll&&(s=0,e++),this.goToPage(s,e,t,i)},prev:function(t,i){var s=this.currentPage.pageX,e=this.currentPage.pageY;--s<0&&this.hasVerticalScroll&&(s=0,e--),this.goToPage(s,e,t,i)},_initKeys:function(t){var i,s={pageUp:33,pageDown:34,end:35,home:36,left:37,up:38,right:39,down:40};if("object"==typeof this.options.keyBindings)for(i in this.options.keyBindings)"string"==typeof this.options.keyBindings[i]&&(this.options.keyBindings[i]=this.options.keyBindings[i].toUpperCase().charCodeAt(0));else this.options.keyBindings={};for(i in s)this.options.keyBindings[i]=this.options.keyBindings[i]||s[i];m.addEvent(r,"keydown",this),this.on("destroy",function(){m.removeEvent(r,"keydown",this)})},_key:function(t){if(this.enabled){var i,s=this.options.snap,e=s?this.currentPage.pageX:this.x,o=s?this.currentPage.pageY:this.y,n=m.getTime(),r=this.keyTime||0;switch(this.options.useTransition&&this.isInTransition&&(i=this.getComputedPosition(),this._translate(p.round(i.x),p.round(i.y)),this.isInTransition=!1),this.keyAcceleration=n-r<200?p.min(this.keyAcceleration+.25,50):0,t.keyCode){case this.options.keyBindings.pageUp:this.hasHorizontalScroll&&!this.hasVerticalScroll?e+=s?1:this.wrapperWidth:o+=s?1:this.wrapperHeight;break;case this.options.keyBindings.pageDown:this.hasHorizontalScroll&&!this.hasVerticalScroll?e-=s?1:this.wrapperWidth:o-=s?1:this.wrapperHeight;break;case this.options.keyBindings.end:e=s?this.pages.length-1:this.maxScrollX,o=s?this.pages[0].length-1:this.maxScrollY;break;case this.options.keyBindings.home:o=e=0;break;case this.options.keyBindings.left:e+=s?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.up:o+=s?1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.right:e-=s?-1:5+this.keyAcceleration>>0;break;case this.options.keyBindings.down:o-=s?1:5+this.keyAcceleration>>0;break;default:return}s?this.goToPage(e,o):(0<e?(e=0,this.keyAcceleration=0):e<this.maxScrollX&&(e=this.maxScrollX,this.keyAcceleration=0),0<o?(o=0,this.keyAcceleration=0):o<this.maxScrollY&&(o=this.maxScrollY,this.keyAcceleration=0),this.scrollTo(e,o,0),this.keyTime=n)}},_animate:function(n,r,h,a){var l=this,c=this.x,p=this.y,d=m.getTime(),u=d+h;this.isAnimating=!0,function t(){var i,s,e,o=m.getTime();if(u<=o)return l.isAnimating=!1,l._translate(n,r),void(l.resetPosition(l.options.bounceTime)||l._execEvent("scrollEnd"));e=a(o=(o-d)/h),i=(n-c)*e+c,s=(r-p)*e+p,l._translate(i,s),l.isAnimating&&f(t)}()},handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t);break;case"orientationchange":case"resize":this._resize();break;case"transitionend":case"webkitTransitionEnd":case"oTransitionEnd":case"MSTransitionEnd":this._transitionEnd(t);break;case"wheel":case"DOMMouseScroll":case"mousewheel":this._wheel(t);break;case"keydown":this._key(t);break;case"click":this.enabled&&!t._constructed&&(t.preventDefault(),t.stopPropagation())}}},a.prototype={handleEvent:function(t){switch(t.type){case"touchstart":case"pointerdown":case"MSPointerDown":case"mousedown":this._start(t);break;case"touchmove":case"pointermove":case"MSPointerMove":case"mousemove":this._move(t);break;case"touchend":case"pointerup":case"MSPointerUp":case"mouseup":case"touchcancel":case"pointercancel":case"MSPointerCancel":case"mousecancel":this._end(t)}},destroy:function(){this.options.fadeScrollbars&&(clearTimeout(this.fadeTimeout),this.fadeTimeout=null),this.options.interactive&&(m.removeEvent(this.indicator,"touchstart",this),m.removeEvent(this.indicator,m.prefixPointerEvent("pointerdown"),this),m.removeEvent(this.indicator,"mousedown",this),m.removeEvent(r,"touchmove",this),m.removeEvent(r,m.prefixPointerEvent("pointermove"),this),m.removeEvent(r,"mousemove",this),m.removeEvent(r,"touchend",this),m.removeEvent(r,m.prefixPointerEvent("pointerup"),this),m.removeEvent(r,"mouseup",this)),this.options.defaultScrollbars&&this.wrapper.parentNode.removeChild(this.wrapper)},_start:function(t){var i=t.touches?t.touches[0]:t;t.preventDefault(),t.stopPropagation(),this.transitionTime(),this.initiated=!0,this.moved=!1,this.lastPointX=i.pageX,this.lastPointY=i.pageY,this.startTime=m.getTime(),this.options.disableTouch||m.addEvent(r,"touchmove",this),this.options.disablePointer||m.addEvent(r,m.prefixPointerEvent("pointermove"),this),this.options.disableMouse||m.addEvent(r,"mousemove",this),this.scroller._execEvent("beforeScrollStart")},_move:function(t){var i,s,e,o,n=t.touches?t.touches[0]:t;m.getTime();this.moved||this.scroller._execEvent("scrollStart"),this.moved=!0,i=n.pageX-this.lastPointX,this.lastPointX=n.pageX,s=n.pageY-this.lastPointY,this.lastPointY=n.pageY,e=this.x+i,o=this.y+s,this._pos(e,o),t.preventDefault(),t.stopPropagation()},_end:function(t){if(this.initiated){if(this.initiated=!1,t.preventDefault(),t.stopPropagation(),m.removeEvent(r,"touchmove",this),m.removeEvent(r,m.prefixPointerEvent("pointermove"),this),m.removeEvent(r,"mousemove",this),this.scroller.options.snap){var i=this.scroller._nearestSnap(this.scroller.x,this.scroller.y),s=this.options.snapSpeed||p.max(p.max(p.min(p.abs(this.scroller.x-i.x),1e3),p.min(p.abs(this.scroller.y-i.y),1e3)),300);this.scroller.x==i.x&&this.scroller.y==i.y||(this.scroller.directionX=0,this.scroller.directionY=0,this.scroller.currentPage=i,this.scroller.scrollTo(i.x,i.y,s,this.scroller.options.bounceEasing))}this.moved&&this.scroller._execEvent("scrollEnd")}},transitionTime:function(t){t=t||0;var i=m.style.transitionDuration;if(i&&(this.indicatorStyle[i]=t+"ms",!t&&m.isBadAndroid)){this.indicatorStyle[i]="0.0001ms";var s=this;f(function(){"0.0001ms"===s.indicatorStyle[i]&&(s.indicatorStyle[i]="0s")})}},transitionTimingFunction:function(t){this.indicatorStyle[m.style.transitionTimingFunction]=t},refresh:function(){this.transitionTime(),this.options.listenX&&!this.options.listenY?this.indicatorStyle.display=this.scroller.hasHorizontalScroll?"block":"none":this.options.listenY&&!this.options.listenX?this.indicatorStyle.display=this.scroller.hasVerticalScroll?"block":"none":this.indicatorStyle.display=this.scroller.hasHorizontalScroll||this.scroller.hasVerticalScroll?"block":"none",this.scroller.hasHorizontalScroll&&this.scroller.hasVerticalScroll?(m.addClass(this.wrapper,"iScrollBothScrollbars"),m.removeClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="8px":this.wrapper.style.bottom="8px")):(m.removeClass(this.wrapper,"iScrollBothScrollbars"),m.addClass(this.wrapper,"iScrollLoneScrollbar"),this.options.defaultScrollbars&&this.options.customStyle&&(this.options.listenX?this.wrapper.style.right="2px":this.wrapper.style.bottom="2px"));this.wrapper.offsetHeight;this.options.listenX&&(this.wrapperWidth=this.wrapper.clientWidth,this.options.resize?(this.indicatorWidth=p.max(p.round(this.wrapperWidth*this.wrapperWidth/(this.scroller.scrollerWidth||this.wrapperWidth||1)),8),this.indicatorStyle.width=this.indicatorWidth+"px"):this.indicatorWidth=this.indicator.clientWidth,this.maxPosX=this.wrapperWidth-this.indicatorWidth,"clip"==this.options.shrink?(this.minBoundaryX=8-this.indicatorWidth,this.maxBoundaryX=this.wrapperWidth-8):(this.minBoundaryX=0,this.maxBoundaryX=this.maxPosX),this.sizeRatioX=this.options.speedRatioX||this.scroller.maxScrollX&&this.maxPosX/this.scroller.maxScrollX),this.options.listenY&&(this.wrapperHeight=this.wrapper.clientHeight,this.options.resize?(this.indicatorHeight=p.max(p.round(this.wrapperHeight*this.wrapperHeight/(this.scroller.scrollerHeight||this.wrapperHeight||1)),8),this.indicatorStyle.height=this.indicatorHeight+"px"):this.indicatorHeight=this.indicator.clientHeight,this.maxPosY=this.wrapperHeight-this.indicatorHeight,"clip"==this.options.shrink?(this.minBoundaryY=8-this.indicatorHeight,this.maxBoundaryY=this.wrapperHeight-8):(this.minBoundaryY=0,this.maxBoundaryY=this.maxPosY),this.maxPosY=this.wrapperHeight-this.indicatorHeight,this.sizeRatioY=this.options.speedRatioY||this.scroller.maxScrollY&&this.maxPosY/this.scroller.maxScrollY),this.updatePosition()},updatePosition:function(){var t=this.options.listenX&&p.round(this.sizeRatioX*this.scroller.x)||0,i=this.options.listenY&&p.round(this.sizeRatioY*this.scroller.y)||0;this.options.ignoreBoundaries||(t<this.minBoundaryX?("scale"==this.options.shrink&&(this.width=p.max(this.indicatorWidth+t,8),this.indicatorStyle.width=this.width+"px"),t=this.minBoundaryX):t>this.maxBoundaryX?t="scale"==this.options.shrink?(this.width=p.max(this.indicatorWidth-(t-this.maxPosX),8),this.indicatorStyle.width=this.width+"px",this.maxPosX+this.indicatorWidth-this.width):this.maxBoundaryX:"scale"==this.options.shrink&&this.width!=this.indicatorWidth&&(this.width=this.indicatorWidth,this.indicatorStyle.width=this.width+"px"),i<this.minBoundaryY?("scale"==this.options.shrink&&(this.height=p.max(this.indicatorHeight+3*i,8),this.indicatorStyle.height=this.height+"px"),i=this.minBoundaryY):i>this.maxBoundaryY?i="scale"==this.options.shrink?(this.height=p.max(this.indicatorHeight-3*(i-this.maxPosY),8),this.indicatorStyle.height=this.height+"px",this.maxPosY+this.indicatorHeight-this.height):this.maxBoundaryY:"scale"==this.options.shrink&&this.height!=this.indicatorHeight&&(this.height=this.indicatorHeight,this.indicatorStyle.height=this.height+"px")),this.x=t,this.y=i,this.scroller.options.useTransform?this.indicatorStyle[m.style.transform]="translate("+t+"px,"+i+"px)"+this.scroller.translateZ:(this.indicatorStyle.left=t+"px",this.indicatorStyle.top=i+"px")},_pos:function(t,i){t<0?t=0:t>this.maxPosX&&(t=this.maxPosX),i<0?i=0:i>this.maxPosY&&(i=this.maxPosY),t=this.options.listenX?p.round(t/this.sizeRatioX):this.scroller.x,i=this.options.listenY?p.round(i/this.sizeRatioY):this.scroller.y,this.scroller.scrollTo(t,i)},fade:function(t,i){if(!i||this.visible){clearTimeout(this.fadeTimeout),this.fadeTimeout=null;var s=t?250:500,e=t?0:300;t=t?"1":"0",this.wrapperStyle[m.style.transitionDuration]=s+"ms",this.fadeTimeout=setTimeout(function(t){this.wrapperStyle.opacity=t,this.visible=+t}.bind(this,t),e)}}},t.utils=m,"undefined"!=typeof module&&module.exports?module.exports=t: true?(!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return t}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)),void 0!==r&&(r.IScroll=t)):undefined}(window,document,Math),
/*!
* Scrolloverflow 2.0.6 module for fullPage.js >= 3
* https://github.com/alvarotrigo/fullPage.js
* @license MIT licensed
*
* Copyright (C) 2015 alvarotrigo.com - A project by Alvaro Trigo
*/
function(l,c){l.fp_scrolloverflow=function(){l.IScroll||(l.IScroll=module.exports);var s="fp-scrollable",n="."+s,t=".active",d=".fp-section",e=d+t,o=".fp-slide",u=".fp-tableCell";function r(){var p=this;function s(){fp_utils.hasClass(c.body,"fp-responsive")?i(e):i(t)}function t(t){if(!fp_utils.hasClass(t,"fp-noscroll")){fp_utils.css(t,{overflow:"hidden"});var i,s,e,o=p.options.scrollOverflowHandler,n=o.wrapContent(),r=fp_utils.closest(t,d),h=o.scrollable(t),a=(s=r,null!=(e=fp_utils.closest(s,d))?parseInt(getComputedStyle(e)["padding-bottom"])+parseInt(getComputedStyle(e)["padding-top"]):0);null!=h?i=o.scrollHeight(t):(i=t.scrollHeight,p.options.verticalCentered&&(i=f(u,t)[0].scrollHeight));var l=fp_utils.getWindowHeight(),c=l-a;l<i+a?null!=h?o.update(t,c):(p.options.verticalCentered?(fp_utils.wrapInner(f(u,t)[0],n.scroller),fp_utils.wrapInner(f(u,t)[0],n.scrollable)):(fp_utils.wrapInner(t,n.scroller),fp_utils.wrapInner(t,n.scrollable)),o.create(t,c,p.iscrollOptions)):o.remove(t),fp_utils.css(t,{overflow:""})}}function i(s){f(d).forEach(function(t){var i=f(o,t);i.length?i.forEach(function(t){s(t)}):s(t)})}function e(t){var i=p.options.scrollOverflowHandler;fp_utils.hasClass(fp_utils.closest(t,d),"fp-auto-height-responsive")&&i.remove(t)}p.options=null,p.init=function(t,i){return p.options=t,p.iscrollOptions=i,"complete"===c.readyState&&(s(),fullpage_api.shared.afterRenderActions()),l.addEventListener("load",function(){s(),fullpage_api.shared.afterRenderActions()}),p},p.createScrollBarForAll=s,p.createScrollBar=t}IScroll.prototype.wheelOn=function(){this.wrapper.addEventListener("wheel",this),this.wrapper.addEventListener("mousewheel",this),this.wrapper.addEventListener("DOMMouseScroll",this)},IScroll.prototype.wheelOff=function(){this.wrapper.removeEventListener("wheel",this),this.wrapper.removeEventListener("mousewheel",this),this.wrapper.removeEventListener("DOMMouseScroll",this)};var f=null,h=null,a={refreshId:null,iScrollInstances:[],lastScrollY:null,hasBeenInit:!1,iscrollOptions:{scrollbars:!0,mouseWheel:!0,hideScrollbars:!1,fadeScrollbars:!1,disableMouse:!0,interactiveScrollbars:!0},init:function(t){f=fp_utils.$,h=t;var i="ontouchstart"in l||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints;return a.iscrollOptions.click=i,a.hasBeenInit=!0,a.iscrollOptions=fp_utils.deepExtend(a.iscrollOptions,t.scrollOverflowOptions),(new r).init(t,a.iscrollOptions)},toggleWheel:function(s){f(n,f(e)[0]).forEach(function(t){var i=t.fp_iscrollInstance;null!=i&&(s?i.wheelOn():i.wheelOff())})},setIscroll:function(t,i){if(a.hasBeenInit&&t){var s=fp_utils.closest(t,n)||f(n,t)&&f(n,t)[0],e=i?"enable":"disable";s&&s.fp_iscrollInstance[e]()}},onLeave:function(){a.toggleWheel(!1)},beforeLeave:function(){a.onLeave()},afterLoad:function(){a.toggleWheel(!0)},create:function(s,e,o){f(n,s).forEach(function(t){fp_utils.css(t,{height:e+"px"});var i=t.fp_iscrollInstance;null!=i&&a.iScrollInstances.forEach(function(t){t.destroy()}),i=new IScroll(t,o),a.iScrollInstances.push(i),fp_utils.hasClass(fp_utils.closest(s,d),"active")||i.wheelOff(),t.fp_iscrollInstance=i})},isScrolled:function(t,i){var s=i.fp_iscrollInstance;if(!s)return!0;if("top"===t)return 0<=s.y&&!fp_utils.getScrollTop(i);if("bottom"===t){var e=a.lastScrollY===s.y;return a.lastScrollY=s.y,(e?1:0)+(0-s.y)+fp_utils.getScrollTop(i)+i.offsetHeight>=i.scrollHeight}},scrollable:function(t){return f(".fp-slides",t).length?f(n,f(".fp-slide.active",t)[0])[0]:f(n,t)[0]},scrollHeight:function(t){return f(".fp-scroller",f(n,t)[0])[0].scrollHeight},remove:function(t){if(null!=t){var i=f(n,t)[0];if(null!=i){var s=i.fp_iscrollInstance;null!=s&&s.destroy(),i.fp_iscrollInstance=null,fp_utils.unwrap(f(".fp-scroller",t)[0]),fp_utils.unwrap(f(n,t)[0])}}},update:function(t,i){clearTimeout(a.refreshId),a.refreshId=setTimeout(function(){a.iScrollInstances.forEach(function(t){t.refresh(),fullpage_api.silentMoveTo(fp_utils.index(f(e)[0])+1)})},150),fp_utils.css(f(n,t)[0],{height:i+"px"}),h.verticalCentered&&fp_utils.css(f(n,t)[0].parentNode,{height:i+"px"})},wrapContent:function(){var t=c.createElement("div");t.className=s;var i=c.createElement("div");return i.className="fp-scroller",{scrollable:t,scroller:i}}};return{iscrollHandler:a}}()}(window,document);
//# sourceMappingURL=scrolloverflow.min.js.map


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * fullPage 3.1.0 - Extensions 0.2.2
 * https://github.com/alvarotrigo/fullPage.js
 * @license http://alvarotrigo.com/fullPage/extensions/#license
 *
 * Copyright (C) 2018 alvarotrigo.com - A project by Alvaro Trigo
 */
!function(e,t,n,o,r){ true?!(__WEBPACK_AMD_DEFINE_RESULT__ = (function(){return e.fullpage=o(t,n),e.fullpage}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):undefined}(this,window,document,function(an,cn){"use strict";var sn="fullpage-wrapper",un="."+sn,fn="fp-responsive",dn="fp-notransition",vn="fp-destroyed",pn="fp-enabled",hn="fp-viewing",gn="active",mn="."+gn,Sn="fp-completely",bn="fp-section",wn="."+bn,yn=wn+mn,En="fp-tableCell",xn="."+En,Ln="fp-auto-height",An="fp-normal-scroll",Mn="fp-nav",Tn="#"+Mn,On="fp-tooltip",kn="fp-slide",Cn="."+kn,Hn=Cn+mn,zn="fp-slides",Rn="."+zn,In="fp-slidesContainer",Nn="."+In,Bn="fp-table",jn="fp-slidesNav",Pn="."+jn,Yn=Pn+" a",e="fp-controlArrow",Wn="."+e,Dn="fp-prev",Vn=Wn+".fp-prev",Zn=Wn+".fp-next";function Xn(e,t){an.console&&an.console[e]&&an.console[e]("fullPage: "+t)}function Gn(e,t){return(t=1<arguments.length?t:cn)?t.querySelectorAll(e):null}function Un(e){e=e||{};for(var t=1,n=arguments.length;t<n;++t){var o=arguments[t];if(o)for(var r in o)o.hasOwnProperty(r)&&("[object Object]"!==Object.prototype.toString.call(o[r])?e[r]=o[r]:e[r]=Un(e[r],o[r]))}return e}function Fn(e,t){return null!=e&&(e.classList?e.classList.contains(t):new RegExp("(^| )"+t+"( |$)","gi").test(e.className))}function _n(){return"innerHeight"in an?an.innerHeight:cn.documentElement.offsetHeight}function Qn(){return an.innerWidth}function Jn(e,t){var n;for(n in e=l(e),t)if(t.hasOwnProperty(n)&&null!==n)for(var o=0;o<e.length;o++){e[o].style[n]=t[n]}return e}function n(e,t,n){for(var o=e[n];o&&!yo(o,t);)o=o[n];return o}function Kn(e,t){return n(e,t,"previousElementSibling")}function $n(e,t){return n(e,t,"nextElementSibling")}function qn(e,t){if(null==t)return e.previousElementSibling;var n=qn(e);return n&&yo(n,t)?n:null}function eo(e,t){if(null==t)return e.nextElementSibling;var n=eo(e);return n&&yo(n,t)?n:null}function to(e){return e[e.length-1]}function no(e,t){e=io(e)?e[0]:e;for(var n=null!=t?Gn(t,e.parentNode):e.parentNode.childNodes,o=0,r=0;r<n.length;r++){if(n[r]==e)return o;1==n[r].nodeType&&o++}return-1}function l(e){return io(e)?e:[e]}function oo(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="none";return e}function ro(e){e=l(e);for(var t=0;t<e.length;t++)e[t].style.display="block";return e}function io(e){return"[object Array]"===Object.prototype.toString.call(e)||"[object NodeList]"===Object.prototype.toString.call(e)}function lo(e,t){e=l(e);for(var n=0;n<e.length;n++){var o=e[n];o.classList?o.classList.add(t):o.className+=" "+t}return e}function ao(e,t){e=l(e);for(var n=t.split(" "),o=0;o<n.length;o++){t=n[o];for(var r=0;r<e.length;r++){var i=e[r];i.classList?i.classList.remove(t):i.className=i.className.replace(new RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," ")}}return e}function co(e,t){t.appendChild(e)}function o(e,t,n){var o;t=t||cn.createElement("div");for(var r=0;r<e.length;r++){var i=e[r];(n&&!r||!n)&&(o=t.cloneNode(!0),i.parentNode.insertBefore(o,i)),o.appendChild(i)}return e}function so(e,t){o(e,t,!0)}function uo(e,t){for("string"==typeof t&&(t=xo(t)),e.appendChild(t);e.firstChild!==t;)t.appendChild(e.firstChild)}function fo(e){for(var t=cn.createDocumentFragment();e.firstChild;)t.appendChild(e.firstChild);e.parentNode.replaceChild(t,e)}function vo(e,t){return e&&1===e.nodeType?yo(e,t)?e:vo(e.parentNode,t):null}function po(e,t){r(e,e.nextSibling,t)}function ho(e,t){r(e,e,t)}function r(e,t,n){io(n)||("string"==typeof n&&(n=xo(n)),n=[n]);for(var o=0;o<n.length;o++)e.parentNode.insertBefore(n[o],t)}function go(){var e=cn.documentElement;return(an.pageYOffset||e.scrollTop)-(e.clientTop||0)}function mo(t){return Array.prototype.filter.call(t.parentNode.children,function(e){return e!==t})}function So(e){e.preventDefault?e.preventDefault():e.returnValue=!1}function bo(e){if("function"==typeof e)return!0;var t=Object.prototype.toString(e);return"[object Function]"===t||"[object GeneratorFunction]"===t}function wo(e,t,n){var o;n=void 0===n?{}:n,"function"==typeof an.CustomEvent?o=new CustomEvent(t,{detail:n}):(o=cn.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,n),e.dispatchEvent(o)}function yo(e,t){return(e.matches||e.matchesSelector||e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||e.oMatchesSelector).call(e,t)}function Eo(e,t){if("boolean"==typeof t)for(var n=0;n<e.length;n++)e[n].style.display=t?"block":"none";return e}function xo(e){var t=cn.createElement("div");return t.innerHTML=e.trim(),t.firstChild}function Lo(e){e=l(e);for(var t=0;t<e.length;t++){var n=e[t];n&&n.parentElement&&n.parentNode.removeChild(n)}}function i(e,t,n){for(var o=e[n],r=[];o;)(yo(o,t)||null==t)&&r.push(o),o=o[n];return r}function Ao(e,t){return i(e,t,"nextElementSibling")}function Mo(e,t){return i(e,t,"previousElementSibling")}function To(e,t){e.insertBefore(t,e.firstChild)}return an.NodeList&&!NodeList.prototype.forEach&&(NodeList.prototype.forEach=function(e,t){t=t||an;for(var n=0;n<this.length;n++)e.call(t,this[n],n,this)}),an.fp_utils={$:Gn,deepExtend:Un,hasClass:Fn,getWindowHeight:_n,css:Jn,until:n,prevUntil:Kn,nextUntil:$n,prev:qn,next:eo,last:to,index:no,getList:l,hide:oo,show:ro,isArrayOrList:io,addClass:lo,removeClass:ao,appendTo:co,wrap:o,wrapAll:so,wrapInner:uo,unwrap:fo,closest:vo,after:po,before:ho,insertBefore:r,getScrollTop:go,siblings:mo,preventDefault:So,isFunction:bo,trigger:wo,matches:yo,toggle:Eo,createElementFromHTML:xo,remove:Lo,filter:function(e,t){Array.prototype.filter.call(e,t)},untilAll:i,nextAll:Ao,prevAll:Mo,showError:Xn,prependTo:To,toggleClass:function(e,t,n){if(e.classList&&null==n)e.classList.toggle(t);else{var o=Fn(e,t);o&&null==n||!n?ao(e,t):(!o&&null==n||n)&&lo(e,t)}}},function(e,b){var n=b&&new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(b.licenseKey)||-1<cn.domain.indexOf("alvarotrigo.com"),s=Gn("html, body"),c=Gn("html")[0],g=Gn("body")[0];if(!Fn(c,pn)){var m={};b=Un({menu:!1,anchors:[],lockAnchors:!1,navigation:!1,navigationPosition:"right",navigationTooltips:[],showActiveTooltip:!1,slidesNavigation:!1,slidesNavPosition:"bottom",scrollBar:!1,hybrid:!1,css3:!0,scrollingSpeed:700,autoScrolling:!0,fitToSection:!0,fitToSectionDelay:1e3,easing:"easeInOutCubic",easingcss3:"ease",loopBottom:!1,loopTop:!1,loopHorizontal:!0,continuousVertical:!1,continuousHorizontal:!1,scrollHorizontally:!1,interlockedSlides:!1,dragAndMove:!1,offsetSections:!1,resetSliders:!1,fadingEffect:!1,normalScrollElements:null,scrollOverflow:!1,scrollOverflowReset:!1,scrollOverflowHandler:an.fp_scrolloverflow?an.fp_scrolloverflow.iscrollHandler:null,scrollOverflowOptions:null,touchSensitivity:5,touchWrapper:"string"==typeof e?Gn(e)[0]:e,bigSectionsDestination:null,keyboardScrolling:!0,animateAnchor:!0,recordHistory:!0,controlArrows:!0,controlArrowColor:"#fff",verticalCentered:!0,sectionsColor:[],paddingTop:0,paddingBottom:0,fixedElements:null,responsive:0,responsiveWidth:0,responsiveHeight:0,responsiveSlides:!1,parallax:!1,parallaxOptions:{type:"reveal",percentage:62,property:"translate"},cards:!1,cardsOptions:{perspective:100,fadeContent:!0,fadeBackground:!0},sectionSelector:".section",slideSelector:".slide",v2compatible:!1,afterLoad:null,onLeave:null,afterRender:null,afterResize:null,afterReBuild:null,afterSlideLoad:null,onSlideLeave:null,afterResponsive:null,lazyLoading:!0},b);var S,l,u,o,a=!1,r=navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/),i="ontouchstart"in an||0<navigator.msMaxTouchPoints||navigator.maxTouchPoints,w="string"==typeof e?Gn(e)[0]:e,y=_n(),f=Qn(),E=!1,t=!0,x=!0,d=[],v={m:{up:!0,down:!0,left:!0,right:!0}};v.k=Un({},v.m);var p,h,L,A,M,T,O,k,C,H,z=Vt(),R={touchmove:"ontouchmove"in an?"touchmove":z.move,touchstart:"ontouchstart"in an?"touchstart":z.down},I=!1,N=!Fn(g,ot("OHNsd3AtZnVsbHBhZ2UtanM5T20=")),B='a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]',j=!1;try{var P=Object.defineProperty({},"passive",{get:function(){j=!0}});an.addEventListener("testPassive",null,P),an.removeEventListener("testPassive",null,P)}catch(e){}var Y,W,D,V=Un({},b),Z=!1,X=!0,G={};en(),an.fp_easings=Un(an.fp_easings,{easeInOutCubic:function(e,t,n,o){return(e/=o/2)<1?n/2*e*e*e+t:n/2*((e-=2)*e*e+2)+t}}),w&&(m.version="3.1.0",m.setAutoScrolling=re,m.setRecordHistory=ie,m.setScrollingSpeed=le,m.setFitToSection=ae,m.setLockAnchors=function(e){b.lockAnchors=e},m.setMouseWheelScrolling=ce,m.setAllowScrolling=se,m.setKeyboardScrolling=fe,m.moveSectionUp=de,m.moveSectionDown=ve,m.silentMoveTo=pe,m.moveTo=he,m.moveSlideRight=ge,m.moveSlideLeft=me,m.fitToSection=ze,m.reBuild=Se,m.setResponsive=we,m.getFullpageData=function(){return{options:b,internals:{container:w,canScroll:x,isScrollAllowed:v,getDestinationPosition:Ve,isTouch:i,c:at,getXmovement:Ht,removeAnimation:Ot,getTransforms:Ut,lazyLoad:Ke,addAnimation:Tt,performHorizontalMove:xt,landscapeScroll:wt,silentLandscapeScroll:Xt,keepSlidesPosition:De,silentScroll:Gt,styleSlides:Me,styleSection:Oe,scrollHandler:He,getEventsPage:Zt,getMSPointer:Vt,isReallyTouch:Be,usingExtension:Qt,toggleControlArrows:yt,touchStartHandler:je,touchMoveHandler:Ne}}},m.destroy=function(e){wo(w,"destroy",e),re(!1,"internal"),se(!0),ue(!1),fe(!1),lo(w,vn),[M,A,h,T,O,C,L,D].forEach(function(e){clearTimeout(e)}),an.removeEventListener("scroll",He),an.removeEventListener("hashchange",ut),an.removeEventListener("resize",Lt),cn.removeEventListener("keydown",dt),cn.removeEventListener("keyup",vt),["click","touchstart"].forEach(function(e){cn.removeEventListener(e,ye)}),["mouseenter","touchstart","mouseleave","touchend"].forEach(function(e){cn.removeEventListener(e,xe,!0)}),Jt("dragAndMove","destroy"),e&&(Gt(0),Gn("img[data-src], source[data-src], audio[data-src], iframe[data-src]",w).forEach(function(e){Qe(e,"src")}),Gn("img[data-srcset]").forEach(function(e){Qe(e,"srcset")}),Lo(Gn(Tn+", "+Pn+", "+Wn)),Jn(Gn(wn),{height:"","background-color":"",padding:""}),Jn(Gn(Cn),{width:""}),Jn(w,{height:"",position:"","-ms-touch-action":"","touch-action":""}),Jn(s,{overflow:"",height:""}),ao(c,pn),ao(g,fn),g.className.split(/\s+/).forEach(function(e){0===e.indexOf(hn)&&ao(g,e)}),Gn(wn+", "+Cn).forEach(function(e){b.scrollOverflowHandler&&b.scrollOverflow&&b.scrollOverflowHandler.remove(e),ao(e,Bn+" "+gn+" "+Sn);var t=e.getAttribute("data-fp-styles");t&&e.setAttribute("style",e.getAttribute("data-fp-styles")),Fn(e,bn)&&!Z&&e.removeAttribute("data-anchor")}),_t(w),[xn,Nn,Rn].forEach(function(e){Gn(e,w).forEach(function(e){fo(e)})}),an.scrollTo(0,0),[bn,kn,In].forEach(function(e){ao(Gn("."+e),e)}))},m.getActiveSection=function(){return new rn(Gn(yn)[0])},m.getActiveSlide=function(){return Ue(Gn(Hn,Gn(yn)[0])[0])},m.landscapeScroll=wt,m.test={top:"0px",translate3d:"translate3d(0px, 0px, 0px)",translate3dH:function(){for(var e=[],t=0;t<Gn(b.sectionSelector,w).length;t++)e.push("translate3d(0px, 0px, 0px)");return e}(),left:function(){for(var e=[],t=0;t<Gn(b.sectionSelector,w).length;t++)e.push(0);return e}(),options:b,setAutoScrolling:re},m.shared={afterRenderActions:Ce,isNormalScrollElement:!1},an.fullpage_api=m,an.fullpage_extensions=!0,b.$&&Object.keys(m).forEach(function(e){b.$.fn.fullpage[e]=m[e]}),Ae("continuousHorizontal"),Ae("scrollHorizontally"),Ae("resetSliders"),Ae("interlockedSlides"),Ae("responsiveSlides"),Ae("fadingEffect"),Ae("dragAndMove"),Ae("offsetSections"),Ae("scrollOverflowReset"),Ae("parallax"),Ae("cards"),Ae("dropEffect"),Jt("dragAndMove","init"),b.css3&&(b.css3=function(){var e,t=cn.createElement("p"),n={webkitTransform:"-webkit-transform",OTransform:"-o-transform",msTransform:"-ms-transform",MozTransform:"-moz-transform",transform:"transform"};for(var o in t.style.display="block",cn.body.insertBefore(t,null),n)void 0!==t.style[o]&&(t.style[o]="translate3d(1px,1px,1px)",e=an.getComputedStyle(t).getPropertyValue(n[o]));return cn.body.removeChild(t),void 0!==e&&0<e.length&&"none"!==e}()),b.scrollBar=b.scrollBar||b.hybrid,function(){if(!b.anchors.length){var e="[data-anchor]",t=Gn(b.sectionSelector.split(",").join(e+",")+e,w);t.length&&t.length===Gn(b.sectionSelector,w).length&&(Z=!0,t.forEach(function(e){b.anchors.push(e.getAttribute("data-anchor").toString())}))}if(!b.navigationTooltips.length){var n="[data-tooltip]",o=Gn(b.sectionSelector.split(",").join(n+",")+n,w);o.length&&o.forEach(function(e){b.navigationTooltips.push(e.getAttribute("data-tooltip").toString())})}}(),function(){Jn(w,{height:"100%",position:"relative"}),lo(w,sn),lo(c,pn),y=_n(),ao(w,vn),lo(Gn(b.sectionSelector,w),bn),lo(Gn(b.slideSelector,w),kn),Jt("parallax","init");for(var e=Gn(wn),t=0;t<e.length;t++){var n=t,o=e[t],r=Gn(Cn,o),i=r.length;o.setAttribute("data-fp-styles",o.getAttribute("style")),Oe(o,n),l=o,a=n,void 0!==b.anchors[a]&&Fn(l,gn)&&kt(b.anchors[a],a),b.menu&&b.css3&&null!=vo(Gn(b.menu)[0],un)&&Gn(b.menu).forEach(function(e){g.appendChild(e)}),0<i?Me(o,r,i):b.verticalCentered&&zt(o)}var l,a;b.fixedElements&&b.css3&&Gn(b.fixedElements).forEach(function(e){g.appendChild(e)}),b.navigation&&function(){var e=cn.createElement("div");e.setAttribute("id",Mn);var t=cn.createElement("ul");e.appendChild(t),co(e,g);var n=Gn(Tn)[0];lo(n,"fp-"+b.navigationPosition),b.showActiveTooltip&&lo(n,"fp-show-active");for(var o="",r=0;r<Gn(wn).length;r++){var i="";b.anchors.length&&(i=b.anchors[r]),o+='<li><a href="#'+i+'"><span class="fp-sr-only">'+ke(r,"Section")+"</span><span></span></a>";var l=b.navigationTooltips[r];void 0!==l&&""!==l&&(o+='<div class="'+On+" fp-"+b.navigationPosition+'">'+l+"</div>"),o+="</li>"}Gn("ul",n)[0].innerHTML=o,lo(Gn("a",Gn("li",Gn(Tn)[0])[no(Gn(yn)[0],wn)]),gn)}(),Gn('iframe[src*="youtube.com/embed/"]',w).forEach(function(e){var t,n,o;n="enablejsapi=1",o=(t=e).getAttribute("src"),t.setAttribute("src",o+(/\?/.test(o)?"&":"?")+n)}),Jt("fadingEffect","apply"),Jt("dropEffect","init"),Jt("cards","init"),b.scrollOverflow&&(p=b.scrollOverflowHandler.init(b))}(),se(!0),ue(!0),re(b.autoScrolling,"internal"),Mt(),Dt(),"complete"===cn.readyState&&st(),an.addEventListener("load",st),b.scrollOverflow||Ce(),function(){for(var e=1;e<4;e++)C=setTimeout(Le,350*e)}(),N||at("l"),an.addEventListener("scroll",He),an.addEventListener("hashchange",ut),an.addEventListener("focus",mt),an.addEventListener("blur",St),an.addEventListener("resize",Lt),cn.addEventListener("keydown",dt),cn.addEventListener("keyup",vt),["click","touchstart"].forEach(function(e){cn.addEventListener(e,ye)}),b.normalScrollElements&&(["mouseenter","touchstart"].forEach(function(e){Ee(e,!1)}),["mouseleave","touchend"].forEach(function(e){Ee(e,!0)})),Jt("dragAndMove","turnOffTouch"));var U,F,_,Q=!1,J=0,K=0,$=0,q=0,ee=(new Date).getTime(),te=0,ne=0,oe=y;return m}function re(e,t){e||Gt(0),qt("autoScrolling",e,t);var n=Gn(yn)[0];if(b.autoScrolling&&!b.scrollBar)Jn(s,{overflow:"hidden",height:"100%"}),ie(V.recordHistory,"internal"),Jn(w,{"-ms-touch-action":"none","touch-action":"none"}),null!=n&&Gt(n.offsetTop);else if(Jn(s,{overflow:"visible",height:"initial"}),ie(!!b.autoScrolling&&V.recordHistory,"internal"),Jn(w,{"-ms-touch-action":"","touch-action":""}),_t(w),null!=n){var o=Fe(n.offsetTop);o.element.scrollTo(0,o.options)}wo(w,"setAutoScrolling",e)}function ie(e,t){qt("recordHistory",e,t)}function le(e,t){"internal"!==t&&Qt("fadingEffect")&&m.fadingEffect.update(e),Qt("cards")&&m.cards.update(e),qt("scrollingSpeed",e,t)}function ae(e,t){qt("fitToSection",e,t)}function ce(e){e?(function(){var e,t="";an.addEventListener?e="addEventListener":(e="attachEvent",t="on");var n="onwheel"in cn.createElement("div")?"wheel":void 0!==cn.onmousewheel?"mousewheel":"DOMMouseScroll",o=!!j&&{passive:!1};"DOMMouseScroll"==n?cn[e](t+"MozMousePixelScroll",Ye,o):cn[e](t+n,Ye,o)}(),w.addEventListener("mousedown",pt),w.addEventListener("mouseup",ht)):(cn.addEventListener?(cn.removeEventListener("mousewheel",Ye,!1),cn.removeEventListener("wheel",Ye,!1),cn.removeEventListener("MozMousePixelScroll",Ye,!1)):cn.detachEvent("onmousewheel",Ye),w.removeEventListener("mousedown",pt),w.removeEventListener("mouseup",ht))}function se(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){Ft(t,e,"m")}):Ft(t,"all","m"),wo(w,"setAllowScrolling",{value:t,directions:e})}function ue(e){e?(ce(!0),function(){if((r||i)&&(!Qt("dragAndMove")||"mouseonly"===b.dragAndMove)){b.autoScrolling&&(g.removeEventListener(R.touchmove,Ie,{passive:!1}),g.addEventListener(R.touchmove,Ie,{passive:!1}));var e=b.touchWrapper;e.removeEventListener(R.touchstart,je),e.removeEventListener(R.touchmove,Ne,{passive:!1}),e.addEventListener(R.touchstart,je),e.addEventListener(R.touchmove,Ne,{passive:!1})}}()):(ce(!1),function(){if(r||i){b.autoScrolling&&(g.removeEventListener(R.touchmove,Ne,{passive:!1}),g.removeEventListener(R.touchmove,Ie,{passive:!1}));var e=b.touchWrapper;e.removeEventListener(R.touchstart,je),e.removeEventListener(R.touchmove,Ne,{passive:!1})}}())}function fe(t,e){void 0!==e?(e=e.replace(/ /g,"").split(",")).forEach(function(e){Ft(t,e,"k")}):(Ft(t,"all","k"),b.keyboardScrolling=t)}function de(){var e=Kn(Gn(yn)[0],wn);e||!b.loopTop&&!b.continuousVertical||(e=to(Gn(wn))),null!=e&&Ze(e,null,!0)}function ve(){var e=$n(Gn(yn)[0],wn);e||!b.loopBottom&&!b.continuousVertical||(e=Gn(wn)[0]),null!=e&&Ze(e,null,!1)}function pe(e,t){le(0,"internal"),he(e,t),le(V.scrollingSpeed,"internal")}function he(e,t){var n=Nt(e);void 0!==t?Bt(e,t):null!=n&&Ze(n)}function ge(e){We("right",e)}function me(e){We("left",e)}function Se(e){if(!Fn(w,vn)){E=!0,y=_n(),f=Qn();for(var t=Gn(wn),n=0;n<t.length;++n){var o=t[n],r=Gn(Rn,o)[0],i=Gn(Cn,o);b.verticalCentered&&Jn(Gn(xn,o),{height:Rt(o)+"px"}),Jn(o,{height:Te(o)+"px"}),1<i.length&&wt(r,Gn(Hn,r)[0])}b.scrollOverflow&&p.createScrollBarForAll();var l=no(Gn(yn)[0],wn);!l||Qt("fadingEffect")||Qt("dropEffect")||pe(l+1),E=!1,bo(b.afterResize)&&e&&b.afterResize.call(w,an.innerWidth,an.innerHeight),bo(b.afterReBuild)&&!e&&b.afterReBuild.call(w),wo(w,"afterRebuild")}}function be(){return Fn(g,fn)}function we(e){var t=be();e?t||(re(!1,"internal"),ae(!1,"internal"),oo(Gn(Tn)),lo(g,fn),bo(b.afterResponsive)&&b.afterResponsive.call(w,e),Jt("responsiveSlides","toSections"),wo(w,"afterResponsive",e),b.scrollOverflow&&p.createScrollBarForAll()):t&&(re(V.autoScrolling,"internal"),ae(V.autoScrolling,"internal"),ro(Gn(Tn)),ao(g,fn),bo(b.afterResponsive)&&b.afterResponsive.call(w,e),Jt("responsiveSlides","toSlides"),wo(w,"afterResponsive",e))}function ye(e){var t=e.target;t&&vo(t,Tn+" a")?function(e){So(e);var t=no(vo(this,Tn+" li"));Ze(Gn(wn)[t])}.call(t,e):yo(t,".fp-tooltip")?function(){wo(qn(this),"click")}.call(t):yo(t,Wn)?function(){var e=vo(this,wn);Fn(this,Dn)?v.m.left&&me(e):v.m.right&&ge(e)}.call(t,e):yo(t,Yn)||null!=vo(t,Yn)?function(e){So(e);var t=Gn(Rn,vo(this,wn))[0],n=Gn(Cn,t)[no(vo(this,"li"))];wt(t,n)}.call(t,e):vo(t,b.menu+" [data-menuanchor]")&&function(e){!Gn(b.menu)[0]||!b.lockAnchors&&b.anchors.length||(So(e),he(this.getAttribute("data-menuanchor")))}.call(t,e)}function Ee(e,t){cn["fp_"+e]=t,cn.addEventListener(e,xe,!0)}function xe(e){var t=e.type,o=!1,r=b.scrollOverflow,i="mouseleave"===t?e.toElement||e.relatedTarget:e.target;if(i==cn||!i)return ue(!0),void(r&&b.scrollOverflowHandler.setIscroll(i,!0));"touchend"===t&&(X=!1,setTimeout(function(){X=!0},800)),("mouseenter"!==t||X)&&(b.normalScrollElements.split(",").forEach(function(e){if(!o){var t=yo(i,e),n=vo(i,e);(t||n)&&(m.shared.isNormalScrollElement||(ue(!1),r&&b.scrollOverflowHandler.setIscroll(i,!1)),m.shared.isNormalScrollElement=!0,o=!0)}}),!o&&m.shared.isNormalScrollElement&&(ue(!0),r&&b.scrollOverflowHandler.setIscroll(i,!0),m.shared.isNormalScrollElement=!1))}function Le(){var e=_n(),t=Qn();y===e&&f===t||(y=e,f=t,Se(!0))}function Ae(e){var t=["NTY3YnVuZGxlNzg5","NTU1S2V5Nzc3"],n=ot(t[0]),o=ot(t[1]),r=void 0!==b[n+o],i="fp_"+e+"Extension";G[e]=r?b[n+o]:b[e+o],m[e]=void 0!==an[i]?new an[i]:null,m[e]&&m[e].c(e)}function Me(e,t,n){var o=100*n,r=100/n,i=cn.createElement("div");i.className=zn,so(t,i);var l,a,c=cn.createElement("div");c.className=In,so(t,c),Jn(Gn(Nn,e),{width:o+"%"}),1<n&&(b.controlArrows&&(l=e,a=[xo('<div class="fp-controlArrow fp-prev"></div>'),xo('<div class="fp-controlArrow fp-next"></div>')],po(Gn(Rn,l)[0],a),"#fff"!==b.controlArrowColor&&(Jn(Gn(Zn,l),{"border-color":"transparent transparent transparent "+b.controlArrowColor}),Jn(Gn(Vn,l),{"border-color":"transparent "+b.controlArrowColor+" transparent transparent"})),b.loopHorizontal||oo(Gn(Vn,l))),b.slidesNavigation&&function(e,t){co(xo('<div class="'+jn+'"><ul></ul></div>'),e);var n=Gn(Pn,e)[0];lo(n,"fp-"+b.slidesNavPosition);for(var o=0;o<t;o++){var r=Gn(Cn,e)[o];co(xo('<li><a href="#"><span class="fp-sr-only">'+ke(o,"Slide",r)+"</span><span></span></a></li>"),Gn("ul",n)[0])}Jn(n,{"margin-left":"-"+n.innerWidth/2+"px"}),lo(Gn("a",Gn("li",n)[0]),gn)}(e,n)),t.forEach(function(e){Jn(e,{width:r+"%"}),b.verticalCentered&&zt(e)});var s=Gn(Hn,e)[0];null!=s&&(0!==no(Gn(yn),wn)||0===no(Gn(yn),wn)&&0!==no(s))?(Xt(s,"internal"),lo(s,"fp-initial")):lo(t[0],gn)}function Te(e){return b.offsetSections&&m.offsetSections?Math.round(m.offsetSections.getWindowHeight(e)):_n()}function Oe(e,t){t||null!=Gn(yn)[0]||lo(e,gn),o=Gn(yn)[0],Jn(e,{height:Te(e)+"px"}),b.paddingTop&&Jn(e,{"padding-top":b.paddingTop}),b.paddingBottom&&Jn(e,{"padding-bottom":b.paddingBottom}),void 0!==b.sectionsColor[t]&&Jn(e,{"background-color":b.sectionsColor[t]}),void 0!==b.anchors[t]&&e.setAttribute("data-anchor",b.anchors[t])}function ke(e,t,n){var o="Section"===t?b.anchors[e]:n.getAttribute("data-anchor");return b.navigationTooltips[e]||o||t+" "+(e+1)}function Ce(){var e,t,n=Gn(yn)[0];lo(n,Sn),Ke(n),Je(),qe(n),b.scrollOverflow&&b.scrollOverflowHandler.afterLoad(),e=ft(),t=Nt(e.section),e.section&&t&&(void 0===t||no(t)!==no(o))||!bo(b.afterLoad)||Xe("afterLoad",{activeSection:n,element:n,direction:null,anchorLink:n.getAttribute("data-anchor"),sectionIndex:no(n,wn)}),bo(b.afterRender)&&Xe("afterRender"),wo(w,"afterRender")}function He(){var e;if(wo(w,"onScroll"),!E&&(!b.autoScrolling||b.scrollBar||Qt("dragAndMove"))&&!$t()){var t=Qt("dragAndMove")?Math.abs(m.dragAndMove.getCurrentScroll()):go(),n=0,o=t+_n()/2,r=(Qt("dragAndMove")?m.dragAndMove.getDocumentHeight():g.offsetHeight-_n())===t,i=Gn(wn);if(r)n=i.length-1;else if(t)for(var l=0;l<i.length;++l)i[l].offsetTop<=o&&(n=l);else n=0;if(!Fn(e=i[n],gn)){Q=!0;var a,c,s=Gn(yn)[0],u=no(s,wn)+1,f=Ct(e),d=e.getAttribute("data-anchor"),v=no(e,wn)+1,p=Gn(Hn,e)[0],h={activeSection:s,sectionIndex:v-1,anchorLink:d,element:e,leavingSection:u,direction:f};p&&(c=p.getAttribute("data-anchor"),a=no(p)),x&&(lo(e,gn),ao(mo(e),gn),Jt("parallax","afterLoad"),bo(b.onLeave)&&Xe("onLeave",h),bo(b.afterLoad)&&Xe("afterLoad",h),Qt("resetSliders")&&m.resetSliders.apply({localIsResizing:E,leavingSection:u}),tt(s),Ke(e),qe(e),kt(d,v-1),b.anchors.length&&(S=d),Pt(a,c,d)),clearTimeout(T),T=setTimeout(function(){Q=!1},100)}b.fitToSection&&(clearTimeout(O),O=setTimeout(function(){b.fitToSection&&Gn(yn)[0].offsetHeight<=y&&ze()},b.fitToSectionDelay))}}function ze(){x&&(E=!0,Ze(Gn(yn)[0]),E=!1)}function Re(e){if(v.m[e]){var t="down"===e?ve:de;if(Qt("scrollHorizontally")&&(t=m.scrollHorizontally.getScrollSection(e,t)),b.scrollOverflow){var n=b.scrollOverflowHandler.scrollable(Gn(yn)[0]),o="down"===e?"bottom":"top";if(null!=n){if(!b.scrollOverflowHandler.isScrolled(o,n))return!0;t()}else t()}else t()}}function Ie(e){b.autoScrolling&&Be(e)&&v.m.up&&So(e)}function Ne(e){var t=vo(e.target,wn)||Gn(yn)[0];if(Be(e)){b.autoScrolling&&So(e);var n=Zt(e);$=n.y,q=n.x,Gn(Rn,t).length&&Math.abs(K-q)>Math.abs(J-$)?!a&&Math.abs(K-q)>Qn()/100*b.touchSensitivity&&(q<K?v.m.right&&ge(t):v.m.left&&me(t)):b.autoScrolling&&x&&Math.abs(J-$)>an.innerHeight/100*b.touchSensitivity&&($<J?Re("down"):J<$&&Re("up"))}}function Be(e){return void 0===e.pointerType||"mouse"!=e.pointerType}function je(e){if(b.fitToSection&&(Y=!1),Be(e)){var t=Zt(e);J=t.y,K=t.x}}function Pe(e,t){for(var n=0,o=e.slice(Math.max(e.length-t,1)),r=0;r<o.length;r++)n+=o[r];return Math.ceil(n/t)}function Ye(e){var t=(new Date).getTime(),n=Fn(Gn(".fp-completely")[0],An);if(!v.m.down&&!v.m.up)return So(e),!1;if(b.autoScrolling&&!u&&!n){var o=(e=e||an.event).wheelDelta||-e.deltaY||-e.detail,r=Math.max(-1,Math.min(1,o)),i=void 0!==e.wheelDeltaX||void 0!==e.deltaX,l=Math.abs(e.wheelDeltaX)<Math.abs(e.wheelDelta)||Math.abs(e.deltaX)<Math.abs(e.deltaY)||!i;149<d.length&&d.shift(),d.push(Math.abs(o)),b.scrollBar&&So(e);var a=t-ee;if(ee=t,200<a&&(d=[]),x&&!Kt()){var c=Pe(d,10);Pe(d,70)<=c&&l&&Re(r<0?"down":"up")}return!1}b.fitToSection&&(Y=!1)}function We(e,t){var n=null==t?Gn(yn)[0]:t,o=Gn(Rn,n)[0];if(!(null==o||Kt()||a||Gn(Cn,o).length<2)){var r=Gn(Hn,o)[0],i=null;if(null==(i="left"===e?Kn(r,Cn):$n(r,Cn))){if(!b.loopHorizontal)return;var l=mo(r);i="left"===e?l[l.length-1]:l[0]}a=!m.test.isTesting,wt(o,i,e)}}function De(){for(var e=Gn(Hn),t=0;t<e.length;t++)Xt(e[t],"internal")}function Ve(e){var t=e.offsetHeight,n=e.offsetTop,o=n,r=Qt("dragAndMove")&&m.dragAndMove.isGrabbing?m.dragAndMove.isScrollingDown():te<n,i=o-y+t,l=b.bigSectionsDestination;return y<t?(r||l)&&"bottom"!==l||(o=i):(r||E&&null==eo(e))&&(o=i),b.offsetSections&&m.offsetSections&&(o=m.offsetSections.getSectionPosition(r,o,e)),te=o}function Ze(e,t,n){if(null!=e){var o,r,i={element:e,callback:t,isMovementUp:n,dtop:Ve(e),yMovement:Ct(e),anchorLink:e.getAttribute("data-anchor"),sectionIndex:no(e,wn),activeSlide:Gn(Hn,e)[0],activeSection:Gn(yn)[0],leavingSection:no(Gn(yn),wn)+1,localIsResizing:E};if(!(i.activeSection==e&&!E||b.scrollBar&&go()===i.dtop&&!Fn(e,Ln))){if(null!=i.activeSlide&&(o=i.activeSlide.getAttribute("data-anchor"),r=no(i.activeSlide)),!i.localIsResizing){var l=i.yMovement;if(void 0!==n&&(l=n?"up":"down"),i.direction=l,void 0!==an.fp_dropEffectExtension&&m.dropEffect.onLeave(i),bo(b.onLeave)&&!1===Xe("onLeave",i))return}var a;Jt("parallax","apply",i),Jt("cards","apply",i),Jt("dropEffect","apply",i),b.autoScrolling&&b.continuousVertical&&void 0!==i.isMovementUp&&(!i.isMovementUp&&"up"==i.yMovement||i.isMovementUp&&"down"==i.yMovement)&&((c=i).isMovementUp?ho(Gn(yn)[0],Ao(c.activeSection,wn)):po(Gn(yn)[0],Mo(c.activeSection,wn).reverse()),Gt(Gn(yn)[0].offsetTop),De(),c.wrapAroundElements=c.activeSection,c.dtop=c.element.offsetTop,c.yMovement=Ct(c.element),c.leavingSection=no(c.activeSection,wn)+1,c.sectionIndex=no(c.element,wn),wo(Gn(un)[0],"onContinuousVertical",c),i=c),Qt("scrollOverflowReset")&&m.scrollOverflowReset.setPrevious(i.activeSection),i.localIsResizing||tt(i.activeSection),b.scrollOverflow&&b.scrollOverflowHandler.beforeLeave(),Qt("dropEffect")&&b.dropEffect||(lo(e,gn),ao(mo(e),gn)),Ke(e),b.scrollOverflow&&b.scrollOverflowHandler.onLeave(),x=m.test.isTesting,Pt(r,o,i.anchorLink,i.sectionIndex),function(e){var t=b.scrollingSpeed<700,n=t?700:b.scrollingSpeed;if(b.css3&&b.autoScrolling&&!b.scrollBar){var o="translate3d(0px, -"+Math.round(e.dtop)+"px, 0px)";It(o,!0),b.scrollingSpeed?(clearTimeout(A),A=setTimeout(function(){_e(e),x=!t},b.scrollingSpeed)):_e(e)}else{var r=Fe(e.dtop);m.test.top=-e.dtop+"px",Jn(s,{"scroll-behavior":"unset"}),tn(r.element,r.options,b.scrollingSpeed,function(){b.scrollBar?setTimeout(function(){_e(e)},30):(_e(e),x=!t)})}t&&(clearTimeout(D),D=setTimeout(function(){x=!0},n))}(i),S=i.anchorLink,kt(i.anchorLink,null==(a=i).wrapAroundElements?a.sectionIndex:a.isMovementUp?Gn(wn).length-1:0)}}var c}function Xe(e,t){var n,o,r,i,l=(o=e,r=t,(i=b.v2compatible?{afterRender:function(){return[w]},onLeave:function(){return[r.activeSection,r.leavingSection,r.sectionIndex+1,r.direction]},afterLoad:function(){return[r.element,r.anchorLink,r.sectionIndex+1]},afterSlideLoad:function(){return[r.destiny,r.anchorLink,r.sectionIndex+1,r.slideAnchor,r.slideIndex]},onSlideLeave:function(){return[r.prevSlide,r.anchorLink,r.sectionIndex+1,r.prevSlideIndex,r.direction,r.slideIndex]}}:{afterRender:function(){return{section:Ge(Gn(yn)[0]),slide:Ue(Gn(Hn,Gn(yn)[0])[0])}},onLeave:function(){return{origin:Ge(r.activeSection),destination:Ge(r.element),direction:r.direction}},afterLoad:function(){return i.onLeave()},afterSlideLoad:function(){return{section:Ge(r.section),origin:Ue(r.prevSlide),destination:Ue(r.destiny),direction:r.direction}},onSlideLeave:function(){return i.afterSlideLoad()}})[o]());if(b.v2compatible){if(!1===b[e].apply(l[0],l.slice(1)))return!1}else if(wo(w,e,l),!1===b[e].apply(l[Object.keys(l)[0]],(n=l,Object.keys(n).map(function(e){return n[e]}))))return!1;return!0}function Ge(e){return e?new rn(e):null}function Ue(e){return e?new ln(e):null}function Fe(e){var t={};return b.autoScrolling&&!b.scrollBar?(t.options=-e,t.element=Gn(un)[0]):(t.options=e,t.element=an),t}function _e(e){var t;null!=(t=e).wrapAroundElements&&(t.isMovementUp?ho(Gn(wn)[0],t.wrapAroundElements):po(Gn(wn)[Gn(wn).length-1],t.wrapAroundElements),Gt(Gn(yn)[0].offsetTop),De(),t.sectionIndex=no(t.element,wn),t.leavingSection=no(t.activeSection,wn)+1),bo(b.afterLoad)&&!e.localIsResizing&&Xe("afterLoad",e),b.scrollOverflow&&b.scrollOverflowHandler.afterLoad(),Jt("parallax","afterLoad"),Jt("dropEffect","afterLoad"),Jt("scrollOverflowReset","reset"),Qt("resetSliders")&&m.resetSliders.apply(e),e.localIsResizing||qe(e.element),lo(e.element,Sn),ao(mo(e.element),Sn),Je(),x=!0,bo(e.callback)&&e.callback()}function Qe(e,t){e.setAttribute(t,e.getAttribute("data-"+t)),e.removeAttribute("data-"+t)}function Je(){var e=Gn(".fp-auto-height")[0]||be()&&Gn(".fp-auto-height-responsive")[0];b.lazyLoading&&e&&Gn(wn+":not("+mn+")").forEach(function(e){var t,n,o;t=e.getBoundingClientRect(),n=t.top,o=t.bottom,(n+2<y&&0<n||2<o&&o<y)&&Ke(e)})}function Ke(o){b.lazyLoading&&Gn("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]",nt(o)).forEach(function(n){if(["src","srcset"].forEach(function(e){var t=n.getAttribute("data-"+e);null!=t&&t&&(Qe(n,e),n.addEventListener("load",function(){$e(o)}))}),yo(n,"source")){var e=vo(n,"video, audio");e&&(e.load(),e.onloadeddata=function(){$e(o)})}})}function $e(e){b.scrollOverflow&&(clearTimeout(W),W=setTimeout(function(){Fn(g,fn)||p.createScrollBar(e)},200))}function qe(e){var t=nt(e);Gn("video, audio",t).forEach(function(e){e.hasAttribute("data-autoplay")&&"function"==typeof e.play&&e.play()}),Gn('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){e.hasAttribute("data-autoplay")&&et(e),e.onload=function(){e.hasAttribute("data-autoplay")&&et(e)}})}function et(e){e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}function tt(e){var t=nt(e);Gn("video, audio",t).forEach(function(e){e.hasAttribute("data-keepplaying")||"function"!=typeof e.pause||e.pause()}),Gn('iframe[src*="youtube.com/embed/"]',t).forEach(function(e){/youtube\.com\/embed\//.test(e.getAttribute("src"))&&!e.hasAttribute("data-keepplaying")&&e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")})}function nt(e){var t=Gn(Hn,e);return t.length&&(e=t[0]),e}function ot(e){var s="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function o(e){var t,n,o,r,i,l,a="",c=0;for(e=e.replace(/[^A-Za-z0-9+/=]/g,"");c<e.length;)t=s.indexOf(e.charAt(c++))<<2|(r=s.indexOf(e.charAt(c++)))>>4,n=(15&r)<<4|(i=s.indexOf(e.charAt(c++)))>>2,o=(3&i)<<6|(l=s.indexOf(e.charAt(c++))),a+=String.fromCharCode(t),64!=i&&(a+=String.fromCharCode(n)),64!=l&&(a+=String.fromCharCode(o));return a=function(e){for(var t,n="",o=0,r=0,i=0;o<e.length;)(r=e.charCodeAt(o))<128?(n+=String.fromCharCode(r),o++):191<r&&r<224?(i=e.charCodeAt(o+1),n+=String.fromCharCode((31&r)<<6|63&i),o+=2):(i=e.charCodeAt(o+1),t=e.charCodeAt(o+2),n+=String.fromCharCode((15&r)<<12|(63&i)<<6|63&t),o+=3);return n}(a)}function r(e){return e.slice(3).slice(0,-3)}return function(e){var t=e.split("_");if(1<t.length){var n=t[1];return e.replace(r(t[1]),"").split("_")[0]+"_"+o(n.slice(3).slice(0,-3))}return r(e)}(o(e))}function rt(g){var m=void 0!==G[g]&&G[g].length,e=[],S=!1;return io(G[g])?e=G[g]:e.push(G[g]),e.forEach(function(e){var t=function(){if(cn.domain.length){for(var e=cn.domain.replace(/^(www\.)/,"").split(".");2<e.length;)e.shift();return e.join(".").replace(/(^\.*)|(\.*$)/g,"")}return""}(),n=["MTM0bG9jYWxob3N0MjM0","MTM0MC4xMjM0","MTM0anNoZWxsLm5ldDIzNA==","UDdDQU5ZNlNN","NTY3YnVuZGxlNzg5","NTU1S2V5Nzc3"],o=ot(n[0]),r=ot(n[1]),i=ot(n[2]),l=ot(n[3]),a=ot(n[4]),c=ot(n[5]),s=void 0!==b[a+c];m=m||s;var u=[o,r,i].indexOf(t)<0&&0!==t.length;if(!m&&!s&&u)return!1;var f=m?ot(e):"",d=1<(f=f.split("_")).length&&-1<f[1].indexOf(g,f[1].length-g.length),v=1<f.length&&-1<f[1].toLowerCase().indexOf(a),p=f[0].indexOf(t,f[0].length-t.length)<0,h=d||v;S=S||!(p&&u&&l!=f[0])&&h||!u}),S}function it(e){e.forEach(function(e){if(e.removedNodes[0]&&e.removedNodes[0].isEqualNode(F)){clearTimeout(_);var t=ot("bDIwc2V0VGltZW91dDAzbA==");_=an[t](lt,900)}})}function lt(){I=!1}function at(e){if(F=cn.createElement("div"),U=ot("MTIzPGRpdj48YSBocmVmPSJodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL2V4dGVuc2lvbnMvIiBzdHlsZT0iY29sb3I6ICNmZmYgIWltcG9ydGFudDsgdGV4dC1kZWNvcmF0aW9uOm5vbmUgIWltcG9ydGFudDsiPlVubGljZW5zZWQgZnVsbFBhZ2UuanMgRXh0ZW5zaW9uPC9hPjwvZGl2PjEyMw=="),N||(U=U.replace("extensions/","").replace("Extension","")),F.innerHTML=U,F=F.firstChild,"MutationObserver"in an&&new MutationObserver(it).observe(cn.body,{childList:!0,subtree:!1}),(!N||Qt(e)&&m[e])&&(!rt(e)||!N)){ct();var t=ot("MzQ1c2V0SW50ZXJ2YWwxMjM=");an[t](ct,2e3)}}function ct(){F&&(I||(Math.random()<.5?To(g,F):co(F,g),I=!0),F.setAttribute("style",ot("MTIzei1pbmRleDo5OTk5OTk5O3Bvc2l0aW9uOmZpeGVkO3RvcDoyMHB4O2JvdHRvbTphdXRvO2xlZnQ6MjBweDtyaWdodDphdXRvO2JhY2tncm91bmQ6cmVkO3BhZGRpbmc6N3B4IDE1cHg7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWw7Y29sb3I6I2ZmZjtkaXNwbGF5OmlubGluZS1ibG9jazt0cmFuc2Zvcm06dHJhbnNsYXRlM2QoMCwwLDApO29wYWNpdHk6MTtoZWlnaHQ6YXV0bzt3aWR0aDphdXRvO3pvb206MTttYXJnaW46YXV0bztib3JkZXI6bm9uZTt2aXNpYmlsaXR5OnZpc2libGU7Y2xpcC1wYXRoOm5vbmU7MTIz").replace(/;/g,ot("MTIzICFpbXBvcnRhbnQ7MzQ1"))))}function st(){var e=ft(),t=e.section,n=e.slide;t&&(b.animateAnchor?Bt(t,n):pe(t,n))}function ut(e){if(!Q&&!b.lockAnchors){var t=ft(),n=t.section,o=t.slide,r=void 0===S,i=void 0===S&&void 0===o&&!a;n&&n.length&&(n&&n!==S&&!r||i&&!Kt()||!a&&l!=o&&!Kt())&&Bt(n,o)}}function ft(){var e,t,n=an.location.hash;if(n.length){var o=n.replace("#","").split("/"),r=-1<n.indexOf("#/");e=r?"/"+o[1]:decodeURIComponent(o[0]);var i=r?o[2]:o[1];i&&i.length&&(t=decodeURIComponent(i))}return{section:e,slide:t}}function dt(e){clearTimeout(k);var t=cn.activeElement,n=e.keyCode;9===n?function(e){var t,n,o,r,i,l,a,c=e.shiftKey,s=cn.activeElement,u=gt(nt(Gn(yn)[0]));function f(e){return So(e),u[0]?u[0].focus():null}(t=e,n=gt(cn),o=n.indexOf(cn.activeElement),r=t.shiftKey?o-1:o+1,i=n[r],l=Ue(vo(i,Cn)),a=Ge(vo(i,wn)),l||a)&&(s?null==vo(s,yn+","+yn+" "+Hn)&&(s=f(e)):f(e),(!c&&s==u[u.length-1]||c&&s==u[0])&&So(e))}(e):yo(t,"textarea")||yo(t,"input")||yo(t,"select")||"true"===t.getAttribute("contentEditable")||""===t.getAttribute("contentEditable")||!b.keyboardScrolling||!b.autoScrolling||(-1<[40,38,32,33,34].indexOf(n)&&So(e),u=e.ctrlKey,k=setTimeout(function(){!function(e){var t=e.shiftKey,n=cn.activeElement,o=yo(n,"video")||yo(n,"audio");if(x||!([37,39].indexOf(e.keyCode)<0))switch(e.keyCode){case 38:case 33:v.k.up&&de();break;case 32:if(t&&v.k.up&&!o){de();break}case 40:case 34:v.k.down&&(32===e.keyCode&&o||ve());break;case 36:v.k.up&&he(1);break;case 35:v.k.down&&he(Gn(wn).length);break;case 37:v.k.left&&me();break;case 39:v.k.right&&ge()}}(e)},150))}function vt(e){t&&(u=e.ctrlKey)}function pt(e){2==e.which&&(ne=e.pageY,w.addEventListener("mousemove",bt))}function ht(e){2==e.which&&w.removeEventListener("mousemove",bt)}function gt(e){return[].slice.call(Gn(B,e)).filter(function(e){return"-1"!==e.getAttribute("tabindex")&&null!==e.offsetParent})}function mt(){t=!0}function St(){u=t=!1}function bt(e){b.autoScrolling&&(x&&(e.pageY<ne&&v.m.up?de():e.pageY>ne&&v.m.down&&ve()),ne=e.pageY)}function wt(e,t,n){var o=vo(e,wn),r={slides:e,destiny:t,direction:n,destinyPos:{left:t.offsetLeft},slideIndex:no(t),section:o,sectionIndex:no(o,wn),anchorLink:o.getAttribute("data-anchor"),slidesNav:Gn(Pn,o)[0],slideAnchor:Wt(t),prevSlide:Gn(Hn,o)[0],prevSlideIndex:no(Gn(Hn,o)[0]),localIsResizing:E};r.xMovement=Ht(r.prevSlideIndex,r.slideIndex),r.direction=r.direction?r.direction:r.xMovement,r.localIsResizing||(x=!1),Jt("parallax","applyHorizontal",r),Jt("cards","apply",r),Jt("dropEffect","apply",r),b.onSlideLeave&&!r.localIsResizing&&"none"!==r.xMovement&&bo(b.onSlideLeave)&&!1===Xe("onSlideLeave",r)?a=!1:(Qt("dropEffect")&&b.dropEffect||(lo(t,gn),ao(mo(t),gn)),r.localIsResizing||(tt(r.prevSlide),Ke(t)),yt(r),Fn(o,gn)&&!r.localIsResizing&&Pt(r.slideIndex,r.slideAnchor,r.anchorLink,r.sectionIndex),m.continuousHorizontal&&m.continuousHorizontal.apply(r),$t()?Et(r):xt(e,r,!0),b.interlockedSlides&&m.interlockedSlides&&(Qt("continuousHorizontal")&&void 0!==n&&n!==r.xMovement||m.interlockedSlides.apply(r)))}function yt(e){!b.loopHorizontal&&b.controlArrows&&(Eo(Gn(Vn,e.section),0!==e.slideIndex),Eo(Gn(Zn,e.section),null!=eo(e.destiny)))}function Et(e){var t,n;m.continuousHorizontal&&m.continuousHorizontal.afterSlideLoads(e),t=e.slidesNav,n=e.slideIndex,b.slidesNavigation&&null!=t&&(ao(Gn(mn,t),gn),lo(Gn("a",Gn("li",t)[n]),gn)),e.localIsResizing||(Jt("parallax","afterSlideLoads"),Jt("scrollOverflowReset","setPrevious",e.prevSlide),Jt("scrollOverflowReset","reset"),bo(b.afterSlideLoad)&&Xe("afterSlideLoad",e),x=!0,qe(e.destiny)),a=!1,Qt("interlockedSlides")&&m.interlockedSlides.apply(e)}function xt(e,t,n){var o=t.destinyPos;if(b.css3){var r="translate3d(-"+Math.round(o.left)+"px, 0px, 0px)";m.test.translate3dH[t.sectionIndex]=r,Qt("dragAndMove")&&void 0!==t.isInterlockedSlide||Tt(Gn(Nn,e)),Jn(Gn(Nn,e),Ut(r)),M=setTimeout(function(){n&&Et(t)},b.scrollingSpeed)}else m.test.left[t.sectionIndex]=Math.round(o.left),tn(e,Math.round(o.left),b.scrollingSpeed,function(){n&&Et(t)})}function Lt(){clearTimeout(h),h=setTimeout(function(){for(var e=0;e<4;e++)L=setTimeout(At,200*e)},200)}function At(){if(E=!0,wo(w,"onResize"),Mt(),r){var e=cn.activeElement;if(!yo(e,"textarea")&&!yo(e,"input")&&!yo(e,"select")){var t=_n();Math.abs(t-oe)>20*Math.max(oe,t)/100&&(Se(!0),oe=t)}}else Le();E=!1}function Mt(){var e=b.responsive||b.responsiveWidth,t=b.responsiveHeight,n=e&&an.innerWidth<e,o=t&&an.innerHeight<t;e&&t?we(n||o):e?we(n):t&&we(o)}function Tt(e){var t="all "+b.scrollingSpeed+"ms "+b.easingcss3;return ao(e,dn),Jn(e,{"-webkit-transition":t,transition:t})}function Ot(e){return lo(e,dn)}function kt(e,t){var n,o,r,i;n=e,Gn(b.menu).forEach(function(e){b.menu&&null!=e&&(ao(Gn(mn,e),gn),lo(Gn('[data-menuanchor="'+n+'"]',e),gn))}),o=e,r=t,i=Gn(Tn)[0],b.navigation&&null!=i&&"none"!==i.style.display&&(ao(Gn(mn,Gn(Tn)[0]),gn),lo(o?Gn('a[href="#'+o+'"]',Gn(Tn)[0]):Gn("a",Gn("li",Gn(Tn)[0])[r]),gn))}function Ct(e){var t=no(Gn(yn)[0],wn),n=no(e,wn);return t==n?"none":n<t?"up":"down"}function Ht(e,t){return e==t?"none":t<e?"left":"right"}function zt(e){if(!Fn(e,Bn)){var t=cn.createElement("div");t.className=En,t.style.height=Rt(e)+"px",lo(e,Bn),uo(e,t)}}function Rt(e){var t=Te(e);if(b.paddingTop||b.paddingBottom){var n=e;Fn(n,bn)||(n=vo(e,wn)),t-=parseInt(getComputedStyle(n)["padding-top"])+parseInt(getComputedStyle(n)["padding-bottom"])}return t}function It(e,t){t?Tt(w):Ot(w),clearTimeout(H),Jn(w,Ut(e)),m.test.translate3d=e,H=setTimeout(function(){ao(w,dn)},10)}function Nt(e){var t=Gn(wn+'[data-anchor="'+e+'"]',w)[0];if(!t){var n=void 0!==e?e-1:0;t=Gn(wn)[n]}return t}function Bt(e,t){var n=Nt(e);if(null!=n){var o,r,i,l=(null==(i=Gn(Cn+'[data-anchor="'+(o=t)+'"]',r=n)[0])&&(o=void 0!==o?o:0,i=Gn(Cn,r)[o]),i);Wt(n)===S||Fn(n,gn)?jt(l):Ze(n,function(){jt(l)})}}function jt(e){null!=e&&wt(vo(e,Rn),e)}function Pt(e,t,n,o){var r="";b.anchors.length&&!b.lockAnchors&&(e?(null!=n&&(r=n),null==t&&(t=e),Yt(r+"/"+(l=t))):(null!=e&&(l=t),Yt(n))),Dt()}function Yt(e){if(b.recordHistory)location.hash=e;else if(r||i)an.history.replaceState(void 0,void 0,"#"+e);else{var t=an.location.href.split("#")[0];an.location.replace(t+"#"+e)}}function Wt(e){if(!e)return null;var t=e.getAttribute("data-anchor"),n=no(e);return null==t&&(t=n),t}function Dt(){var e=Gn(yn)[0],t=Gn(Hn,e)[0],n=Wt(e),o=Wt(t),r=String(n);t&&(r=r+"-"+o),r=r.replace("/","-").replace("#","");var i=new RegExp("\\b\\s?"+hn+"-[^\\s]+\\b","g");g.className=g.className.replace(i,""),lo(g,hn+"-"+r)}function Vt(){return an.PointerEvent?{down:"pointerdown",move:"pointermove"}:{down:"MSPointerDown",move:"MSPointerMove"}}function Zt(e){var t=[];return t.y=void 0!==e.pageY&&(e.pageY||e.pageX)?e.pageY:e.touches[0].pageY,t.x=void 0!==e.pageX&&(e.pageY||e.pageX)?e.pageX:e.touches[0].pageX,i&&Be(e)&&b.scrollBar&&void 0!==e.touches&&(t.y=e.touches[0].pageY,t.x=e.touches[0].pageX),t}function Xt(e,t){le(0,"internal"),void 0!==t&&(E=!0),wt(vo(e,Rn),e),void 0!==t&&(E=!1),le(V.scrollingSpeed,"internal")}function Gt(e){var t=Math.round(e);if(b.css3&&b.autoScrolling&&!b.scrollBar)It("translate3d(0px, -"+t+"px, 0px)",!1);else if(b.autoScrolling&&!b.scrollBar)Jn(w,{top:-t+"px"}),m.test.top=-t+"px";else{var n=Fe(t);nn(n.element,n.options)}}function Ut(e){return{"-webkit-transform":e,"-moz-transform":e,"-ms-transform":e,transform:e}}function Ft(t,e,n){"all"!==e?v[n][e]=t:Object.keys(v[n]).forEach(function(e){v[n][e]=t})}function _t(e){return Jn(e,{"-webkit-transition":"none",transition:"none"})}function Qt(e){return null!==b[e]&&"[object Array]"===Object.prototype.toString.call(b[e])?b[e].length&&m[e]:b[e]&&m[e]}function Jt(e,t,n){if(Qt(e))return m[e][t](n)}function Kt(){return Qt("dragAndMove")&&m.dragAndMove.isAnimating}function $t(){return Qt("dragAndMove")&&m.dragAndMove.isGrabbing}function qt(e,t,n){b[e]=t,"internal"!==n&&(V[e]=t)}function en(){var e=b.licenseKey,t="font-size: 15px;background:yellow;";n?e&&e.length<20&&(console.warn("%c This website was made using fullPage.js slider. More info on the following website:",t),console.warn("%c https://alvarotrigo.com/fullPage/",t)):(Xn("error","Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"),Xn("error","https://github.com/alvarotrigo/fullPage.js#options")),Fn(c,pn)?Xn("error","Fullpage.js can only be initialized once and you are doing it multiple times!"):(b.continuousVertical&&(b.loopTop||b.loopBottom)&&(b.continuousVertical=!1,Xn("warn","Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),!b.scrollOverflow||!b.scrollBar&&b.autoScrolling||Xn("warn","Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),!b.continuousVertical||!b.scrollBar&&b.autoScrolling||(b.continuousVertical=!1,Xn("warn","Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),b.scrollOverflow&&null==b.scrollOverflowHandler&&(b.scrollOverflow=!1,Xn("error","The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),b.anchors.forEach(function(t){var e=[].slice.call(Gn("[name]")).filter(function(e){return e.getAttribute("name")&&e.getAttribute("name").toLowerCase()==t.toLowerCase()}),n=[].slice.call(Gn("[id]")).filter(function(e){return e.getAttribute("id")&&e.getAttribute("id").toLowerCase()==t.toLowerCase()});if(n.length||e.length){Xn("error","data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");var o=n.length?"id":"name";(n.length||e.length)&&Xn("error",'"'+t+'" is is being used by another element `'+o+"` property")}}))}function tn(t,n,o,r){var e,i=(e=t).self!=an&&Fn(e,zn)?e.scrollLeft:!b.autoScrolling||b.scrollBar?go():e.offsetTop,l=n-i,a=0;Y=!0;var c=function(){if(Y){var e=n;a+=20,o&&(e=an.fp_easings[b.easing](a,i,l,o)),nn(t,e),a<o?setTimeout(c,20):void 0!==r&&r()}else a<o&&r()};c()}function nn(e,t){!b.autoScrolling||b.scrollBar||e.self!=an&&Fn(e,zn)?e.self!=an&&Fn(e,zn)?e.scrollLeft=t:e.scrollTo(0,t):e.style.top=t+"px"}function on(e,t){this.anchor=e.getAttribute("data-anchor"),this.item=e,this.index=no(e,t),this.isLast=this.index===e.parentElement.querySelectorAll(t).length-1,this.isFirst=!this.index}function rn(e){on.call(this,e,wn)}function ln(e){on.call(this,e,Cn)}en()}}),window.jQuery&&window.fullpage&&function(t,n){"use strict";t&&n?t.fn.fullpage=function(e){e=t.extend({},e,{$:t});new n(this[0],e)}:window.fp_utils.showError("error","jQuery is required to use the jQuery fullpage adapter!")}(window.jQuery,window.fullpage);

/***/ }),
/* 53 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(53);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 55 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(55)(false);
// imports


// module
exports.push([module.i, "/*!\r\n * fullPage 3.1.0\r\n * https://github.com/alvarotrigo/fullPage.js\r\n *\r\n * @license GPLv3 for open source use only\r\n * or Fullpage Commercial License for commercial use\r\n * http://alvarotrigo.com/fullPage/pricing/\r\n *\r\n * Copyright (C) 2018 http://alvarotrigo.com/fullPage - A project by Alvaro Trigo\r\n */.fp-enabled body,html.fp-enabled{margin:0;padding:0;overflow:hidden;-webkit-tap-highlight-color:rgba(0,0,0,0)}.fp-section{position:relative;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}.fp-slide{float:left}.fp-slide,.fp-slidesContainer{height:100%;display:block}.fp-slides{z-index:1;height:100%;overflow:hidden;position:relative;-webkit-transition:all .3s ease-out;transition:all .3s ease-out}.fp-section.fp-table,.fp-slide.fp-table{display:table;table-layout:fixed;width:100%}.fp-tableCell{display:table-cell;vertical-align:middle;width:100%;height:100%}.fp-slidesContainer{float:left;position:relative}.fp-controlArrow{-webkit-user-select:none;-moz-user-select:none;-khtml-user-select:none;-ms-user-select:none;position:absolute;z-index:4;top:50%;cursor:pointer;width:0;height:0;border-style:solid;margin-top:-38px;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0)}.fp-controlArrow.fp-prev{left:15px;width:0;border-width:38.5px 34px 38.5px 0;border-color:transparent #fff transparent transparent}.fp-controlArrow.fp-next{right:15px;border-width:38.5px 0 38.5px 34px;border-color:transparent transparent transparent #fff}.fp-scrollable{position:relative}.fp-scrollable,.fp-scroller{overflow:hidden}.iScrollIndicator{border:0!important}.fp-notransition{-webkit-transition:none!important;transition:none!important}#fp-nav{position:fixed;z-index:100;top:50%;opacity:1;transform:translateY(-50%);-ms-transform:translateY(-50%);-webkit-transform:translate3d(0,-50%,0)}#fp-nav.fp-right{right:17px}#fp-nav.fp-left{left:17px}.fp-slidesNav{position:absolute;z-index:4;opacity:1;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);left:0!important;right:0;margin:0 auto!important}.fp-slidesNav.fp-bottom{bottom:17px}.fp-slidesNav.fp-top{top:17px}#fp-nav ul,.fp-slidesNav ul{margin:0;padding:0}#fp-nav ul li,.fp-slidesNav ul li{display:block;width:14px;height:13px;margin:7px;position:relative}.fp-slidesNav ul li{display:inline-block}#fp-nav ul li a,.fp-slidesNav ul li a{display:block;position:relative;z-index:1;width:100%;height:100%;cursor:pointer;text-decoration:none}#fp-nav ul li:hover a.active span,#fp-nav ul li a.active span,.fp-slidesNav ul li:hover a.active span,.fp-slidesNav ul li a.active span{height:12px;width:12px;margin:-6px 0 0 -6px;border-radius:100%}#fp-nav ul li a span,.fp-slidesNav ul li a span{border-radius:50%;position:absolute;z-index:1;height:4px;width:4px;border:0;background:#333;left:50%;top:50%;margin:-2px 0 0 -2px;-webkit-transition:all .1s ease-in-out;-moz-transition:all .1s ease-in-out;-o-transition:all .1s ease-in-out;transition:all .1s ease-in-out}#fp-nav ul li:hover a span,.fp-slidesNav ul li:hover a span{width:10px;height:10px;margin:-5px 0 0 -5px}#fp-nav ul li .fp-tooltip{position:absolute;top:-2px;color:#fff;font-size:14px;font-family:arial,helvetica,sans-serif;white-space:nowrap;max-width:220px;overflow:hidden;display:block;opacity:0;width:0;cursor:pointer}#fp-nav.fp-show-active a.active+.fp-tooltip,#fp-nav ul li:hover .fp-tooltip{-webkit-transition:opacity .2s ease-in;transition:opacity .2s ease-in;width:auto;opacity:1}#fp-nav ul li .fp-tooltip.fp-right{right:20px}#fp-nav ul li .fp-tooltip.fp-left{left:20px}.fp-auto-height.fp-section,.fp-auto-height .fp-slide,.fp-auto-height .fp-tableCell,.fp-responsive .fp-auto-height-responsive.fp-section,.fp-responsive .fp-auto-height-responsive .fp-slide,.fp-responsive .fp-auto-height-responsive .fp-tableCell{height:auto!important}.fp-sr-only{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}", ""]);

// exports


/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(56);

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(54)(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
var isArray = __webpack_require__(34);
var SPECIES = __webpack_require__(0)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(58);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(41);
var IObject = __webpack_require__(39);
var toObject = __webpack_require__(21);
var toLength = __webpack_require__(37);
var asc = __webpack_require__(59);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(8);
var $find = __webpack_require__(60)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(23)(KEY);


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var MATCH = __webpack_require__(0)('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(5);
var cof = __webpack_require__(27);
var MATCH = __webpack_require__(0)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(63);
var defined = __webpack_require__(17);

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(8);
var context = __webpack_require__(64);
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(62)(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(8);
var $includes = __webpack_require__(38)(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(23)('includes');


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(8);
var core = __webpack_require__(13);
var fails = __webpack_require__(9);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(21);
var $keys = __webpack_require__(12);

__webpack_require__(67)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(4);
var toObject = __webpack_require__(21);
var IE_PROTO = __webpack_require__(26)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(33);
var descriptor = __webpack_require__(18);
var setToStringTag = __webpack_require__(28);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(3)(IteratorPrototype, __webpack_require__(0)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(16);
var $export = __webpack_require__(8);
var redefine = __webpack_require__(15);
var hide = __webpack_require__(3);
var Iterators = __webpack_require__(22);
var $iterCreate = __webpack_require__(70);
var setToStringTag = __webpack_require__(28);
var getPrototypeOf = __webpack_require__(69);
var ITERATOR = __webpack_require__(0)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(31);
var getKeys = __webpack_require__(12);
var redefine = __webpack_require__(15);
var global = __webpack_require__(1);
var hide = __webpack_require__(3);
var Iterators = __webpack_require__(22);
var wks = __webpack_require__(0);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(24);
var createDesc = __webpack_require__(18);
var toIObject = __webpack_require__(7);
var toPrimitive = __webpack_require__(30);
var has = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(47);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(10) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(7);
var gOPN = __webpack_require__(32).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;
module.exports = document && document.documentElement;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var anObject = __webpack_require__(19);
var getKeys = __webpack_require__(12);

module.exports = __webpack_require__(10) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(36);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(12);
var gOPS = __webpack_require__(35);
var pIE = __webpack_require__(24);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(14)('meta');
var isObject = __webpack_require__(5);
var has = __webpack_require__(4);
var setDesc = __webpack_require__(11).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(9)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 82 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(73);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(68);
/* harmony import */ var core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(66);
/* harmony import */ var core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(65);
/* harmony import */ var core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61);
/* harmony import */ var core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var fullpage_js_dist_fullpage_min_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(57);
/* harmony import */ var fullpage_js_dist_fullpage_min_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(fullpage_js_dist_fullpage_min_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _Logger__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(20);
/* harmony import */ var _selectors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6);
function _typeof(obj){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){_typeof=function _typeof(obj){return typeof obj;};}else{_typeof=function _typeof(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj;};}return _typeof(obj);}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=arguments[i]!=null?arguments[i]:{};var ownKeys=Object.keys(source);if(typeof Object.getOwnPropertySymbols==='function'){ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable;}));}ownKeys.forEach(function(key){_defineProperty(target,key,source[key]);});}return target;}function _defineProperty(obj,key,value){if(key in obj){Object.defineProperty(obj,key,{value:value,enumerable:true,configurable:true,writable:true});}else{obj[key]=value;}return obj;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}function _createClass(Constructor,protoProps,staticProps){if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;}function _possibleConstructorReturn(self,call){if(call&&(_typeof(call)==="object"||typeof call==="function")){return call;}return _assertThisInitialized(self);}function _assertThisInitialized(self){if(self===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return self;}function _getPrototypeOf(o){_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o);};return _getPrototypeOf(o);}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function");}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:true,configurable:true}});if(superClass)_setPrototypeOf(subClass,superClass);}function _setPrototypeOf(o,p){_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){o.__proto__=p;return o;};return _setPrototypeOf(o,p);}/* eslint-disable import/no-extraneous-dependencies */ /* eslint-disable react/prop-types */// eslint-disable-line no-unused-vars
var Fullpage;var isFunc=function isFunc(val){return typeof val==='function';};var isEqualArray=function isEqualArray(firstArr,secondArr){if(firstArr.length!==secondArr.length)return false;return firstArr.find(function(el){return!secondArr.includes(el);})==null;};var fullpageCallbacks=['afterLoad','afterRender','afterResize','afterResponsive','afterSlideLoad','onLeave','onSlideLeave'];var ReactFullpage=/*#__PURE__*/function(_React$Component){_inherits(ReactFullpage,_React$Component);function ReactFullpage(props){var _this;_classCallCheck(this,ReactFullpage);_this=_possibleConstructorReturn(this,_getPrototypeOf(ReactFullpage).call(this,props));var _this$props=_this.props,render=_this$props.render,pluginWrapper=_this$props.pluginWrapper;if(!isFunc(render)){throw new Error('must provide render prop to <ReactFullpage />');}_this.log=Object(_Logger__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"])(_this.props.debug,'ReactFullpage');_this.log('Building component');_this.log('Importing vendor files');_this.importVendors();if(pluginWrapper){_this.log('Calling plugin wrapper');pluginWrapper();}_this.log('Requiring fullpage.js');Fullpage=__webpack_require__(52);_this.state={initialized:false,sectionCount:0,slideCount:0};return _this;}_createClass(ReactFullpage,[{key:"componentDidMount",value:function componentDidMount(){var opts=this.buildOptions();this.log('React Lifecycle: componentDidMount()');if(Fullpage){this.init(opts);this.markInitialized();}}},{key:"componentDidUpdate",value:function componentDidUpdate(prevProps){this.log('React Lifecycle: componentDidUpdate()');var newSectionCount=this.getSectionCount();var newSlideCount=this.getSlideCount();var _this$state=this.state,sectionCount=_this$state.sectionCount,slideCount=_this$state.slideCount;// comparing sectionColors array option
var areSameSectionColors=isEqualArray(prevProps.sectionsColor,this.props.sectionsColor);// NOTE: if fullpage props have changed we need to rebuild
if(!areSameSectionColors){this.log('rebuilding due to a change in fullpage.js props');this.reRender();return;}if(sectionCount===newSectionCount&&slideCount===newSlideCount){return;}// NOTE: if sections/slides have changed we need to rebuild
this.log('rebuilding due to a change in fullpage.js sections/slides');this.reRender();}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.destroy();}},{key:"getSectionCount",value:function getSectionCount(){var _this$props$sectionSe=this.props.sectionSelector,sectionSelector=_this$props$sectionSe===void 0?_selectors__WEBPACK_IMPORTED_MODULE_11__[/* DEFAULT_SECTION */ "a"]:_this$props$sectionSe;var _document$querySelect=document.querySelectorAll(sectionSelector),length=_document$querySelect.length;return length;}},{key:"getSlideCount",value:function getSlideCount(){var _this$props$slideSele=this.props.slideSelector,slideSelector=_this$props$slideSele===void 0?_selectors__WEBPACK_IMPORTED_MODULE_11__[/* DEFAULT_SLIDE */ "b"]:_this$props$slideSele;var _document$querySelect2=document.querySelectorAll(slideSelector),length=_document$querySelect2.length;return length;}},{key:"importVendors",value:function importVendors(){var _this$props2=this.props,scrollOverflow=_this$props2.scrollOverflow,easing=_this$props2.easing;if(scrollOverflow){__webpack_require__(51);}if(easing){__webpack_require__(50);}}},{key:"init",value:function init(opts){this.log('Reinitializing fullpage with options',opts);new Fullpage(_selectors__WEBPACK_IMPORTED_MODULE_11__[/* ID_SELECTOR */ "c"],opts);// eslint-disable-line
this.fullpageApi=window.fullpage_api;this.fpUtils=window.fp_utils;this.fpEasings=window.fp_easings;}},{key:"destroy",value:function destroy(){this.log('Destroying fullpage instance');this.fullpageApi.destroy('all');}},{key:"reRender",value:function reRender(){this.destroy();this.init(this.buildOptions());}},{key:"markInitialized",value:function markInitialized(){this.log('Marking initialized');this.setState({initialized:true,sectionCount:this.getSectionCount(),slideCount:this.getSlideCount()});}},{key:"buildOptions",value:function buildOptions(){var _this2=this;var filterCb=function filterCb(key){return!!Object.keys(_this2.props).find(function(cb){return cb===key;});};var registered=fullpageCallbacks.filter(filterCb);var listeners=registered.reduce(function(result,key){return _objectSpread({},result,_defineProperty({},key,function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}return _this2.update.apply(_this2,[key].concat(args));}));},{});// NOTE: override passed in callbacks w/  wrapped listeners
var options=_objectSpread({},this.props,listeners);this.log('Building fullpage.js options: ',options);return options;}},{key:"update",value:function update(lastEvent){var _this$props3;for(var _len2=arguments.length,args=new Array(_len2>1?_len2-1:0),_key2=1;_key2<_len2;_key2++){args[_key2-1]=arguments[_key2];}this.log('Event trigger: ',lastEvent);var state=_objectSpread({},this.state,{sectionCount:this.getSectionCount(),slideCount:this.getSlideCount()});var makeState=function makeState(callbackParameters){return _objectSpread({},state,callbackParameters,{lastEvent:lastEvent});};var fromArgs=function fromArgs(argList){return argList.reduce(function(result,key,i){var value=args[i];result[key]=value;// eslint-disable-line
return result;},{});};// NOTE: remapping callback args to v3
// https://github.com/alvarotrigo/fullPage.js#callbacks
switch(lastEvent){// After-*
case'afterLoad':state=makeState(fromArgs(['origin','destination','direction']));break;case'afterResize':state=makeState(fromArgs(['']));break;case'afterResponsive':state=makeState(fromArgs(['isResponsive']));break;case'afterSlideLoad':state=makeState(fromArgs(['section','origin','destination','direction']));break;// On-*
case'onLeave':state=makeState(fromArgs(['origin','destination','direction']));break;case'onSlideLeave':state=makeState(fromArgs(['section','origin','slideIndex','destination','direction']));break;default:break;}var returned=(_this$props3=this.props)[lastEvent].apply(_this$props3,args);this.log('Called callback: Returning => ',returned);this.log('Updating State => ',state);this.setState(state);return returned;}},{key:"render",value:function render(){this.log('<== Rendering ==>');return react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement("div",{id:_selectors__WEBPACK_IMPORTED_MODULE_11__[/* MAIN_SELECTOR */ "d"]},this.props.render(this));}}]);return ReactFullpage;}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);ReactFullpage.defaultProps={sectionsColor:[]};/* harmony default export */ __webpack_exports__["default"] = (ReactFullpage);

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var hide = __webpack_require__(3);
var redefine = __webpack_require__(15);
var fails = __webpack_require__(9);
var defined = __webpack_require__(17);
var wks = __webpack_require__(0);

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var fns = exec(defined, SYMBOL, ''[KEY]);
  var strfn = fns[0];
  var rxfn = fns[1];
  if (fails(function () {
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  })) {
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// @@match logic
__webpack_require__(83)('match', 1, function (defined, MATCH, $match) {
  // 21.1.3.11 String.prototype.match(regexp)
  return [function match(regexp) {
    'use strict';
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, $match];
});


/***/ })
/******/ ]);

/***/ }),

/***/ "./pages/home/index.tsx":
/*!******************************!*\
  !*** ./pages/home/index.tsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Home_Slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @components/Home/Slider */ "./components/Home/Slider/index.tsx");
/* harmony import */ var _components_Home_BackgroundColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @components/Home/BackgroundColor */ "./components/Home/BackgroundColor/index.tsx");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _assets_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @assets/styles/style.module.css */ "./assets/styles/style.module.css");
/* harmony import */ var _assets_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Home_Forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @components/Home/Forms */ "./components/Home/Forms/index.tsx");
/* harmony import */ var _components_Home_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components/Home/Footer */ "./components/Home/Footer/index.tsx");
/* harmony import */ var react_awesome_reveal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-awesome-reveal */ "./node_modules/react-awesome-reveal/dist/react-awesome-reveal.esm.js");
/* harmony import */ var _components_ui__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @components/ui */ "./components/ui/index.ts");
/* harmony import */ var _components_Logo_LogoSlider__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @components/Logo/LogoSlider */ "./components/Logo/LogoSlider/index.tsx");
/* harmony import */ var _components_Logo_BackgroundLogo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @components/Logo/BackgroundLogo */ "./components/Logo/BackgroundLogo/index.tsx");
/* harmony import */ var _components_Main_MeetlyPage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @components/Main/MeetlyPage */ "./components/Main/MeetlyPage.tsx");
/* harmony import */ var _components_Main_BeauticketPage__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @components/Main/BeauticketPage */ "./components/Main/BeauticketPage.tsx");
/* harmony import */ var _components_Main_EvetPage__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @components/Main/EvetPage */ "./components/Main/EvetPage.tsx");
/* harmony import */ var _components_Main_FlowPage__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @components/Main/FlowPage */ "./components/Main/FlowPage.tsx");
/* harmony import */ var _components_Main_MinimidmaksPage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @components/Main/MinimidmaksPage */ "./components/Main/MinimidmaksPage.tsx");
/* harmony import */ var _components_Main_StilyPage__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @components/Main/StilyPage */ "./components/Main/StilyPage.tsx");
/* harmony import */ var _components_Main_WinglePage__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @components/Main/WinglePage */ "./components/Main/WinglePage.tsx");
/* harmony import */ var _assets_svg_circle_svg__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @assets/svg/circle.svg */ "./assets/svg/circle.svg");
/* harmony import */ var _assets_svg_circle_svg__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_assets_svg_circle_svg__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @fullpage/react-fullpage */ "./node_modules/@fullpage/react-fullpage/dist/react-fullpage.js");
/* harmony import */ var _fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _components_Main_FullScrollPage__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/Main/FullScrollPage */ "./components/Main/FullScrollPage.js");



var _jsxFileName = "C:\\Users\\Ali\\Desktop\\improver\\pages\\home\\index.tsx",
    _this = undefined,
    _s = $RefreshSig$();





















 // import './index.css';

var data = [{
  src: '/images/evet/1.png',
  backgroundColor: '#FDD96C',
  logo: '/images/logo/evet.png',
  text: 'Evet',
  button: '#FDD96C'
}, {
  src: '/images/Wingle/wingle1.png',
  backgroundColor: '#9ADEEC',
  logo: '/images/logo/wingle.png',
  text: 'Wingle',
  button: '#9ADEEC'
}, {
  src: '/images/Flow/flow1.png',
  backgroundColor: '#B893DD',
  logo: '/images/logo/flow.png',
  text: 'Flow',
  button: '#B893DD'
}, {
  src: '/images/Stily/stily1.png',
  backgroundColor: '#F2D474',
  logo: '/images/logo/stily.png',
  text: 'Stily',
  button: '#F2D474'
}, {
  src: '/images/Meetly/meetly1.png',
  backgroundColor: '#FDD96C',
  logo: '/images/logo/meetly.png',
  text: 'Meetly',
  button: '#FF9A9E'
}, {
  src: '/images/minimidmaks/minimidimaks1.png',
  backgroundColor: '#67D4DD',
  logo: '/images/logo/Minilogo.png',
  text: 'MiniMidiMaks',
  button: '#67D4DD'
}, {
  src: '/images/Beuticket/beuticket1.png',
  backgroundColor: '#FB5F7E',
  logo: '/images/logo/beuticket.png',
  text: 'Beuticket',
  button: '#FB5F7E'
}];
var dataImage = [{
  src: '/images/logo/evet.png',
  text: 'Evet'
}, {
  src: '/images/logo/wingle.png',
  text: 'Wingle'
}, {
  src: '/images/logo/flow.png',
  text: 'Flow'
}, {
  src: '/images/logo/stily.png',
  text: 'Stily'
}, {
  src: '/images/logo/meetly.png',
  text: 'Meetly'
}, {
  src: '/images/logo/Minilogo.png',
  text: 'MiniMidiMaks'
}, {
  src: '/images/logo/beuticket.png',
  text: 'Beuticket'
}];

var Home = function Home() {
  _s();

  var _color$backgroundColo, _color$backgroundColo2;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      color = _useState[0],
      setColor = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      play = _useState2[0],
      setPlay = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      playAnim = _useState3[0],
      setPlayAnim = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])('page1'),
      change = _useState4[0],
      setChange = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      colorLogo = _useState5[0],
      setColorLogo = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      show = _useState6[0],
      setShow = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      open = _useState7[0],
      setOpen = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      screen = _useState8[0],
      setScreen = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(2),
      scroll = _useState9[0],
      setScroll = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      lock = _useState10[0],
      setLock = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      fullScroll = _useState11[0],
      setFullScroll = _useState11[1];

  var elementRef = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var form = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var div = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  var fullPageScroll = Object(react__WEBPACK_IMPORTED_MODULE_1__["useRef"])(null);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (lock) return;
    if (scroll == 3) setLock(true);
    var fullScrollNew = new _components_Main_FullScrollPage__WEBPACK_IMPORTED_MODULE_21__["default"](1, scroll, fullPageScroll.current);
    fullScrollNew.init();
    setFullScroll(fullScrollNew);
  }, [scroll]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setPlay(!play);
    setPlayAnim(!playAnim);
  }, [color]);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    var screen = window.screen.width;
    screenWidth(screen);
  });

  var screenWidth = function screenWidth(screen) {
    setScreen(screen > 450);
  }; // click switch in the pages


  var handleClick = function handleClick(index) {
    fullScroll.scrollDown();
    setScroll(3);
    var a = change;

    if (index == 0) {
      a = 'page0';
    } else if (index == 1) {
      a = 'page1';
    } else if (index == 2) {
      a = 'page2';
    } else if (index == 3) {
      a = 'page3';
    } else if (index == 4) {
      a = 'page4';
    } else if (index == 5) {
      a = 'page5';
    } else if (index == 6) {
      a = 'page6';
    } else {}

    var color = colorLogo;

    if (index == 0) {
      color = '#FDD96C';
    } else if (index == 1) {
      color = '#9ADEEC';
    } else if (index == 2) {
      color = '#B893DD';
    } else if (index == 3) {
      color = '#F2D474';
    } else if (index == 4) {
      color = '#FF9A9E';
    } else if (index == 5) {
      color = '#67D4DD';
    } else if (index == 6) {
      color = '#FB5F7E';
    } else {
      color = '#FF9A9E';
    }

    setChange(a);
    setColorLogo(color);
    setShow(true);
  }; // click switch in the pages


  var switchLogoPage = function switchLogoPage(index) {
    var a = change;

    if (index == 0) {
      a = 'page0';
    } else if (index == 1) {
      a = 'page1';
    } else if (index == 2) {
      a = 'page2';
    } else if (index == 3) {
      a = 'page3';
    } else if (index == 4) {
      a = 'page4';
    } else if (index == 5) {
      a = 'page5';
    } else if (index == 6) {
      a = 'page6';
    } else {}

    var color = colorLogo;

    if (index == 0) {
      color = '#FDD96C';
    } else if (index == 1) {
      color = '#9ADEEC';
    } else if (index == 2) {
      color = '#B893DD';
    } else if (index == 3) {
      color = '#F2D474';
    } else if (index == 4) {
      color = '#FF9A9E';
    } else if (index == 5) {
      color = '#67D4DD';
    } else if (index == 6) {
      color = '#FB5F7E';
    } else {
      color = '#FF9A9E';
    }

    setChange(a);
    setColorLogo(color);
    setShow(true);
  };

  var logoClick = function logoClick(index) {
    fullScroll.scrollUp();
    var a = change;

    if (index == 0) {
      a = 'page0';
    } else if (index == 1) {
      a = 'page1';
    } else if (index == 2) {
      a = 'page2';
    } else if (index == 3) {
      a = 'page3';
    } else if (index == 4) {
      a = 'page4';
    } else if (index == 5) {
      a = 'page5';
    } else if (index == 6) {
      a = 'page6';
    } else {}

    var color = colorLogo;

    if (index == 0) {
      color = '#FDD96C';
    } else if (index == 1) {
      color = '#9ADEEC';
    } else if (index == 2) {
      color = '#B893DD';
    } else if (index == 3) {
      color = '#F2D474';
    } else if (index == 4) {
      color = '#FF9A9E';
    } else if (index == 5) {
      color = '#67D4DD';
    } else if (index == 6) {
      color = '#FB5F7E';
    } else {
      color = '#FF9A9E';
    }

    setChange(a);
    setColorLogo(color);
    setShow(true);
  };

  var local = function local() {
    localStorage.setItem('state', 'true');
  }; // open modal


  var mouseMove = function mouseMove() {
    var a = localStorage.getItem('state');

    if (a == null) {
      setOpen(true);
      local();
    }
  }; // scroll to form


  var contactUs = function contactUs() {
    fullScroll.scrollDown();
    fullScroll.scrollDown();
  };

  if (true) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_20___default.a //fullpage options
    , {
      licenseKey: 'YOUR_KEY_HERE',
      scrollingSpeed: 1000
      /* Options here */
      ,
      render: function render(_ref) {
        var state = _ref.state,
            fullpageApi = _ref.fullpageApi;
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_fullpage_react_fullpage__WEBPACK_IMPORTED_MODULE_20___default.a.Wrapper, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "section",
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Section 1 (welcome to fullpage.js)"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 295,
              columnNumber: 37
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
              onClick: function onClick() {
                return fullpageApi.moveSectionDown();
              },
              children: "Click me to move down"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 296,
              columnNumber: 37
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 294,
            columnNumber: 33
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "section",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
              children: "Section 2"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 301,
              columnNumber: 37
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 300,
            columnNumber: 33
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 293,
          columnNumber: 29
        }, _this);
      }
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 287,
      columnNumber: 17
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 286,
    columnNumber: 13
  }, _this);
  if (false) {}
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "",
      onMouseLeave: function onMouseLeave() {
        return mouseMove();
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _assets_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.body,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_assets_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.main, 'relative w-full max-w-8xl mx-auto  flex flex-col min-h-screen'),
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_assets_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.div),
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: 'lg:-mt-1 -mt-20',
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "overflow-x-hidden absolute w-full -mt-2",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Home_BackgroundColor__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    animation: play,
                    backgroundColor: (_color$backgroundColo2 = color === null || color === void 0 ? void 0 : color.backgroundColor) !== null && _color$backgroundColo2 !== void 0 ? _color$backgroundColo2 : '#FF9A9E'
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 681,
                    columnNumber: 41
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 680,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "flex lg:top-6 md:top-7 top-16 lg:mt-2 md:-mt-2 -mt-7 w-full absolute justify-center items-center",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "lg:mr-10 md:mr-10 mr-2 right-0 absolute",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      className: "3xl:w-10 lg:w-10 md:w-10 w-10",
                      src: "/images/menu.png",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 688,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 687,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "relative text-left lg:mr-0 md:mr-0 mr-10",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "absolute -ml-5 3xl:w-14 lg:w-10 md:w-10 w-9",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        className: "rounded-lg",
                        src: color === null || color === void 0 ? void 0 : color.logo,
                        alt: ""
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 696,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 695,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "ml-6 3xl:ml-12 3xl:mt-3 mt-2 absolute",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                        className: "font-bold",
                        children: color === null || color === void 0 ? void 0 : color.text
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 703,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 702,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 694,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "lg:ml-10 md:ml-10 ml-3 w-20 md:w-28 lg:w-28 absolute left-0",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                      className: "3xl:w-28 lg:w-24 md:w-20 w-16",
                      src: "/images/logo/logoWhait.png",
                      alt: ""
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 707,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 706,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 686,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "lg:top-0 md:top-0 lg:mt-1 md:mt-7 mt-14",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Home_Slider__WEBPACK_IMPORTED_MODULE_2__["default"], {
                    data: data,
                    renderItem: function renderItem(_ref5, index, active) {
                      var src = _ref5.src;
                      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        onClick: function onClick() {
                          return handleClick(index);
                        },
                        className: "flex items-center justify-center cursor-pointer",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_assets_svg_circle_svg__WEBPACK_IMPORTED_MODULE_19___default.a, {
                          fill: color === null || color === void 0 ? void 0 : color.backgroundColor,
                          className: "absolute z-10 ".concat(active ? 'block' : 'hidden', " animate-pingTouch lg:w-16 lg:h-16 md:w-10 md:h-10 w-7 h-7")
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 723,
                          columnNumber: 53
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          src: src,
                          alt: "slider",
                          className: "3xl:w-48 lg:w-40 sm:w-40 xs:w-36 w-48 mt-10 md:w-40 transition-all duration-300 ".concat(active && 'transform scale-125')
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 729,
                          columnNumber: 53
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 719,
                        columnNumber: 49
                      }, _this);
                    },
                    getColor: function getColor(color) {
                      return setColor(color);
                    },
                    buttonColor: color === null || color === void 0 ? void 0 : color.button
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 716,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("flex justify-center -mt-20"),
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                      onClick: contactUs,
                      className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_assets_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.scale, _assets_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.shadowBtn, "transition-all duration-300 bg-white 3xl:w-36 3xl:text-lg w-28 p-2 rounded-full shadow-custom outline-none 3xl:-mt-3"),
                      style: {
                        color: (color === null || color === void 0 ? void 0 : color.button) || '#B893DD'
                      },
                      children: "Contact Us"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 742,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 741,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 715,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 679,
                columnNumber: 33
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 678,
              columnNumber: 29
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              ref: elementRef,
              children: show && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_assets_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.div),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_awesome_reveal__WEBPACK_IMPORTED_MODULE_8__["Zoom"], {
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("transform transition-all duration-1000 lg:mt-40 md:mt-20 sm:mt-72 mt-100"),
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "overflow-x-hidden absolute w-full",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Logo_BackgroundLogo__WEBPACK_IMPORTED_MODULE_11__["default"], {
                        backgroundLogo: colorLogo || '#9ADEEC',
                        animation: playAnim
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 768,
                        columnNumber: 53
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 767,
                      columnNumber: 49
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "-mt-6",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "h-16 mt-10 lg:mt-24 md:mt-24",
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "lg:mr-10 md:mr-10 mr-4 mt-4 right-0 absolute ",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            className: "lg:w-10 md:w-10 w-7",
                            src: "/images/menu.png",
                            alt: ""
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 776,
                            columnNumber: 61
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 775,
                          columnNumber: 57
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "lg:ml-10 md:ml-10 lg:w-24 w-14 ml-4 mt-4 md:w-20 absolute left-0 ",
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            className: "",
                            src: "/images/logo/logoWhait.png",
                            alt: ""
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 783,
                            columnNumber: 61
                          }, _this)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 782,
                          columnNumber: 57
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 774,
                        columnNumber: 53
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "lg:mr-48 lg:ml-48 xl:-mt-5 3xl:mt-1 -mt-5",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Logo_LogoSlider__WEBPACK_IMPORTED_MODULE_10__["default"], {
                          data: dataImage,
                          renderItem: function renderItem(_ref6, index) {
                            var src = _ref6.src;
                            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              onClick: function onClick() {
                                return handleClick(index);
                              },
                              className: "cursor-pointer",
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                                src: src,
                                alt: "slider",
                                className: "3xl:w-17 2xl:w-14 lg:w-14 w-10 md:w-14 mt-5 transition-all duration-300 rounded-full shadow-2xl"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 800,
                                columnNumber: 69
                              }, _this)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 794,
                              columnNumber: 65
                            }, _this);
                          }
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 791,
                          columnNumber: 57
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 790,
                        columnNumber: 53
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("right-2 absolute -mt-20 mr-7 lg:block hidden xl:-mt-16"),
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                          onClick: contactUs,
                          className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_assets_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.scale, "transition-all duration-300 bg-white w-28 p-2 rounded-full shadow-inner outline-none"),
                          style: {
                            color: colorLogo || '#9ADEEC'
                          },
                          children: "Contact Us"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 814,
                          columnNumber: 57
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 809,
                        columnNumber: 53
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 773,
                      columnNumber: 49
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "-mt-4",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: " absolute z-10 mt-20 left-2 lg:hidden",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
                          onClick: contactUs,
                          className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_assets_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.scale, "animate-button ransition-all duration-300 delay-500 transform hover:scale-120 bg-white w-20 text-xs p-2 rounded-full shadow-2xl"),
                          style: {
                            color: colorLogo || '#9ADEEC'
                          },
                          children: "Contact Us"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 830,
                          columnNumber: 57
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 829,
                        columnNumber: 53
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('3xl:mt-2 2xl:mt-16  lg:mt-3 mt-2 h-screen lg:overflow-hidden md:overflow-hidden sm:overflow-hidden xs:overflow-hidden overflow-auto', change == 'page0' ? 'block' : 'hidden'),
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Main_EvetPage__WEBPACK_IMPORTED_MODULE_14__["default"], {
                          backgroundLogo: colorLogo || '#FDD96C'
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 849,
                          columnNumber: 57
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('h-40')
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 852,
                          columnNumber: 57
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 843,
                        columnNumber: 53
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('3xl:mt-2 2xl:mt-16  lg:mt-3  mt-2 h-screen lg:overflow-hidden md:overflow-hidden sm:overflow-hidden xs:overflow-hidden overflow-auto', change == 'page1' ? 'block' : 'hidden'),
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Main_WinglePage__WEBPACK_IMPORTED_MODULE_18__["default"], {
                          backgroundLogo: colorLogo || '#9ADEEC'
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 860,
                          columnNumber: 57
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('h-40')
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 863,
                          columnNumber: 57
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 854,
                        columnNumber: 53
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('3xl:mt-2 2xl:mt-16  lg:mt-3  mt-2 h-screen lg:overflow-hidden md:overflow-hidden sm:overflow-hidden xs:overflow-hidden overflow-auto', change == 'page2' ? 'block' : 'hidden'),
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Main_FlowPage__WEBPACK_IMPORTED_MODULE_15__["default"], {
                          backgroundLogo: colorLogo || '#FF9A9E'
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 871,
                          columnNumber: 57
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('h-40')
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 874,
                          columnNumber: 57
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 865,
                        columnNumber: 53
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('3xl:mt-2 2xl:mt-16  lg:mt-3  mt-2 h-screen lg:overflow-hidden md:overflow-hidden sm:overflow-hidden xs:overflow-hidden overflow-auto', change == 'page3' ? 'block' : 'hidden'),
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Main_StilyPage__WEBPACK_IMPORTED_MODULE_17__["default"], {
                          backgroundLogo: colorLogo || '#FF9A9E'
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 882,
                          columnNumber: 57
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('h-40')
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 885,
                          columnNumber: 57
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 876,
                        columnNumber: 53
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('3xl:mt-0 2xl:mt-16 lg:mt-0  mt-2 h-screen lg:overflow-hidden md:overflow-hidden sm:overflow-hidden xs:overflow-hidden overflow-auto', change == 'page4' ? 'block' : 'hidden'),
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Main_MeetlyPage__WEBPACK_IMPORTED_MODULE_12__["default"], {
                          backgroundLogo: colorLogo || '#FF9A9E'
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 893,
                          columnNumber: 57
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('h-40')
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 896,
                          columnNumber: 57
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 887,
                        columnNumber: 53
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('3xl:mt-2 2xl:mt-16  lg:mt-3  mt-2 h-screen lg:overflow-hidden md:overflow-hidden sm:overflow-hidden xs:overflow-hidden overflow-auto', change == 'page5' ? 'block' : 'hidden'),
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Main_MinimidmaksPage__WEBPACK_IMPORTED_MODULE_16__["default"], {
                          backgroundLogo: colorLogo || '#FF9A9E'
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 904,
                          columnNumber: 57
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('h-40')
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 907,
                          columnNumber: 57
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 898,
                        columnNumber: 53
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('3xl:mt-2 2xl:mt-16  lg:mt-0  mt-2 h-screen lg:overflow-hidden md:overflow-hidden sm:overflow-hidden xs:overflow-hidden overflow-auto', change == 'page6' ? 'block' : 'hidden'),
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Main_BeauticketPage__WEBPACK_IMPORTED_MODULE_13__["default"], {
                          backgroundLogo: colorLogo || '#FF9A9E'
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 915,
                          columnNumber: 57
                        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('h-40')
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 918,
                          columnNumber: 57
                        }, _this)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 909,
                        columnNumber: 53
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 828,
                      columnNumber: 49
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 762,
                    columnNumber: 45
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 761,
                  columnNumber: 41
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 760,
                columnNumber: 37
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 758,
              columnNumber: 29
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 677,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_ui__WEBPACK_IMPORTED_MODULE_9__["Modal"], {
              className: "w-full",
              onClose: function onClose() {
                return setOpen(false);
              },
              visible: open,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "z-10 absolute lg:-mt-5 lg:right-9 md:-right-16 md:-mt-10 -right-24 flex mt-2 mr-32 cursor-pointer p-1",
                onClick: function onClick() {
                  return setOpen(false);
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                  className: "w-5",
                  src: "/images/cancel.png",
                  alt: ""
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 933,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 929,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()('lg:mt-10 md:mt-10 flex justify-center items-center'),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Home_Forms__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  backgroundForm: colorLogo || '#9ADEEC'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 940,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 935,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 928,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 927,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "mt-28",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_assets_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.div, "lg:mt-36 md:mt-60 sm:mt-96 mt-96"),
              ref: form,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("transform transition-all duration-1000 "),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "overflow-x-hidden overflow-y-hidden 3xl:h-52 lg:h-44 md:h-40 sm:h-40 h-36  absolute w-full",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Logo_BackgroundLogo__WEBPACK_IMPORTED_MODULE_11__["default"], {
                      backgroundLogo: colorLogo || '#9ADEEC',
                      animation: playAnim
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 954,
                      columnNumber: 45
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 953,
                    columnNumber: 41
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "lg:-mt-6 md:-mt-6",
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "h-16 mt-10 lg:mt-24 md:mt-24",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "lg:mr-10 md:mr-10 mr-4 mt-4 w-8 right-0 absolute ",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          className: "lg:w-10 md:w-10 xs:w-10 xm:w-7",
                          src: "/images/menu.png",
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 962,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 961,
                        columnNumber: 49
                      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "lg:ml-10 md:ml-10 3xl:w-28 lg:w-24 xs:w-20 xm:w-16 ml-4 mt-4 md:w-20 absolute left-0 ",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                          className: "",
                          src: "/images/logo/logoWhait.png",
                          alt: ""
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 969,
                          columnNumber: 53
                        }, _this)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 968,
                        columnNumber: 49
                      }, _this)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 960,
                      columnNumber: 45
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "lg:mr-48 lg:ml-48 xl:-mt-5 -mt-2",
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Logo_LogoSlider__WEBPACK_IMPORTED_MODULE_10__["default"], {
                        data: dataImage,
                        renderItem: function renderItem(_ref7, index) {
                          var src = _ref7.src;
                          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            onClick: function onClick() {
                              return handleClick(index);
                            },
                            className: "cursor-pointer",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                              src: src,
                              alt: "slider",
                              className: "3xl:w-16 w-10 md:w-14 mt-5 transition-all duration-300 rounded-full shadow-2xl"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 986,
                              columnNumber: 61
                            }, _this)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 980,
                            columnNumber: 57
                          }, _this);
                        }
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 977,
                        columnNumber: 49
                      }, _this)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 976,
                      columnNumber: 45
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 959,
                    columnNumber: 41
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 952,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 951,
                columnNumber: 33
              }, _this), screen == false && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_assets_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.div, "xs:-mt-1 mt-7 flex justify-center items-center"),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Home_Forms__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  backgroundForm: colorLogo || '#9ADEEC'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1005,
                  columnNumber: 41
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 999,
                columnNumber: 37
              }, _this), screen == true && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: classnames__WEBPACK_IMPORTED_MODULE_4___default()("3xl:mt-16 xl:mt-10 md:mt-10 flex justify-center items-center"),
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Home_Forms__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  backgroundForm: colorLogo || '#9ADEEC'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1015,
                  columnNumber: 41
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1010,
                columnNumber: 37
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 947,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 945,
            columnNumber: 25
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: classnames__WEBPACK_IMPORTED_MODULE_4___default()(_assets_styles_style_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.div, "lg:mt-16 md:mt-20 sm:mt-20 mt-48 w-full"),
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Home_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
              backgroundFooter: colorLogo || '#9ADEEC'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1021,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1020,
            columnNumber: 25
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 671,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 670,
        columnNumber: 17
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 669,
      columnNumber: 13
    }, _this)
  }, void 0, false);
};

_s(Home, "G+ZMqc2OKFSAQ2S+a96QqNbZQFk=");

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BmdWxscGFnZS9yZWFjdC1mdWxscGFnZS9kaXN0L3JlYWN0LWZ1bGxwYWdlLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9ob21lL2luZGV4LnRzeCJdLCJuYW1lcyI6WyJkYXRhIiwic3JjIiwiYmFja2dyb3VuZENvbG9yIiwibG9nbyIsInRleHQiLCJidXR0b24iLCJkYXRhSW1hZ2UiLCJIb21lIiwidXNlU3RhdGUiLCJjb2xvciIsInNldENvbG9yIiwicGxheSIsInNldFBsYXkiLCJwbGF5QW5pbSIsInNldFBsYXlBbmltIiwiY2hhbmdlIiwic2V0Q2hhbmdlIiwiY29sb3JMb2dvIiwic2V0Q29sb3JMb2dvIiwic2hvdyIsInNldFNob3ciLCJvcGVuIiwic2V0T3BlbiIsInNjcmVlbiIsInNldFNjcmVlbiIsInNjcm9sbCIsInNldFNjcm9sbCIsImxvY2siLCJzZXRMb2NrIiwiZnVsbFNjcm9sbCIsInNldEZ1bGxTY3JvbGwiLCJlbGVtZW50UmVmIiwidXNlUmVmIiwiZm9ybSIsImRpdiIsImZ1bGxQYWdlU2Nyb2xsIiwidXNlRWZmZWN0IiwiZnVsbFNjcm9sbE5ldyIsIkZ1bGxQYWdlIiwiY3VycmVudCIsImluaXQiLCJ3aW5kb3ciLCJ3aWR0aCIsInNjcmVlbldpZHRoIiwiaGFuZGxlQ2xpY2siLCJpbmRleCIsInNjcm9sbERvd24iLCJhIiwic3dpdGNoTG9nb1BhZ2UiLCJsb2dvQ2xpY2siLCJzY3JvbGxVcCIsImxvY2FsIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIm1vdXNlTW92ZSIsImdldEl0ZW0iLCJjb250YWN0VXMiLCJzdGF0ZSIsImZ1bGxwYWdlQXBpIiwibW92ZVNlY3Rpb25Eb3duIiwic3R5bGUiLCJib2R5IiwiY24iLCJtYWluIiwiYWN0aXZlIiwic2NhbGUiLCJzaGFkb3dCdG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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Q0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0EsT0FBTztBQUNQO0FBQ0E7O0FBRUE7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MUIsR0FERyxtREFEakI7QUFBQSx1Q0FNSSxxRUFBQyw4REFBRDtBQUFNLGdDQUFjLEVBQUVqQixTQUFTLElBQUk7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5KO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBcERSLEVBOERLTSxNQUFNLElBQUksSUFBVixpQkFDRztBQUNJLHlCQUFTLEVBQUV1QyxpREFBRSxnRUFEakI7QUFBQSx1Q0FLSSxxRUFBQyw4REFBRDtBQUFNLGdDQUFjLEVBQUU3QyxTQUFTLElBQUk7QUFBbkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBL0RSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBbFJKLGVBNlZJO0FBQUsscUJBQVMsRUFBRTZDLGlEQUFFLENBQUNGLHNFQUFLLENBQUMxQixHQUFQLDRDQUFsQjtBQUFBLG1DQUNJLHFFQUFDLCtEQUFEO0FBQVEsOEJBQWdCLEVBQUVqQixTQUFTLElBQUk7QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBN1ZKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREosbUJBREo7QUF5V0gsQ0F6NkJEOztHQUFNVixJOztLQUFBQSxJO0FBMjZCU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjNlMDIzOGY2Zjk2MzIwNDNkM2UuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIVxuICogQGZ1bGxwYWdlL3JlYWN0LWZ1bGxwYWdlIDAuMS4xOVxuICogaHR0cHM6Ly9naXRodWIuY29tL2FsdmFyb3RyaWdvL3JlYWN0LWZ1bGxwYWdlXG4gKiBAbGljZW5zZSBodHRwczovL2dpdGh1Yi5jb20vYWx2YXJvdHJpZ28vcmVhY3QtZnVsbHBhZ2UjbGljZW5zZVxuICpcbiAqIENvcHlyaWdodCAoQykgMjAxOCBhbHZhcm90cmlnby5jb20gLSBBIHByb2plY3QgYnkgQWx2YXJvIFRyaWdvICYgTWljaGFlbCBXYWxrZXJcbiAqL1xubW9kdWxlLmV4cG9ydHMgPVxuLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHRpOiBtb2R1bGVJZCxcbi8qKioqKiovIFx0XHRcdGw6IGZhbHNlLFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuLyoqKioqKi8gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovXG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbi8qKioqKiovIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuLyoqKioqKi8gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4vKioqKioqLyBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuLyoqKioqKi8gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbi8qKioqKiovIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4vKioqKioqLyBcdFx0cmV0dXJuIG5zO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4vKioqKioqLyBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuLyoqKioqKi8gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4vKioqKioqLyBcdFx0cmV0dXJuIGdldHRlcjtcbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0OCk7XG4vKioqKioqLyB9KVxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIChbXG4vKiAwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBzdG9yZSA9IF9fd2VicGFja19yZXF1aXJlX18oMjkpKCd3a3MnKTtcbnZhciB1aWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KTtcbnZhciBTeW1ib2wgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuXG5cbi8qKiovIH0pLFxuLyogMSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4vLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpO1xuXG4vKioqLyB9KSxcbi8qIDMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGRQID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG52YXIgY3JlYXRlRGVzYyA9IF9fd2VicGFja19yZXF1aXJlX18oMTgpO1xubW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG52YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiZFwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIE1BSU5fU0VMRUNUT1I7IH0pO1xuLyogaGFybW9ueSBleHBvcnQgKGJpbmRpbmcpICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCBcImNcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBJRF9TRUxFQ1RPUjsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiYVwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIERFRkFVTFRfU0VDVElPTjsgfSk7XG4vKiBoYXJtb255IGV4cG9ydCAoYmluZGluZykgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIFwiYlwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIERFRkFVTFRfU0xJREU7IH0pO1xudmFyIE1BSU5fU0VMRUNUT1I9J2Z1bGxwYWdlJzt2YXIgSURfU0VMRUNUT1I9XCIjXCIuY29uY2F0KE1BSU5fU0VMRUNUT1IpO3ZhciBERUZBVUxUX1NFQ1RJT049Jy5zZWN0aW9uJzt2YXIgREVGQVVMVF9TTElERT0nLlNMSURFJztcblxuLyoqKi8gfSksXG4vKiA3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM5KTtcbnZhciBkZWZpbmVkID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgZ2xvYmFsID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbnZhciBjb3JlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMyk7XG52YXIgaGlkZSA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG52YXIgcmVkZWZpbmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KTtcbnZhciBjdHggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQxKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSk7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmICh0YXJnZXQpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmIChleHBvcnRzW2tleV0gIT0gb3V0KSBoaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZiAoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpIGV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLyoqKi8gfSksXG4vKiA5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vKioqLyB9KSxcbi8qIDEwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIV9fd2VicGFja19yZXF1aXJlX18oOSkoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cbi8qKiovIH0pLFxuLyogMTEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGFuT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOSk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQ3KTtcbnZhciB0b1ByaW1pdGl2ZSA9IF9fd2VicGFja19yZXF1aXJlX18oMzApO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8qKiovIH0pLFxuLyogMTIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQwKTtcbnZhciBlbnVtQnVnS2V5cyA9IF9fd2VicGFja19yZXF1aXJlX18oMjUpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDEzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbnZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjUuNycgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLyoqKi8gfSksXG4vKiAxNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG52YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDE1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBnbG9iYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xudmFyIGhpZGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xudmFyIGhhcyA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG52YXIgU1JDID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCkoJ3NyYycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgJHRvU3RyaW5nID0gRnVuY3Rpb25bVE9fU1RSSU5HXTtcbnZhciBUUEwgPSAoJycgKyAkdG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cbl9fd2VicGFja19yZXF1aXJlX18oMTMpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbCwgc2FmZSkge1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYgKE9ba2V5XSA9PT0gdmFsKSByZXR1cm47XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIGlmICghc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH0gZWxzZSBpZiAoT1trZXldKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG5cblxuLyoqKi8gfSksXG4vKiAxNiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuXG5cbi8qKiovIH0pLFxuLyogMTcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDE4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG5cblxuLyoqKi8gfSksXG4vKiAxOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDIwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3dlYnBhY2tfZXhwb3J0c19fLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuLyogaGFybW9ueSBkZWZhdWx0IGV4cG9ydCAqLyBfX3dlYnBhY2tfZXhwb3J0c19fW1wiYVwiXSA9IChmdW5jdGlvbihkZWJ1Zyxjb21wTmFtZSl7cmV0dXJuIGRlYnVnP2Z1bmN0aW9uKCl7dmFyIF9jb25zb2xlO2Zvcih2YXIgX2xlbj1hcmd1bWVudHMubGVuZ3RoLGFyZ3M9bmV3IEFycmF5KF9sZW4pLF9rZXk9MDtfa2V5PF9sZW47X2tleSsrKXthcmdzW19rZXldPWFyZ3VtZW50c1tfa2V5XTt9cmV0dXJuKF9jb25zb2xlPWNvbnNvbGUpLmxvZy5hcHBseShfY29uc29sZSxbXCI8XCIuY29uY2F0KGNvbXBOYW1lLFwiLz4gRGVidWcgTG9nOiBcIildLmNvbmNhdChhcmdzKSk7fTpmdW5jdGlvbigpe307fSk7XG5cbi8qKiovIH0pLFxuLyogMjEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE3KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDIyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuLyoqKi8gfSksXG4vKiAyMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyAyMi4xLjMuMzEgQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG52YXIgVU5TQ09QQUJMRVMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApKCd1bnNjb3BhYmxlcycpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5pZiAoQXJyYXlQcm90b1tVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgQXJyYXlQcm90b1tVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogMjQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZXhwb3J0cy5mID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG5cblxuLyoqKi8gfSksXG4vKiAyNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4vLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcblxuXG4vKioqLyB9KSxcbi8qIDI2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBzaGFyZWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI5KSgna2V5cycpO1xudmFyIHVpZCA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogMjcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxudmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogMjggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGRlZiA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpLmY7XG52YXIgaGFzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcbnZhciBUQUcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogMjkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGNvcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcbnZhciBnbG9iYWwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IHt9KTtcbn0pKCd2ZXJzaW9ucycsIFtdKS5wdXNoKHtcbiAgdmVyc2lvbjogY29yZS52ZXJzaW9uLFxuICBtb2RlOiBfX3dlYnBhY2tfcmVxdWlyZV9fKDE2KSA/ICdwdXJlJyA6ICdnbG9iYWwnLFxuICBjb3B5cmlnaHQ6ICfCqSAyMDE4IERlbmlzIFB1c2hrYXJldiAoemxvaXJvY2sucnUpJ1xufSk7XG5cblxuLyoqKi8gfSksXG4vKiAzMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDMxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMjMpO1xudmFyIHN0ZXAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcyKTtcbnZhciBJdGVyYXRvcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIyKTtcbnZhciB0b0lPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oNzEpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuLyoqKi8gfSksXG4vKiAzMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG52YXIgJGtleXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQwKTtcbnZhciBoaWRkZW5LZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNSkuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJyk7XG5cbmV4cG9ydHMuZiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHx8IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoTykge1xuICByZXR1cm4gJGtleXMoTywgaGlkZGVuS2V5cyk7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogMzMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5KTtcbnZhciBkUHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc3KTtcbnZhciBlbnVtQnVnS2V5cyA9IF9fd2VicGFja19yZXF1aXJlX18oMjUpO1xudmFyIElFX1BST1RPID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNikoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0NikoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIF9fd2VicGFja19yZXF1aXJlX18oNzYpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDM0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gX193ZWJwYWNrX3JlcXVpcmVfXygyNyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24gaXNBcnJheShhcmcpIHtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogMzUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuZXhwb3J0cy5mID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcblxuXG4vKioqLyB9KSxcbi8qIDM2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogMzcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNik7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG4vKioqLyB9KSxcbi8qIDM4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcbnZhciB0b0xlbmd0aCA9IF9fd2VicGFja19yZXF1aXJlX18oMzcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IF9fd2VicGFja19yZXF1aXJlX18oNzgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuLyoqKi8gfSksXG4vKiAzOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IF9fd2VicGFja19yZXF1aXJlX18oMjcpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGhhcyA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG52YXIgdG9JT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcbnZhciBhcnJheUluZGV4T2YgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM4KShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI2KSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLyoqKi8gfSksXG4vKiA0MSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgxKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDQyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgZ2xvYmFsID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbnZhciBoYXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xudmFyIERFU0NSSVBUT1JTID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG52YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG52YXIgcmVkZWZpbmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KTtcbnZhciBNRVRBID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4MCkuS0VZO1xudmFyICRmYWlscyA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG52YXIgc2hhcmVkID0gX193ZWJwYWNrX3JlcXVpcmVfXygyOSk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI4KTtcbnZhciB1aWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KTtcbnZhciB3a3MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xudmFyIHdrc0V4dCA9IF9fd2VicGFja19yZXF1aXJlX18oNDMpO1xudmFyIHdrc0RlZmluZSA9IF9fd2VicGFja19yZXF1aXJlX18oNDQpO1xudmFyIGVudW1LZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3OSk7XG52YXIgaXNBcnJheSA9IF9fd2VicGFja19yZXF1aXJlX18oMzQpO1xudmFyIGFuT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOSk7XG52YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xudmFyIHRvSU9iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG52YXIgdG9QcmltaXRpdmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMwKTtcbnZhciBjcmVhdGVEZXNjID0gX193ZWJwYWNrX3JlcXVpcmVfXygxOCk7XG52YXIgX2NyZWF0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oMzMpO1xudmFyIGdPUE5FeHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDc1KTtcbnZhciAkR09QRCA9IF9fd2VicGFja19yZXF1aXJlX18oNzQpO1xudmFyICREUCA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xudmFyICRrZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG52YXIgZ09QRCA9ICRHT1BELmY7XG52YXIgZFAgPSAkRFAuZjtcbnZhciBnT1BOID0gZ09QTkV4dC5mO1xudmFyICRTeW1ib2wgPSBnbG9iYWwuU3ltYm9sO1xudmFyICRKU09OID0gZ2xvYmFsLkpTT047XG52YXIgX3N0cmluZ2lmeSA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcbnZhciBISURERU4gPSB3a3MoJ19oaWRkZW4nKTtcbnZhciBUT19QUklNSVRJVkUgPSB3a3MoJ3RvUHJpbWl0aXZlJyk7XG52YXIgaXNFbnVtID0ge30ucHJvcGVydHlJc0VudW1lcmFibGU7XG52YXIgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpO1xudmFyIEFsbFN5bWJvbHMgPSBzaGFyZWQoJ3N5bWJvbHMnKTtcbnZhciBPUFN5bWJvbHMgPSBzaGFyZWQoJ29wLXN5bWJvbHMnKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdFtQUk9UT1RZUEVdO1xudmFyIFVTRV9OQVRJVkUgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xudmFyIFFPYmplY3QgPSBnbG9iYWwuUU9iamVjdDtcbi8vIERvbid0IHVzZSBzZXR0ZXJzIGluIFF0IFNjcmlwdCwgaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzE3M1xudmFyIHNldHRlciA9ICFRT2JqZWN0IHx8ICFRT2JqZWN0W1BST1RPVFlQRV0gfHwgIVFPYmplY3RbUFJPVE9UWVBFXS5maW5kQ2hpbGQ7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gX2NyZWF0ZShkUCh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBkUCh0aGlzLCAnYScsIHsgdmFsdWU6IDcgfSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbiAoaXQsIGtleSwgRCkge1xuICB2YXIgcHJvdG9EZXNjID0gZ09QRChPYmplY3RQcm90bywga2V5KTtcbiAgaWYgKHByb3RvRGVzYykgZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIGRQKGl0LCBrZXksIEQpO1xuICBpZiAocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bykgZFAoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBkUDtcblxudmFyIHdyYXAgPSBmdW5jdGlvbiAodGFnKSB7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2xbUFJPVE9UWVBFXSk7XG4gIHN5bS5fayA9IHRhZztcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IFVTRV9OQVRJVkUgJiYgdHlwZW9mICRTeW1ib2wuaXRlcmF0b3IgPT0gJ3N5bWJvbCcgPyBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn0gOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKSB7XG4gIGlmIChpdCA9PT0gT2JqZWN0UHJvdG8pICRkZWZpbmVQcm9wZXJ0eShPUFN5bWJvbHMsIGtleSwgRCk7XG4gIGFuT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgYW5PYmplY3QoRCk7XG4gIGlmIChoYXMoQWxsU3ltYm9scywga2V5KSkge1xuICAgIGlmICghRC5lbnVtZXJhYmxlKSB7XG4gICAgICBpZiAoIWhhcyhpdCwgSElEREVOKSkgZFAoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pIGl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwgeyBlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKSB9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBkUChpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKSB7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgbCA9IGtleXMubGVuZ3RoO1xuICB2YXIga2V5O1xuICB3aGlsZSAobCA+IGkpICRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApIHtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpIHtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkgPSB0b1ByaW1pdGl2ZShrZXksIHRydWUpKTtcbiAgaWYgKHRoaXMgPT09IE9iamVjdFByb3RvICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICFoYXMoT1BTeW1ib2xzLCBrZXkpKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV0gPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KSB7XG4gIGl0ID0gdG9JT2JqZWN0KGl0KTtcbiAga2V5ID0gdG9QcmltaXRpdmUoa2V5LCB0cnVlKTtcbiAgaWYgKGl0ID09PSBPYmplY3RQcm90byAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhaGFzKE9QU3ltYm9scywga2V5KSkgcmV0dXJuO1xuICB2YXIgRCA9IGdPUEQoaXQsIGtleSk7XG4gIGlmIChEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpIEQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpIHtcbiAgdmFyIG5hbWVzID0gZ09QTih0b0lPYmplY3QoaXQpKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaSA9IDA7XG4gIHZhciBrZXk7XG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSB7XG4gICAgaWYgKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTiAmJiBrZXkgIT0gTUVUQSkgcmVzdWx0LnB1c2goa2V5KTtcbiAgfSByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KSB7XG4gIHZhciBJU19PUCA9IGl0ID09PSBPYmplY3RQcm90bztcbiAgdmFyIG5hbWVzID0gZ09QTihJU19PUCA/IE9QU3ltYm9scyA6IHRvSU9iamVjdChpdCkpO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBpID0gMDtcbiAgdmFyIGtleTtcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIHtcbiAgICBpZiAoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIChJU19PUCA/IGhhcyhPYmplY3RQcm90bywga2V5KSA6IHRydWUpKSByZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICB9IHJldHVybiByZXN1bHQ7XG59O1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmICghVVNFX05BVElWRSkge1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCkge1xuICAgIGlmICh0aGlzIGluc3RhbmNlb2YgJFN5bWJvbCkgdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3IhJyk7XG4gICAgdmFyIHRhZyA9IHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7XG4gICAgdmFyICRzZXQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgIGlmICh0aGlzID09PSBPYmplY3RQcm90bykgJHNldC5jYWxsKE9QU3ltYm9scywgdmFsdWUpO1xuICAgICAgaWYgKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpIHRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH07XG4gICAgaWYgKERFU0NSSVBUT1JTICYmIHNldHRlcikgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgc2V0OiAkc2V0IH0pO1xuICAgIHJldHVybiB3cmFwKHRhZyk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2xbUFJPVE9UWVBFXSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gICRHT1BELmYgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkRFAuZiA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgX193ZWJwYWNrX3JlcXVpcmVfXygzMikuZiA9IGdPUE5FeHQuZiA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICBfX3dlYnBhY2tfcmVxdWlyZV9fKDI0KS5mID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICBfX3dlYnBhY2tfcmVxdWlyZV9fKDM1KS5mID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZiAoREVTQ1JJUFRPUlMgJiYgIV9fd2VicGFja19yZXF1aXJlX18oMTYpKSB7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cblxuICB3a3NFeHQuZiA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgcmV0dXJuIHdyYXAod2tzKG5hbWUpKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBTeW1ib2w6ICRTeW1ib2wgfSk7XG5cbmZvciAodmFyIGVzNlN5bWJvbHMgPSAoXG4gIC8vIDE5LjQuMi4yLCAxOS40LjIuMywgMTkuNC4yLjQsIDE5LjQuMi42LCAxOS40LjIuOCwgMTkuNC4yLjksIDE5LjQuMi4xMCwgMTkuNC4yLjExLCAxOS40LjIuMTIsIDE5LjQuMi4xMywgMTkuNC4yLjE0XG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgaiA9IDA7IGVzNlN5bWJvbHMubGVuZ3RoID4gajspd2tzKGVzNlN5bWJvbHNbaisrXSk7XG5cbmZvciAodmFyIHdlbGxLbm93blN5bWJvbHMgPSAka2V5cyh3a3Muc3RvcmUpLCBrID0gMDsgd2VsbEtub3duU3ltYm9scy5sZW5ndGggPiBrOykgd2tzRGVmaW5lKHdlbGxLbm93blN5bWJvbHNbaysrXSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsICdTeW1ib2wnLCB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24gKGtleSkge1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioc3ltKSB7XG4gICAgaWYgKCFpc1N5bWJvbChzeW0pKSB0aHJvdyBUeXBlRXJyb3Ioc3ltICsgJyBpcyBub3QgYSBzeW1ib2whJyk7XG4gICAgZm9yICh2YXIga2V5IGluIFN5bWJvbFJlZ2lzdHJ5KSBpZiAoU3ltYm9sUmVnaXN0cnlba2V5XSA9PT0gc3ltKSByZXR1cm4ga2V5O1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uICgpIHsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbiAoKSB7IHNldHRlciA9IGZhbHNlOyB9XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgJGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoeyBhOiBTIH0pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KSksICdKU09OJywge1xuICBzdHJpbmdpZnk6IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCkge1xuICAgIHZhciBhcmdzID0gW2l0XTtcbiAgICB2YXIgaSA9IDE7XG4gICAgdmFyIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgICRyZXBsYWNlciA9IHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgICBpZiAoIWlzT2JqZWN0KHJlcGxhY2VyKSAmJiBpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSkgcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gICAgaWYgKCFpc0FycmF5KHJlcGxhY2VyKSkgcmVwbGFjZXIgPSBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xuICAgICAgaWYgKHR5cGVvZiAkcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykgdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICAgIGlmICghaXNTeW1ib2wodmFsdWUpKSByZXR1cm4gdmFsdWU7XG4gICAgfTtcbiAgICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gICAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xuICB9XG59KTtcblxuLy8gMTkuNC4zLjQgU3ltYm9sLnByb3RvdHlwZVtAQHRvUHJpbWl0aXZlXShoaW50KVxuJFN5bWJvbFtQUk9UT1RZUEVdW1RPX1BSSU1JVElWRV0gfHwgX193ZWJwYWNrX3JlcXVpcmVfXygzKSgkU3ltYm9sW1BST1RPVFlQRV0sIFRPX1BSSU1JVElWRSwgJFN5bWJvbFtQUk9UT1RZUEVdLnZhbHVlT2YpO1xuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcblxuXG4vKioqLyB9KSxcbi8qIDQzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbmV4cG9ydHMuZiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuLyoqKi8gfSksXG4vKiA0NCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgZ2xvYmFsID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbnZhciBjb3JlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMyk7XG52YXIgTElCUkFSWSA9IF9fd2VicGFja19yZXF1aXJlX18oMTYpO1xudmFyIHdrc0V4dCA9IF9fd2VicGFja19yZXF1aXJlX18oNDMpO1xudmFyIGRlZmluZVByb3BlcnR5ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSkuZjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgdmFyICRTeW1ib2wgPSBjb3JlLlN5bWJvbCB8fCAoY29yZS5TeW1ib2wgPSBMSUJSQVJZID8ge30gOiBnbG9iYWwuU3ltYm9sIHx8IHt9KTtcbiAgaWYgKG5hbWUuY2hhckF0KDApICE9ICdfJyAmJiAhKG5hbWUgaW4gJFN5bWJvbCkpIGRlZmluZVByb3BlcnR5KCRTeW1ib2wsIG5hbWUsIHsgdmFsdWU6IHdrc0V4dC5mKG5hbWUpIH0pO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDQ1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbl9fd2VicGFja19yZXF1aXJlX18oNDQpKCdhc3luY0l0ZXJhdG9yJyk7XG5cblxuLyoqKi8gfSksXG4vKiA0NiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuLyoqKi8gfSksXG4vKiA0NyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5tb2R1bGUuZXhwb3J0cyA9ICFfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXyg5KShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoX193ZWJwYWNrX3JlcXVpcmVfXyg0NikoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuXG5cbi8qKiovIH0pLFxuLyogNDggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG5cbi8vIEVYVEVSTkFMIE1PRFVMRTogLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAubWF0Y2guanNcbnZhciBlczZfcmVnZXhwX21hdGNoID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4NCk7XG5cbi8vIEVYVEVSTkFMIE1PRFVMRTogZXh0ZXJuYWwgXCJyZWFjdFwiXG52YXIgZXh0ZXJuYWxfcmVhY3RfID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbnZhciBleHRlcm5hbF9yZWFjdF9kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihleHRlcm5hbF9yZWFjdF8pO1xuXG4vLyBDT05DQVRFTkFURUQgTU9EVUxFOiAuL2NvbXBvbmVudHMvV3JhcHBlci9pbmRleC5qc1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzICovdmFyIFdyYXBwZXJfV3JhcHBlcj1mdW5jdGlvbiBXcmFwcGVyKF9yZWYpe3ZhciBjaGlsZHJlbj1fcmVmLmNoaWxkcmVuO3JldHVybiBleHRlcm5hbF9yZWFjdF9kZWZhdWx0LmEuY3JlYXRlRWxlbWVudChleHRlcm5hbF9yZWFjdF9bXCJGcmFnbWVudFwiXSxudWxsLGNoaWxkcmVuKTt9Oy8qIGhhcm1vbnkgZGVmYXVsdCBleHBvcnQgKi8gdmFyIGNvbXBvbmVudHNfV3JhcHBlciA9IChXcmFwcGVyX1dyYXBwZXIpO1xuLy8gQ09OQ0FURU5BVEVEIE1PRFVMRTogLi9jb21wb25lbnRzL2luZGV4LmpzXG4vKiBlc2xpbnQtZGlzYWJsZSAqL3ZhciB3aW5kb3dFeGlzdHM9ZnVuY3Rpb24gd2luZG93RXhpc3RzKCl7aWYodHlwZW9mIHdpbmRvdz09PSd1bmRlZmluZWQnKXtyZXR1cm4gZmFsc2U7fXRyeXt2YXIgZW52PVwicHJvZHVjdGlvblwiLnRvTG93ZXJDYXNlKCk7cmV0dXJuIWVudi5tYXRjaCgvdGVzdC8pO31jYXRjaChlKXtyZXR1cm4gdHJ1ZTt9fTsvKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIHZhciBjb21wb25lbnRzID0gX193ZWJwYWNrX2V4cG9ydHNfX1tcImRlZmF1bHRcIl0gPSAoKGZ1bmN0aW9uKCl7dmFyIGV4cG9ydGVkO2lmKHdpbmRvd0V4aXN0cygpKXtleHBvcnRlZD1fX3dlYnBhY2tfcmVxdWlyZV9fKDgyKS5kZWZhdWx0O31lbHNley8vIE5PVEU6IFNTUiBzdXBwb3J0XG5leHBvcnRlZD1fX3dlYnBhY2tfcmVxdWlyZV9fKDQ5KS5kZWZhdWx0O31leHBvcnRlZC5XcmFwcGVyPWNvbXBvbmVudHNfV3JhcHBlcjtyZXR1cm4gZXhwb3J0ZWQ7fSkoKSk7XG5cbi8qKiovIH0pLFxuLyogNDkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29yZV9qc19tb2R1bGVzX2VzN19zeW1ib2xfYXN5bmNfaXRlcmF0b3JfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNDUpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNvcmVfanNfbW9kdWxlc19lczdfc3ltYm9sX2FzeW5jX2l0ZXJhdG9yX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY29yZV9qc19tb2R1bGVzX2VzN19zeW1ib2xfYXN5bmNfaXRlcmF0b3JfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29yZV9qc19tb2R1bGVzX2VzNl9zeW1ib2xfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNDIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNvcmVfanNfbW9kdWxlc19lczZfc3ltYm9sX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY29yZV9qc19tb2R1bGVzX2VzNl9zeW1ib2xfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgcmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgcmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihyZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMl9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfTG9nZ2VyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8zX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIwKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfc2VsZWN0b3JzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV80X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuZnVuY3Rpb24gX3R5cGVvZihvYmope2lmKHR5cGVvZiBTeW1ib2w9PT1cImZ1bmN0aW9uXCImJnR5cGVvZiBTeW1ib2wuaXRlcmF0b3I9PT1cInN5bWJvbFwiKXtfdHlwZW9mPWZ1bmN0aW9uIF90eXBlb2Yob2JqKXtyZXR1cm4gdHlwZW9mIG9iajt9O31lbHNle190eXBlb2Y9ZnVuY3Rpb24gX3R5cGVvZihvYmope3JldHVybiBvYmomJnR5cGVvZiBTeW1ib2w9PT1cImZ1bmN0aW9uXCImJm9iai5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmb2JqIT09U3ltYm9sLnByb3RvdHlwZT9cInN5bWJvbFwiOnR5cGVvZiBvYmo7fTt9cmV0dXJuIF90eXBlb2Yob2JqKTt9ZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLENvbnN0cnVjdG9yKXtpZighKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO319ZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LHByb3BzKXtmb3IodmFyIGk9MDtpPHByb3BzLmxlbmd0aDtpKyspe3ZhciBkZXNjcmlwdG9yPXByb3BzW2ldO2Rlc2NyaXB0b3IuZW51bWVyYWJsZT1kZXNjcmlwdG9yLmVudW1lcmFibGV8fGZhbHNlO2Rlc2NyaXB0b3IuY29uZmlndXJhYmxlPXRydWU7aWYoXCJ2YWx1ZVwiaW4gZGVzY3JpcHRvcilkZXNjcmlwdG9yLndyaXRhYmxlPXRydWU7T2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCxkZXNjcmlwdG9yLmtleSxkZXNjcmlwdG9yKTt9fWZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3Rvcixwcm90b1Byb3BzLHN0YXRpY1Byb3BzKXtpZihwcm90b1Byb3BzKV9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSxwcm90b1Byb3BzKTtpZihzdGF0aWNQcm9wcylfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3RvcixzdGF0aWNQcm9wcyk7cmV0dXJuIENvbnN0cnVjdG9yO31mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLGNhbGwpe2lmKGNhbGwmJihfdHlwZW9mKGNhbGwpPT09XCJvYmplY3RcInx8dHlwZW9mIGNhbGw9PT1cImZ1bmN0aW9uXCIpKXtyZXR1cm4gY2FsbDt9cmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZik7fWZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoc2VsZil7aWYoc2VsZj09PXZvaWQgMCl7dGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpO31yZXR1cm4gc2VsZjt9ZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pe19nZXRQcm90b3R5cGVPZj1PYmplY3Quc2V0UHJvdG90eXBlT2Y/T2JqZWN0LmdldFByb3RvdHlwZU9mOmZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKXtyZXR1cm4gby5fX3Byb3RvX198fE9iamVjdC5nZXRQcm90b3R5cGVPZihvKTt9O3JldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7fWZ1bmN0aW9uIF9pbmhlcml0cyhzdWJDbGFzcyxzdXBlckNsYXNzKXtpZih0eXBlb2Ygc3VwZXJDbGFzcyE9PVwiZnVuY3Rpb25cIiYmc3VwZXJDbGFzcyE9PW51bGwpe3Rocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTt9c3ViQ2xhc3MucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyYmc3VwZXJDbGFzcy5wcm90b3R5cGUse2NvbnN0cnVjdG9yOnt2YWx1ZTpzdWJDbGFzcyx3cml0YWJsZTp0cnVlLGNvbmZpZ3VyYWJsZTp0cnVlfX0pO2lmKHN1cGVyQ2xhc3MpX3NldFByb3RvdHlwZU9mKHN1YkNsYXNzLHN1cGVyQ2xhc3MpO31mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobyxwKXtfc2V0UHJvdG90eXBlT2Y9T2JqZWN0LnNldFByb3RvdHlwZU9mfHxmdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YobyxwKXtvLl9fcHJvdG9fXz1wO3JldHVybiBvO307cmV0dXJuIF9zZXRQcm90b3R5cGVPZihvLHApO30vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tZXh0cmFuZW91cy1kZXBlbmRlbmNpZXMgKi8gLyogZXNsaW50LWRpc2FibGUgcmVhY3QvcHJvcC10eXBlcyAqLy8vIE5PVEU6IFNTUiBzdXBwb3J0XG52YXIgUmVhY3RGdWxscGFnZVNoZWxsPS8qI19fUFVSRV9fKi9mdW5jdGlvbihfUmVhY3QkQ29tcG9uZW50KXtfaW5oZXJpdHMoUmVhY3RGdWxscGFnZVNoZWxsLF9SZWFjdCRDb21wb25lbnQpO2Z1bmN0aW9uIFJlYWN0RnVsbHBhZ2VTaGVsbChwcm9wcyl7dmFyIF90aGlzO19jbGFzc0NhbGxDaGVjayh0aGlzLFJlYWN0RnVsbHBhZ2VTaGVsbCk7X3RoaXM9X3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odGhpcyxfZ2V0UHJvdG90eXBlT2YoUmVhY3RGdWxscGFnZVNoZWxsKS5jYWxsKHRoaXMscHJvcHMpKTtfdGhpcy5zdGF0ZT17fTtfdGhpcy5sb2c9T2JqZWN0KF9Mb2dnZXJfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfX1svKiBkZWZhdWx0ICovIFwiYVwiXSkoX3RoaXMucHJvcHMuZGVidWcsJ1JlYWN0RnVsbHBhZ2VTaGVsbCcpO190aGlzLmxvZygnQnVpbGRpbmcgY29tcG9uZW50Jyk7cmV0dXJuIF90aGlzO31fY3JlYXRlQ2xhc3MoUmVhY3RGdWxscGFnZVNoZWxsLFt7a2V5OlwicmVuZGVyXCIsdmFsdWU6ZnVuY3Rpb24gcmVuZGVyKCl7cmV0dXJuIHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdC5hLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7aWQ6X3NlbGVjdG9yc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNF9fWy8qIE1BSU5fU0VMRUNUT1IgKi8gXCJkXCJdfSx0aGlzLnByb3BzLnJlbmRlcih0aGlzKSk7fX1dKTtyZXR1cm4gUmVhY3RGdWxscGFnZVNoZWxsO30ocmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfX19kZWZhdWx0LmEuQ29tcG9uZW50KTsvKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKFJlYWN0RnVsbHBhZ2VTaGVsbCk7XG5cbi8qKiovIH0pLFxuLyogNTAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxud2luZG93LmZwX2Vhc2luZ3M9e2RlZjpcImVhc2VPdXRRdWFkXCIsbGluZWFyOmZ1bmN0aW9uKG4sdCxlLHUpe3JldHVybiBlKm4vdSt0fSxzd2luZzpmdW5jdGlvbihuLHQsZSx1KXtyZXR1cm4gd2luZG93LmZwX2Vhc2luZ3Nbd2luZG93LmZwX2Vhc2luZ3MuZGVmXShuLHQsZSx1KX0sZWFzZUluUXVhZDpmdW5jdGlvbihuLHQsZSx1KXtyZXR1cm4gZSoobi89dSkqbit0fSxlYXNlT3V0UXVhZDpmdW5jdGlvbihuLHQsZSx1KXtyZXR1cm4tZSoobi89dSkqKG4tMikrdH0sZWFzZUluT3V0UXVhZDpmdW5jdGlvbihuLHQsZSx1KXtyZXR1cm4obi89dS8yKTwxP2UvMipuKm4rdDotZS8yKigtLW4qKG4tMiktMSkrdH0sZWFzZUluQ3ViaWM6ZnVuY3Rpb24obix0LGUsdSl7cmV0dXJuIGUqKG4vPXUpKm4qbit0fSxlYXNlT3V0Q3ViaWM6ZnVuY3Rpb24obix0LGUsdSl7cmV0dXJuIGUqKChuPW4vdS0xKSpuKm4rMSkrdH0sZWFzZUluT3V0Q3ViaWM6ZnVuY3Rpb24obix0LGUsdSl7cmV0dXJuKG4vPXUvMik8MT9lLzIqbipuKm4rdDplLzIqKChuLT0yKSpuKm4rMikrdH0sZWFzZUluUXVhcnQ6ZnVuY3Rpb24obix0LGUsdSl7cmV0dXJuIGUqKG4vPXUpKm4qbipuK3R9LGVhc2VPdXRRdWFydDpmdW5jdGlvbihuLHQsZSx1KXtyZXR1cm4tZSooKG49bi91LTEpKm4qbipuLTEpK3R9LGVhc2VJbk91dFF1YXJ0OmZ1bmN0aW9uKG4sdCxlLHUpe3JldHVybihuLz11LzIpPDE/ZS8yKm4qbipuKm4rdDotZS8yKigobi09MikqbipuKm4tMikrdH0sZWFzZUluUXVpbnQ6ZnVuY3Rpb24obix0LGUsdSl7cmV0dXJuIGUqKG4vPXUpKm4qbipuKm4rdH0sZWFzZU91dFF1aW50OmZ1bmN0aW9uKG4sdCxlLHUpe3JldHVybiBlKigobj1uL3UtMSkqbipuKm4qbisxKSt0fSxlYXNlSW5PdXRRdWludDpmdW5jdGlvbihuLHQsZSx1KXtyZXR1cm4obi89dS8yKTwxP2UvMipuKm4qbipuKm4rdDplLzIqKChuLT0yKSpuKm4qbipuKzIpK3R9LGVhc2VJblNpbmU6ZnVuY3Rpb24obix0LGUsdSl7cmV0dXJuLWUqTWF0aC5jb3Mobi91KihNYXRoLlBJLzIpKStlK3R9LGVhc2VPdXRTaW5lOmZ1bmN0aW9uKG4sdCxlLHUpe3JldHVybiBlKk1hdGguc2luKG4vdSooTWF0aC5QSS8yKSkrdH0sZWFzZUluT3V0U2luZTpmdW5jdGlvbihuLHQsZSx1KXtyZXR1cm4tZS8yKihNYXRoLmNvcyhNYXRoLlBJKm4vdSktMSkrdH0sZWFzZUluRXhwbzpmdW5jdGlvbihuLHQsZSx1KXtyZXR1cm4gMD09bj90OmUqTWF0aC5wb3coMiwxMCoobi91LTEpKSt0fSxlYXNlT3V0RXhwbzpmdW5jdGlvbihuLHQsZSx1KXtyZXR1cm4gbj09dT90K2U6ZSooMS1NYXRoLnBvdygyLC0xMCpuL3UpKSt0fSxlYXNlSW5PdXRFeHBvOmZ1bmN0aW9uKG4sdCxlLHUpe3JldHVybiAwPT1uP3Q6bj09dT90K2U6KG4vPXUvMik8MT9lLzIqTWF0aC5wb3coMiwxMCoobi0xKSkrdDplLzIqKDItTWF0aC5wb3coMiwtMTAqLS1uKSkrdH0sZWFzZUluQ2lyYzpmdW5jdGlvbihuLHQsZSx1KXtyZXR1cm4tZSooTWF0aC5zcXJ0KDEtKG4vPXUpKm4pLTEpK3R9LGVhc2VPdXRDaXJjOmZ1bmN0aW9uKG4sdCxlLHUpe3JldHVybiBlKk1hdGguc3FydCgxLShuPW4vdS0xKSpuKSt0fSxlYXNlSW5PdXRDaXJjOmZ1bmN0aW9uKG4sdCxlLHUpe3JldHVybihuLz11LzIpPDE/LWUvMiooTWF0aC5zcXJ0KDEtbipuKS0xKSt0OmUvMiooTWF0aC5zcXJ0KDEtKG4tPTIpKm4pKzEpK3R9LGVhc2VJbkVsYXN0aWM6ZnVuY3Rpb24obix0LGUsdSl7dmFyIGE9MS43MDE1OCxyPTAsaT1lO2lmKDA9PW4pcmV0dXJuIHQ7aWYoMT09KG4vPXUpKXJldHVybiB0K2U7aWYocnx8KHI9LjMqdSksaTxNYXRoLmFicyhlKSl7aT1lO2E9ci80fWVsc2UgYT1yLygyKk1hdGguUEkpKk1hdGguYXNpbihlL2kpO3JldHVybi1pKk1hdGgucG93KDIsMTAqKG4tPTEpKSpNYXRoLnNpbigobip1LWEpKigyKk1hdGguUEkpL3IpK3R9LGVhc2VPdXRFbGFzdGljOmZ1bmN0aW9uKG4sdCxlLHUpe3ZhciBhPTEuNzAxNTgscj0wLGk9ZTtpZigwPT1uKXJldHVybiB0O2lmKDE9PShuLz11KSlyZXR1cm4gdCtlO2lmKHJ8fChyPS4zKnUpLGk8TWF0aC5hYnMoZSkpe2k9ZTthPXIvNH1lbHNlIGE9ci8oMipNYXRoLlBJKSpNYXRoLmFzaW4oZS9pKTtyZXR1cm4gaSpNYXRoLnBvdygyLC0xMCpuKSpNYXRoLnNpbigobip1LWEpKigyKk1hdGguUEkpL3IpK2UrdH0sZWFzZUluT3V0RWxhc3RpYzpmdW5jdGlvbihuLHQsZSx1KXt2YXIgYT0xLjcwMTU4LHI9MCxpPWU7aWYoMD09bilyZXR1cm4gdDtpZigyPT0obi89dS8yKSlyZXR1cm4gdCtlO2lmKHJ8fChyPXUqKC4zKjEuNSkpLGk8TWF0aC5hYnMoZSkpe2k9ZTthPXIvNH1lbHNlIGE9ci8oMipNYXRoLlBJKSpNYXRoLmFzaW4oZS9pKTtyZXR1cm4gbjwxP2kqTWF0aC5wb3coMiwxMCoobi09MSkpKk1hdGguc2luKChuKnUtYSkqKDIqTWF0aC5QSSkvcikqLS41K3Q6aSpNYXRoLnBvdygyLC0xMCoobi09MSkpKk1hdGguc2luKChuKnUtYSkqKDIqTWF0aC5QSSkvcikqLjUrZSt0fSxlYXNlSW5CYWNrOmZ1bmN0aW9uKG4sdCxlLHUsYSl7cmV0dXJuIG51bGw9PWEmJihhPTEuNzAxNTgpLGUqKG4vPXUpKm4qKChhKzEpKm4tYSkrdH0sZWFzZU91dEJhY2s6ZnVuY3Rpb24obix0LGUsdSxhKXtyZXR1cm4gbnVsbD09YSYmKGE9MS43MDE1OCksZSooKG49bi91LTEpKm4qKChhKzEpKm4rYSkrMSkrdH0sZWFzZUluT3V0QmFjazpmdW5jdGlvbihuLHQsZSx1LGEpe3JldHVybiBudWxsPT1hJiYoYT0xLjcwMTU4KSwobi89dS8yKTwxP2UvMioobipuKigoMSsoYSo9MS41MjUpKSpuLWEpKSt0OmUvMiooKG4tPTIpKm4qKCgxKyhhKj0xLjUyNSkpKm4rYSkrMikrdH0sZWFzZUluQm91bmNlOmZ1bmN0aW9uKG4sdCxlLHUpe3JldHVybiBlLXdpbmRvdy5mcF9lYXNpbmdzLmVhc2VPdXRCb3VuY2UodS1uLDAsZSx1KSt0fSxlYXNlT3V0Qm91bmNlOmZ1bmN0aW9uKG4sdCxlLHUpe3JldHVybihuLz11KTwxLzIuNzU/ZSooNy41NjI1Km4qbikrdDpuPDIvMi43NT9lKig3LjU2MjUqKG4tPTEuNS8yLjc1KSpuKy43NSkrdDpuPDIuNS8yLjc1P2UqKDcuNTYyNSoobi09Mi4yNS8yLjc1KSpuKy45Mzc1KSt0OmUqKDcuNTYyNSoobi09Mi42MjUvMi43NSkqbisuOTg0Mzc1KSt0fSxlYXNlSW5PdXRCb3VuY2U6ZnVuY3Rpb24obix0LGUsdSl7cmV0dXJuIG48dS8yPy41KndpbmRvdy5mcF9lYXNpbmdzLmVhc2VJbkJvdW5jZSgyKm4sMCxlLHUpK3Q6LjUqd2luZG93LmZwX2Vhc2luZ3MuZWFzZU91dEJvdW5jZSgyKm4tdSwwLGUsdSkrLjUqZSt0fX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1lYXNpbmdzLm1pbi5qcy5tYXBcblxuXG4vKioqLyB9KSxcbi8qIDUxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXzsvKipcbiogQ3VzdG9taXplZCB2ZXJzaW9uIG9mIGlTY3JvbGwuanMgMC4xLjNcbiogSXQgZml4ZXMgYnVncyBhZmZlY3RpbmcgaXRzIGludGVncmF0aW9uIHdpdGggZnVsbHBhZ2UuanNcbiogQGxpY2Vuc2VcbiovXG4hZnVuY3Rpb24ocixuLHApe3ZhciBmPXIucmVxdWVzdEFuaW1hdGlvbkZyYW1lfHxyLndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZXx8ci5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWV8fHIub1JlcXVlc3RBbmltYXRpb25GcmFtZXx8ci5tc1JlcXVlc3RBbmltYXRpb25GcmFtZXx8ZnVuY3Rpb24odCl7ci5zZXRUaW1lb3V0KHQsMWUzLzYwKX0sbT1mdW5jdGlvbigpe3ZhciBlPXt9LG89bi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlLGk9ZnVuY3Rpb24oKXtmb3IodmFyIHQ9W1widFwiLFwid2Via2l0VFwiLFwiTW96VFwiLFwibXNUXCIsXCJPVFwiXSxpPTAscz10Lmxlbmd0aDtpPHM7aSsrKWlmKHRbaV0rXCJyYW5zZm9ybVwiaW4gbylyZXR1cm4gdFtpXS5zdWJzdHIoMCx0W2ldLmxlbmd0aC0xKTtyZXR1cm4hMX0oKTtmdW5jdGlvbiB0KHQpe3JldHVybiExIT09aSYmKFwiXCI9PT1pP3Q6aSt0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpK3Quc3Vic3RyKDEpKX1lLmdldFRpbWU9RGF0ZS5ub3d8fGZ1bmN0aW9uKCl7cmV0dXJuKG5ldyBEYXRlKS5nZXRUaW1lKCl9LGUuZXh0ZW5kPWZ1bmN0aW9uKHQsaSl7Zm9yKHZhciBzIGluIGkpdFtzXT1pW3NdfSxlLmFkZEV2ZW50PWZ1bmN0aW9uKHQsaSxzLGUpe3QuYWRkRXZlbnRMaXN0ZW5lcihpLHMsISFlKX0sZS5yZW1vdmVFdmVudD1mdW5jdGlvbih0LGkscyxlKXt0LnJlbW92ZUV2ZW50TGlzdGVuZXIoaSxzLCEhZSl9LGUucHJlZml4UG9pbnRlckV2ZW50PWZ1bmN0aW9uKHQpe3JldHVybiByLk1TUG9pbnRlckV2ZW50P1wiTVNQb2ludGVyXCIrdC5jaGFyQXQoNykudG9VcHBlckNhc2UoKSt0LnN1YnN0cig4KTp0fSxlLm1vbWVudHVtPWZ1bmN0aW9uKHQsaSxzLGUsbyxuKXt2YXIgcixoLGE9dC1pLGw9cC5hYnMoYSkvcztyZXR1cm4gaD1sLyhuPXZvaWQgMD09PW4/NmUtNDpuKSwocj10K2wqbC8oMipuKSooYTwwPy0xOjEpKTxlPyhyPW8/ZS1vLzIuNSoobC84KTplLGg9KGE9cC5hYnMoci10KSkvbCk6MDxyJiYocj1vP28vMi41KihsLzgpOjAsaD0oYT1wLmFicyh0KStyKS9sKSx7ZGVzdGluYXRpb246cC5yb3VuZChyKSxkdXJhdGlvbjpofX07dmFyIHM9dChcInRyYW5zZm9ybVwiKTtyZXR1cm4gZS5leHRlbmQoZSx7aGFzVHJhbnNmb3JtOiExIT09cyxoYXNQZXJzcGVjdGl2ZTp0KFwicGVyc3BlY3RpdmVcIilpbiBvLGhhc1RvdWNoOlwib250b3VjaHN0YXJ0XCJpbiByLGhhc1BvaW50ZXI6ISghci5Qb2ludGVyRXZlbnQmJiFyLk1TUG9pbnRlckV2ZW50KSxoYXNUcmFuc2l0aW9uOnQoXCJ0cmFuc2l0aW9uXCIpaW4gb30pLGUuaXNCYWRBbmRyb2lkPWZ1bmN0aW9uKCl7dmFyIHQ9ci5uYXZpZ2F0b3IuYXBwVmVyc2lvbjtpZighL0FuZHJvaWQvLnRlc3QodCl8fC9DaHJvbWVcXC9cXGQvLnRlc3QodCkpcmV0dXJuITE7dmFyIGk9dC5tYXRjaCgvU2FmYXJpXFwvKFxcZCsuXFxkKS8pO3JldHVybiEoaSYmXCJvYmplY3RcIj09dHlwZW9mIGkmJjI8PWkubGVuZ3RoKXx8cGFyc2VGbG9hdChpWzFdKTw1MzUuMTl9KCksZS5leHRlbmQoZS5zdHlsZT17fSx7dHJhbnNmb3JtOnMsdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOnQoXCJ0cmFuc2l0aW9uVGltaW5nRnVuY3Rpb25cIiksdHJhbnNpdGlvbkR1cmF0aW9uOnQoXCJ0cmFuc2l0aW9uRHVyYXRpb25cIiksdHJhbnNpdGlvbkRlbGF5OnQoXCJ0cmFuc2l0aW9uRGVsYXlcIiksdHJhbnNmb3JtT3JpZ2luOnQoXCJ0cmFuc2Zvcm1PcmlnaW5cIil9KSxlLmhhc0NsYXNzPWZ1bmN0aW9uKHQsaSl7cmV0dXJuIG5ldyBSZWdFeHAoXCIoXnxcXFxccylcIitpK1wiKFxcXFxzfCQpXCIpLnRlc3QodC5jbGFzc05hbWUpfSxlLmFkZENsYXNzPWZ1bmN0aW9uKHQsaSl7aWYoIWUuaGFzQ2xhc3ModCxpKSl7dmFyIHM9dC5jbGFzc05hbWUuc3BsaXQoXCIgXCIpO3MucHVzaChpKSx0LmNsYXNzTmFtZT1zLmpvaW4oXCIgXCIpfX0sZS5yZW1vdmVDbGFzcz1mdW5jdGlvbih0LGkpe2lmKGUuaGFzQ2xhc3ModCxpKSl7dmFyIHM9bmV3IFJlZ0V4cChcIihefFxcXFxzKVwiK2krXCIoXFxcXHN8JClcIixcImdcIik7dC5jbGFzc05hbWU9dC5jbGFzc05hbWUucmVwbGFjZShzLFwiIFwiKX19LGUub2Zmc2V0PWZ1bmN0aW9uKHQpe2Zvcih2YXIgaT0tdC5vZmZzZXRMZWZ0LHM9LXQub2Zmc2V0VG9wO3Q9dC5vZmZzZXRQYXJlbnQ7KWktPXQub2Zmc2V0TGVmdCxzLT10Lm9mZnNldFRvcDtyZXR1cm57bGVmdDppLHRvcDpzfX0sZS5wcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbj1mdW5jdGlvbih0LGkpe2Zvcih2YXIgcyBpbiBpKWlmKGlbc10udGVzdCh0W3NdKSlyZXR1cm4hMDtyZXR1cm4hMX0sZS5leHRlbmQoZS5ldmVudFR5cGU9e30se3RvdWNoc3RhcnQ6MSx0b3VjaG1vdmU6MSx0b3VjaGVuZDoxLG1vdXNlZG93bjoyLG1vdXNlbW92ZToyLG1vdXNldXA6Mixwb2ludGVyZG93bjozLHBvaW50ZXJtb3ZlOjMscG9pbnRlcnVwOjMsTVNQb2ludGVyRG93bjozLE1TUG9pbnRlck1vdmU6MyxNU1BvaW50ZXJVcDozfSksZS5leHRlbmQoZS5lYXNlPXt9LHtxdWFkcmF0aWM6e3N0eWxlOlwiY3ViaWMtYmV6aWVyKDAuMjUsIDAuNDYsIDAuNDUsIDAuOTQpXCIsZm46ZnVuY3Rpb24odCl7cmV0dXJuIHQqKDItdCl9fSxjaXJjdWxhcjp7c3R5bGU6XCJjdWJpYy1iZXppZXIoMC4xLCAwLjU3LCAwLjEsIDEpXCIsZm46ZnVuY3Rpb24odCl7cmV0dXJuIHAuc3FydCgxLSAtLXQqdCl9fSxiYWNrOntzdHlsZTpcImN1YmljLWJlemllcigwLjE3NSwgMC44ODUsIDAuMzIsIDEuMjc1KVwiLGZuOmZ1bmN0aW9uKHQpe3JldHVybih0LT0xKSp0Kig1KnQrNCkrMX19LGJvdW5jZTp7c3R5bGU6XCJcIixmbjpmdW5jdGlvbih0KXtyZXR1cm4odC89MSk8MS8yLjc1PzcuNTYyNSp0KnQ6dDwyLzIuNzU/Ny41NjI1Kih0LT0xLjUvMi43NSkqdCsuNzU6dDwyLjUvMi43NT83LjU2MjUqKHQtPTIuMjUvMi43NSkqdCsuOTM3NTo3LjU2MjUqKHQtPTIuNjI1LzIuNzUpKnQrLjk4NDM3NX19LGVsYXN0aWM6e3N0eWxlOlwiXCIsZm46ZnVuY3Rpb24odCl7cmV0dXJuIDA9PT10PzA6MT09dD8xOi40KnAucG93KDIsLTEwKnQpKnAuc2luKCh0LS4wNTUpKigyKnAuUEkpLy4yMikrMX19fSksZS50YXA9ZnVuY3Rpb24odCxpKXt2YXIgcz1uLmNyZWF0ZUV2ZW50KFwiRXZlbnRcIik7cy5pbml0RXZlbnQoaSwhMCwhMCkscy5wYWdlWD10LnBhZ2VYLHMucGFnZVk9dC5wYWdlWSx0LnRhcmdldC5kaXNwYXRjaEV2ZW50KHMpfSxlLmNsaWNrPWZ1bmN0aW9uKHQpe3ZhciBpLHM9dC50YXJnZXQ7LyhTRUxFQ1R8SU5QVVR8VEVYVEFSRUEpL2kudGVzdChzLnRhZ05hbWUpfHwoKGk9bi5jcmVhdGVFdmVudChyLk1vdXNlRXZlbnQ/XCJNb3VzZUV2ZW50c1wiOlwiRXZlbnRcIikpLmluaXRFdmVudChcImNsaWNrXCIsITAsITApLGkudmlldz10LnZpZXd8fHIsaS5kZXRhaWw9MSxpLnNjcmVlblg9cy5zY3JlZW5YfHwwLGkuc2NyZWVuWT1zLnNjcmVlbll8fDAsaS5jbGllbnRYPXMuY2xpZW50WHx8MCxpLmNsaWVudFk9cy5jbGllbnRZfHwwLGkuY3RybEtleT0hIXQuY3RybEtleSxpLmFsdEtleT0hIXQuYWx0S2V5LGkuc2hpZnRLZXk9ISF0LnNoaWZ0S2V5LGkubWV0YUtleT0hIXQubWV0YUtleSxpLmJ1dHRvbj0wLGkucmVsYXRlZFRhcmdldD1udWxsLGkuX2NvbnN0cnVjdGVkPSEwLHMuZGlzcGF0Y2hFdmVudChpKSl9LGV9KCk7ZnVuY3Rpb24gdCh0LGkpe2Zvcih2YXIgcyBpbiB0aGlzLndyYXBwZXI9XCJzdHJpbmdcIj09dHlwZW9mIHQ/bi5xdWVyeVNlbGVjdG9yKHQpOnQsdGhpcy5zY3JvbGxlcj10aGlzLndyYXBwZXIuY2hpbGRyZW5bMF0sdGhpcy5zY3JvbGxlclN0eWxlPXRoaXMuc2Nyb2xsZXIuc3R5bGUsdGhpcy5vcHRpb25zPXtyZXNpemVTY3JvbGxiYXJzOiEwLG1vdXNlV2hlZWxTcGVlZDoyMCxzbmFwVGhyZXNob2xkOi4zMzQsZGlzYWJsZVBvaW50ZXI6IW0uaGFzUG9pbnRlcixkaXNhYmxlVG91Y2g6bS5oYXNQb2ludGVyfHwhbS5oYXNUb3VjaCxkaXNhYmxlTW91c2U6bS5oYXNQb2ludGVyfHxtLmhhc1RvdWNoLHN0YXJ0WDowLHN0YXJ0WTowLHNjcm9sbFk6ITAsZGlyZWN0aW9uTG9ja1RocmVzaG9sZDo1LG1vbWVudHVtOiEwLGJvdW5jZTohMCxib3VuY2VUaW1lOjYwMCxib3VuY2VFYXNpbmc6XCJcIixwcmV2ZW50RGVmYXVsdDohMCxwcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbjp7dGFnTmFtZTovXihJTlBVVHxURVhUQVJFQXxCVVRUT058U0VMRUNUfExBQkVMKSQvfSxIV0NvbXBvc2l0aW5nOiEwLHVzZVRyYW5zaXRpb246ITAsdXNlVHJhbnNmb3JtOiEwLGJpbmRUb1dyYXBwZXI6dm9pZCAwPT09ci5vbm1vdXNlZG93bn0saSl0aGlzLm9wdGlvbnNbc109aVtzXTt0aGlzLnRyYW5zbGF0ZVo9dGhpcy5vcHRpb25zLkhXQ29tcG9zaXRpbmcmJm0uaGFzUGVyc3BlY3RpdmU/XCIgdHJhbnNsYXRlWigwKVwiOlwiXCIsdGhpcy5vcHRpb25zLnVzZVRyYW5zaXRpb249bS5oYXNUcmFuc2l0aW9uJiZ0aGlzLm9wdGlvbnMudXNlVHJhbnNpdGlvbix0aGlzLm9wdGlvbnMudXNlVHJhbnNmb3JtPW0uaGFzVHJhbnNmb3JtJiZ0aGlzLm9wdGlvbnMudXNlVHJhbnNmb3JtLHRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoPSEwPT09dGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2g/XCJ2ZXJ0aWNhbFwiOnRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoLHRoaXMub3B0aW9ucy5wcmV2ZW50RGVmYXVsdD0hdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2gmJnRoaXMub3B0aW9ucy5wcmV2ZW50RGVmYXVsdCx0aGlzLm9wdGlvbnMuc2Nyb2xsWT1cInZlcnRpY2FsXCIhPXRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoJiZ0aGlzLm9wdGlvbnMuc2Nyb2xsWSx0aGlzLm9wdGlvbnMuc2Nyb2xsWD1cImhvcml6b250YWxcIiE9dGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2gmJnRoaXMub3B0aW9ucy5zY3JvbGxYLHRoaXMub3B0aW9ucy5mcmVlU2Nyb2xsPXRoaXMub3B0aW9ucy5mcmVlU2Nyb2xsJiYhdGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2gsdGhpcy5vcHRpb25zLmRpcmVjdGlvbkxvY2tUaHJlc2hvbGQ9dGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2g/MDp0aGlzLm9wdGlvbnMuZGlyZWN0aW9uTG9ja1RocmVzaG9sZCx0aGlzLm9wdGlvbnMuYm91bmNlRWFzaW5nPVwic3RyaW5nXCI9PXR5cGVvZiB0aGlzLm9wdGlvbnMuYm91bmNlRWFzaW5nP20uZWFzZVt0aGlzLm9wdGlvbnMuYm91bmNlRWFzaW5nXXx8bS5lYXNlLmNpcmN1bGFyOnRoaXMub3B0aW9ucy5ib3VuY2VFYXNpbmcsdGhpcy5vcHRpb25zLnJlc2l6ZVBvbGxpbmc9dm9pZCAwPT09dGhpcy5vcHRpb25zLnJlc2l6ZVBvbGxpbmc/NjA6dGhpcy5vcHRpb25zLnJlc2l6ZVBvbGxpbmcsITA9PT10aGlzLm9wdGlvbnMudGFwJiYodGhpcy5vcHRpb25zLnRhcD1cInRhcFwiKSx0aGlzLm9wdGlvbnMudXNlVHJhbnNpdGlvbnx8dGhpcy5vcHRpb25zLnVzZVRyYW5zZm9ybXx8L3JlbGF0aXZlfGFic29sdXRlL2kudGVzdCh0aGlzLnNjcm9sbGVyU3R5bGUucG9zaXRpb24pfHwodGhpcy5zY3JvbGxlclN0eWxlLnBvc2l0aW9uPVwicmVsYXRpdmVcIiksXCJzY2FsZVwiPT10aGlzLm9wdGlvbnMuc2hyaW5rU2Nyb2xsYmFycyYmKHRoaXMub3B0aW9ucy51c2VUcmFuc2l0aW9uPSExKSx0aGlzLm9wdGlvbnMuaW52ZXJ0V2hlZWxEaXJlY3Rpb249dGhpcy5vcHRpb25zLmludmVydFdoZWVsRGlyZWN0aW9uPy0xOjEsdGhpcy54PTAsdGhpcy55PTAsdGhpcy5kaXJlY3Rpb25YPTAsdGhpcy5kaXJlY3Rpb25ZPTAsdGhpcy5fZXZlbnRzPXt9LHRoaXMuX2luaXQoKSx0aGlzLnJlZnJlc2goKSx0aGlzLnNjcm9sbFRvKHRoaXMub3B0aW9ucy5zdGFydFgsdGhpcy5vcHRpb25zLnN0YXJ0WSksdGhpcy5lbmFibGUoKX1mdW5jdGlvbiBoKHQsaSxzKXt2YXIgZT1uLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksbz1uLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuITA9PT1zJiYoZS5zdHlsZS5jc3NUZXh0PVwicG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDo5OTk5XCIsby5zdHlsZS5jc3NUZXh0PVwiLXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94O3Bvc2l0aW9uOmFic29sdXRlO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwwLjUpO2JvcmRlcjoxcHggc29saWQgcmdiYSgyNTUsMjU1LDI1NSwwLjkpO2JvcmRlci1yYWRpdXM6M3B4XCIpLG8uY2xhc3NOYW1lPVwiaVNjcm9sbEluZGljYXRvclwiLGUuY2xhc3NOYW1lPVwiaFwiPT10PyghMD09PXMmJihlLnN0eWxlLmNzc1RleHQrPVwiO2hlaWdodDo3cHg7bGVmdDoycHg7cmlnaHQ6MnB4O2JvdHRvbTowXCIsby5zdHlsZS5oZWlnaHQ9XCIxMDAlXCIpLFwiaVNjcm9sbEhvcml6b250YWxTY3JvbGxiYXJcIik6KCEwPT09cyYmKGUuc3R5bGUuY3NzVGV4dCs9XCI7d2lkdGg6N3B4O2JvdHRvbToycHg7dG9wOjJweDtyaWdodDoxcHhcIixvLnN0eWxlLndpZHRoPVwiMTAwJVwiKSxcImlTY3JvbGxWZXJ0aWNhbFNjcm9sbGJhclwiKSxlLnN0eWxlLmNzc1RleHQrPVwiO292ZXJmbG93OmhpZGRlblwiLGl8fChlLnN0eWxlLnBvaW50ZXJFdmVudHM9XCJub25lXCIpLGUuYXBwZW5kQ2hpbGQobyksZX1mdW5jdGlvbiBhKHQsaSl7Zm9yKHZhciBzIGluIHRoaXMud3JhcHBlcj1cInN0cmluZ1wiPT10eXBlb2YgaS5lbD9uLnF1ZXJ5U2VsZWN0b3IoaS5lbCk6aS5lbCx0aGlzLndyYXBwZXJTdHlsZT10aGlzLndyYXBwZXIuc3R5bGUsdGhpcy5pbmRpY2F0b3I9dGhpcy53cmFwcGVyLmNoaWxkcmVuWzBdLHRoaXMuaW5kaWNhdG9yU3R5bGU9dGhpcy5pbmRpY2F0b3Iuc3R5bGUsdGhpcy5zY3JvbGxlcj10LHRoaXMub3B0aW9ucz17bGlzdGVuWDohMCxsaXN0ZW5ZOiEwLGludGVyYWN0aXZlOiExLHJlc2l6ZTohMCxkZWZhdWx0U2Nyb2xsYmFyczohMSxzaHJpbms6ITEsZmFkZTohMSxzcGVlZFJhdGlvWDowLHNwZWVkUmF0aW9ZOjB9LGkpdGhpcy5vcHRpb25zW3NdPWlbc107aWYodGhpcy5zaXplUmF0aW9YPTEsdGhpcy5zaXplUmF0aW9ZPTEsdGhpcy5tYXhQb3NYPTAsdGhpcy5tYXhQb3NZPTAsdGhpcy5vcHRpb25zLmludGVyYWN0aXZlJiYodGhpcy5vcHRpb25zLmRpc2FibGVUb3VjaHx8KG0uYWRkRXZlbnQodGhpcy5pbmRpY2F0b3IsXCJ0b3VjaHN0YXJ0XCIsdGhpcyksbS5hZGRFdmVudChyLFwidG91Y2hlbmRcIix0aGlzKSksdGhpcy5vcHRpb25zLmRpc2FibGVQb2ludGVyfHwobS5hZGRFdmVudCh0aGlzLmluZGljYXRvcixtLnByZWZpeFBvaW50ZXJFdmVudChcInBvaW50ZXJkb3duXCIpLHRoaXMpLG0uYWRkRXZlbnQocixtLnByZWZpeFBvaW50ZXJFdmVudChcInBvaW50ZXJ1cFwiKSx0aGlzKSksdGhpcy5vcHRpb25zLmRpc2FibGVNb3VzZXx8KG0uYWRkRXZlbnQodGhpcy5pbmRpY2F0b3IsXCJtb3VzZWRvd25cIix0aGlzKSxtLmFkZEV2ZW50KHIsXCJtb3VzZXVwXCIsdGhpcykpKSx0aGlzLm9wdGlvbnMuZmFkZSl7dGhpcy53cmFwcGVyU3R5bGVbbS5zdHlsZS50cmFuc2Zvcm1dPXRoaXMuc2Nyb2xsZXIudHJhbnNsYXRlWjt2YXIgZT1tLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbjtpZighZSlyZXR1cm47dGhpcy53cmFwcGVyU3R5bGVbZV09bS5pc0JhZEFuZHJvaWQ/XCIwLjAwMDFtc1wiOlwiMG1zXCI7dmFyIG89dGhpczttLmlzQmFkQW5kcm9pZCYmZihmdW5jdGlvbigpe1wiMC4wMDAxbXNcIj09PW8ud3JhcHBlclN0eWxlW2VdJiYoby53cmFwcGVyU3R5bGVbZV09XCIwc1wiKX0pLHRoaXMud3JhcHBlclN0eWxlLm9wYWNpdHk9XCIwXCJ9fXQucHJvdG90eXBlPXt2ZXJzaW9uOlwiNS4yLjBcIixfaW5pdDpmdW5jdGlvbigpe3RoaXMuX2luaXRFdmVudHMoKSwodGhpcy5vcHRpb25zLnNjcm9sbGJhcnN8fHRoaXMub3B0aW9ucy5pbmRpY2F0b3JzKSYmdGhpcy5faW5pdEluZGljYXRvcnMoKSx0aGlzLm9wdGlvbnMubW91c2VXaGVlbCYmdGhpcy5faW5pdFdoZWVsKCksdGhpcy5vcHRpb25zLnNuYXAmJnRoaXMuX2luaXRTbmFwKCksdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzJiZ0aGlzLl9pbml0S2V5cygpfSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5faW5pdEV2ZW50cyghMCksY2xlYXJUaW1lb3V0KHRoaXMucmVzaXplVGltZW91dCksdGhpcy5yZXNpemVUaW1lb3V0PW51bGwsdGhpcy5fZXhlY0V2ZW50KFwiZGVzdHJveVwiKX0sX3RyYW5zaXRpb25FbmQ6ZnVuY3Rpb24odCl7dC50YXJnZXQ9PXRoaXMuc2Nyb2xsZXImJnRoaXMuaXNJblRyYW5zaXRpb24mJih0aGlzLl90cmFuc2l0aW9uVGltZSgpLHRoaXMucmVzZXRQb3NpdGlvbih0aGlzLm9wdGlvbnMuYm91bmNlVGltZSl8fCh0aGlzLmlzSW5UcmFuc2l0aW9uPSExLHRoaXMuX2V4ZWNFdmVudChcInNjcm9sbEVuZFwiKSkpfSxfc3RhcnQ6ZnVuY3Rpb24odCl7aWYoMSE9bS5ldmVudFR5cGVbdC50eXBlXSYmMCE9PSh0LndoaWNoP3QuYnV0dG9uOnQuYnV0dG9uPDI/MDo0PT10LmJ1dHRvbj8xOjIpKXJldHVybjtpZih0aGlzLmVuYWJsZWQmJighdGhpcy5pbml0aWF0ZWR8fG0uZXZlbnRUeXBlW3QudHlwZV09PT10aGlzLmluaXRpYXRlZCkpeyF0aGlzLm9wdGlvbnMucHJldmVudERlZmF1bHR8fG0uaXNCYWRBbmRyb2lkfHxtLnByZXZlbnREZWZhdWx0RXhjZXB0aW9uKHQudGFyZ2V0LHRoaXMub3B0aW9ucy5wcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbil8fHQucHJldmVudERlZmF1bHQoKTt2YXIgaSxzPXQudG91Y2hlcz90LnRvdWNoZXNbMF06dDt0aGlzLmluaXRpYXRlZD1tLmV2ZW50VHlwZVt0LnR5cGVdLHRoaXMubW92ZWQ9ITEsdGhpcy5kaXN0WD0wLHRoaXMuZGlzdFk9MCx0aGlzLmRpcmVjdGlvblg9MCx0aGlzLmRpcmVjdGlvblk9MCx0aGlzLmRpcmVjdGlvbkxvY2tlZD0wLHRoaXMuc3RhcnRUaW1lPW0uZ2V0VGltZSgpLHRoaXMub3B0aW9ucy51c2VUcmFuc2l0aW9uJiZ0aGlzLmlzSW5UcmFuc2l0aW9uPyh0aGlzLl90cmFuc2l0aW9uVGltZSgpLHRoaXMuaXNJblRyYW5zaXRpb249ITEsaT10aGlzLmdldENvbXB1dGVkUG9zaXRpb24oKSx0aGlzLl90cmFuc2xhdGUocC5yb3VuZChpLngpLHAucm91bmQoaS55KSksdGhpcy5fZXhlY0V2ZW50KFwic2Nyb2xsRW5kXCIpKTohdGhpcy5vcHRpb25zLnVzZVRyYW5zaXRpb24mJnRoaXMuaXNBbmltYXRpbmcmJih0aGlzLmlzQW5pbWF0aW5nPSExLHRoaXMuX2V4ZWNFdmVudChcInNjcm9sbEVuZFwiKSksdGhpcy5zdGFydFg9dGhpcy54LHRoaXMuc3RhcnRZPXRoaXMueSx0aGlzLmFic1N0YXJ0WD10aGlzLngsdGhpcy5hYnNTdGFydFk9dGhpcy55LHRoaXMucG9pbnRYPXMucGFnZVgsdGhpcy5wb2ludFk9cy5wYWdlWSx0aGlzLl9leGVjRXZlbnQoXCJiZWZvcmVTY3JvbGxTdGFydFwiKX19LF9tb3ZlOmZ1bmN0aW9uKHQpe2lmKHRoaXMuZW5hYmxlZCYmbS5ldmVudFR5cGVbdC50eXBlXT09PXRoaXMuaW5pdGlhdGVkKXt0aGlzLm9wdGlvbnMucHJldmVudERlZmF1bHQmJnQucHJldmVudERlZmF1bHQoKTt2YXIgaSxzLGUsbyxuPXQudG91Y2hlcz90LnRvdWNoZXNbMF06dCxyPW4ucGFnZVgtdGhpcy5wb2ludFgsaD1uLnBhZ2VZLXRoaXMucG9pbnRZLGE9bS5nZXRUaW1lKCk7aWYodGhpcy5wb2ludFg9bi5wYWdlWCx0aGlzLnBvaW50WT1uLnBhZ2VZLHRoaXMuZGlzdFgrPXIsdGhpcy5kaXN0WSs9aCxlPXAuYWJzKHRoaXMuZGlzdFgpLG89cC5hYnModGhpcy5kaXN0WSksISgzMDA8YS10aGlzLmVuZFRpbWUmJmU8MTAmJm88MTApKXtpZih0aGlzLmRpcmVjdGlvbkxvY2tlZHx8dGhpcy5vcHRpb25zLmZyZWVTY3JvbGx8fChlPm8rdGhpcy5vcHRpb25zLmRpcmVjdGlvbkxvY2tUaHJlc2hvbGQ/dGhpcy5kaXJlY3Rpb25Mb2NrZWQ9XCJoXCI6bz49ZSt0aGlzLm9wdGlvbnMuZGlyZWN0aW9uTG9ja1RocmVzaG9sZD90aGlzLmRpcmVjdGlvbkxvY2tlZD1cInZcIjp0aGlzLmRpcmVjdGlvbkxvY2tlZD1cIm5cIiksXCJoXCI9PXRoaXMuZGlyZWN0aW9uTG9ja2VkKXtpZihcInZlcnRpY2FsXCI9PXRoaXMub3B0aW9ucy5ldmVudFBhc3N0aHJvdWdoKXQucHJldmVudERlZmF1bHQoKTtlbHNlIGlmKFwiaG9yaXpvbnRhbFwiPT10aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaClyZXR1cm4gdm9pZCh0aGlzLmluaXRpYXRlZD0hMSk7aD0wfWVsc2UgaWYoXCJ2XCI9PXRoaXMuZGlyZWN0aW9uTG9ja2VkKXtpZihcImhvcml6b250YWxcIj09dGhpcy5vcHRpb25zLmV2ZW50UGFzc3Rocm91Z2gpdC5wcmV2ZW50RGVmYXVsdCgpO2Vsc2UgaWYoXCJ2ZXJ0aWNhbFwiPT10aGlzLm9wdGlvbnMuZXZlbnRQYXNzdGhyb3VnaClyZXR1cm4gdm9pZCh0aGlzLmluaXRpYXRlZD0hMSk7cj0wfXI9dGhpcy5oYXNIb3Jpem9udGFsU2Nyb2xsP3I6MCxoPXRoaXMuaGFzVmVydGljYWxTY3JvbGw/aDowLGk9dGhpcy54K3Iscz10aGlzLnkraCwoMDxpfHxpPHRoaXMubWF4U2Nyb2xsWCkmJihpPXRoaXMub3B0aW9ucy5ib3VuY2U/dGhpcy54K3IvMzowPGk/MDp0aGlzLm1heFNjcm9sbFgpLCgwPHN8fHM8dGhpcy5tYXhTY3JvbGxZKSYmKHM9dGhpcy5vcHRpb25zLmJvdW5jZT90aGlzLnkraC8zOjA8cz8wOnRoaXMubWF4U2Nyb2xsWSksdGhpcy5kaXJlY3Rpb25YPTA8cj8tMTpyPDA/MTowLHRoaXMuZGlyZWN0aW9uWT0wPGg/LTE6aDwwPzE6MCx0aGlzLm1vdmVkfHx0aGlzLl9leGVjRXZlbnQoXCJzY3JvbGxTdGFydFwiKSx0aGlzLm1vdmVkPSEwLHRoaXMuX3RyYW5zbGF0ZShpLHMpLDMwMDxhLXRoaXMuc3RhcnRUaW1lJiYodGhpcy5zdGFydFRpbWU9YSx0aGlzLnN0YXJ0WD10aGlzLngsdGhpcy5zdGFydFk9dGhpcy55KX19fSxfZW5kOmZ1bmN0aW9uKHQpe2lmKHRoaXMuZW5hYmxlZCYmbS5ldmVudFR5cGVbdC50eXBlXT09PXRoaXMuaW5pdGlhdGVkKXt0aGlzLm9wdGlvbnMucHJldmVudERlZmF1bHQmJiFtLnByZXZlbnREZWZhdWx0RXhjZXB0aW9uKHQudGFyZ2V0LHRoaXMub3B0aW9ucy5wcmV2ZW50RGVmYXVsdEV4Y2VwdGlvbikmJnQucHJldmVudERlZmF1bHQoKTt0LmNoYW5nZWRUb3VjaGVzJiZ0LmNoYW5nZWRUb3VjaGVzWzBdO3ZhciBpLHMsZT1tLmdldFRpbWUoKS10aGlzLnN0YXJ0VGltZSxvPXAucm91bmQodGhpcy54KSxuPXAucm91bmQodGhpcy55KSxyPXAuYWJzKG8tdGhpcy5zdGFydFgpLGg9cC5hYnMobi10aGlzLnN0YXJ0WSksYT0wLGw9XCJcIjtpZih0aGlzLmlzSW5UcmFuc2l0aW9uPTAsdGhpcy5pbml0aWF0ZWQ9MCx0aGlzLmVuZFRpbWU9bS5nZXRUaW1lKCksIXRoaXMucmVzZXRQb3NpdGlvbih0aGlzLm9wdGlvbnMuYm91bmNlVGltZSkpe2lmKHRoaXMuc2Nyb2xsVG8obyxuKSwhdGhpcy5tb3ZlZClyZXR1cm4gdGhpcy5vcHRpb25zLnRhcCYmbS50YXAodCx0aGlzLm9wdGlvbnMudGFwKSx0aGlzLm9wdGlvbnMuY2xpY2smJm0uY2xpY2sodCksdm9pZCB0aGlzLl9leGVjRXZlbnQoXCJzY3JvbGxDYW5jZWxcIik7aWYodGhpcy5fZXZlbnRzLmZsaWNrJiZlPDIwMCYmcjwxMDAmJmg8MTAwKXRoaXMuX2V4ZWNFdmVudChcImZsaWNrXCIpO2Vsc2V7aWYodGhpcy5vcHRpb25zLm1vbWVudHVtJiZlPDMwMCYmKGk9dGhpcy5oYXNIb3Jpem9udGFsU2Nyb2xsP20ubW9tZW50dW0odGhpcy54LHRoaXMuc3RhcnRYLGUsdGhpcy5tYXhTY3JvbGxYLHRoaXMub3B0aW9ucy5ib3VuY2U/dGhpcy53cmFwcGVyV2lkdGg6MCx0aGlzLm9wdGlvbnMuZGVjZWxlcmF0aW9uKTp7ZGVzdGluYXRpb246byxkdXJhdGlvbjowfSxzPXRoaXMuaGFzVmVydGljYWxTY3JvbGw/bS5tb21lbnR1bSh0aGlzLnksdGhpcy5zdGFydFksZSx0aGlzLm1heFNjcm9sbFksdGhpcy5vcHRpb25zLmJvdW5jZT90aGlzLndyYXBwZXJIZWlnaHQ6MCx0aGlzLm9wdGlvbnMuZGVjZWxlcmF0aW9uKTp7ZGVzdGluYXRpb246bixkdXJhdGlvbjowfSxvPWkuZGVzdGluYXRpb24sbj1zLmRlc3RpbmF0aW9uLGE9cC5tYXgoaS5kdXJhdGlvbixzLmR1cmF0aW9uKSx0aGlzLmlzSW5UcmFuc2l0aW9uPTEpLHRoaXMub3B0aW9ucy5zbmFwKXt2YXIgYz10aGlzLl9uZWFyZXN0U25hcChvLG4pO3RoaXMuY3VycmVudFBhZ2U9YyxhPXRoaXMub3B0aW9ucy5zbmFwU3BlZWR8fHAubWF4KHAubWF4KHAubWluKHAuYWJzKG8tYy54KSwxZTMpLHAubWluKHAuYWJzKG4tYy55KSwxZTMpKSwzMDApLG89Yy54LG49Yy55LHRoaXMuZGlyZWN0aW9uWD0wLHRoaXMuZGlyZWN0aW9uWT0wLGw9dGhpcy5vcHRpb25zLmJvdW5jZUVhc2luZ31pZihvIT10aGlzLnh8fG4hPXRoaXMueSlyZXR1cm4oMDxvfHxvPHRoaXMubWF4U2Nyb2xsWHx8MDxufHxuPHRoaXMubWF4U2Nyb2xsWSkmJihsPW0uZWFzZS5xdWFkcmF0aWMpLHZvaWQgdGhpcy5zY3JvbGxUbyhvLG4sYSxsKTt0aGlzLl9leGVjRXZlbnQoXCJzY3JvbGxFbmRcIil9fX19LF9yZXNpemU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzO2NsZWFyVGltZW91dCh0aGlzLnJlc2l6ZVRpbWVvdXQpLHRoaXMucmVzaXplVGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7dC5yZWZyZXNoKCl9LHRoaXMub3B0aW9ucy5yZXNpemVQb2xsaW5nKX0scmVzZXRQb3NpdGlvbjpmdW5jdGlvbih0KXt2YXIgaT10aGlzLngscz10aGlzLnk7cmV0dXJuIHQ9dHx8MCwhdGhpcy5oYXNIb3Jpem9udGFsU2Nyb2xsfHwwPHRoaXMueD9pPTA6dGhpcy54PHRoaXMubWF4U2Nyb2xsWCYmKGk9dGhpcy5tYXhTY3JvbGxYKSwhdGhpcy5oYXNWZXJ0aWNhbFNjcm9sbHx8MDx0aGlzLnk/cz0wOnRoaXMueTx0aGlzLm1heFNjcm9sbFkmJihzPXRoaXMubWF4U2Nyb2xsWSksKGkhPXRoaXMueHx8cyE9dGhpcy55KSYmKHRoaXMuc2Nyb2xsVG8oaSxzLHQsdGhpcy5vcHRpb25zLmJvdW5jZUVhc2luZyksITApfSxkaXNhYmxlOmZ1bmN0aW9uKCl7dGhpcy5lbmFibGVkPSExfSxlbmFibGU6ZnVuY3Rpb24oKXt0aGlzLmVuYWJsZWQ9ITB9LHJlZnJlc2g6ZnVuY3Rpb24oKXt0aGlzLndyYXBwZXIub2Zmc2V0SGVpZ2h0O3RoaXMud3JhcHBlcldpZHRoPXRoaXMud3JhcHBlci5jbGllbnRXaWR0aCx0aGlzLndyYXBwZXJIZWlnaHQ9dGhpcy53cmFwcGVyLmNsaWVudEhlaWdodCx0aGlzLnNjcm9sbGVyV2lkdGg9dGhpcy5zY3JvbGxlci5vZmZzZXRXaWR0aCx0aGlzLnNjcm9sbGVySGVpZ2h0PXRoaXMuc2Nyb2xsZXIub2Zmc2V0SGVpZ2h0LHRoaXMubWF4U2Nyb2xsWD10aGlzLndyYXBwZXJXaWR0aC10aGlzLnNjcm9sbGVyV2lkdGgsdGhpcy5tYXhTY3JvbGxZPXRoaXMud3JhcHBlckhlaWdodC10aGlzLnNjcm9sbGVySGVpZ2h0LHRoaXMuaGFzSG9yaXpvbnRhbFNjcm9sbD10aGlzLm9wdGlvbnMuc2Nyb2xsWCYmdGhpcy5tYXhTY3JvbGxYPDAsdGhpcy5oYXNWZXJ0aWNhbFNjcm9sbD10aGlzLm9wdGlvbnMuc2Nyb2xsWSYmdGhpcy5tYXhTY3JvbGxZPDAsdGhpcy5oYXNIb3Jpem9udGFsU2Nyb2xsfHwodGhpcy5tYXhTY3JvbGxYPTAsdGhpcy5zY3JvbGxlcldpZHRoPXRoaXMud3JhcHBlcldpZHRoKSx0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsfHwodGhpcy5tYXhTY3JvbGxZPTAsdGhpcy5zY3JvbGxlckhlaWdodD10aGlzLndyYXBwZXJIZWlnaHQpLHRoaXMuZW5kVGltZT0wLHRoaXMuZGlyZWN0aW9uWD0wLHRoaXMuZGlyZWN0aW9uWT0wLHRoaXMud3JhcHBlck9mZnNldD1tLm9mZnNldCh0aGlzLndyYXBwZXIpLHRoaXMuX2V4ZWNFdmVudChcInJlZnJlc2hcIiksdGhpcy5yZXNldFBvc2l0aW9uKCl9LG9uOmZ1bmN0aW9uKHQsaSl7dGhpcy5fZXZlbnRzW3RdfHwodGhpcy5fZXZlbnRzW3RdPVtdKSx0aGlzLl9ldmVudHNbdF0ucHVzaChpKX0sb2ZmOmZ1bmN0aW9uKHQsaSl7aWYodGhpcy5fZXZlbnRzW3RdKXt2YXIgcz10aGlzLl9ldmVudHNbdF0uaW5kZXhPZihpKTstMTxzJiZ0aGlzLl9ldmVudHNbdF0uc3BsaWNlKHMsMSl9fSxfZXhlY0V2ZW50OmZ1bmN0aW9uKHQpe2lmKHRoaXMuX2V2ZW50c1t0XSl7dmFyIGk9MCxzPXRoaXMuX2V2ZW50c1t0XS5sZW5ndGg7aWYocylmb3IoO2k8cztpKyspdGhpcy5fZXZlbnRzW3RdW2ldLmFwcGx5KHRoaXMsW10uc2xpY2UuY2FsbChhcmd1bWVudHMsMSkpfX0sc2Nyb2xsQnk6ZnVuY3Rpb24odCxpLHMsZSl7dD10aGlzLngrdCxpPXRoaXMueStpLHM9c3x8MCx0aGlzLnNjcm9sbFRvKHQsaSxzLGUpfSxzY3JvbGxUbzpmdW5jdGlvbih0LGkscyxlKXtlPWV8fG0uZWFzZS5jaXJjdWxhcix0aGlzLmlzSW5UcmFuc2l0aW9uPXRoaXMub3B0aW9ucy51c2VUcmFuc2l0aW9uJiYwPHM7dmFyIG89dGhpcy5vcHRpb25zLnVzZVRyYW5zaXRpb24mJmUuc3R5bGU7IXN8fG8/KG8mJih0aGlzLl90cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24oZS5zdHlsZSksdGhpcy5fdHJhbnNpdGlvblRpbWUocykpLHRoaXMuX3RyYW5zbGF0ZSh0LGkpKTp0aGlzLl9hbmltYXRlKHQsaSxzLGUuZm4pfSxzY3JvbGxUb0VsZW1lbnQ6ZnVuY3Rpb24odCxpLHMsZSxvKXtpZih0PXQubm9kZVR5cGU/dDp0aGlzLnNjcm9sbGVyLnF1ZXJ5U2VsZWN0b3IodCkpe3ZhciBuPW0ub2Zmc2V0KHQpO24ubGVmdC09dGhpcy53cmFwcGVyT2Zmc2V0LmxlZnQsbi50b3AtPXRoaXMud3JhcHBlck9mZnNldC50b3AsITA9PT1zJiYocz1wLnJvdW5kKHQub2Zmc2V0V2lkdGgvMi10aGlzLndyYXBwZXIub2Zmc2V0V2lkdGgvMikpLCEwPT09ZSYmKGU9cC5yb3VuZCh0Lm9mZnNldEhlaWdodC8yLXRoaXMud3JhcHBlci5vZmZzZXRIZWlnaHQvMikpLG4ubGVmdC09c3x8MCxuLnRvcC09ZXx8MCxuLmxlZnQ9MDxuLmxlZnQ/MDpuLmxlZnQ8dGhpcy5tYXhTY3JvbGxYP3RoaXMubWF4U2Nyb2xsWDpuLmxlZnQsbi50b3A9MDxuLnRvcD8wOm4udG9wPHRoaXMubWF4U2Nyb2xsWT90aGlzLm1heFNjcm9sbFk6bi50b3AsaT1udWxsPT1pfHxcImF1dG9cIj09PWk/cC5tYXgocC5hYnModGhpcy54LW4ubGVmdCkscC5hYnModGhpcy55LW4udG9wKSk6aSx0aGlzLnNjcm9sbFRvKG4ubGVmdCxuLnRvcCxpLG8pfX0sX3RyYW5zaXRpb25UaW1lOmZ1bmN0aW9uKHQpe2lmKHRoaXMub3B0aW9ucy51c2VUcmFuc2l0aW9uKXt0PXR8fDA7dmFyIGk9bS5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb247aWYoaSl7aWYodGhpcy5zY3JvbGxlclN0eWxlW2ldPXQrXCJtc1wiLCF0JiZtLmlzQmFkQW5kcm9pZCl7dGhpcy5zY3JvbGxlclN0eWxlW2ldPVwiMC4wMDAxbXNcIjt2YXIgcz10aGlzO2YoZnVuY3Rpb24oKXtcIjAuMDAwMW1zXCI9PT1zLnNjcm9sbGVyU3R5bGVbaV0mJihzLnNjcm9sbGVyU3R5bGVbaV09XCIwc1wiKX0pfWlmKHRoaXMuaW5kaWNhdG9ycylmb3IodmFyIGU9dGhpcy5pbmRpY2F0b3JzLmxlbmd0aDtlLS07KXRoaXMuaW5kaWNhdG9yc1tlXS50cmFuc2l0aW9uVGltZSh0KX19fSxfdHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uOmZ1bmN0aW9uKHQpe2lmKHRoaXMuc2Nyb2xsZXJTdHlsZVttLnN0eWxlLnRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbl09dCx0aGlzLmluZGljYXRvcnMpZm9yKHZhciBpPXRoaXMuaW5kaWNhdG9ycy5sZW5ndGg7aS0tOyl0aGlzLmluZGljYXRvcnNbaV0udHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uKHQpfSxfdHJhbnNsYXRlOmZ1bmN0aW9uKHQsaSl7aWYodGhpcy5vcHRpb25zLnVzZVRyYW5zZm9ybT90aGlzLnNjcm9sbGVyU3R5bGVbbS5zdHlsZS50cmFuc2Zvcm1dPVwidHJhbnNsYXRlKFwiK3QrXCJweCxcIitpK1wicHgpXCIrdGhpcy50cmFuc2xhdGVaOih0PXAucm91bmQodCksaT1wLnJvdW5kKGkpLHRoaXMuc2Nyb2xsZXJTdHlsZS5sZWZ0PXQrXCJweFwiLHRoaXMuc2Nyb2xsZXJTdHlsZS50b3A9aStcInB4XCIpLHRoaXMueD10LHRoaXMueT1pLHRoaXMuaW5kaWNhdG9ycylmb3IodmFyIHM9dGhpcy5pbmRpY2F0b3JzLmxlbmd0aDtzLS07KXRoaXMuaW5kaWNhdG9yc1tzXS51cGRhdGVQb3NpdGlvbigpfSxfaW5pdEV2ZW50czpmdW5jdGlvbih0KXt2YXIgaT10P20ucmVtb3ZlRXZlbnQ6bS5hZGRFdmVudCxzPXRoaXMub3B0aW9ucy5iaW5kVG9XcmFwcGVyP3RoaXMud3JhcHBlcjpyO2kocixcIm9yaWVudGF0aW9uY2hhbmdlXCIsdGhpcyksaShyLFwicmVzaXplXCIsdGhpcyksdGhpcy5vcHRpb25zLmNsaWNrJiZpKHRoaXMud3JhcHBlcixcImNsaWNrXCIsdGhpcywhMCksdGhpcy5vcHRpb25zLmRpc2FibGVNb3VzZXx8KGkodGhpcy53cmFwcGVyLFwibW91c2Vkb3duXCIsdGhpcyksaShzLFwibW91c2Vtb3ZlXCIsdGhpcyksaShzLFwibW91c2VjYW5jZWxcIix0aGlzKSxpKHMsXCJtb3VzZXVwXCIsdGhpcykpLG0uaGFzUG9pbnRlciYmIXRoaXMub3B0aW9ucy5kaXNhYmxlUG9pbnRlciYmKGkodGhpcy53cmFwcGVyLG0ucHJlZml4UG9pbnRlckV2ZW50KFwicG9pbnRlcmRvd25cIiksdGhpcyksaShzLG0ucHJlZml4UG9pbnRlckV2ZW50KFwicG9pbnRlcm1vdmVcIiksdGhpcyksaShzLG0ucHJlZml4UG9pbnRlckV2ZW50KFwicG9pbnRlcmNhbmNlbFwiKSx0aGlzKSxpKHMsbS5wcmVmaXhQb2ludGVyRXZlbnQoXCJwb2ludGVydXBcIiksdGhpcykpLG0uaGFzVG91Y2gmJiF0aGlzLm9wdGlvbnMuZGlzYWJsZVRvdWNoJiYoaSh0aGlzLndyYXBwZXIsXCJ0b3VjaHN0YXJ0XCIsdGhpcyksaShzLFwidG91Y2htb3ZlXCIsdGhpcyksaShzLFwidG91Y2hjYW5jZWxcIix0aGlzKSxpKHMsXCJ0b3VjaGVuZFwiLHRoaXMpKSxpKHRoaXMuc2Nyb2xsZXIsXCJ0cmFuc2l0aW9uZW5kXCIsdGhpcyksaSh0aGlzLnNjcm9sbGVyLFwid2Via2l0VHJhbnNpdGlvbkVuZFwiLHRoaXMpLGkodGhpcy5zY3JvbGxlcixcIm9UcmFuc2l0aW9uRW5kXCIsdGhpcyksaSh0aGlzLnNjcm9sbGVyLFwiTVNUcmFuc2l0aW9uRW5kXCIsdGhpcyl9LGdldENvbXB1dGVkUG9zaXRpb246ZnVuY3Rpb24oKXt2YXIgdCxpLHM9ci5nZXRDb21wdXRlZFN0eWxlKHRoaXMuc2Nyb2xsZXIsbnVsbCk7cmV0dXJuIGk9dGhpcy5vcHRpb25zLnVzZVRyYW5zZm9ybT8odD0rKChzPXNbbS5zdHlsZS50cmFuc2Zvcm1dLnNwbGl0KFwiKVwiKVswXS5zcGxpdChcIiwgXCIpKVsxMl18fHNbNF0pLCsoc1sxM118fHNbNV0pKToodD0rcy5sZWZ0LnJlcGxhY2UoL1teLVxcZC5dL2csXCJcIiksK3MudG9wLnJlcGxhY2UoL1teLVxcZC5dL2csXCJcIikpLHt4OnQseTppfX0sX2luaXRJbmRpY2F0b3JzOmZ1bmN0aW9uKCl7dmFyIHQsaT10aGlzLm9wdGlvbnMuaW50ZXJhY3RpdmVTY3JvbGxiYXJzLHM9XCJzdHJpbmdcIiE9dHlwZW9mIHRoaXMub3B0aW9ucy5zY3JvbGxiYXJzLGU9W10sbz10aGlzO3RoaXMuaW5kaWNhdG9ycz1bXSx0aGlzLm9wdGlvbnMuc2Nyb2xsYmFycyYmKHRoaXMub3B0aW9ucy5zY3JvbGxZJiYodD17ZWw6aChcInZcIixpLHRoaXMub3B0aW9ucy5zY3JvbGxiYXJzKSxpbnRlcmFjdGl2ZTppLGRlZmF1bHRTY3JvbGxiYXJzOiEwLGN1c3RvbVN0eWxlOnMscmVzaXplOnRoaXMub3B0aW9ucy5yZXNpemVTY3JvbGxiYXJzLHNocmluazp0aGlzLm9wdGlvbnMuc2hyaW5rU2Nyb2xsYmFycyxmYWRlOnRoaXMub3B0aW9ucy5mYWRlU2Nyb2xsYmFycyxsaXN0ZW5YOiExfSx0aGlzLndyYXBwZXIuYXBwZW5kQ2hpbGQodC5lbCksZS5wdXNoKHQpKSx0aGlzLm9wdGlvbnMuc2Nyb2xsWCYmKHQ9e2VsOmgoXCJoXCIsaSx0aGlzLm9wdGlvbnMuc2Nyb2xsYmFycyksaW50ZXJhY3RpdmU6aSxkZWZhdWx0U2Nyb2xsYmFyczohMCxjdXN0b21TdHlsZTpzLHJlc2l6ZTp0aGlzLm9wdGlvbnMucmVzaXplU2Nyb2xsYmFycyxzaHJpbms6dGhpcy5vcHRpb25zLnNocmlua1Njcm9sbGJhcnMsZmFkZTp0aGlzLm9wdGlvbnMuZmFkZVNjcm9sbGJhcnMsbGlzdGVuWTohMX0sdGhpcy53cmFwcGVyLmFwcGVuZENoaWxkKHQuZWwpLGUucHVzaCh0KSkpLHRoaXMub3B0aW9ucy5pbmRpY2F0b3JzJiYoZT1lLmNvbmNhdCh0aGlzLm9wdGlvbnMuaW5kaWNhdG9ycykpO2Zvcih2YXIgbj1lLmxlbmd0aDtuLS07KXRoaXMuaW5kaWNhdG9ycy5wdXNoKG5ldyBhKHRoaXMsZVtuXSkpO2Z1bmN0aW9uIHIodCl7aWYoby5pbmRpY2F0b3JzKWZvcih2YXIgaT1vLmluZGljYXRvcnMubGVuZ3RoO2ktLTspdC5jYWxsKG8uaW5kaWNhdG9yc1tpXSl9dGhpcy5vcHRpb25zLmZhZGVTY3JvbGxiYXJzJiYodGhpcy5vbihcInNjcm9sbEVuZFwiLGZ1bmN0aW9uKCl7cihmdW5jdGlvbigpe3RoaXMuZmFkZSgpfSl9KSx0aGlzLm9uKFwic2Nyb2xsQ2FuY2VsXCIsZnVuY3Rpb24oKXtyKGZ1bmN0aW9uKCl7dGhpcy5mYWRlKCl9KX0pLHRoaXMub24oXCJzY3JvbGxTdGFydFwiLGZ1bmN0aW9uKCl7cihmdW5jdGlvbigpe3RoaXMuZmFkZSgxKX0pfSksdGhpcy5vbihcImJlZm9yZVNjcm9sbFN0YXJ0XCIsZnVuY3Rpb24oKXtyKGZ1bmN0aW9uKCl7dGhpcy5mYWRlKDEsITApfSl9KSksdGhpcy5vbihcInJlZnJlc2hcIixmdW5jdGlvbigpe3IoZnVuY3Rpb24oKXt0aGlzLnJlZnJlc2goKX0pfSksdGhpcy5vbihcImRlc3Ryb3lcIixmdW5jdGlvbigpe3IoZnVuY3Rpb24oKXt0aGlzLmRlc3Ryb3koKX0pLGRlbGV0ZSB0aGlzLmluZGljYXRvcnN9KX0sX2luaXRXaGVlbDpmdW5jdGlvbigpe20uYWRkRXZlbnQodGhpcy53cmFwcGVyLFwid2hlZWxcIix0aGlzKSxtLmFkZEV2ZW50KHRoaXMud3JhcHBlcixcIm1vdXNld2hlZWxcIix0aGlzKSxtLmFkZEV2ZW50KHRoaXMud3JhcHBlcixcIkRPTU1vdXNlU2Nyb2xsXCIsdGhpcyksdGhpcy5vbihcImRlc3Ryb3lcIixmdW5jdGlvbigpe2NsZWFyVGltZW91dCh0aGlzLndoZWVsVGltZW91dCksdGhpcy53aGVlbFRpbWVvdXQ9bnVsbCxtLnJlbW92ZUV2ZW50KHRoaXMud3JhcHBlcixcIndoZWVsXCIsdGhpcyksbS5yZW1vdmVFdmVudCh0aGlzLndyYXBwZXIsXCJtb3VzZXdoZWVsXCIsdGhpcyksbS5yZW1vdmVFdmVudCh0aGlzLndyYXBwZXIsXCJET01Nb3VzZVNjcm9sbFwiLHRoaXMpfSl9LF93aGVlbDpmdW5jdGlvbih0KXtpZih0aGlzLmVuYWJsZWQpe3IubmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvKE1TSUV8VHJpZGVudCkvKXx8dC5wcmV2ZW50RGVmYXVsdCgpO3ZhciBpLHMsZSxvLG49dGhpcztpZih2b2lkIDA9PT10aGlzLndoZWVsVGltZW91dCYmbi5fZXhlY0V2ZW50KFwic2Nyb2xsU3RhcnRcIiksY2xlYXJUaW1lb3V0KHRoaXMud2hlZWxUaW1lb3V0KSx0aGlzLndoZWVsVGltZW91dD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bi5vcHRpb25zLnNuYXB8fG4uX2V4ZWNFdmVudChcInNjcm9sbEVuZFwiKSxuLndoZWVsVGltZW91dD12b2lkIDB9LDQwMCksXCJkZWx0YVhcImluIHQpcz0xPT09dC5kZWx0YU1vZGU/KGk9LXQuZGVsdGFYKnRoaXMub3B0aW9ucy5tb3VzZVdoZWVsU3BlZWQsLXQuZGVsdGFZKnRoaXMub3B0aW9ucy5tb3VzZVdoZWVsU3BlZWQpOihpPS10LmRlbHRhWCwtdC5kZWx0YVkpO2Vsc2UgaWYoXCJ3aGVlbERlbHRhWFwiaW4gdClpPXQud2hlZWxEZWx0YVgvMTIwKnRoaXMub3B0aW9ucy5tb3VzZVdoZWVsU3BlZWQscz10LndoZWVsRGVsdGFZLzEyMCp0aGlzLm9wdGlvbnMubW91c2VXaGVlbFNwZWVkO2Vsc2UgaWYoXCJ3aGVlbERlbHRhXCJpbiB0KWk9cz10LndoZWVsRGVsdGEvMTIwKnRoaXMub3B0aW9ucy5tb3VzZVdoZWVsU3BlZWQ7ZWxzZXtpZighKFwiZGV0YWlsXCJpbiB0KSlyZXR1cm47aT1zPS10LmRldGFpbC8zKnRoaXMub3B0aW9ucy5tb3VzZVdoZWVsU3BlZWR9aWYoaSo9dGhpcy5vcHRpb25zLmludmVydFdoZWVsRGlyZWN0aW9uLHMqPXRoaXMub3B0aW9ucy5pbnZlcnRXaGVlbERpcmVjdGlvbix0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsfHwoaT1zLHM9MCksdGhpcy5vcHRpb25zLnNuYXApcmV0dXJuIGU9dGhpcy5jdXJyZW50UGFnZS5wYWdlWCxvPXRoaXMuY3VycmVudFBhZ2UucGFnZVksMDxpP2UtLTppPDAmJmUrKywwPHM/by0tOnM8MCYmbysrLHZvaWQgdGhpcy5nb1RvUGFnZShlLG8pO2U9dGhpcy54K3Aucm91bmQodGhpcy5oYXNIb3Jpem9udGFsU2Nyb2xsP2k6MCksbz10aGlzLnkrcC5yb3VuZCh0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsP3M6MCksdGhpcy5kaXJlY3Rpb25YPTA8aT8tMTppPDA/MTowLHRoaXMuZGlyZWN0aW9uWT0wPHM/LTE6czwwPzE6MCwwPGU/ZT0wOmU8dGhpcy5tYXhTY3JvbGxYJiYoZT10aGlzLm1heFNjcm9sbFgpLDA8bz9vPTA6bzx0aGlzLm1heFNjcm9sbFkmJihvPXRoaXMubWF4U2Nyb2xsWSksdGhpcy5zY3JvbGxUbyhlLG8sMCl9fSxfaW5pdFNuYXA6ZnVuY3Rpb24oKXt0aGlzLmN1cnJlbnRQYWdlPXt9LFwic3RyaW5nXCI9PXR5cGVvZiB0aGlzLm9wdGlvbnMuc25hcCYmKHRoaXMub3B0aW9ucy5zbmFwPXRoaXMuc2Nyb2xsZXIucXVlcnlTZWxlY3RvckFsbCh0aGlzLm9wdGlvbnMuc25hcCkpLHRoaXMub24oXCJyZWZyZXNoXCIsZnVuY3Rpb24oKXt2YXIgdCxpLHMsZSxvLG4scj0wLGg9MCxhPTAsbD10aGlzLm9wdGlvbnMuc25hcFN0ZXBYfHx0aGlzLndyYXBwZXJXaWR0aCxjPXRoaXMub3B0aW9ucy5zbmFwU3RlcFl8fHRoaXMud3JhcHBlckhlaWdodDtpZih0aGlzLnBhZ2VzPVtdLHRoaXMud3JhcHBlcldpZHRoJiZ0aGlzLndyYXBwZXJIZWlnaHQmJnRoaXMuc2Nyb2xsZXJXaWR0aCYmdGhpcy5zY3JvbGxlckhlaWdodCl7aWYoITA9PT10aGlzLm9wdGlvbnMuc25hcClmb3Iocz1wLnJvdW5kKGwvMiksZT1wLnJvdW5kKGMvMik7YT4tdGhpcy5zY3JvbGxlcldpZHRoOyl7Zm9yKHRoaXMucGFnZXNbcl09W10sbz10PTA7bz4tdGhpcy5zY3JvbGxlckhlaWdodDspdGhpcy5wYWdlc1tyXVt0XT17eDpwLm1heChhLHRoaXMubWF4U2Nyb2xsWCkseTpwLm1heChvLHRoaXMubWF4U2Nyb2xsWSksd2lkdGg6bCxoZWlnaHQ6YyxjeDphLXMsY3k6by1lfSxvLT1jLHQrKzthLT1sLHIrK31lbHNlIGZvcih0PShuPXRoaXMub3B0aW9ucy5zbmFwKS5sZW5ndGgsaT0tMTtyPHQ7cisrKSgwPT09cnx8bltyXS5vZmZzZXRMZWZ0PD1uW3ItMV0ub2Zmc2V0TGVmdCkmJihoPTAsaSsrKSx0aGlzLnBhZ2VzW2hdfHwodGhpcy5wYWdlc1toXT1bXSksYT1wLm1heCgtbltyXS5vZmZzZXRMZWZ0LHRoaXMubWF4U2Nyb2xsWCksbz1wLm1heCgtbltyXS5vZmZzZXRUb3AsdGhpcy5tYXhTY3JvbGxZKSxzPWEtcC5yb3VuZChuW3JdLm9mZnNldFdpZHRoLzIpLGU9by1wLnJvdW5kKG5bcl0ub2Zmc2V0SGVpZ2h0LzIpLHRoaXMucGFnZXNbaF1baV09e3g6YSx5Om8sd2lkdGg6bltyXS5vZmZzZXRXaWR0aCxoZWlnaHQ6bltyXS5vZmZzZXRIZWlnaHQsY3g6cyxjeTplfSxhPnRoaXMubWF4U2Nyb2xsWCYmaCsrO3RoaXMuZ29Ub1BhZ2UodGhpcy5jdXJyZW50UGFnZS5wYWdlWHx8MCx0aGlzLmN1cnJlbnRQYWdlLnBhZ2VZfHwwLDApLHRoaXMub3B0aW9ucy5zbmFwVGhyZXNob2xkJTE9PTA/KHRoaXMuc25hcFRocmVzaG9sZFg9dGhpcy5vcHRpb25zLnNuYXBUaHJlc2hvbGQsdGhpcy5zbmFwVGhyZXNob2xkWT10aGlzLm9wdGlvbnMuc25hcFRocmVzaG9sZCk6KHRoaXMuc25hcFRocmVzaG9sZFg9cC5yb3VuZCh0aGlzLnBhZ2VzW3RoaXMuY3VycmVudFBhZ2UucGFnZVhdW3RoaXMuY3VycmVudFBhZ2UucGFnZVldLndpZHRoKnRoaXMub3B0aW9ucy5zbmFwVGhyZXNob2xkKSx0aGlzLnNuYXBUaHJlc2hvbGRZPXAucm91bmQodGhpcy5wYWdlc1t0aGlzLmN1cnJlbnRQYWdlLnBhZ2VYXVt0aGlzLmN1cnJlbnRQYWdlLnBhZ2VZXS5oZWlnaHQqdGhpcy5vcHRpb25zLnNuYXBUaHJlc2hvbGQpKX19KSx0aGlzLm9uKFwiZmxpY2tcIixmdW5jdGlvbigpe3ZhciB0PXRoaXMub3B0aW9ucy5zbmFwU3BlZWR8fHAubWF4KHAubWF4KHAubWluKHAuYWJzKHRoaXMueC10aGlzLnN0YXJ0WCksMWUzKSxwLm1pbihwLmFicyh0aGlzLnktdGhpcy5zdGFydFkpLDFlMykpLDMwMCk7dGhpcy5nb1RvUGFnZSh0aGlzLmN1cnJlbnRQYWdlLnBhZ2VYK3RoaXMuZGlyZWN0aW9uWCx0aGlzLmN1cnJlbnRQYWdlLnBhZ2VZK3RoaXMuZGlyZWN0aW9uWSx0KX0pfSxfbmVhcmVzdFNuYXA6ZnVuY3Rpb24odCxpKXtpZighdGhpcy5wYWdlcy5sZW5ndGgpcmV0dXJue3g6MCx5OjAscGFnZVg6MCxwYWdlWTowfTt2YXIgcz0wLGU9dGhpcy5wYWdlcy5sZW5ndGgsbz0wO2lmKHAuYWJzKHQtdGhpcy5hYnNTdGFydFgpPHRoaXMuc25hcFRocmVzaG9sZFgmJnAuYWJzKGktdGhpcy5hYnNTdGFydFkpPHRoaXMuc25hcFRocmVzaG9sZFkpcmV0dXJuIHRoaXMuY3VycmVudFBhZ2U7Zm9yKDA8dD90PTA6dDx0aGlzLm1heFNjcm9sbFgmJih0PXRoaXMubWF4U2Nyb2xsWCksMDxpP2k9MDppPHRoaXMubWF4U2Nyb2xsWSYmKGk9dGhpcy5tYXhTY3JvbGxZKTtzPGU7cysrKWlmKHQ+PXRoaXMucGFnZXNbc11bMF0uY3gpe3Q9dGhpcy5wYWdlc1tzXVswXS54O2JyZWFrfWZvcihlPXRoaXMucGFnZXNbc10ubGVuZ3RoO288ZTtvKyspaWYoaT49dGhpcy5wYWdlc1swXVtvXS5jeSl7aT10aGlzLnBhZ2VzWzBdW29dLnk7YnJlYWt9cmV0dXJuIHM9PXRoaXMuY3VycmVudFBhZ2UucGFnZVgmJigocys9dGhpcy5kaXJlY3Rpb25YKTwwP3M9MDpzPj10aGlzLnBhZ2VzLmxlbmd0aCYmKHM9dGhpcy5wYWdlcy5sZW5ndGgtMSksdD10aGlzLnBhZ2VzW3NdWzBdLngpLG89PXRoaXMuY3VycmVudFBhZ2UucGFnZVkmJigobys9dGhpcy5kaXJlY3Rpb25ZKTwwP289MDpvPj10aGlzLnBhZ2VzWzBdLmxlbmd0aCYmKG89dGhpcy5wYWdlc1swXS5sZW5ndGgtMSksaT10aGlzLnBhZ2VzWzBdW29dLnkpLHt4OnQseTppLHBhZ2VYOnMscGFnZVk6b319LGdvVG9QYWdlOmZ1bmN0aW9uKHQsaSxzLGUpe2U9ZXx8dGhpcy5vcHRpb25zLmJvdW5jZUVhc2luZyx0Pj10aGlzLnBhZ2VzLmxlbmd0aD90PXRoaXMucGFnZXMubGVuZ3RoLTE6dDwwJiYodD0wKSxpPj10aGlzLnBhZ2VzW3RdLmxlbmd0aD9pPXRoaXMucGFnZXNbdF0ubGVuZ3RoLTE6aTwwJiYoaT0wKTt2YXIgbz10aGlzLnBhZ2VzW3RdW2ldLngsbj10aGlzLnBhZ2VzW3RdW2ldLnk7cz12b2lkIDA9PT1zP3RoaXMub3B0aW9ucy5zbmFwU3BlZWR8fHAubWF4KHAubWF4KHAubWluKHAuYWJzKG8tdGhpcy54KSwxZTMpLHAubWluKHAuYWJzKG4tdGhpcy55KSwxZTMpKSwzMDApOnMsdGhpcy5jdXJyZW50UGFnZT17eDpvLHk6bixwYWdlWDp0LHBhZ2VZOml9LHRoaXMuc2Nyb2xsVG8obyxuLHMsZSl9LG5leHQ6ZnVuY3Rpb24odCxpKXt2YXIgcz10aGlzLmN1cnJlbnRQYWdlLnBhZ2VYLGU9dGhpcy5jdXJyZW50UGFnZS5wYWdlWTsrK3M+PXRoaXMucGFnZXMubGVuZ3RoJiZ0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsJiYocz0wLGUrKyksdGhpcy5nb1RvUGFnZShzLGUsdCxpKX0scHJldjpmdW5jdGlvbih0LGkpe3ZhciBzPXRoaXMuY3VycmVudFBhZ2UucGFnZVgsZT10aGlzLmN1cnJlbnRQYWdlLnBhZ2VZOy0tczwwJiZ0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsJiYocz0wLGUtLSksdGhpcy5nb1RvUGFnZShzLGUsdCxpKX0sX2luaXRLZXlzOmZ1bmN0aW9uKHQpe3ZhciBpLHM9e3BhZ2VVcDozMyxwYWdlRG93bjozNCxlbmQ6MzUsaG9tZTozNixsZWZ0OjM3LHVwOjM4LHJpZ2h0OjM5LGRvd246NDB9O2lmKFwib2JqZWN0XCI9PXR5cGVvZiB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3MpZm9yKGkgaW4gdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzKVwic3RyaW5nXCI9PXR5cGVvZiB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3NbaV0mJih0aGlzLm9wdGlvbnMua2V5QmluZGluZ3NbaV09dGhpcy5vcHRpb25zLmtleUJpbmRpbmdzW2ldLnRvVXBwZXJDYXNlKCkuY2hhckNvZGVBdCgwKSk7ZWxzZSB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3M9e307Zm9yKGkgaW4gcyl0aGlzLm9wdGlvbnMua2V5QmluZGluZ3NbaV09dGhpcy5vcHRpb25zLmtleUJpbmRpbmdzW2ldfHxzW2ldO20uYWRkRXZlbnQocixcImtleWRvd25cIix0aGlzKSx0aGlzLm9uKFwiZGVzdHJveVwiLGZ1bmN0aW9uKCl7bS5yZW1vdmVFdmVudChyLFwia2V5ZG93blwiLHRoaXMpfSl9LF9rZXk6ZnVuY3Rpb24odCl7aWYodGhpcy5lbmFibGVkKXt2YXIgaSxzPXRoaXMub3B0aW9ucy5zbmFwLGU9cz90aGlzLmN1cnJlbnRQYWdlLnBhZ2VYOnRoaXMueCxvPXM/dGhpcy5jdXJyZW50UGFnZS5wYWdlWTp0aGlzLnksbj1tLmdldFRpbWUoKSxyPXRoaXMua2V5VGltZXx8MDtzd2l0Y2godGhpcy5vcHRpb25zLnVzZVRyYW5zaXRpb24mJnRoaXMuaXNJblRyYW5zaXRpb24mJihpPXRoaXMuZ2V0Q29tcHV0ZWRQb3NpdGlvbigpLHRoaXMuX3RyYW5zbGF0ZShwLnJvdW5kKGkueCkscC5yb3VuZChpLnkpKSx0aGlzLmlzSW5UcmFuc2l0aW9uPSExKSx0aGlzLmtleUFjY2VsZXJhdGlvbj1uLXI8MjAwP3AubWluKHRoaXMua2V5QWNjZWxlcmF0aW9uKy4yNSw1MCk6MCx0LmtleUNvZGUpe2Nhc2UgdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzLnBhZ2VVcDp0aGlzLmhhc0hvcml6b250YWxTY3JvbGwmJiF0aGlzLmhhc1ZlcnRpY2FsU2Nyb2xsP2UrPXM/MTp0aGlzLndyYXBwZXJXaWR0aDpvKz1zPzE6dGhpcy53cmFwcGVySGVpZ2h0O2JyZWFrO2Nhc2UgdGhpcy5vcHRpb25zLmtleUJpbmRpbmdzLnBhZ2VEb3duOnRoaXMuaGFzSG9yaXpvbnRhbFNjcm9sbCYmIXRoaXMuaGFzVmVydGljYWxTY3JvbGw/ZS09cz8xOnRoaXMud3JhcHBlcldpZHRoOm8tPXM/MTp0aGlzLndyYXBwZXJIZWlnaHQ7YnJlYWs7Y2FzZSB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3MuZW5kOmU9cz90aGlzLnBhZ2VzLmxlbmd0aC0xOnRoaXMubWF4U2Nyb2xsWCxvPXM/dGhpcy5wYWdlc1swXS5sZW5ndGgtMTp0aGlzLm1heFNjcm9sbFk7YnJlYWs7Y2FzZSB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3MuaG9tZTpvPWU9MDticmVhaztjYXNlIHRoaXMub3B0aW9ucy5rZXlCaW5kaW5ncy5sZWZ0OmUrPXM/LTE6NSt0aGlzLmtleUFjY2VsZXJhdGlvbj4+MDticmVhaztjYXNlIHRoaXMub3B0aW9ucy5rZXlCaW5kaW5ncy51cDpvKz1zPzE6NSt0aGlzLmtleUFjY2VsZXJhdGlvbj4+MDticmVhaztjYXNlIHRoaXMub3B0aW9ucy5rZXlCaW5kaW5ncy5yaWdodDplLT1zPy0xOjUrdGhpcy5rZXlBY2NlbGVyYXRpb24+PjA7YnJlYWs7Y2FzZSB0aGlzLm9wdGlvbnMua2V5QmluZGluZ3MuZG93bjpvLT1zPzE6NSt0aGlzLmtleUFjY2VsZXJhdGlvbj4+MDticmVhaztkZWZhdWx0OnJldHVybn1zP3RoaXMuZ29Ub1BhZ2UoZSxvKTooMDxlPyhlPTAsdGhpcy5rZXlBY2NlbGVyYXRpb249MCk6ZTx0aGlzLm1heFNjcm9sbFgmJihlPXRoaXMubWF4U2Nyb2xsWCx0aGlzLmtleUFjY2VsZXJhdGlvbj0wKSwwPG8/KG89MCx0aGlzLmtleUFjY2VsZXJhdGlvbj0wKTpvPHRoaXMubWF4U2Nyb2xsWSYmKG89dGhpcy5tYXhTY3JvbGxZLHRoaXMua2V5QWNjZWxlcmF0aW9uPTApLHRoaXMuc2Nyb2xsVG8oZSxvLDApLHRoaXMua2V5VGltZT1uKX19LF9hbmltYXRlOmZ1bmN0aW9uKG4scixoLGEpe3ZhciBsPXRoaXMsYz10aGlzLngscD10aGlzLnksZD1tLmdldFRpbWUoKSx1PWQraDt0aGlzLmlzQW5pbWF0aW5nPSEwLGZ1bmN0aW9uIHQoKXt2YXIgaSxzLGUsbz1tLmdldFRpbWUoKTtpZih1PD1vKXJldHVybiBsLmlzQW5pbWF0aW5nPSExLGwuX3RyYW5zbGF0ZShuLHIpLHZvaWQobC5yZXNldFBvc2l0aW9uKGwub3B0aW9ucy5ib3VuY2VUaW1lKXx8bC5fZXhlY0V2ZW50KFwic2Nyb2xsRW5kXCIpKTtlPWEobz0oby1kKS9oKSxpPShuLWMpKmUrYyxzPShyLXApKmUrcCxsLl90cmFuc2xhdGUoaSxzKSxsLmlzQW5pbWF0aW5nJiZmKHQpfSgpfSxoYW5kbGVFdmVudDpmdW5jdGlvbih0KXtzd2l0Y2godC50eXBlKXtjYXNlXCJ0b3VjaHN0YXJ0XCI6Y2FzZVwicG9pbnRlcmRvd25cIjpjYXNlXCJNU1BvaW50ZXJEb3duXCI6Y2FzZVwibW91c2Vkb3duXCI6dGhpcy5fc3RhcnQodCk7YnJlYWs7Y2FzZVwidG91Y2htb3ZlXCI6Y2FzZVwicG9pbnRlcm1vdmVcIjpjYXNlXCJNU1BvaW50ZXJNb3ZlXCI6Y2FzZVwibW91c2Vtb3ZlXCI6dGhpcy5fbW92ZSh0KTticmVhaztjYXNlXCJ0b3VjaGVuZFwiOmNhc2VcInBvaW50ZXJ1cFwiOmNhc2VcIk1TUG9pbnRlclVwXCI6Y2FzZVwibW91c2V1cFwiOmNhc2VcInRvdWNoY2FuY2VsXCI6Y2FzZVwicG9pbnRlcmNhbmNlbFwiOmNhc2VcIk1TUG9pbnRlckNhbmNlbFwiOmNhc2VcIm1vdXNlY2FuY2VsXCI6dGhpcy5fZW5kKHQpO2JyZWFrO2Nhc2VcIm9yaWVudGF0aW9uY2hhbmdlXCI6Y2FzZVwicmVzaXplXCI6dGhpcy5fcmVzaXplKCk7YnJlYWs7Y2FzZVwidHJhbnNpdGlvbmVuZFwiOmNhc2VcIndlYmtpdFRyYW5zaXRpb25FbmRcIjpjYXNlXCJvVHJhbnNpdGlvbkVuZFwiOmNhc2VcIk1TVHJhbnNpdGlvbkVuZFwiOnRoaXMuX3RyYW5zaXRpb25FbmQodCk7YnJlYWs7Y2FzZVwid2hlZWxcIjpjYXNlXCJET01Nb3VzZVNjcm9sbFwiOmNhc2VcIm1vdXNld2hlZWxcIjp0aGlzLl93aGVlbCh0KTticmVhaztjYXNlXCJrZXlkb3duXCI6dGhpcy5fa2V5KHQpO2JyZWFrO2Nhc2VcImNsaWNrXCI6dGhpcy5lbmFibGVkJiYhdC5fY29uc3RydWN0ZWQmJih0LnByZXZlbnREZWZhdWx0KCksdC5zdG9wUHJvcGFnYXRpb24oKSl9fX0sYS5wcm90b3R5cGU9e2hhbmRsZUV2ZW50OmZ1bmN0aW9uKHQpe3N3aXRjaCh0LnR5cGUpe2Nhc2VcInRvdWNoc3RhcnRcIjpjYXNlXCJwb2ludGVyZG93blwiOmNhc2VcIk1TUG9pbnRlckRvd25cIjpjYXNlXCJtb3VzZWRvd25cIjp0aGlzLl9zdGFydCh0KTticmVhaztjYXNlXCJ0b3VjaG1vdmVcIjpjYXNlXCJwb2ludGVybW92ZVwiOmNhc2VcIk1TUG9pbnRlck1vdmVcIjpjYXNlXCJtb3VzZW1vdmVcIjp0aGlzLl9tb3ZlKHQpO2JyZWFrO2Nhc2VcInRvdWNoZW5kXCI6Y2FzZVwicG9pbnRlcnVwXCI6Y2FzZVwiTVNQb2ludGVyVXBcIjpjYXNlXCJtb3VzZXVwXCI6Y2FzZVwidG91Y2hjYW5jZWxcIjpjYXNlXCJwb2ludGVyY2FuY2VsXCI6Y2FzZVwiTVNQb2ludGVyQ2FuY2VsXCI6Y2FzZVwibW91c2VjYW5jZWxcIjp0aGlzLl9lbmQodCl9fSxkZXN0cm95OmZ1bmN0aW9uKCl7dGhpcy5vcHRpb25zLmZhZGVTY3JvbGxiYXJzJiYoY2xlYXJUaW1lb3V0KHRoaXMuZmFkZVRpbWVvdXQpLHRoaXMuZmFkZVRpbWVvdXQ9bnVsbCksdGhpcy5vcHRpb25zLmludGVyYWN0aXZlJiYobS5yZW1vdmVFdmVudCh0aGlzLmluZGljYXRvcixcInRvdWNoc3RhcnRcIix0aGlzKSxtLnJlbW92ZUV2ZW50KHRoaXMuaW5kaWNhdG9yLG0ucHJlZml4UG9pbnRlckV2ZW50KFwicG9pbnRlcmRvd25cIiksdGhpcyksbS5yZW1vdmVFdmVudCh0aGlzLmluZGljYXRvcixcIm1vdXNlZG93blwiLHRoaXMpLG0ucmVtb3ZlRXZlbnQocixcInRvdWNobW92ZVwiLHRoaXMpLG0ucmVtb3ZlRXZlbnQocixtLnByZWZpeFBvaW50ZXJFdmVudChcInBvaW50ZXJtb3ZlXCIpLHRoaXMpLG0ucmVtb3ZlRXZlbnQocixcIm1vdXNlbW92ZVwiLHRoaXMpLG0ucmVtb3ZlRXZlbnQocixcInRvdWNoZW5kXCIsdGhpcyksbS5yZW1vdmVFdmVudChyLG0ucHJlZml4UG9pbnRlckV2ZW50KFwicG9pbnRlcnVwXCIpLHRoaXMpLG0ucmVtb3ZlRXZlbnQocixcIm1vdXNldXBcIix0aGlzKSksdGhpcy5vcHRpb25zLmRlZmF1bHRTY3JvbGxiYXJzJiZ0aGlzLndyYXBwZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLndyYXBwZXIpfSxfc3RhcnQ6ZnVuY3Rpb24odCl7dmFyIGk9dC50b3VjaGVzP3QudG91Y2hlc1swXTp0O3QucHJldmVudERlZmF1bHQoKSx0LnN0b3BQcm9wYWdhdGlvbigpLHRoaXMudHJhbnNpdGlvblRpbWUoKSx0aGlzLmluaXRpYXRlZD0hMCx0aGlzLm1vdmVkPSExLHRoaXMubGFzdFBvaW50WD1pLnBhZ2VYLHRoaXMubGFzdFBvaW50WT1pLnBhZ2VZLHRoaXMuc3RhcnRUaW1lPW0uZ2V0VGltZSgpLHRoaXMub3B0aW9ucy5kaXNhYmxlVG91Y2h8fG0uYWRkRXZlbnQocixcInRvdWNobW92ZVwiLHRoaXMpLHRoaXMub3B0aW9ucy5kaXNhYmxlUG9pbnRlcnx8bS5hZGRFdmVudChyLG0ucHJlZml4UG9pbnRlckV2ZW50KFwicG9pbnRlcm1vdmVcIiksdGhpcyksdGhpcy5vcHRpb25zLmRpc2FibGVNb3VzZXx8bS5hZGRFdmVudChyLFwibW91c2Vtb3ZlXCIsdGhpcyksdGhpcy5zY3JvbGxlci5fZXhlY0V2ZW50KFwiYmVmb3JlU2Nyb2xsU3RhcnRcIil9LF9tb3ZlOmZ1bmN0aW9uKHQpe3ZhciBpLHMsZSxvLG49dC50b3VjaGVzP3QudG91Y2hlc1swXTp0O20uZ2V0VGltZSgpO3RoaXMubW92ZWR8fHRoaXMuc2Nyb2xsZXIuX2V4ZWNFdmVudChcInNjcm9sbFN0YXJ0XCIpLHRoaXMubW92ZWQ9ITAsaT1uLnBhZ2VYLXRoaXMubGFzdFBvaW50WCx0aGlzLmxhc3RQb2ludFg9bi5wYWdlWCxzPW4ucGFnZVktdGhpcy5sYXN0UG9pbnRZLHRoaXMubGFzdFBvaW50WT1uLnBhZ2VZLGU9dGhpcy54K2ksbz10aGlzLnkrcyx0aGlzLl9wb3MoZSxvKSx0LnByZXZlbnREZWZhdWx0KCksdC5zdG9wUHJvcGFnYXRpb24oKX0sX2VuZDpmdW5jdGlvbih0KXtpZih0aGlzLmluaXRpYXRlZCl7aWYodGhpcy5pbml0aWF0ZWQ9ITEsdC5wcmV2ZW50RGVmYXVsdCgpLHQuc3RvcFByb3BhZ2F0aW9uKCksbS5yZW1vdmVFdmVudChyLFwidG91Y2htb3ZlXCIsdGhpcyksbS5yZW1vdmVFdmVudChyLG0ucHJlZml4UG9pbnRlckV2ZW50KFwicG9pbnRlcm1vdmVcIiksdGhpcyksbS5yZW1vdmVFdmVudChyLFwibW91c2Vtb3ZlXCIsdGhpcyksdGhpcy5zY3JvbGxlci5vcHRpb25zLnNuYXApe3ZhciBpPXRoaXMuc2Nyb2xsZXIuX25lYXJlc3RTbmFwKHRoaXMuc2Nyb2xsZXIueCx0aGlzLnNjcm9sbGVyLnkpLHM9dGhpcy5vcHRpb25zLnNuYXBTcGVlZHx8cC5tYXgocC5tYXgocC5taW4ocC5hYnModGhpcy5zY3JvbGxlci54LWkueCksMWUzKSxwLm1pbihwLmFicyh0aGlzLnNjcm9sbGVyLnktaS55KSwxZTMpKSwzMDApO3RoaXMuc2Nyb2xsZXIueD09aS54JiZ0aGlzLnNjcm9sbGVyLnk9PWkueXx8KHRoaXMuc2Nyb2xsZXIuZGlyZWN0aW9uWD0wLHRoaXMuc2Nyb2xsZXIuZGlyZWN0aW9uWT0wLHRoaXMuc2Nyb2xsZXIuY3VycmVudFBhZ2U9aSx0aGlzLnNjcm9sbGVyLnNjcm9sbFRvKGkueCxpLnkscyx0aGlzLnNjcm9sbGVyLm9wdGlvbnMuYm91bmNlRWFzaW5nKSl9dGhpcy5tb3ZlZCYmdGhpcy5zY3JvbGxlci5fZXhlY0V2ZW50KFwic2Nyb2xsRW5kXCIpfX0sdHJhbnNpdGlvblRpbWU6ZnVuY3Rpb24odCl7dD10fHwwO3ZhciBpPW0uc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uO2lmKGkmJih0aGlzLmluZGljYXRvclN0eWxlW2ldPXQrXCJtc1wiLCF0JiZtLmlzQmFkQW5kcm9pZCkpe3RoaXMuaW5kaWNhdG9yU3R5bGVbaV09XCIwLjAwMDFtc1wiO3ZhciBzPXRoaXM7ZihmdW5jdGlvbigpe1wiMC4wMDAxbXNcIj09PXMuaW5kaWNhdG9yU3R5bGVbaV0mJihzLmluZGljYXRvclN0eWxlW2ldPVwiMHNcIil9KX19LHRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjpmdW5jdGlvbih0KXt0aGlzLmluZGljYXRvclN0eWxlW20uc3R5bGUudHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uXT10fSxyZWZyZXNoOmZ1bmN0aW9uKCl7dGhpcy50cmFuc2l0aW9uVGltZSgpLHRoaXMub3B0aW9ucy5saXN0ZW5YJiYhdGhpcy5vcHRpb25zLmxpc3Rlblk/dGhpcy5pbmRpY2F0b3JTdHlsZS5kaXNwbGF5PXRoaXMuc2Nyb2xsZXIuaGFzSG9yaXpvbnRhbFNjcm9sbD9cImJsb2NrXCI6XCJub25lXCI6dGhpcy5vcHRpb25zLmxpc3RlblkmJiF0aGlzLm9wdGlvbnMubGlzdGVuWD90aGlzLmluZGljYXRvclN0eWxlLmRpc3BsYXk9dGhpcy5zY3JvbGxlci5oYXNWZXJ0aWNhbFNjcm9sbD9cImJsb2NrXCI6XCJub25lXCI6dGhpcy5pbmRpY2F0b3JTdHlsZS5kaXNwbGF5PXRoaXMuc2Nyb2xsZXIuaGFzSG9yaXpvbnRhbFNjcm9sbHx8dGhpcy5zY3JvbGxlci5oYXNWZXJ0aWNhbFNjcm9sbD9cImJsb2NrXCI6XCJub25lXCIsdGhpcy5zY3JvbGxlci5oYXNIb3Jpem9udGFsU2Nyb2xsJiZ0aGlzLnNjcm9sbGVyLmhhc1ZlcnRpY2FsU2Nyb2xsPyhtLmFkZENsYXNzKHRoaXMud3JhcHBlcixcImlTY3JvbGxCb3RoU2Nyb2xsYmFyc1wiKSxtLnJlbW92ZUNsYXNzKHRoaXMud3JhcHBlcixcImlTY3JvbGxMb25lU2Nyb2xsYmFyXCIpLHRoaXMub3B0aW9ucy5kZWZhdWx0U2Nyb2xsYmFycyYmdGhpcy5vcHRpb25zLmN1c3RvbVN0eWxlJiYodGhpcy5vcHRpb25zLmxpc3Rlblg/dGhpcy53cmFwcGVyLnN0eWxlLnJpZ2h0PVwiOHB4XCI6dGhpcy53cmFwcGVyLnN0eWxlLmJvdHRvbT1cIjhweFwiKSk6KG0ucmVtb3ZlQ2xhc3ModGhpcy53cmFwcGVyLFwiaVNjcm9sbEJvdGhTY3JvbGxiYXJzXCIpLG0uYWRkQ2xhc3ModGhpcy53cmFwcGVyLFwiaVNjcm9sbExvbmVTY3JvbGxiYXJcIiksdGhpcy5vcHRpb25zLmRlZmF1bHRTY3JvbGxiYXJzJiZ0aGlzLm9wdGlvbnMuY3VzdG9tU3R5bGUmJih0aGlzLm9wdGlvbnMubGlzdGVuWD90aGlzLndyYXBwZXIuc3R5bGUucmlnaHQ9XCIycHhcIjp0aGlzLndyYXBwZXIuc3R5bGUuYm90dG9tPVwiMnB4XCIpKTt0aGlzLndyYXBwZXIub2Zmc2V0SGVpZ2h0O3RoaXMub3B0aW9ucy5saXN0ZW5YJiYodGhpcy53cmFwcGVyV2lkdGg9dGhpcy53cmFwcGVyLmNsaWVudFdpZHRoLHRoaXMub3B0aW9ucy5yZXNpemU/KHRoaXMuaW5kaWNhdG9yV2lkdGg9cC5tYXgocC5yb3VuZCh0aGlzLndyYXBwZXJXaWR0aCp0aGlzLndyYXBwZXJXaWR0aC8odGhpcy5zY3JvbGxlci5zY3JvbGxlcldpZHRofHx0aGlzLndyYXBwZXJXaWR0aHx8MSkpLDgpLHRoaXMuaW5kaWNhdG9yU3R5bGUud2lkdGg9dGhpcy5pbmRpY2F0b3JXaWR0aCtcInB4XCIpOnRoaXMuaW5kaWNhdG9yV2lkdGg9dGhpcy5pbmRpY2F0b3IuY2xpZW50V2lkdGgsdGhpcy5tYXhQb3NYPXRoaXMud3JhcHBlcldpZHRoLXRoaXMuaW5kaWNhdG9yV2lkdGgsXCJjbGlwXCI9PXRoaXMub3B0aW9ucy5zaHJpbms/KHRoaXMubWluQm91bmRhcnlYPTgtdGhpcy5pbmRpY2F0b3JXaWR0aCx0aGlzLm1heEJvdW5kYXJ5WD10aGlzLndyYXBwZXJXaWR0aC04KToodGhpcy5taW5Cb3VuZGFyeVg9MCx0aGlzLm1heEJvdW5kYXJ5WD10aGlzLm1heFBvc1gpLHRoaXMuc2l6ZVJhdGlvWD10aGlzLm9wdGlvbnMuc3BlZWRSYXRpb1h8fHRoaXMuc2Nyb2xsZXIubWF4U2Nyb2xsWCYmdGhpcy5tYXhQb3NYL3RoaXMuc2Nyb2xsZXIubWF4U2Nyb2xsWCksdGhpcy5vcHRpb25zLmxpc3RlblkmJih0aGlzLndyYXBwZXJIZWlnaHQ9dGhpcy53cmFwcGVyLmNsaWVudEhlaWdodCx0aGlzLm9wdGlvbnMucmVzaXplPyh0aGlzLmluZGljYXRvckhlaWdodD1wLm1heChwLnJvdW5kKHRoaXMud3JhcHBlckhlaWdodCp0aGlzLndyYXBwZXJIZWlnaHQvKHRoaXMuc2Nyb2xsZXIuc2Nyb2xsZXJIZWlnaHR8fHRoaXMud3JhcHBlckhlaWdodHx8MSkpLDgpLHRoaXMuaW5kaWNhdG9yU3R5bGUuaGVpZ2h0PXRoaXMuaW5kaWNhdG9ySGVpZ2h0K1wicHhcIik6dGhpcy5pbmRpY2F0b3JIZWlnaHQ9dGhpcy5pbmRpY2F0b3IuY2xpZW50SGVpZ2h0LHRoaXMubWF4UG9zWT10aGlzLndyYXBwZXJIZWlnaHQtdGhpcy5pbmRpY2F0b3JIZWlnaHQsXCJjbGlwXCI9PXRoaXMub3B0aW9ucy5zaHJpbms/KHRoaXMubWluQm91bmRhcnlZPTgtdGhpcy5pbmRpY2F0b3JIZWlnaHQsdGhpcy5tYXhCb3VuZGFyeVk9dGhpcy53cmFwcGVySGVpZ2h0LTgpOih0aGlzLm1pbkJvdW5kYXJ5WT0wLHRoaXMubWF4Qm91bmRhcnlZPXRoaXMubWF4UG9zWSksdGhpcy5tYXhQb3NZPXRoaXMud3JhcHBlckhlaWdodC10aGlzLmluZGljYXRvckhlaWdodCx0aGlzLnNpemVSYXRpb1k9dGhpcy5vcHRpb25zLnNwZWVkUmF0aW9ZfHx0aGlzLnNjcm9sbGVyLm1heFNjcm9sbFkmJnRoaXMubWF4UG9zWS90aGlzLnNjcm9sbGVyLm1heFNjcm9sbFkpLHRoaXMudXBkYXRlUG9zaXRpb24oKX0sdXBkYXRlUG9zaXRpb246ZnVuY3Rpb24oKXt2YXIgdD10aGlzLm9wdGlvbnMubGlzdGVuWCYmcC5yb3VuZCh0aGlzLnNpemVSYXRpb1gqdGhpcy5zY3JvbGxlci54KXx8MCxpPXRoaXMub3B0aW9ucy5saXN0ZW5ZJiZwLnJvdW5kKHRoaXMuc2l6ZVJhdGlvWSp0aGlzLnNjcm9sbGVyLnkpfHwwO3RoaXMub3B0aW9ucy5pZ25vcmVCb3VuZGFyaWVzfHwodDx0aGlzLm1pbkJvdW5kYXJ5WD8oXCJzY2FsZVwiPT10aGlzLm9wdGlvbnMuc2hyaW5rJiYodGhpcy53aWR0aD1wLm1heCh0aGlzLmluZGljYXRvcldpZHRoK3QsOCksdGhpcy5pbmRpY2F0b3JTdHlsZS53aWR0aD10aGlzLndpZHRoK1wicHhcIiksdD10aGlzLm1pbkJvdW5kYXJ5WCk6dD50aGlzLm1heEJvdW5kYXJ5WD90PVwic2NhbGVcIj09dGhpcy5vcHRpb25zLnNocmluaz8odGhpcy53aWR0aD1wLm1heCh0aGlzLmluZGljYXRvcldpZHRoLSh0LXRoaXMubWF4UG9zWCksOCksdGhpcy5pbmRpY2F0b3JTdHlsZS53aWR0aD10aGlzLndpZHRoK1wicHhcIix0aGlzLm1heFBvc1grdGhpcy5pbmRpY2F0b3JXaWR0aC10aGlzLndpZHRoKTp0aGlzLm1heEJvdW5kYXJ5WDpcInNjYWxlXCI9PXRoaXMub3B0aW9ucy5zaHJpbmsmJnRoaXMud2lkdGghPXRoaXMuaW5kaWNhdG9yV2lkdGgmJih0aGlzLndpZHRoPXRoaXMuaW5kaWNhdG9yV2lkdGgsdGhpcy5pbmRpY2F0b3JTdHlsZS53aWR0aD10aGlzLndpZHRoK1wicHhcIiksaTx0aGlzLm1pbkJvdW5kYXJ5WT8oXCJzY2FsZVwiPT10aGlzLm9wdGlvbnMuc2hyaW5rJiYodGhpcy5oZWlnaHQ9cC5tYXgodGhpcy5pbmRpY2F0b3JIZWlnaHQrMyppLDgpLHRoaXMuaW5kaWNhdG9yU3R5bGUuaGVpZ2h0PXRoaXMuaGVpZ2h0K1wicHhcIiksaT10aGlzLm1pbkJvdW5kYXJ5WSk6aT50aGlzLm1heEJvdW5kYXJ5WT9pPVwic2NhbGVcIj09dGhpcy5vcHRpb25zLnNocmluaz8odGhpcy5oZWlnaHQ9cC5tYXgodGhpcy5pbmRpY2F0b3JIZWlnaHQtMyooaS10aGlzLm1heFBvc1kpLDgpLHRoaXMuaW5kaWNhdG9yU3R5bGUuaGVpZ2h0PXRoaXMuaGVpZ2h0K1wicHhcIix0aGlzLm1heFBvc1krdGhpcy5pbmRpY2F0b3JIZWlnaHQtdGhpcy5oZWlnaHQpOnRoaXMubWF4Qm91bmRhcnlZOlwic2NhbGVcIj09dGhpcy5vcHRpb25zLnNocmluayYmdGhpcy5oZWlnaHQhPXRoaXMuaW5kaWNhdG9ySGVpZ2h0JiYodGhpcy5oZWlnaHQ9dGhpcy5pbmRpY2F0b3JIZWlnaHQsdGhpcy5pbmRpY2F0b3JTdHlsZS5oZWlnaHQ9dGhpcy5oZWlnaHQrXCJweFwiKSksdGhpcy54PXQsdGhpcy55PWksdGhpcy5zY3JvbGxlci5vcHRpb25zLnVzZVRyYW5zZm9ybT90aGlzLmluZGljYXRvclN0eWxlW20uc3R5bGUudHJhbnNmb3JtXT1cInRyYW5zbGF0ZShcIit0K1wicHgsXCIraStcInB4KVwiK3RoaXMuc2Nyb2xsZXIudHJhbnNsYXRlWjoodGhpcy5pbmRpY2F0b3JTdHlsZS5sZWZ0PXQrXCJweFwiLHRoaXMuaW5kaWNhdG9yU3R5bGUudG9wPWkrXCJweFwiKX0sX3BvczpmdW5jdGlvbih0LGkpe3Q8MD90PTA6dD50aGlzLm1heFBvc1gmJih0PXRoaXMubWF4UG9zWCksaTwwP2k9MDppPnRoaXMubWF4UG9zWSYmKGk9dGhpcy5tYXhQb3NZKSx0PXRoaXMub3B0aW9ucy5saXN0ZW5YP3Aucm91bmQodC90aGlzLnNpemVSYXRpb1gpOnRoaXMuc2Nyb2xsZXIueCxpPXRoaXMub3B0aW9ucy5saXN0ZW5ZP3Aucm91bmQoaS90aGlzLnNpemVSYXRpb1kpOnRoaXMuc2Nyb2xsZXIueSx0aGlzLnNjcm9sbGVyLnNjcm9sbFRvKHQsaSl9LGZhZGU6ZnVuY3Rpb24odCxpKXtpZighaXx8dGhpcy52aXNpYmxlKXtjbGVhclRpbWVvdXQodGhpcy5mYWRlVGltZW91dCksdGhpcy5mYWRlVGltZW91dD1udWxsO3ZhciBzPXQ/MjUwOjUwMCxlPXQ/MDozMDA7dD10P1wiMVwiOlwiMFwiLHRoaXMud3JhcHBlclN0eWxlW20uc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uXT1zK1wibXNcIix0aGlzLmZhZGVUaW1lb3V0PXNldFRpbWVvdXQoZnVuY3Rpb24odCl7dGhpcy53cmFwcGVyU3R5bGUub3BhY2l0eT10LHRoaXMudmlzaWJsZT0rdH0uYmluZCh0aGlzLHQpLGUpfX19LHQudXRpbHM9bSxcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlJiZtb2R1bGUuZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz10OiB0cnVlPyghKF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fID0gKGZ1bmN0aW9uKCl7cmV0dXJuIHR9KS5jYWxsKGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18sIGV4cG9ydHMsIG1vZHVsZSksXG5cdFx0XHRcdF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fICE9PSB1bmRlZmluZWQgJiYgKG1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18pKSx2b2lkIDAhPT1yJiYoci5JU2Nyb2xsPXQpKTp1bmRlZmluZWR9KHdpbmRvdyxkb2N1bWVudCxNYXRoKSxcbi8qIVxuKiBTY3JvbGxvdmVyZmxvdyAyLjAuNiBtb2R1bGUgZm9yIGZ1bGxQYWdlLmpzID49IDNcbiogaHR0cHM6Ly9naXRodWIuY29tL2FsdmFyb3RyaWdvL2Z1bGxQYWdlLmpzXG4qIEBsaWNlbnNlIE1JVCBsaWNlbnNlZFxuKlxuKiBDb3B5cmlnaHQgKEMpIDIwMTUgYWx2YXJvdHJpZ28uY29tIC0gQSBwcm9qZWN0IGJ5IEFsdmFybyBUcmlnb1xuKi9cbmZ1bmN0aW9uKGwsYyl7bC5mcF9zY3JvbGxvdmVyZmxvdz1mdW5jdGlvbigpe2wuSVNjcm9sbHx8KGwuSVNjcm9sbD1tb2R1bGUuZXhwb3J0cyk7dmFyIHM9XCJmcC1zY3JvbGxhYmxlXCIsbj1cIi5cIitzLHQ9XCIuYWN0aXZlXCIsZD1cIi5mcC1zZWN0aW9uXCIsZT1kK3Qsbz1cIi5mcC1zbGlkZVwiLHU9XCIuZnAtdGFibGVDZWxsXCI7ZnVuY3Rpb24gcigpe3ZhciBwPXRoaXM7ZnVuY3Rpb24gcygpe2ZwX3V0aWxzLmhhc0NsYXNzKGMuYm9keSxcImZwLXJlc3BvbnNpdmVcIik/aShlKTppKHQpfWZ1bmN0aW9uIHQodCl7aWYoIWZwX3V0aWxzLmhhc0NsYXNzKHQsXCJmcC1ub3Njcm9sbFwiKSl7ZnBfdXRpbHMuY3NzKHQse292ZXJmbG93OlwiaGlkZGVuXCJ9KTt2YXIgaSxzLGUsbz1wLm9wdGlvbnMuc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLG49by53cmFwQ29udGVudCgpLHI9ZnBfdXRpbHMuY2xvc2VzdCh0LGQpLGg9by5zY3JvbGxhYmxlKHQpLGE9KHM9cixudWxsIT0oZT1mcF91dGlscy5jbG9zZXN0KHMsZCkpP3BhcnNlSW50KGdldENvbXB1dGVkU3R5bGUoZSlbXCJwYWRkaW5nLWJvdHRvbVwiXSkrcGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShlKVtcInBhZGRpbmctdG9wXCJdKTowKTtudWxsIT1oP2k9by5zY3JvbGxIZWlnaHQodCk6KGk9dC5zY3JvbGxIZWlnaHQscC5vcHRpb25zLnZlcnRpY2FsQ2VudGVyZWQmJihpPWYodSx0KVswXS5zY3JvbGxIZWlnaHQpKTt2YXIgbD1mcF91dGlscy5nZXRXaW5kb3dIZWlnaHQoKSxjPWwtYTtsPGkrYT9udWxsIT1oP28udXBkYXRlKHQsYyk6KHAub3B0aW9ucy52ZXJ0aWNhbENlbnRlcmVkPyhmcF91dGlscy53cmFwSW5uZXIoZih1LHQpWzBdLG4uc2Nyb2xsZXIpLGZwX3V0aWxzLndyYXBJbm5lcihmKHUsdClbMF0sbi5zY3JvbGxhYmxlKSk6KGZwX3V0aWxzLndyYXBJbm5lcih0LG4uc2Nyb2xsZXIpLGZwX3V0aWxzLndyYXBJbm5lcih0LG4uc2Nyb2xsYWJsZSkpLG8uY3JlYXRlKHQsYyxwLmlzY3JvbGxPcHRpb25zKSk6by5yZW1vdmUodCksZnBfdXRpbHMuY3NzKHQse292ZXJmbG93OlwiXCJ9KX19ZnVuY3Rpb24gaShzKXtmKGQpLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIGk9ZihvLHQpO2kubGVuZ3RoP2kuZm9yRWFjaChmdW5jdGlvbih0KXtzKHQpfSk6cyh0KX0pfWZ1bmN0aW9uIGUodCl7dmFyIGk9cC5vcHRpb25zLnNjcm9sbE92ZXJmbG93SGFuZGxlcjtmcF91dGlscy5oYXNDbGFzcyhmcF91dGlscy5jbG9zZXN0KHQsZCksXCJmcC1hdXRvLWhlaWdodC1yZXNwb25zaXZlXCIpJiZpLnJlbW92ZSh0KX1wLm9wdGlvbnM9bnVsbCxwLmluaXQ9ZnVuY3Rpb24odCxpKXtyZXR1cm4gcC5vcHRpb25zPXQscC5pc2Nyb2xsT3B0aW9ucz1pLFwiY29tcGxldGVcIj09PWMucmVhZHlTdGF0ZSYmKHMoKSxmdWxscGFnZV9hcGkuc2hhcmVkLmFmdGVyUmVuZGVyQWN0aW9ucygpKSxsLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsZnVuY3Rpb24oKXtzKCksZnVsbHBhZ2VfYXBpLnNoYXJlZC5hZnRlclJlbmRlckFjdGlvbnMoKX0pLHB9LHAuY3JlYXRlU2Nyb2xsQmFyRm9yQWxsPXMscC5jcmVhdGVTY3JvbGxCYXI9dH1JU2Nyb2xsLnByb3RvdHlwZS53aGVlbE9uPWZ1bmN0aW9uKCl7dGhpcy53cmFwcGVyLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLHRoaXMpLHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLHRoaXMpLHRoaXMud3JhcHBlci5hZGRFdmVudExpc3RlbmVyKFwiRE9NTW91c2VTY3JvbGxcIix0aGlzKX0sSVNjcm9sbC5wcm90b3R5cGUud2hlZWxPZmY9ZnVuY3Rpb24oKXt0aGlzLndyYXBwZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsdGhpcyksdGhpcy53cmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXdoZWVsXCIsdGhpcyksdGhpcy53cmFwcGVyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJET01Nb3VzZVNjcm9sbFwiLHRoaXMpfTt2YXIgZj1udWxsLGg9bnVsbCxhPXtyZWZyZXNoSWQ6bnVsbCxpU2Nyb2xsSW5zdGFuY2VzOltdLGxhc3RTY3JvbGxZOm51bGwsaGFzQmVlbkluaXQ6ITEsaXNjcm9sbE9wdGlvbnM6e3Njcm9sbGJhcnM6ITAsbW91c2VXaGVlbDohMCxoaWRlU2Nyb2xsYmFyczohMSxmYWRlU2Nyb2xsYmFyczohMSxkaXNhYmxlTW91c2U6ITAsaW50ZXJhY3RpdmVTY3JvbGxiYXJzOiEwfSxpbml0OmZ1bmN0aW9uKHQpe2Y9ZnBfdXRpbHMuJCxoPXQ7dmFyIGk9XCJvbnRvdWNoc3RhcnRcImluIGx8fDA8bmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHN8fG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cztyZXR1cm4gYS5pc2Nyb2xsT3B0aW9ucy5jbGljaz1pLGEuaGFzQmVlbkluaXQ9ITAsYS5pc2Nyb2xsT3B0aW9ucz1mcF91dGlscy5kZWVwRXh0ZW5kKGEuaXNjcm9sbE9wdGlvbnMsdC5zY3JvbGxPdmVyZmxvd09wdGlvbnMpLChuZXcgcikuaW5pdCh0LGEuaXNjcm9sbE9wdGlvbnMpfSx0b2dnbGVXaGVlbDpmdW5jdGlvbihzKXtmKG4sZihlKVswXSkuZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgaT10LmZwX2lzY3JvbGxJbnN0YW5jZTtudWxsIT1pJiYocz9pLndoZWVsT24oKTppLndoZWVsT2ZmKCkpfSl9LHNldElzY3JvbGw6ZnVuY3Rpb24odCxpKXtpZihhLmhhc0JlZW5Jbml0JiZ0KXt2YXIgcz1mcF91dGlscy5jbG9zZXN0KHQsbil8fGYobix0KSYmZihuLHQpWzBdLGU9aT9cImVuYWJsZVwiOlwiZGlzYWJsZVwiO3MmJnMuZnBfaXNjcm9sbEluc3RhbmNlW2VdKCl9fSxvbkxlYXZlOmZ1bmN0aW9uKCl7YS50b2dnbGVXaGVlbCghMSl9LGJlZm9yZUxlYXZlOmZ1bmN0aW9uKCl7YS5vbkxlYXZlKCl9LGFmdGVyTG9hZDpmdW5jdGlvbigpe2EudG9nZ2xlV2hlZWwoITApfSxjcmVhdGU6ZnVuY3Rpb24ocyxlLG8pe2YobixzKS5mb3JFYWNoKGZ1bmN0aW9uKHQpe2ZwX3V0aWxzLmNzcyh0LHtoZWlnaHQ6ZStcInB4XCJ9KTt2YXIgaT10LmZwX2lzY3JvbGxJbnN0YW5jZTtudWxsIT1pJiZhLmlTY3JvbGxJbnN0YW5jZXMuZm9yRWFjaChmdW5jdGlvbih0KXt0LmRlc3Ryb3koKX0pLGk9bmV3IElTY3JvbGwodCxvKSxhLmlTY3JvbGxJbnN0YW5jZXMucHVzaChpKSxmcF91dGlscy5oYXNDbGFzcyhmcF91dGlscy5jbG9zZXN0KHMsZCksXCJhY3RpdmVcIil8fGkud2hlZWxPZmYoKSx0LmZwX2lzY3JvbGxJbnN0YW5jZT1pfSl9LGlzU2Nyb2xsZWQ6ZnVuY3Rpb24odCxpKXt2YXIgcz1pLmZwX2lzY3JvbGxJbnN0YW5jZTtpZighcylyZXR1cm4hMDtpZihcInRvcFwiPT09dClyZXR1cm4gMDw9cy55JiYhZnBfdXRpbHMuZ2V0U2Nyb2xsVG9wKGkpO2lmKFwiYm90dG9tXCI9PT10KXt2YXIgZT1hLmxhc3RTY3JvbGxZPT09cy55O3JldHVybiBhLmxhc3RTY3JvbGxZPXMueSwoZT8xOjApKygwLXMueSkrZnBfdXRpbHMuZ2V0U2Nyb2xsVG9wKGkpK2kub2Zmc2V0SGVpZ2h0Pj1pLnNjcm9sbEhlaWdodH19LHNjcm9sbGFibGU6ZnVuY3Rpb24odCl7cmV0dXJuIGYoXCIuZnAtc2xpZGVzXCIsdCkubGVuZ3RoP2YobixmKFwiLmZwLXNsaWRlLmFjdGl2ZVwiLHQpWzBdKVswXTpmKG4sdClbMF19LHNjcm9sbEhlaWdodDpmdW5jdGlvbih0KXtyZXR1cm4gZihcIi5mcC1zY3JvbGxlclwiLGYobix0KVswXSlbMF0uc2Nyb2xsSGVpZ2h0fSxyZW1vdmU6ZnVuY3Rpb24odCl7aWYobnVsbCE9dCl7dmFyIGk9ZihuLHQpWzBdO2lmKG51bGwhPWkpe3ZhciBzPWkuZnBfaXNjcm9sbEluc3RhbmNlO251bGwhPXMmJnMuZGVzdHJveSgpLGkuZnBfaXNjcm9sbEluc3RhbmNlPW51bGwsZnBfdXRpbHMudW53cmFwKGYoXCIuZnAtc2Nyb2xsZXJcIix0KVswXSksZnBfdXRpbHMudW53cmFwKGYobix0KVswXSl9fX0sdXBkYXRlOmZ1bmN0aW9uKHQsaSl7Y2xlYXJUaW1lb3V0KGEucmVmcmVzaElkKSxhLnJlZnJlc2hJZD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YS5pU2Nyb2xsSW5zdGFuY2VzLmZvckVhY2goZnVuY3Rpb24odCl7dC5yZWZyZXNoKCksZnVsbHBhZ2VfYXBpLnNpbGVudE1vdmVUbyhmcF91dGlscy5pbmRleChmKGUpWzBdKSsxKX0pfSwxNTApLGZwX3V0aWxzLmNzcyhmKG4sdClbMF0se2hlaWdodDppK1wicHhcIn0pLGgudmVydGljYWxDZW50ZXJlZCYmZnBfdXRpbHMuY3NzKGYobix0KVswXS5wYXJlbnROb2RlLHtoZWlnaHQ6aStcInB4XCJ9KX0sd3JhcENvbnRlbnQ6ZnVuY3Rpb24oKXt2YXIgdD1jLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dC5jbGFzc05hbWU9czt2YXIgaT1jLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7cmV0dXJuIGkuY2xhc3NOYW1lPVwiZnAtc2Nyb2xsZXJcIix7c2Nyb2xsYWJsZTp0LHNjcm9sbGVyOml9fX07cmV0dXJue2lzY3JvbGxIYW5kbGVyOmF9fSgpfSh3aW5kb3csZG9jdW1lbnQpO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2Nyb2xsb3ZlcmZsb3cubWluLmpzLm1hcFxuXG5cbi8qKiovIH0pLFxuLyogNTIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIF9fV0VCUEFDS19BTURfREVGSU5FX1JFU1VMVF9fOy8qIVxuICogZnVsbFBhZ2UgMy4xLjAgLSBFeHRlbnNpb25zIDAuMi4yXG4gKiBodHRwczovL2dpdGh1Yi5jb20vYWx2YXJvdHJpZ28vZnVsbFBhZ2UuanNcbiAqIEBsaWNlbnNlIGh0dHA6Ly9hbHZhcm90cmlnby5jb20vZnVsbFBhZ2UvZXh0ZW5zaW9ucy8jbGljZW5zZVxuICpcbiAqIENvcHlyaWdodCAoQykgMjAxOCBhbHZhcm90cmlnby5jb20gLSBBIHByb2plY3QgYnkgQWx2YXJvIFRyaWdvXG4gKi9cbiFmdW5jdGlvbihlLHQsbixvLHIpeyB0cnVlPyEoX19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gPSAoZnVuY3Rpb24oKXtyZXR1cm4gZS5mdWxscGFnZT1vKHQsbiksZS5mdWxscGFnZX0pLmNhbGwoZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXywgZXhwb3J0cywgbW9kdWxlKSxcblx0XHRcdFx0X19XRUJQQUNLX0FNRF9ERUZJTkVfUkVTVUxUX18gIT09IHVuZGVmaW5lZCAmJiAobW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfQU1EX0RFRklORV9SRVNVTFRfXykpOnVuZGVmaW5lZH0odGhpcyx3aW5kb3csZG9jdW1lbnQsZnVuY3Rpb24oYW4sY24pe1widXNlIHN0cmljdFwiO3ZhciBzbj1cImZ1bGxwYWdlLXdyYXBwZXJcIix1bj1cIi5cIitzbixmbj1cImZwLXJlc3BvbnNpdmVcIixkbj1cImZwLW5vdHJhbnNpdGlvblwiLHZuPVwiZnAtZGVzdHJveWVkXCIscG49XCJmcC1lbmFibGVkXCIsaG49XCJmcC12aWV3aW5nXCIsZ249XCJhY3RpdmVcIixtbj1cIi5cIitnbixTbj1cImZwLWNvbXBsZXRlbHlcIixibj1cImZwLXNlY3Rpb25cIix3bj1cIi5cIitibix5bj13bittbixFbj1cImZwLXRhYmxlQ2VsbFwiLHhuPVwiLlwiK0VuLExuPVwiZnAtYXV0by1oZWlnaHRcIixBbj1cImZwLW5vcm1hbC1zY3JvbGxcIixNbj1cImZwLW5hdlwiLFRuPVwiI1wiK01uLE9uPVwiZnAtdG9vbHRpcFwiLGtuPVwiZnAtc2xpZGVcIixDbj1cIi5cIitrbixIbj1Dbittbix6bj1cImZwLXNsaWRlc1wiLFJuPVwiLlwiK3puLEluPVwiZnAtc2xpZGVzQ29udGFpbmVyXCIsTm49XCIuXCIrSW4sQm49XCJmcC10YWJsZVwiLGpuPVwiZnAtc2xpZGVzTmF2XCIsUG49XCIuXCIram4sWW49UG4rXCIgYVwiLGU9XCJmcC1jb250cm9sQXJyb3dcIixXbj1cIi5cIitlLERuPVwiZnAtcHJldlwiLFZuPVduK1wiLmZwLXByZXZcIixabj1XbitcIi5mcC1uZXh0XCI7ZnVuY3Rpb24gWG4oZSx0KXthbi5jb25zb2xlJiZhbi5jb25zb2xlW2VdJiZhbi5jb25zb2xlW2VdKFwiZnVsbFBhZ2U6IFwiK3QpfWZ1bmN0aW9uIEduKGUsdCl7cmV0dXJuKHQ9MTxhcmd1bWVudHMubGVuZ3RoP3Q6Y24pP3QucXVlcnlTZWxlY3RvckFsbChlKTpudWxsfWZ1bmN0aW9uIFVuKGUpe2U9ZXx8e307Zm9yKHZhciB0PTEsbj1hcmd1bWVudHMubGVuZ3RoO3Q8bjsrK3Qpe3ZhciBvPWFyZ3VtZW50c1t0XTtpZihvKWZvcih2YXIgciBpbiBvKW8uaGFzT3duUHJvcGVydHkocikmJihcIltvYmplY3QgT2JqZWN0XVwiIT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9bcl0pP2Vbcl09b1tyXTplW3JdPVVuKGVbcl0sb1tyXSkpfXJldHVybiBlfWZ1bmN0aW9uIEZuKGUsdCl7cmV0dXJuIG51bGwhPWUmJihlLmNsYXNzTGlzdD9lLmNsYXNzTGlzdC5jb250YWlucyh0KTpuZXcgUmVnRXhwKFwiKF58IClcIit0K1wiKCB8JClcIixcImdpXCIpLnRlc3QoZS5jbGFzc05hbWUpKX1mdW5jdGlvbiBfbigpe3JldHVyblwiaW5uZXJIZWlnaHRcImluIGFuP2FuLmlubmVySGVpZ2h0OmNuLmRvY3VtZW50RWxlbWVudC5vZmZzZXRIZWlnaHR9ZnVuY3Rpb24gUW4oKXtyZXR1cm4gYW4uaW5uZXJXaWR0aH1mdW5jdGlvbiBKbihlLHQpe3ZhciBuO2ZvcihuIGluIGU9bChlKSx0KWlmKHQuaGFzT3duUHJvcGVydHkobikmJm51bGwhPT1uKWZvcih2YXIgbz0wO288ZS5sZW5ndGg7bysrKXtlW29dLnN0eWxlW25dPXRbbl19cmV0dXJuIGV9ZnVuY3Rpb24gbihlLHQsbil7Zm9yKHZhciBvPWVbbl07byYmIXlvKG8sdCk7KW89b1tuXTtyZXR1cm4gb31mdW5jdGlvbiBLbihlLHQpe3JldHVybiBuKGUsdCxcInByZXZpb3VzRWxlbWVudFNpYmxpbmdcIil9ZnVuY3Rpb24gJG4oZSx0KXtyZXR1cm4gbihlLHQsXCJuZXh0RWxlbWVudFNpYmxpbmdcIil9ZnVuY3Rpb24gcW4oZSx0KXtpZihudWxsPT10KXJldHVybiBlLnByZXZpb3VzRWxlbWVudFNpYmxpbmc7dmFyIG49cW4oZSk7cmV0dXJuIG4mJnlvKG4sdCk/bjpudWxsfWZ1bmN0aW9uIGVvKGUsdCl7aWYobnVsbD09dClyZXR1cm4gZS5uZXh0RWxlbWVudFNpYmxpbmc7dmFyIG49ZW8oZSk7cmV0dXJuIG4mJnlvKG4sdCk/bjpudWxsfWZ1bmN0aW9uIHRvKGUpe3JldHVybiBlW2UubGVuZ3RoLTFdfWZ1bmN0aW9uIG5vKGUsdCl7ZT1pbyhlKT9lWzBdOmU7Zm9yKHZhciBuPW51bGwhPXQ/R24odCxlLnBhcmVudE5vZGUpOmUucGFyZW50Tm9kZS5jaGlsZE5vZGVzLG89MCxyPTA7cjxuLmxlbmd0aDtyKyspe2lmKG5bcl09PWUpcmV0dXJuIG87MT09bltyXS5ub2RlVHlwZSYmbysrfXJldHVybi0xfWZ1bmN0aW9uIGwoZSl7cmV0dXJuIGlvKGUpP2U6W2VdfWZ1bmN0aW9uIG9vKGUpe2U9bChlKTtmb3IodmFyIHQ9MDt0PGUubGVuZ3RoO3QrKyllW3RdLnN0eWxlLmRpc3BsYXk9XCJub25lXCI7cmV0dXJuIGV9ZnVuY3Rpb24gcm8oZSl7ZT1sKGUpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKWVbdF0uc3R5bGUuZGlzcGxheT1cImJsb2NrXCI7cmV0dXJuIGV9ZnVuY3Rpb24gaW8oZSl7cmV0dXJuXCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpfHxcIltvYmplY3QgTm9kZUxpc3RdXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoZSl9ZnVuY3Rpb24gbG8oZSx0KXtlPWwoZSk7Zm9yKHZhciBuPTA7bjxlLmxlbmd0aDtuKyspe3ZhciBvPWVbbl07by5jbGFzc0xpc3Q/by5jbGFzc0xpc3QuYWRkKHQpOm8uY2xhc3NOYW1lKz1cIiBcIit0fXJldHVybiBlfWZ1bmN0aW9uIGFvKGUsdCl7ZT1sKGUpO2Zvcih2YXIgbj10LnNwbGl0KFwiIFwiKSxvPTA7bzxuLmxlbmd0aDtvKyspe3Q9bltvXTtmb3IodmFyIHI9MDtyPGUubGVuZ3RoO3IrKyl7dmFyIGk9ZVtyXTtpLmNsYXNzTGlzdD9pLmNsYXNzTGlzdC5yZW1vdmUodCk6aS5jbGFzc05hbWU9aS5jbGFzc05hbWUucmVwbGFjZShuZXcgUmVnRXhwKFwiKF58XFxcXGIpXCIrdC5zcGxpdChcIiBcIikuam9pbihcInxcIikrXCIoXFxcXGJ8JClcIixcImdpXCIpLFwiIFwiKX19cmV0dXJuIGV9ZnVuY3Rpb24gY28oZSx0KXt0LmFwcGVuZENoaWxkKGUpfWZ1bmN0aW9uIG8oZSx0LG4pe3ZhciBvO3Q9dHx8Y24uY3JlYXRlRWxlbWVudChcImRpdlwiKTtmb3IodmFyIHI9MDtyPGUubGVuZ3RoO3IrKyl7dmFyIGk9ZVtyXTsobiYmIXJ8fCFuKSYmKG89dC5jbG9uZU5vZGUoITApLGkucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUobyxpKSksby5hcHBlbmRDaGlsZChpKX1yZXR1cm4gZX1mdW5jdGlvbiBzbyhlLHQpe28oZSx0LCEwKX1mdW5jdGlvbiB1byhlLHQpe2ZvcihcInN0cmluZ1wiPT10eXBlb2YgdCYmKHQ9eG8odCkpLGUuYXBwZW5kQ2hpbGQodCk7ZS5maXJzdENoaWxkIT09dDspdC5hcHBlbmRDaGlsZChlLmZpcnN0Q2hpbGQpfWZ1bmN0aW9uIGZvKGUpe2Zvcih2YXIgdD1jbi5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7ZS5maXJzdENoaWxkOyl0LmFwcGVuZENoaWxkKGUuZmlyc3RDaGlsZCk7ZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZCh0LGUpfWZ1bmN0aW9uIHZvKGUsdCl7cmV0dXJuIGUmJjE9PT1lLm5vZGVUeXBlP3lvKGUsdCk/ZTp2byhlLnBhcmVudE5vZGUsdCk6bnVsbH1mdW5jdGlvbiBwbyhlLHQpe3IoZSxlLm5leHRTaWJsaW5nLHQpfWZ1bmN0aW9uIGhvKGUsdCl7cihlLGUsdCl9ZnVuY3Rpb24gcihlLHQsbil7aW8obil8fChcInN0cmluZ1wiPT10eXBlb2YgbiYmKG49eG8obikpLG49W25dKTtmb3IodmFyIG89MDtvPG4ubGVuZ3RoO28rKyllLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKG5bb10sdCl9ZnVuY3Rpb24gZ28oKXt2YXIgZT1jbi5kb2N1bWVudEVsZW1lbnQ7cmV0dXJuKGFuLnBhZ2VZT2Zmc2V0fHxlLnNjcm9sbFRvcCktKGUuY2xpZW50VG9wfHwwKX1mdW5jdGlvbiBtbyh0KXtyZXR1cm4gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKHQucGFyZW50Tm9kZS5jaGlsZHJlbixmdW5jdGlvbihlKXtyZXR1cm4gZSE9PXR9KX1mdW5jdGlvbiBTbyhlKXtlLnByZXZlbnREZWZhdWx0P2UucHJldmVudERlZmF1bHQoKTplLnJldHVyblZhbHVlPSExfWZ1bmN0aW9uIGJvKGUpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGUpcmV0dXJuITA7dmFyIHQ9T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZyhlKTtyZXR1cm5cIltvYmplY3QgRnVuY3Rpb25dXCI9PT10fHxcIltvYmplY3QgR2VuZXJhdG9yRnVuY3Rpb25dXCI9PT10fWZ1bmN0aW9uIHdvKGUsdCxuKXt2YXIgbztuPXZvaWQgMD09PW4/e306bixcImZ1bmN0aW9uXCI9PXR5cGVvZiBhbi5DdXN0b21FdmVudD9vPW5ldyBDdXN0b21FdmVudCh0LHtkZXRhaWw6bn0pOihvPWNuLmNyZWF0ZUV2ZW50KFwiQ3VzdG9tRXZlbnRcIikpLmluaXRDdXN0b21FdmVudCh0LCEwLCEwLG4pLGUuZGlzcGF0Y2hFdmVudChvKX1mdW5jdGlvbiB5byhlLHQpe3JldHVybihlLm1hdGNoZXN8fGUubWF0Y2hlc1NlbGVjdG9yfHxlLm1zTWF0Y2hlc1NlbGVjdG9yfHxlLm1vek1hdGNoZXNTZWxlY3Rvcnx8ZS53ZWJraXRNYXRjaGVzU2VsZWN0b3J8fGUub01hdGNoZXNTZWxlY3RvcikuY2FsbChlLHQpfWZ1bmN0aW9uIEVvKGUsdCl7aWYoXCJib29sZWFuXCI9PXR5cGVvZiB0KWZvcih2YXIgbj0wO248ZS5sZW5ndGg7bisrKWVbbl0uc3R5bGUuZGlzcGxheT10P1wiYmxvY2tcIjpcIm5vbmVcIjtyZXR1cm4gZX1mdW5jdGlvbiB4byhlKXt2YXIgdD1jbi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO3JldHVybiB0LmlubmVySFRNTD1lLnRyaW0oKSx0LmZpcnN0Q2hpbGR9ZnVuY3Rpb24gTG8oZSl7ZT1sKGUpO2Zvcih2YXIgdD0wO3Q8ZS5sZW5ndGg7dCsrKXt2YXIgbj1lW3RdO24mJm4ucGFyZW50RWxlbWVudCYmbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKG4pfX1mdW5jdGlvbiBpKGUsdCxuKXtmb3IodmFyIG89ZVtuXSxyPVtdO287KSh5byhvLHQpfHxudWxsPT10KSYmci5wdXNoKG8pLG89b1tuXTtyZXR1cm4gcn1mdW5jdGlvbiBBbyhlLHQpe3JldHVybiBpKGUsdCxcIm5leHRFbGVtZW50U2libGluZ1wiKX1mdW5jdGlvbiBNbyhlLHQpe3JldHVybiBpKGUsdCxcInByZXZpb3VzRWxlbWVudFNpYmxpbmdcIil9ZnVuY3Rpb24gVG8oZSx0KXtlLmluc2VydEJlZm9yZSh0LGUuZmlyc3RDaGlsZCl9cmV0dXJuIGFuLk5vZGVMaXN0JiYhTm9kZUxpc3QucHJvdG90eXBlLmZvckVhY2gmJihOb2RlTGlzdC5wcm90b3R5cGUuZm9yRWFjaD1mdW5jdGlvbihlLHQpe3Q9dHx8YW47Zm9yKHZhciBuPTA7bjx0aGlzLmxlbmd0aDtuKyspZS5jYWxsKHQsdGhpc1tuXSxuLHRoaXMpfSksYW4uZnBfdXRpbHM9eyQ6R24sZGVlcEV4dGVuZDpVbixoYXNDbGFzczpGbixnZXRXaW5kb3dIZWlnaHQ6X24sY3NzOkpuLHVudGlsOm4scHJldlVudGlsOktuLG5leHRVbnRpbDokbixwcmV2OnFuLG5leHQ6ZW8sbGFzdDp0byxpbmRleDpubyxnZXRMaXN0OmwsaGlkZTpvbyxzaG93OnJvLGlzQXJyYXlPckxpc3Q6aW8sYWRkQ2xhc3M6bG8scmVtb3ZlQ2xhc3M6YW8sYXBwZW5kVG86Y28sd3JhcDpvLHdyYXBBbGw6c28sd3JhcElubmVyOnVvLHVud3JhcDpmbyxjbG9zZXN0OnZvLGFmdGVyOnBvLGJlZm9yZTpobyxpbnNlcnRCZWZvcmU6cixnZXRTY3JvbGxUb3A6Z28sc2libGluZ3M6bW8scHJldmVudERlZmF1bHQ6U28saXNGdW5jdGlvbjpibyx0cmlnZ2VyOndvLG1hdGNoZXM6eW8sdG9nZ2xlOkVvLGNyZWF0ZUVsZW1lbnRGcm9tSFRNTDp4byxyZW1vdmU6TG8sZmlsdGVyOmZ1bmN0aW9uKGUsdCl7QXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKGUsdCl9LHVudGlsQWxsOmksbmV4dEFsbDpBbyxwcmV2QWxsOk1vLHNob3dFcnJvcjpYbixwcmVwZW5kVG86VG8sdG9nZ2xlQ2xhc3M6ZnVuY3Rpb24oZSx0LG4pe2lmKGUuY2xhc3NMaXN0JiZudWxsPT1uKWUuY2xhc3NMaXN0LnRvZ2dsZSh0KTtlbHNle3ZhciBvPUZuKGUsdCk7byYmbnVsbD09bnx8IW4/YW8oZSx0KTooIW8mJm51bGw9PW58fG4pJiZsbyhlLHQpfX19LGZ1bmN0aW9uKGUsYil7dmFyIG49YiYmbmV3IFJlZ0V4cChcIihbXFxcXGRcXFxcd117OH0tKXszfVtcXFxcZFxcXFx3XXs4fXxeKD89Lio/W0EtWV0pKD89Lio/W2EteV0pKD89Lio/WzAtOF0pKD89Lio/WyM/IUAkJV4mKi1dKS57OCx9JFwiKS50ZXN0KGIubGljZW5zZUtleSl8fC0xPGNuLmRvbWFpbi5pbmRleE9mKFwiYWx2YXJvdHJpZ28uY29tXCIpLHM9R24oXCJodG1sLCBib2R5XCIpLGM9R24oXCJodG1sXCIpWzBdLGc9R24oXCJib2R5XCIpWzBdO2lmKCFGbihjLHBuKSl7dmFyIG09e307Yj1Vbih7bWVudTohMSxhbmNob3JzOltdLGxvY2tBbmNob3JzOiExLG5hdmlnYXRpb246ITEsbmF2aWdhdGlvblBvc2l0aW9uOlwicmlnaHRcIixuYXZpZ2F0aW9uVG9vbHRpcHM6W10sc2hvd0FjdGl2ZVRvb2x0aXA6ITEsc2xpZGVzTmF2aWdhdGlvbjohMSxzbGlkZXNOYXZQb3NpdGlvbjpcImJvdHRvbVwiLHNjcm9sbEJhcjohMSxoeWJyaWQ6ITEsY3NzMzohMCxzY3JvbGxpbmdTcGVlZDo3MDAsYXV0b1Njcm9sbGluZzohMCxmaXRUb1NlY3Rpb246ITAsZml0VG9TZWN0aW9uRGVsYXk6MWUzLGVhc2luZzpcImVhc2VJbk91dEN1YmljXCIsZWFzaW5nY3NzMzpcImVhc2VcIixsb29wQm90dG9tOiExLGxvb3BUb3A6ITEsbG9vcEhvcml6b250YWw6ITAsY29udGludW91c1ZlcnRpY2FsOiExLGNvbnRpbnVvdXNIb3Jpem9udGFsOiExLHNjcm9sbEhvcml6b250YWxseTohMSxpbnRlcmxvY2tlZFNsaWRlczohMSxkcmFnQW5kTW92ZTohMSxvZmZzZXRTZWN0aW9uczohMSxyZXNldFNsaWRlcnM6ITEsZmFkaW5nRWZmZWN0OiExLG5vcm1hbFNjcm9sbEVsZW1lbnRzOm51bGwsc2Nyb2xsT3ZlcmZsb3c6ITEsc2Nyb2xsT3ZlcmZsb3dSZXNldDohMSxzY3JvbGxPdmVyZmxvd0hhbmRsZXI6YW4uZnBfc2Nyb2xsb3ZlcmZsb3c/YW4uZnBfc2Nyb2xsb3ZlcmZsb3cuaXNjcm9sbEhhbmRsZXI6bnVsbCxzY3JvbGxPdmVyZmxvd09wdGlvbnM6bnVsbCx0b3VjaFNlbnNpdGl2aXR5OjUsdG91Y2hXcmFwcGVyOlwic3RyaW5nXCI9PXR5cGVvZiBlP0duKGUpWzBdOmUsYmlnU2VjdGlvbnNEZXN0aW5hdGlvbjpudWxsLGtleWJvYXJkU2Nyb2xsaW5nOiEwLGFuaW1hdGVBbmNob3I6ITAscmVjb3JkSGlzdG9yeTohMCxjb250cm9sQXJyb3dzOiEwLGNvbnRyb2xBcnJvd0NvbG9yOlwiI2ZmZlwiLHZlcnRpY2FsQ2VudGVyZWQ6ITAsc2VjdGlvbnNDb2xvcjpbXSxwYWRkaW5nVG9wOjAscGFkZGluZ0JvdHRvbTowLGZpeGVkRWxlbWVudHM6bnVsbCxyZXNwb25zaXZlOjAscmVzcG9uc2l2ZVdpZHRoOjAscmVzcG9uc2l2ZUhlaWdodDowLHJlc3BvbnNpdmVTbGlkZXM6ITEscGFyYWxsYXg6ITEscGFyYWxsYXhPcHRpb25zOnt0eXBlOlwicmV2ZWFsXCIscGVyY2VudGFnZTo2Mixwcm9wZXJ0eTpcInRyYW5zbGF0ZVwifSxjYXJkczohMSxjYXJkc09wdGlvbnM6e3BlcnNwZWN0aXZlOjEwMCxmYWRlQ29udGVudDohMCxmYWRlQmFja2dyb3VuZDohMH0sc2VjdGlvblNlbGVjdG9yOlwiLnNlY3Rpb25cIixzbGlkZVNlbGVjdG9yOlwiLnNsaWRlXCIsdjJjb21wYXRpYmxlOiExLGFmdGVyTG9hZDpudWxsLG9uTGVhdmU6bnVsbCxhZnRlclJlbmRlcjpudWxsLGFmdGVyUmVzaXplOm51bGwsYWZ0ZXJSZUJ1aWxkOm51bGwsYWZ0ZXJTbGlkZUxvYWQ6bnVsbCxvblNsaWRlTGVhdmU6bnVsbCxhZnRlclJlc3BvbnNpdmU6bnVsbCxsYXp5TG9hZGluZzohMH0sYik7dmFyIFMsbCx1LG8sYT0hMSxyPW5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goLyhpUGhvbmV8aVBvZHxpUGFkfEFuZHJvaWR8cGxheWJvb2t8c2lsa3xCbGFja0JlcnJ5fEJCMTB8V2luZG93cyBQaG9uZXxUaXplbnxCYWRhfHdlYk9TfElFTW9iaWxlfE9wZXJhIE1pbmkpLyksaT1cIm9udG91Y2hzdGFydFwiaW4gYW58fDA8bmF2aWdhdG9yLm1zTWF4VG91Y2hQb2ludHN8fG5hdmlnYXRvci5tYXhUb3VjaFBvaW50cyx3PVwic3RyaW5nXCI9PXR5cGVvZiBlP0duKGUpWzBdOmUseT1fbigpLGY9UW4oKSxFPSExLHQ9ITAseD0hMCxkPVtdLHY9e206e3VwOiEwLGRvd246ITAsbGVmdDohMCxyaWdodDohMH19O3Yuaz1Vbih7fSx2Lm0pO3ZhciBwLGgsTCxBLE0sVCxPLGssQyxILHo9VnQoKSxSPXt0b3VjaG1vdmU6XCJvbnRvdWNobW92ZVwiaW4gYW4/XCJ0b3VjaG1vdmVcIjp6Lm1vdmUsdG91Y2hzdGFydDpcIm9udG91Y2hzdGFydFwiaW4gYW4/XCJ0b3VjaHN0YXJ0XCI6ei5kb3dufSxJPSExLE49IUZuKGcsb3QoXCJPSE5zZDNBdFpuVnNiSEJoWjJVdGFuTTVUMjA9XCIpKSxCPSdhW2hyZWZdLCBhcmVhW2hyZWZdLCBpbnB1dDpub3QoW2Rpc2FibGVkXSksIHNlbGVjdDpub3QoW2Rpc2FibGVkXSksIHRleHRhcmVhOm5vdChbZGlzYWJsZWRdKSwgYnV0dG9uOm5vdChbZGlzYWJsZWRdKSwgaWZyYW1lLCBvYmplY3QsIGVtYmVkLCBbdGFiaW5kZXg9XCIwXCJdLCBbY29udGVudGVkaXRhYmxlXScsaj0hMTt0cnl7dmFyIFA9T2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LFwicGFzc2l2ZVwiLHtnZXQ6ZnVuY3Rpb24oKXtqPSEwfX0pO2FuLmFkZEV2ZW50TGlzdGVuZXIoXCJ0ZXN0UGFzc2l2ZVwiLG51bGwsUCksYW4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRlc3RQYXNzaXZlXCIsbnVsbCxQKX1jYXRjaChlKXt9dmFyIFksVyxELFY9VW4oe30sYiksWj0hMSxYPSEwLEc9e307ZW4oKSxhbi5mcF9lYXNpbmdzPVVuKGFuLmZwX2Vhc2luZ3Mse2Vhc2VJbk91dEN1YmljOmZ1bmN0aW9uKGUsdCxuLG8pe3JldHVybihlLz1vLzIpPDE/bi8yKmUqZSplK3Q6bi8yKigoZS09MikqZSplKzIpK3R9fSksdyYmKG0udmVyc2lvbj1cIjMuMS4wXCIsbS5zZXRBdXRvU2Nyb2xsaW5nPXJlLG0uc2V0UmVjb3JkSGlzdG9yeT1pZSxtLnNldFNjcm9sbGluZ1NwZWVkPWxlLG0uc2V0Rml0VG9TZWN0aW9uPWFlLG0uc2V0TG9ja0FuY2hvcnM9ZnVuY3Rpb24oZSl7Yi5sb2NrQW5jaG9ycz1lfSxtLnNldE1vdXNlV2hlZWxTY3JvbGxpbmc9Y2UsbS5zZXRBbGxvd1Njcm9sbGluZz1zZSxtLnNldEtleWJvYXJkU2Nyb2xsaW5nPWZlLG0ubW92ZVNlY3Rpb25VcD1kZSxtLm1vdmVTZWN0aW9uRG93bj12ZSxtLnNpbGVudE1vdmVUbz1wZSxtLm1vdmVUbz1oZSxtLm1vdmVTbGlkZVJpZ2h0PWdlLG0ubW92ZVNsaWRlTGVmdD1tZSxtLmZpdFRvU2VjdGlvbj16ZSxtLnJlQnVpbGQ9U2UsbS5zZXRSZXNwb25zaXZlPXdlLG0uZ2V0RnVsbHBhZ2VEYXRhPWZ1bmN0aW9uKCl7cmV0dXJue29wdGlvbnM6YixpbnRlcm5hbHM6e2NvbnRhaW5lcjp3LGNhblNjcm9sbDp4LGlzU2Nyb2xsQWxsb3dlZDp2LGdldERlc3RpbmF0aW9uUG9zaXRpb246VmUsaXNUb3VjaDppLGM6YXQsZ2V0WG1vdmVtZW50Okh0LHJlbW92ZUFuaW1hdGlvbjpPdCxnZXRUcmFuc2Zvcm1zOlV0LGxhenlMb2FkOktlLGFkZEFuaW1hdGlvbjpUdCxwZXJmb3JtSG9yaXpvbnRhbE1vdmU6eHQsbGFuZHNjYXBlU2Nyb2xsOnd0LHNpbGVudExhbmRzY2FwZVNjcm9sbDpYdCxrZWVwU2xpZGVzUG9zaXRpb246RGUsc2lsZW50U2Nyb2xsOkd0LHN0eWxlU2xpZGVzOk1lLHN0eWxlU2VjdGlvbjpPZSxzY3JvbGxIYW5kbGVyOkhlLGdldEV2ZW50c1BhZ2U6WnQsZ2V0TVNQb2ludGVyOlZ0LGlzUmVhbGx5VG91Y2g6QmUsdXNpbmdFeHRlbnNpb246UXQsdG9nZ2xlQ29udHJvbEFycm93czp5dCx0b3VjaFN0YXJ0SGFuZGxlcjpqZSx0b3VjaE1vdmVIYW5kbGVyOk5lfX19LG0uZGVzdHJveT1mdW5jdGlvbihlKXt3byh3LFwiZGVzdHJveVwiLGUpLHJlKCExLFwiaW50ZXJuYWxcIiksc2UoITApLHVlKCExKSxmZSghMSksbG8odyx2biksW00sQSxoLFQsTyxDLEwsRF0uZm9yRWFjaChmdW5jdGlvbihlKXtjbGVhclRpbWVvdXQoZSl9KSxhbi5yZW1vdmVFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsSGUpLGFuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsdXQpLGFuLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIixMdCksY24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIixkdCksY24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsdnQpLFtcImNsaWNrXCIsXCJ0b3VjaHN0YXJ0XCJdLmZvckVhY2goZnVuY3Rpb24oZSl7Y24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLHllKX0pLFtcIm1vdXNlZW50ZXJcIixcInRvdWNoc3RhcnRcIixcIm1vdXNlbGVhdmVcIixcInRvdWNoZW5kXCJdLmZvckVhY2goZnVuY3Rpb24oZSl7Y24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihlLHhlLCEwKX0pLEp0KFwiZHJhZ0FuZE1vdmVcIixcImRlc3Ryb3lcIiksZSYmKEd0KDApLEduKFwiaW1nW2RhdGEtc3JjXSwgc291cmNlW2RhdGEtc3JjXSwgYXVkaW9bZGF0YS1zcmNdLCBpZnJhbWVbZGF0YS1zcmNdXCIsdykuZm9yRWFjaChmdW5jdGlvbihlKXtRZShlLFwic3JjXCIpfSksR24oXCJpbWdbZGF0YS1zcmNzZXRdXCIpLmZvckVhY2goZnVuY3Rpb24oZSl7UWUoZSxcInNyY3NldFwiKX0pLExvKEduKFRuK1wiLCBcIitQbitcIiwgXCIrV24pKSxKbihHbih3bikse2hlaWdodDpcIlwiLFwiYmFja2dyb3VuZC1jb2xvclwiOlwiXCIscGFkZGluZzpcIlwifSksSm4oR24oQ24pLHt3aWR0aDpcIlwifSksSm4odyx7aGVpZ2h0OlwiXCIscG9zaXRpb246XCJcIixcIi1tcy10b3VjaC1hY3Rpb25cIjpcIlwiLFwidG91Y2gtYWN0aW9uXCI6XCJcIn0pLEpuKHMse292ZXJmbG93OlwiXCIsaGVpZ2h0OlwiXCJ9KSxhbyhjLHBuKSxhbyhnLGZuKSxnLmNsYXNzTmFtZS5zcGxpdCgvXFxzKy8pLmZvckVhY2goZnVuY3Rpb24oZSl7MD09PWUuaW5kZXhPZihobikmJmFvKGcsZSl9KSxHbih3bitcIiwgXCIrQ24pLmZvckVhY2goZnVuY3Rpb24oZSl7Yi5zY3JvbGxPdmVyZmxvd0hhbmRsZXImJmIuc2Nyb2xsT3ZlcmZsb3cmJmIuc2Nyb2xsT3ZlcmZsb3dIYW5kbGVyLnJlbW92ZShlKSxhbyhlLEJuK1wiIFwiK2duK1wiIFwiK1NuKTt2YXIgdD1lLmdldEF0dHJpYnV0ZShcImRhdGEtZnAtc3R5bGVzXCIpO3QmJmUuc2V0QXR0cmlidXRlKFwic3R5bGVcIixlLmdldEF0dHJpYnV0ZShcImRhdGEtZnAtc3R5bGVzXCIpKSxGbihlLGJuKSYmIVomJmUucmVtb3ZlQXR0cmlidXRlKFwiZGF0YS1hbmNob3JcIil9KSxfdCh3KSxbeG4sTm4sUm5dLmZvckVhY2goZnVuY3Rpb24oZSl7R24oZSx3KS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2ZvKGUpfSl9KSxhbi5zY3JvbGxUbygwLDApLFtibixrbixJbl0uZm9yRWFjaChmdW5jdGlvbihlKXthbyhHbihcIi5cIitlKSxlKX0pKX0sbS5nZXRBY3RpdmVTZWN0aW9uPWZ1bmN0aW9uKCl7cmV0dXJuIG5ldyBybihHbih5bilbMF0pfSxtLmdldEFjdGl2ZVNsaWRlPWZ1bmN0aW9uKCl7cmV0dXJuIFVlKEduKEhuLEduKHluKVswXSlbMF0pfSxtLmxhbmRzY2FwZVNjcm9sbD13dCxtLnRlc3Q9e3RvcDpcIjBweFwiLHRyYW5zbGF0ZTNkOlwidHJhbnNsYXRlM2QoMHB4LCAwcHgsIDBweClcIix0cmFuc2xhdGUzZEg6ZnVuY3Rpb24oKXtmb3IodmFyIGU9W10sdD0wO3Q8R24oYi5zZWN0aW9uU2VsZWN0b3IsdykubGVuZ3RoO3QrKyllLnB1c2goXCJ0cmFuc2xhdGUzZCgwcHgsIDBweCwgMHB4KVwiKTtyZXR1cm4gZX0oKSxsZWZ0OmZ1bmN0aW9uKCl7Zm9yKHZhciBlPVtdLHQ9MDt0PEduKGIuc2VjdGlvblNlbGVjdG9yLHcpLmxlbmd0aDt0KyspZS5wdXNoKDApO3JldHVybiBlfSgpLG9wdGlvbnM6YixzZXRBdXRvU2Nyb2xsaW5nOnJlfSxtLnNoYXJlZD17YWZ0ZXJSZW5kZXJBY3Rpb25zOkNlLGlzTm9ybWFsU2Nyb2xsRWxlbWVudDohMX0sYW4uZnVsbHBhZ2VfYXBpPW0sYW4uZnVsbHBhZ2VfZXh0ZW5zaW9ucz0hMCxiLiQmJk9iamVjdC5rZXlzKG0pLmZvckVhY2goZnVuY3Rpb24oZSl7Yi4kLmZuLmZ1bGxwYWdlW2VdPW1bZV19KSxBZShcImNvbnRpbnVvdXNIb3Jpem9udGFsXCIpLEFlKFwic2Nyb2xsSG9yaXpvbnRhbGx5XCIpLEFlKFwicmVzZXRTbGlkZXJzXCIpLEFlKFwiaW50ZXJsb2NrZWRTbGlkZXNcIiksQWUoXCJyZXNwb25zaXZlU2xpZGVzXCIpLEFlKFwiZmFkaW5nRWZmZWN0XCIpLEFlKFwiZHJhZ0FuZE1vdmVcIiksQWUoXCJvZmZzZXRTZWN0aW9uc1wiKSxBZShcInNjcm9sbE92ZXJmbG93UmVzZXRcIiksQWUoXCJwYXJhbGxheFwiKSxBZShcImNhcmRzXCIpLEFlKFwiZHJvcEVmZmVjdFwiKSxKdChcImRyYWdBbmRNb3ZlXCIsXCJpbml0XCIpLGIuY3NzMyYmKGIuY3NzMz1mdW5jdGlvbigpe3ZhciBlLHQ9Y24uY3JlYXRlRWxlbWVudChcInBcIiksbj17d2Via2l0VHJhbnNmb3JtOlwiLXdlYmtpdC10cmFuc2Zvcm1cIixPVHJhbnNmb3JtOlwiLW8tdHJhbnNmb3JtXCIsbXNUcmFuc2Zvcm06XCItbXMtdHJhbnNmb3JtXCIsTW96VHJhbnNmb3JtOlwiLW1vei10cmFuc2Zvcm1cIix0cmFuc2Zvcm06XCJ0cmFuc2Zvcm1cIn07Zm9yKHZhciBvIGluIHQuc3R5bGUuZGlzcGxheT1cImJsb2NrXCIsY24uYm9keS5pbnNlcnRCZWZvcmUodCxudWxsKSxuKXZvaWQgMCE9PXQuc3R5bGVbb10mJih0LnN0eWxlW29dPVwidHJhbnNsYXRlM2QoMXB4LDFweCwxcHgpXCIsZT1hbi5nZXRDb21wdXRlZFN0eWxlKHQpLmdldFByb3BlcnR5VmFsdWUobltvXSkpO3JldHVybiBjbi5ib2R5LnJlbW92ZUNoaWxkKHQpLHZvaWQgMCE9PWUmJjA8ZS5sZW5ndGgmJlwibm9uZVwiIT09ZX0oKSksYi5zY3JvbGxCYXI9Yi5zY3JvbGxCYXJ8fGIuaHlicmlkLGZ1bmN0aW9uKCl7aWYoIWIuYW5jaG9ycy5sZW5ndGgpe3ZhciBlPVwiW2RhdGEtYW5jaG9yXVwiLHQ9R24oYi5zZWN0aW9uU2VsZWN0b3Iuc3BsaXQoXCIsXCIpLmpvaW4oZStcIixcIikrZSx3KTt0Lmxlbmd0aCYmdC5sZW5ndGg9PT1HbihiLnNlY3Rpb25TZWxlY3Rvcix3KS5sZW5ndGgmJihaPSEwLHQuZm9yRWFjaChmdW5jdGlvbihlKXtiLmFuY2hvcnMucHVzaChlLmdldEF0dHJpYnV0ZShcImRhdGEtYW5jaG9yXCIpLnRvU3RyaW5nKCkpfSkpfWlmKCFiLm5hdmlnYXRpb25Ub29sdGlwcy5sZW5ndGgpe3ZhciBuPVwiW2RhdGEtdG9vbHRpcF1cIixvPUduKGIuc2VjdGlvblNlbGVjdG9yLnNwbGl0KFwiLFwiKS5qb2luKG4rXCIsXCIpK24sdyk7by5sZW5ndGgmJm8uZm9yRWFjaChmdW5jdGlvbihlKXtiLm5hdmlnYXRpb25Ub29sdGlwcy5wdXNoKGUuZ2V0QXR0cmlidXRlKFwiZGF0YS10b29sdGlwXCIpLnRvU3RyaW5nKCkpfSl9fSgpLGZ1bmN0aW9uKCl7Sm4odyx7aGVpZ2h0OlwiMTAwJVwiLHBvc2l0aW9uOlwicmVsYXRpdmVcIn0pLGxvKHcsc24pLGxvKGMscG4pLHk9X24oKSxhbyh3LHZuKSxsbyhHbihiLnNlY3Rpb25TZWxlY3Rvcix3KSxibiksbG8oR24oYi5zbGlkZVNlbGVjdG9yLHcpLGtuKSxKdChcInBhcmFsbGF4XCIsXCJpbml0XCIpO2Zvcih2YXIgZT1Hbih3biksdD0wO3Q8ZS5sZW5ndGg7dCsrKXt2YXIgbj10LG89ZVt0XSxyPUduKENuLG8pLGk9ci5sZW5ndGg7by5zZXRBdHRyaWJ1dGUoXCJkYXRhLWZwLXN0eWxlc1wiLG8uZ2V0QXR0cmlidXRlKFwic3R5bGVcIikpLE9lKG8sbiksbD1vLGE9bix2b2lkIDAhPT1iLmFuY2hvcnNbYV0mJkZuKGwsZ24pJiZrdChiLmFuY2hvcnNbYV0sYSksYi5tZW51JiZiLmNzczMmJm51bGwhPXZvKEduKGIubWVudSlbMF0sdW4pJiZHbihiLm1lbnUpLmZvckVhY2goZnVuY3Rpb24oZSl7Zy5hcHBlbmRDaGlsZChlKX0pLDA8aT9NZShvLHIsaSk6Yi52ZXJ0aWNhbENlbnRlcmVkJiZ6dChvKX12YXIgbCxhO2IuZml4ZWRFbGVtZW50cyYmYi5jc3MzJiZHbihiLmZpeGVkRWxlbWVudHMpLmZvckVhY2goZnVuY3Rpb24oZSl7Zy5hcHBlbmRDaGlsZChlKX0pLGIubmF2aWdhdGlvbiYmZnVuY3Rpb24oKXt2YXIgZT1jbi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2Uuc2V0QXR0cmlidXRlKFwiaWRcIixNbik7dmFyIHQ9Y24uY3JlYXRlRWxlbWVudChcInVsXCIpO2UuYXBwZW5kQ2hpbGQodCksY28oZSxnKTt2YXIgbj1HbihUbilbMF07bG8obixcImZwLVwiK2IubmF2aWdhdGlvblBvc2l0aW9uKSxiLnNob3dBY3RpdmVUb29sdGlwJiZsbyhuLFwiZnAtc2hvdy1hY3RpdmVcIik7Zm9yKHZhciBvPVwiXCIscj0wO3I8R24od24pLmxlbmd0aDtyKyspe3ZhciBpPVwiXCI7Yi5hbmNob3JzLmxlbmd0aCYmKGk9Yi5hbmNob3JzW3JdKSxvKz0nPGxpPjxhIGhyZWY9XCIjJytpKydcIj48c3BhbiBjbGFzcz1cImZwLXNyLW9ubHlcIj4nK2tlKHIsXCJTZWN0aW9uXCIpK1wiPC9zcGFuPjxzcGFuPjwvc3Bhbj48L2E+XCI7dmFyIGw9Yi5uYXZpZ2F0aW9uVG9vbHRpcHNbcl07dm9pZCAwIT09bCYmXCJcIiE9PWwmJihvKz0nPGRpdiBjbGFzcz1cIicrT24rXCIgZnAtXCIrYi5uYXZpZ2F0aW9uUG9zaXRpb24rJ1wiPicrbCtcIjwvZGl2PlwiKSxvKz1cIjwvbGk+XCJ9R24oXCJ1bFwiLG4pWzBdLmlubmVySFRNTD1vLGxvKEduKFwiYVwiLEduKFwibGlcIixHbihUbilbMF0pW25vKEduKHluKVswXSx3bildKSxnbil9KCksR24oJ2lmcmFtZVtzcmMqPVwieW91dHViZS5jb20vZW1iZWQvXCJdJyx3KS5mb3JFYWNoKGZ1bmN0aW9uKGUpe3ZhciB0LG4sbztuPVwiZW5hYmxlanNhcGk9MVwiLG89KHQ9ZSkuZ2V0QXR0cmlidXRlKFwic3JjXCIpLHQuc2V0QXR0cmlidXRlKFwic3JjXCIsbysoL1xcPy8udGVzdChvKT9cIiZcIjpcIj9cIikrbil9KSxKdChcImZhZGluZ0VmZmVjdFwiLFwiYXBwbHlcIiksSnQoXCJkcm9wRWZmZWN0XCIsXCJpbml0XCIpLEp0KFwiY2FyZHNcIixcImluaXRcIiksYi5zY3JvbGxPdmVyZmxvdyYmKHA9Yi5zY3JvbGxPdmVyZmxvd0hhbmRsZXIuaW5pdChiKSl9KCksc2UoITApLHVlKCEwKSxyZShiLmF1dG9TY3JvbGxpbmcsXCJpbnRlcm5hbFwiKSxNdCgpLER0KCksXCJjb21wbGV0ZVwiPT09Y24ucmVhZHlTdGF0ZSYmc3QoKSxhbi5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLHN0KSxiLnNjcm9sbE92ZXJmbG93fHxDZSgpLGZ1bmN0aW9uKCl7Zm9yKHZhciBlPTE7ZTw0O2UrKylDPXNldFRpbWVvdXQoTGUsMzUwKmUpfSgpLE58fGF0KFwibFwiKSxhbi5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsSGUpLGFuLmFkZEV2ZW50TGlzdGVuZXIoXCJoYXNoY2hhbmdlXCIsdXQpLGFuLmFkZEV2ZW50TGlzdGVuZXIoXCJmb2N1c1wiLG10KSxhbi5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLFN0KSxhbi5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsTHQpLGNuLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsZHQpLGNuLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLHZ0KSxbXCJjbGlja1wiLFwidG91Y2hzdGFydFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2NuLmFkZEV2ZW50TGlzdGVuZXIoZSx5ZSl9KSxiLm5vcm1hbFNjcm9sbEVsZW1lbnRzJiYoW1wibW91c2VlbnRlclwiLFwidG91Y2hzdGFydFwiXS5mb3JFYWNoKGZ1bmN0aW9uKGUpe0VlKGUsITEpfSksW1wibW91c2VsZWF2ZVwiLFwidG91Y2hlbmRcIl0uZm9yRWFjaChmdW5jdGlvbihlKXtFZShlLCEwKX0pKSxKdChcImRyYWdBbmRNb3ZlXCIsXCJ0dXJuT2ZmVG91Y2hcIikpO3ZhciBVLEYsXyxRPSExLEo9MCxLPTAsJD0wLHE9MCxlZT0obmV3IERhdGUpLmdldFRpbWUoKSx0ZT0wLG5lPTAsb2U9eTtyZXR1cm4gbX1mdW5jdGlvbiByZShlLHQpe2V8fEd0KDApLHF0KFwiYXV0b1Njcm9sbGluZ1wiLGUsdCk7dmFyIG49R24oeW4pWzBdO2lmKGIuYXV0b1Njcm9sbGluZyYmIWIuc2Nyb2xsQmFyKUpuKHMse292ZXJmbG93OlwiaGlkZGVuXCIsaGVpZ2h0OlwiMTAwJVwifSksaWUoVi5yZWNvcmRIaXN0b3J5LFwiaW50ZXJuYWxcIiksSm4odyx7XCItbXMtdG91Y2gtYWN0aW9uXCI6XCJub25lXCIsXCJ0b3VjaC1hY3Rpb25cIjpcIm5vbmVcIn0pLG51bGwhPW4mJkd0KG4ub2Zmc2V0VG9wKTtlbHNlIGlmKEpuKHMse292ZXJmbG93OlwidmlzaWJsZVwiLGhlaWdodDpcImluaXRpYWxcIn0pLGllKCEhYi5hdXRvU2Nyb2xsaW5nJiZWLnJlY29yZEhpc3RvcnksXCJpbnRlcm5hbFwiKSxKbih3LHtcIi1tcy10b3VjaC1hY3Rpb25cIjpcIlwiLFwidG91Y2gtYWN0aW9uXCI6XCJcIn0pLF90KHcpLG51bGwhPW4pe3ZhciBvPUZlKG4ub2Zmc2V0VG9wKTtvLmVsZW1lbnQuc2Nyb2xsVG8oMCxvLm9wdGlvbnMpfXdvKHcsXCJzZXRBdXRvU2Nyb2xsaW5nXCIsZSl9ZnVuY3Rpb24gaWUoZSx0KXtxdChcInJlY29yZEhpc3RvcnlcIixlLHQpfWZ1bmN0aW9uIGxlKGUsdCl7XCJpbnRlcm5hbFwiIT09dCYmUXQoXCJmYWRpbmdFZmZlY3RcIikmJm0uZmFkaW5nRWZmZWN0LnVwZGF0ZShlKSxRdChcImNhcmRzXCIpJiZtLmNhcmRzLnVwZGF0ZShlKSxxdChcInNjcm9sbGluZ1NwZWVkXCIsZSx0KX1mdW5jdGlvbiBhZShlLHQpe3F0KFwiZml0VG9TZWN0aW9uXCIsZSx0KX1mdW5jdGlvbiBjZShlKXtlPyhmdW5jdGlvbigpe3ZhciBlLHQ9XCJcIjthbi5hZGRFdmVudExpc3RlbmVyP2U9XCJhZGRFdmVudExpc3RlbmVyXCI6KGU9XCJhdHRhY2hFdmVudFwiLHQ9XCJvblwiKTt2YXIgbj1cIm9ud2hlZWxcImluIGNuLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik/XCJ3aGVlbFwiOnZvaWQgMCE9PWNuLm9ubW91c2V3aGVlbD9cIm1vdXNld2hlZWxcIjpcIkRPTU1vdXNlU2Nyb2xsXCIsbz0hIWomJntwYXNzaXZlOiExfTtcIkRPTU1vdXNlU2Nyb2xsXCI9PW4/Y25bZV0odCtcIk1vek1vdXNlUGl4ZWxTY3JvbGxcIixZZSxvKTpjbltlXSh0K24sWWUsbyl9KCksdy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIscHQpLHcuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIixodCkpOihjbi5hZGRFdmVudExpc3RlbmVyPyhjbi5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2V3aGVlbFwiLFllLCExKSxjbi5yZW1vdmVFdmVudExpc3RlbmVyKFwid2hlZWxcIixZZSwhMSksY24ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIk1vek1vdXNlUGl4ZWxTY3JvbGxcIixZZSwhMSkpOmNuLmRldGFjaEV2ZW50KFwib25tb3VzZXdoZWVsXCIsWWUpLHcucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLHB0KSx3LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsaHQpKX1mdW5jdGlvbiBzZSh0LGUpe3ZvaWQgMCE9PWU/KGU9ZS5yZXBsYWNlKC8gL2csXCJcIikuc3BsaXQoXCIsXCIpKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe0Z0KHQsZSxcIm1cIil9KTpGdCh0LFwiYWxsXCIsXCJtXCIpLHdvKHcsXCJzZXRBbGxvd1Njcm9sbGluZ1wiLHt2YWx1ZTp0LGRpcmVjdGlvbnM6ZX0pfWZ1bmN0aW9uIHVlKGUpe2U/KGNlKCEwKSxmdW5jdGlvbigpe2lmKChyfHxpKSYmKCFRdChcImRyYWdBbmRNb3ZlXCIpfHxcIm1vdXNlb25seVwiPT09Yi5kcmFnQW5kTW92ZSkpe2IuYXV0b1Njcm9sbGluZyYmKGcucmVtb3ZlRXZlbnRMaXN0ZW5lcihSLnRvdWNobW92ZSxJZSx7cGFzc2l2ZTohMX0pLGcuYWRkRXZlbnRMaXN0ZW5lcihSLnRvdWNobW92ZSxJZSx7cGFzc2l2ZTohMX0pKTt2YXIgZT1iLnRvdWNoV3JhcHBlcjtlLnJlbW92ZUV2ZW50TGlzdGVuZXIoUi50b3VjaHN0YXJ0LGplKSxlLnJlbW92ZUV2ZW50TGlzdGVuZXIoUi50b3VjaG1vdmUsTmUse3Bhc3NpdmU6ITF9KSxlLmFkZEV2ZW50TGlzdGVuZXIoUi50b3VjaHN0YXJ0LGplKSxlLmFkZEV2ZW50TGlzdGVuZXIoUi50b3VjaG1vdmUsTmUse3Bhc3NpdmU6ITF9KX19KCkpOihjZSghMSksZnVuY3Rpb24oKXtpZihyfHxpKXtiLmF1dG9TY3JvbGxpbmcmJihnLnJlbW92ZUV2ZW50TGlzdGVuZXIoUi50b3VjaG1vdmUsTmUse3Bhc3NpdmU6ITF9KSxnLnJlbW92ZUV2ZW50TGlzdGVuZXIoUi50b3VjaG1vdmUsSWUse3Bhc3NpdmU6ITF9KSk7dmFyIGU9Yi50b3VjaFdyYXBwZXI7ZS5yZW1vdmVFdmVudExpc3RlbmVyKFIudG91Y2hzdGFydCxqZSksZS5yZW1vdmVFdmVudExpc3RlbmVyKFIudG91Y2htb3ZlLE5lLHtwYXNzaXZlOiExfSl9fSgpKX1mdW5jdGlvbiBmZSh0LGUpe3ZvaWQgMCE9PWU/KGU9ZS5yZXBsYWNlKC8gL2csXCJcIikuc3BsaXQoXCIsXCIpKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe0Z0KHQsZSxcImtcIil9KTooRnQodCxcImFsbFwiLFwia1wiKSxiLmtleWJvYXJkU2Nyb2xsaW5nPXQpfWZ1bmN0aW9uIGRlKCl7dmFyIGU9S24oR24oeW4pWzBdLHduKTtlfHwhYi5sb29wVG9wJiYhYi5jb250aW51b3VzVmVydGljYWx8fChlPXRvKEduKHduKSkpLG51bGwhPWUmJlplKGUsbnVsbCwhMCl9ZnVuY3Rpb24gdmUoKXt2YXIgZT0kbihHbih5bilbMF0sd24pO2V8fCFiLmxvb3BCb3R0b20mJiFiLmNvbnRpbnVvdXNWZXJ0aWNhbHx8KGU9R24od24pWzBdKSxudWxsIT1lJiZaZShlLG51bGwsITEpfWZ1bmN0aW9uIHBlKGUsdCl7bGUoMCxcImludGVybmFsXCIpLGhlKGUsdCksbGUoVi5zY3JvbGxpbmdTcGVlZCxcImludGVybmFsXCIpfWZ1bmN0aW9uIGhlKGUsdCl7dmFyIG49TnQoZSk7dm9pZCAwIT09dD9CdChlLHQpOm51bGwhPW4mJlplKG4pfWZ1bmN0aW9uIGdlKGUpe1dlKFwicmlnaHRcIixlKX1mdW5jdGlvbiBtZShlKXtXZShcImxlZnRcIixlKX1mdW5jdGlvbiBTZShlKXtpZighRm4odyx2bikpe0U9ITAseT1fbigpLGY9UW4oKTtmb3IodmFyIHQ9R24od24pLG49MDtuPHQubGVuZ3RoOysrbil7dmFyIG89dFtuXSxyPUduKFJuLG8pWzBdLGk9R24oQ24sbyk7Yi52ZXJ0aWNhbENlbnRlcmVkJiZKbihHbih4bixvKSx7aGVpZ2h0OlJ0KG8pK1wicHhcIn0pLEpuKG8se2hlaWdodDpUZShvKStcInB4XCJ9KSwxPGkubGVuZ3RoJiZ3dChyLEduKEhuLHIpWzBdKX1iLnNjcm9sbE92ZXJmbG93JiZwLmNyZWF0ZVNjcm9sbEJhckZvckFsbCgpO3ZhciBsPW5vKEduKHluKVswXSx3bik7IWx8fFF0KFwiZmFkaW5nRWZmZWN0XCIpfHxRdChcImRyb3BFZmZlY3RcIil8fHBlKGwrMSksRT0hMSxibyhiLmFmdGVyUmVzaXplKSYmZSYmYi5hZnRlclJlc2l6ZS5jYWxsKHcsYW4uaW5uZXJXaWR0aCxhbi5pbm5lckhlaWdodCksYm8oYi5hZnRlclJlQnVpbGQpJiYhZSYmYi5hZnRlclJlQnVpbGQuY2FsbCh3KSx3byh3LFwiYWZ0ZXJSZWJ1aWxkXCIpfX1mdW5jdGlvbiBiZSgpe3JldHVybiBGbihnLGZuKX1mdW5jdGlvbiB3ZShlKXt2YXIgdD1iZSgpO2U/dHx8KHJlKCExLFwiaW50ZXJuYWxcIiksYWUoITEsXCJpbnRlcm5hbFwiKSxvbyhHbihUbikpLGxvKGcsZm4pLGJvKGIuYWZ0ZXJSZXNwb25zaXZlKSYmYi5hZnRlclJlc3BvbnNpdmUuY2FsbCh3LGUpLEp0KFwicmVzcG9uc2l2ZVNsaWRlc1wiLFwidG9TZWN0aW9uc1wiKSx3byh3LFwiYWZ0ZXJSZXNwb25zaXZlXCIsZSksYi5zY3JvbGxPdmVyZmxvdyYmcC5jcmVhdGVTY3JvbGxCYXJGb3JBbGwoKSk6dCYmKHJlKFYuYXV0b1Njcm9sbGluZyxcImludGVybmFsXCIpLGFlKFYuYXV0b1Njcm9sbGluZyxcImludGVybmFsXCIpLHJvKEduKFRuKSksYW8oZyxmbiksYm8oYi5hZnRlclJlc3BvbnNpdmUpJiZiLmFmdGVyUmVzcG9uc2l2ZS5jYWxsKHcsZSksSnQoXCJyZXNwb25zaXZlU2xpZGVzXCIsXCJ0b1NsaWRlc1wiKSx3byh3LFwiYWZ0ZXJSZXNwb25zaXZlXCIsZSkpfWZ1bmN0aW9uIHllKGUpe3ZhciB0PWUudGFyZ2V0O3QmJnZvKHQsVG4rXCIgYVwiKT9mdW5jdGlvbihlKXtTbyhlKTt2YXIgdD1ubyh2byh0aGlzLFRuK1wiIGxpXCIpKTtaZShHbih3bilbdF0pfS5jYWxsKHQsZSk6eW8odCxcIi5mcC10b29sdGlwXCIpP2Z1bmN0aW9uKCl7d28ocW4odGhpcyksXCJjbGlja1wiKX0uY2FsbCh0KTp5byh0LFduKT9mdW5jdGlvbigpe3ZhciBlPXZvKHRoaXMsd24pO0ZuKHRoaXMsRG4pP3YubS5sZWZ0JiZtZShlKTp2Lm0ucmlnaHQmJmdlKGUpfS5jYWxsKHQsZSk6eW8odCxZbil8fG51bGwhPXZvKHQsWW4pP2Z1bmN0aW9uKGUpe1NvKGUpO3ZhciB0PUduKFJuLHZvKHRoaXMsd24pKVswXSxuPUduKENuLHQpW25vKHZvKHRoaXMsXCJsaVwiKSldO3d0KHQsbil9LmNhbGwodCxlKTp2byh0LGIubWVudStcIiBbZGF0YS1tZW51YW5jaG9yXVwiKSYmZnVuY3Rpb24oZSl7IUduKGIubWVudSlbMF18fCFiLmxvY2tBbmNob3JzJiZiLmFuY2hvcnMubGVuZ3RofHwoU28oZSksaGUodGhpcy5nZXRBdHRyaWJ1dGUoXCJkYXRhLW1lbnVhbmNob3JcIikpKX0uY2FsbCh0LGUpfWZ1bmN0aW9uIEVlKGUsdCl7Y25bXCJmcF9cIitlXT10LGNuLmFkZEV2ZW50TGlzdGVuZXIoZSx4ZSwhMCl9ZnVuY3Rpb24geGUoZSl7dmFyIHQ9ZS50eXBlLG89ITEscj1iLnNjcm9sbE92ZXJmbG93LGk9XCJtb3VzZWxlYXZlXCI9PT10P2UudG9FbGVtZW50fHxlLnJlbGF0ZWRUYXJnZXQ6ZS50YXJnZXQ7aWYoaT09Y258fCFpKXJldHVybiB1ZSghMCksdm9pZChyJiZiLnNjcm9sbE92ZXJmbG93SGFuZGxlci5zZXRJc2Nyb2xsKGksITApKTtcInRvdWNoZW5kXCI9PT10JiYoWD0hMSxzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7WD0hMH0sODAwKSksKFwibW91c2VlbnRlclwiIT09dHx8WCkmJihiLm5vcm1hbFNjcm9sbEVsZW1lbnRzLnNwbGl0KFwiLFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2lmKCFvKXt2YXIgdD15byhpLGUpLG49dm8oaSxlKTsodHx8bikmJihtLnNoYXJlZC5pc05vcm1hbFNjcm9sbEVsZW1lbnR8fCh1ZSghMSksciYmYi5zY3JvbGxPdmVyZmxvd0hhbmRsZXIuc2V0SXNjcm9sbChpLCExKSksbS5zaGFyZWQuaXNOb3JtYWxTY3JvbGxFbGVtZW50PSEwLG89ITApfX0pLCFvJiZtLnNoYXJlZC5pc05vcm1hbFNjcm9sbEVsZW1lbnQmJih1ZSghMCksciYmYi5zY3JvbGxPdmVyZmxvd0hhbmRsZXIuc2V0SXNjcm9sbChpLCEwKSxtLnNoYXJlZC5pc05vcm1hbFNjcm9sbEVsZW1lbnQ9ITEpKX1mdW5jdGlvbiBMZSgpe3ZhciBlPV9uKCksdD1RbigpO3k9PT1lJiZmPT09dHx8KHk9ZSxmPXQsU2UoITApKX1mdW5jdGlvbiBBZShlKXt2YXIgdD1bXCJOVFkzWW5WdVpHeGxOemc1XCIsXCJOVFUxUzJWNU56YzNcIl0sbj1vdCh0WzBdKSxvPW90KHRbMV0pLHI9dm9pZCAwIT09YltuK29dLGk9XCJmcF9cIitlK1wiRXh0ZW5zaW9uXCI7R1tlXT1yP2JbbitvXTpiW2Urb10sbVtlXT12b2lkIDAhPT1hbltpXT9uZXcgYW5baV06bnVsbCxtW2VdJiZtW2VdLmMoZSl9ZnVuY3Rpb24gTWUoZSx0LG4pe3ZhciBvPTEwMCpuLHI9MTAwL24saT1jbi5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO2kuY2xhc3NOYW1lPXpuLHNvKHQsaSk7dmFyIGwsYSxjPWNuLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7Yy5jbGFzc05hbWU9SW4sc28odCxjKSxKbihHbihObixlKSx7d2lkdGg6bytcIiVcIn0pLDE8biYmKGIuY29udHJvbEFycm93cyYmKGw9ZSxhPVt4bygnPGRpdiBjbGFzcz1cImZwLWNvbnRyb2xBcnJvdyBmcC1wcmV2XCI+PC9kaXY+JykseG8oJzxkaXYgY2xhc3M9XCJmcC1jb250cm9sQXJyb3cgZnAtbmV4dFwiPjwvZGl2PicpXSxwbyhHbihSbixsKVswXSxhKSxcIiNmZmZcIiE9PWIuY29udHJvbEFycm93Q29sb3ImJihKbihHbihabixsKSx7XCJib3JkZXItY29sb3JcIjpcInRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IFwiK2IuY29udHJvbEFycm93Q29sb3J9KSxKbihHbihWbixsKSx7XCJib3JkZXItY29sb3JcIjpcInRyYW5zcGFyZW50IFwiK2IuY29udHJvbEFycm93Q29sb3IrXCIgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnRcIn0pKSxiLmxvb3BIb3Jpem9udGFsfHxvbyhHbihWbixsKSkpLGIuc2xpZGVzTmF2aWdhdGlvbiYmZnVuY3Rpb24oZSx0KXtjbyh4bygnPGRpdiBjbGFzcz1cIicram4rJ1wiPjx1bD48L3VsPjwvZGl2PicpLGUpO3ZhciBuPUduKFBuLGUpWzBdO2xvKG4sXCJmcC1cIitiLnNsaWRlc05hdlBvc2l0aW9uKTtmb3IodmFyIG89MDtvPHQ7bysrKXt2YXIgcj1HbihDbixlKVtvXTtjbyh4bygnPGxpPjxhIGhyZWY9XCIjXCI+PHNwYW4gY2xhc3M9XCJmcC1zci1vbmx5XCI+JytrZShvLFwiU2xpZGVcIixyKStcIjwvc3Bhbj48c3Bhbj48L3NwYW4+PC9hPjwvbGk+XCIpLEduKFwidWxcIixuKVswXSl9Sm4obix7XCJtYXJnaW4tbGVmdFwiOlwiLVwiK24uaW5uZXJXaWR0aC8yK1wicHhcIn0pLGxvKEduKFwiYVwiLEduKFwibGlcIixuKVswXSksZ24pfShlLG4pKSx0LmZvckVhY2goZnVuY3Rpb24oZSl7Sm4oZSx7d2lkdGg6citcIiVcIn0pLGIudmVydGljYWxDZW50ZXJlZCYmenQoZSl9KTt2YXIgcz1HbihIbixlKVswXTtudWxsIT1zJiYoMCE9PW5vKEduKHluKSx3bil8fDA9PT1ubyhHbih5biksd24pJiYwIT09bm8ocykpPyhYdChzLFwiaW50ZXJuYWxcIiksbG8ocyxcImZwLWluaXRpYWxcIikpOmxvKHRbMF0sZ24pfWZ1bmN0aW9uIFRlKGUpe3JldHVybiBiLm9mZnNldFNlY3Rpb25zJiZtLm9mZnNldFNlY3Rpb25zP01hdGgucm91bmQobS5vZmZzZXRTZWN0aW9ucy5nZXRXaW5kb3dIZWlnaHQoZSkpOl9uKCl9ZnVuY3Rpb24gT2UoZSx0KXt0fHxudWxsIT1Hbih5bilbMF18fGxvKGUsZ24pLG89R24oeW4pWzBdLEpuKGUse2hlaWdodDpUZShlKStcInB4XCJ9KSxiLnBhZGRpbmdUb3AmJkpuKGUse1wicGFkZGluZy10b3BcIjpiLnBhZGRpbmdUb3B9KSxiLnBhZGRpbmdCb3R0b20mJkpuKGUse1wicGFkZGluZy1ib3R0b21cIjpiLnBhZGRpbmdCb3R0b219KSx2b2lkIDAhPT1iLnNlY3Rpb25zQ29sb3JbdF0mJkpuKGUse1wiYmFja2dyb3VuZC1jb2xvclwiOmIuc2VjdGlvbnNDb2xvclt0XX0pLHZvaWQgMCE9PWIuYW5jaG9yc1t0XSYmZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWFuY2hvclwiLGIuYW5jaG9yc1t0XSl9ZnVuY3Rpb24ga2UoZSx0LG4pe3ZhciBvPVwiU2VjdGlvblwiPT09dD9iLmFuY2hvcnNbZV06bi5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFuY2hvclwiKTtyZXR1cm4gYi5uYXZpZ2F0aW9uVG9vbHRpcHNbZV18fG98fHQrXCIgXCIrKGUrMSl9ZnVuY3Rpb24gQ2UoKXt2YXIgZSx0LG49R24oeW4pWzBdO2xvKG4sU24pLEtlKG4pLEplKCkscWUobiksYi5zY3JvbGxPdmVyZmxvdyYmYi5zY3JvbGxPdmVyZmxvd0hhbmRsZXIuYWZ0ZXJMb2FkKCksZT1mdCgpLHQ9TnQoZS5zZWN0aW9uKSxlLnNlY3Rpb24mJnQmJih2b2lkIDA9PT10fHxubyh0KSE9PW5vKG8pKXx8IWJvKGIuYWZ0ZXJMb2FkKXx8WGUoXCJhZnRlckxvYWRcIix7YWN0aXZlU2VjdGlvbjpuLGVsZW1lbnQ6bixkaXJlY3Rpb246bnVsbCxhbmNob3JMaW5rOm4uZ2V0QXR0cmlidXRlKFwiZGF0YS1hbmNob3JcIiksc2VjdGlvbkluZGV4Om5vKG4sd24pfSksYm8oYi5hZnRlclJlbmRlcikmJlhlKFwiYWZ0ZXJSZW5kZXJcIiksd28odyxcImFmdGVyUmVuZGVyXCIpfWZ1bmN0aW9uIEhlKCl7dmFyIGU7aWYod28odyxcIm9uU2Nyb2xsXCIpLCFFJiYoIWIuYXV0b1Njcm9sbGluZ3x8Yi5zY3JvbGxCYXJ8fFF0KFwiZHJhZ0FuZE1vdmVcIikpJiYhJHQoKSl7dmFyIHQ9UXQoXCJkcmFnQW5kTW92ZVwiKT9NYXRoLmFicyhtLmRyYWdBbmRNb3ZlLmdldEN1cnJlbnRTY3JvbGwoKSk6Z28oKSxuPTAsbz10K19uKCkvMixyPShRdChcImRyYWdBbmRNb3ZlXCIpP20uZHJhZ0FuZE1vdmUuZ2V0RG9jdW1lbnRIZWlnaHQoKTpnLm9mZnNldEhlaWdodC1fbigpKT09PXQsaT1Hbih3bik7aWYociluPWkubGVuZ3RoLTE7ZWxzZSBpZih0KWZvcih2YXIgbD0wO2w8aS5sZW5ndGg7KytsKWlbbF0ub2Zmc2V0VG9wPD1vJiYobj1sKTtlbHNlIG49MDtpZighRm4oZT1pW25dLGduKSl7UT0hMDt2YXIgYSxjLHM9R24oeW4pWzBdLHU9bm8ocyx3bikrMSxmPUN0KGUpLGQ9ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFuY2hvclwiKSx2PW5vKGUsd24pKzEscD1HbihIbixlKVswXSxoPXthY3RpdmVTZWN0aW9uOnMsc2VjdGlvbkluZGV4OnYtMSxhbmNob3JMaW5rOmQsZWxlbWVudDplLGxlYXZpbmdTZWN0aW9uOnUsZGlyZWN0aW9uOmZ9O3AmJihjPXAuZ2V0QXR0cmlidXRlKFwiZGF0YS1hbmNob3JcIiksYT1ubyhwKSkseCYmKGxvKGUsZ24pLGFvKG1vKGUpLGduKSxKdChcInBhcmFsbGF4XCIsXCJhZnRlckxvYWRcIiksYm8oYi5vbkxlYXZlKSYmWGUoXCJvbkxlYXZlXCIsaCksYm8oYi5hZnRlckxvYWQpJiZYZShcImFmdGVyTG9hZFwiLGgpLFF0KFwicmVzZXRTbGlkZXJzXCIpJiZtLnJlc2V0U2xpZGVycy5hcHBseSh7bG9jYWxJc1Jlc2l6aW5nOkUsbGVhdmluZ1NlY3Rpb246dX0pLHR0KHMpLEtlKGUpLHFlKGUpLGt0KGQsdi0xKSxiLmFuY2hvcnMubGVuZ3RoJiYoUz1kKSxQdChhLGMsZCkpLGNsZWFyVGltZW91dChUKSxUPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtRPSExfSwxMDApfWIuZml0VG9TZWN0aW9uJiYoY2xlYXJUaW1lb3V0KE8pLE89c2V0VGltZW91dChmdW5jdGlvbigpe2IuZml0VG9TZWN0aW9uJiZHbih5bilbMF0ub2Zmc2V0SGVpZ2h0PD15JiZ6ZSgpfSxiLmZpdFRvU2VjdGlvbkRlbGF5KSl9fWZ1bmN0aW9uIHplKCl7eCYmKEU9ITAsWmUoR24oeW4pWzBdKSxFPSExKX1mdW5jdGlvbiBSZShlKXtpZih2Lm1bZV0pe3ZhciB0PVwiZG93blwiPT09ZT92ZTpkZTtpZihRdChcInNjcm9sbEhvcml6b250YWxseVwiKSYmKHQ9bS5zY3JvbGxIb3Jpem9udGFsbHkuZ2V0U2Nyb2xsU2VjdGlvbihlLHQpKSxiLnNjcm9sbE92ZXJmbG93KXt2YXIgbj1iLnNjcm9sbE92ZXJmbG93SGFuZGxlci5zY3JvbGxhYmxlKEduKHluKVswXSksbz1cImRvd25cIj09PWU/XCJib3R0b21cIjpcInRvcFwiO2lmKG51bGwhPW4pe2lmKCFiLnNjcm9sbE92ZXJmbG93SGFuZGxlci5pc1Njcm9sbGVkKG8sbikpcmV0dXJuITA7dCgpfWVsc2UgdCgpfWVsc2UgdCgpfX1mdW5jdGlvbiBJZShlKXtiLmF1dG9TY3JvbGxpbmcmJkJlKGUpJiZ2Lm0udXAmJlNvKGUpfWZ1bmN0aW9uIE5lKGUpe3ZhciB0PXZvKGUudGFyZ2V0LHduKXx8R24oeW4pWzBdO2lmKEJlKGUpKXtiLmF1dG9TY3JvbGxpbmcmJlNvKGUpO3ZhciBuPVp0KGUpOyQ9bi55LHE9bi54LEduKFJuLHQpLmxlbmd0aCYmTWF0aC5hYnMoSy1xKT5NYXRoLmFicyhKLSQpPyFhJiZNYXRoLmFicyhLLXEpPlFuKCkvMTAwKmIudG91Y2hTZW5zaXRpdml0eSYmKHE8Sz92Lm0ucmlnaHQmJmdlKHQpOnYubS5sZWZ0JiZtZSh0KSk6Yi5hdXRvU2Nyb2xsaW5nJiZ4JiZNYXRoLmFicyhKLSQpPmFuLmlubmVySGVpZ2h0LzEwMCpiLnRvdWNoU2Vuc2l0aXZpdHkmJigkPEo/UmUoXCJkb3duXCIpOko8JCYmUmUoXCJ1cFwiKSl9fWZ1bmN0aW9uIEJlKGUpe3JldHVybiB2b2lkIDA9PT1lLnBvaW50ZXJUeXBlfHxcIm1vdXNlXCIhPWUucG9pbnRlclR5cGV9ZnVuY3Rpb24gamUoZSl7aWYoYi5maXRUb1NlY3Rpb24mJihZPSExKSxCZShlKSl7dmFyIHQ9WnQoZSk7Sj10LnksSz10Lnh9fWZ1bmN0aW9uIFBlKGUsdCl7Zm9yKHZhciBuPTAsbz1lLnNsaWNlKE1hdGgubWF4KGUubGVuZ3RoLXQsMSkpLHI9MDtyPG8ubGVuZ3RoO3IrKyluKz1vW3JdO3JldHVybiBNYXRoLmNlaWwobi90KX1mdW5jdGlvbiBZZShlKXt2YXIgdD0obmV3IERhdGUpLmdldFRpbWUoKSxuPUZuKEduKFwiLmZwLWNvbXBsZXRlbHlcIilbMF0sQW4pO2lmKCF2Lm0uZG93biYmIXYubS51cClyZXR1cm4gU28oZSksITE7aWYoYi5hdXRvU2Nyb2xsaW5nJiYhdSYmIW4pe3ZhciBvPShlPWV8fGFuLmV2ZW50KS53aGVlbERlbHRhfHwtZS5kZWx0YVl8fC1lLmRldGFpbCxyPU1hdGgubWF4KC0xLE1hdGgubWluKDEsbykpLGk9dm9pZCAwIT09ZS53aGVlbERlbHRhWHx8dm9pZCAwIT09ZS5kZWx0YVgsbD1NYXRoLmFicyhlLndoZWVsRGVsdGFYKTxNYXRoLmFicyhlLndoZWVsRGVsdGEpfHxNYXRoLmFicyhlLmRlbHRhWCk8TWF0aC5hYnMoZS5kZWx0YVkpfHwhaTsxNDk8ZC5sZW5ndGgmJmQuc2hpZnQoKSxkLnB1c2goTWF0aC5hYnMobykpLGIuc2Nyb2xsQmFyJiZTbyhlKTt2YXIgYT10LWVlO2lmKGVlPXQsMjAwPGEmJihkPVtdKSx4JiYhS3QoKSl7dmFyIGM9UGUoZCwxMCk7UGUoZCw3MCk8PWMmJmwmJlJlKHI8MD9cImRvd25cIjpcInVwXCIpfXJldHVybiExfWIuZml0VG9TZWN0aW9uJiYoWT0hMSl9ZnVuY3Rpb24gV2UoZSx0KXt2YXIgbj1udWxsPT10P0duKHluKVswXTp0LG89R24oUm4sbilbMF07aWYoIShudWxsPT1vfHxLdCgpfHxhfHxHbihDbixvKS5sZW5ndGg8Mikpe3ZhciByPUduKEhuLG8pWzBdLGk9bnVsbDtpZihudWxsPT0oaT1cImxlZnRcIj09PWU/S24ocixDbik6JG4ocixDbikpKXtpZighYi5sb29wSG9yaXpvbnRhbClyZXR1cm47dmFyIGw9bW8ocik7aT1cImxlZnRcIj09PWU/bFtsLmxlbmd0aC0xXTpsWzBdfWE9IW0udGVzdC5pc1Rlc3Rpbmcsd3QobyxpLGUpfX1mdW5jdGlvbiBEZSgpe2Zvcih2YXIgZT1HbihIbiksdD0wO3Q8ZS5sZW5ndGg7dCsrKVh0KGVbdF0sXCJpbnRlcm5hbFwiKX1mdW5jdGlvbiBWZShlKXt2YXIgdD1lLm9mZnNldEhlaWdodCxuPWUub2Zmc2V0VG9wLG89bixyPVF0KFwiZHJhZ0FuZE1vdmVcIikmJm0uZHJhZ0FuZE1vdmUuaXNHcmFiYmluZz9tLmRyYWdBbmRNb3ZlLmlzU2Nyb2xsaW5nRG93bigpOnRlPG4saT1vLXkrdCxsPWIuYmlnU2VjdGlvbnNEZXN0aW5hdGlvbjtyZXR1cm4geTx0PyhyfHxsKSYmXCJib3R0b21cIiE9PWx8fChvPWkpOihyfHxFJiZudWxsPT1lbyhlKSkmJihvPWkpLGIub2Zmc2V0U2VjdGlvbnMmJm0ub2Zmc2V0U2VjdGlvbnMmJihvPW0ub2Zmc2V0U2VjdGlvbnMuZ2V0U2VjdGlvblBvc2l0aW9uKHIsbyxlKSksdGU9b31mdW5jdGlvbiBaZShlLHQsbil7aWYobnVsbCE9ZSl7dmFyIG8scixpPXtlbGVtZW50OmUsY2FsbGJhY2s6dCxpc01vdmVtZW50VXA6bixkdG9wOlZlKGUpLHlNb3ZlbWVudDpDdChlKSxhbmNob3JMaW5rOmUuZ2V0QXR0cmlidXRlKFwiZGF0YS1hbmNob3JcIiksc2VjdGlvbkluZGV4Om5vKGUsd24pLGFjdGl2ZVNsaWRlOkduKEhuLGUpWzBdLGFjdGl2ZVNlY3Rpb246R24oeW4pWzBdLGxlYXZpbmdTZWN0aW9uOm5vKEduKHluKSx3bikrMSxsb2NhbElzUmVzaXppbmc6RX07aWYoIShpLmFjdGl2ZVNlY3Rpb249PWUmJiFFfHxiLnNjcm9sbEJhciYmZ28oKT09PWkuZHRvcCYmIUZuKGUsTG4pKSl7aWYobnVsbCE9aS5hY3RpdmVTbGlkZSYmKG89aS5hY3RpdmVTbGlkZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFuY2hvclwiKSxyPW5vKGkuYWN0aXZlU2xpZGUpKSwhaS5sb2NhbElzUmVzaXppbmcpe3ZhciBsPWkueU1vdmVtZW50O2lmKHZvaWQgMCE9PW4mJihsPW4/XCJ1cFwiOlwiZG93blwiKSxpLmRpcmVjdGlvbj1sLHZvaWQgMCE9PWFuLmZwX2Ryb3BFZmZlY3RFeHRlbnNpb24mJm0uZHJvcEVmZmVjdC5vbkxlYXZlKGkpLGJvKGIub25MZWF2ZSkmJiExPT09WGUoXCJvbkxlYXZlXCIsaSkpcmV0dXJufXZhciBhO0p0KFwicGFyYWxsYXhcIixcImFwcGx5XCIsaSksSnQoXCJjYXJkc1wiLFwiYXBwbHlcIixpKSxKdChcImRyb3BFZmZlY3RcIixcImFwcGx5XCIsaSksYi5hdXRvU2Nyb2xsaW5nJiZiLmNvbnRpbnVvdXNWZXJ0aWNhbCYmdm9pZCAwIT09aS5pc01vdmVtZW50VXAmJighaS5pc01vdmVtZW50VXAmJlwidXBcIj09aS55TW92ZW1lbnR8fGkuaXNNb3ZlbWVudFVwJiZcImRvd25cIj09aS55TW92ZW1lbnQpJiYoKGM9aSkuaXNNb3ZlbWVudFVwP2hvKEduKHluKVswXSxBbyhjLmFjdGl2ZVNlY3Rpb24sd24pKTpwbyhHbih5bilbMF0sTW8oYy5hY3RpdmVTZWN0aW9uLHduKS5yZXZlcnNlKCkpLEd0KEduKHluKVswXS5vZmZzZXRUb3ApLERlKCksYy53cmFwQXJvdW5kRWxlbWVudHM9Yy5hY3RpdmVTZWN0aW9uLGMuZHRvcD1jLmVsZW1lbnQub2Zmc2V0VG9wLGMueU1vdmVtZW50PUN0KGMuZWxlbWVudCksYy5sZWF2aW5nU2VjdGlvbj1ubyhjLmFjdGl2ZVNlY3Rpb24sd24pKzEsYy5zZWN0aW9uSW5kZXg9bm8oYy5lbGVtZW50LHduKSx3byhHbih1bilbMF0sXCJvbkNvbnRpbnVvdXNWZXJ0aWNhbFwiLGMpLGk9YyksUXQoXCJzY3JvbGxPdmVyZmxvd1Jlc2V0XCIpJiZtLnNjcm9sbE92ZXJmbG93UmVzZXQuc2V0UHJldmlvdXMoaS5hY3RpdmVTZWN0aW9uKSxpLmxvY2FsSXNSZXNpemluZ3x8dHQoaS5hY3RpdmVTZWN0aW9uKSxiLnNjcm9sbE92ZXJmbG93JiZiLnNjcm9sbE92ZXJmbG93SGFuZGxlci5iZWZvcmVMZWF2ZSgpLFF0KFwiZHJvcEVmZmVjdFwiKSYmYi5kcm9wRWZmZWN0fHwobG8oZSxnbiksYW8obW8oZSksZ24pKSxLZShlKSxiLnNjcm9sbE92ZXJmbG93JiZiLnNjcm9sbE92ZXJmbG93SGFuZGxlci5vbkxlYXZlKCkseD1tLnRlc3QuaXNUZXN0aW5nLFB0KHIsbyxpLmFuY2hvckxpbmssaS5zZWN0aW9uSW5kZXgpLGZ1bmN0aW9uKGUpe3ZhciB0PWIuc2Nyb2xsaW5nU3BlZWQ8NzAwLG49dD83MDA6Yi5zY3JvbGxpbmdTcGVlZDtpZihiLmNzczMmJmIuYXV0b1Njcm9sbGluZyYmIWIuc2Nyb2xsQmFyKXt2YXIgbz1cInRyYW5zbGF0ZTNkKDBweCwgLVwiK01hdGgucm91bmQoZS5kdG9wKStcInB4LCAwcHgpXCI7SXQobywhMCksYi5zY3JvbGxpbmdTcGVlZD8oY2xlYXJUaW1lb3V0KEEpLEE9c2V0VGltZW91dChmdW5jdGlvbigpe19lKGUpLHg9IXR9LGIuc2Nyb2xsaW5nU3BlZWQpKTpfZShlKX1lbHNle3ZhciByPUZlKGUuZHRvcCk7bS50ZXN0LnRvcD0tZS5kdG9wK1wicHhcIixKbihzLHtcInNjcm9sbC1iZWhhdmlvclwiOlwidW5zZXRcIn0pLHRuKHIuZWxlbWVudCxyLm9wdGlvbnMsYi5zY3JvbGxpbmdTcGVlZCxmdW5jdGlvbigpe2Iuc2Nyb2xsQmFyP3NldFRpbWVvdXQoZnVuY3Rpb24oKXtfZShlKX0sMzApOihfZShlKSx4PSF0KX0pfXQmJihjbGVhclRpbWVvdXQoRCksRD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7eD0hMH0sbikpfShpKSxTPWkuYW5jaG9yTGluayxrdChpLmFuY2hvckxpbmssbnVsbD09KGE9aSkud3JhcEFyb3VuZEVsZW1lbnRzP2Euc2VjdGlvbkluZGV4OmEuaXNNb3ZlbWVudFVwP0duKHduKS5sZW5ndGgtMTowKX19dmFyIGN9ZnVuY3Rpb24gWGUoZSx0KXt2YXIgbixvLHIsaSxsPShvPWUscj10LChpPWIudjJjb21wYXRpYmxlP3thZnRlclJlbmRlcjpmdW5jdGlvbigpe3JldHVyblt3XX0sb25MZWF2ZTpmdW5jdGlvbigpe3JldHVybltyLmFjdGl2ZVNlY3Rpb24sci5sZWF2aW5nU2VjdGlvbixyLnNlY3Rpb25JbmRleCsxLHIuZGlyZWN0aW9uXX0sYWZ0ZXJMb2FkOmZ1bmN0aW9uKCl7cmV0dXJuW3IuZWxlbWVudCxyLmFuY2hvckxpbmssci5zZWN0aW9uSW5kZXgrMV19LGFmdGVyU2xpZGVMb2FkOmZ1bmN0aW9uKCl7cmV0dXJuW3IuZGVzdGlueSxyLmFuY2hvckxpbmssci5zZWN0aW9uSW5kZXgrMSxyLnNsaWRlQW5jaG9yLHIuc2xpZGVJbmRleF19LG9uU2xpZGVMZWF2ZTpmdW5jdGlvbigpe3JldHVybltyLnByZXZTbGlkZSxyLmFuY2hvckxpbmssci5zZWN0aW9uSW5kZXgrMSxyLnByZXZTbGlkZUluZGV4LHIuZGlyZWN0aW9uLHIuc2xpZGVJbmRleF19fTp7YWZ0ZXJSZW5kZXI6ZnVuY3Rpb24oKXtyZXR1cm57c2VjdGlvbjpHZShHbih5bilbMF0pLHNsaWRlOlVlKEduKEhuLEduKHluKVswXSlbMF0pfX0sb25MZWF2ZTpmdW5jdGlvbigpe3JldHVybntvcmlnaW46R2Uoci5hY3RpdmVTZWN0aW9uKSxkZXN0aW5hdGlvbjpHZShyLmVsZW1lbnQpLGRpcmVjdGlvbjpyLmRpcmVjdGlvbn19LGFmdGVyTG9hZDpmdW5jdGlvbigpe3JldHVybiBpLm9uTGVhdmUoKX0sYWZ0ZXJTbGlkZUxvYWQ6ZnVuY3Rpb24oKXtyZXR1cm57c2VjdGlvbjpHZShyLnNlY3Rpb24pLG9yaWdpbjpVZShyLnByZXZTbGlkZSksZGVzdGluYXRpb246VWUoci5kZXN0aW55KSxkaXJlY3Rpb246ci5kaXJlY3Rpb259fSxvblNsaWRlTGVhdmU6ZnVuY3Rpb24oKXtyZXR1cm4gaS5hZnRlclNsaWRlTG9hZCgpfX0pW29dKCkpO2lmKGIudjJjb21wYXRpYmxlKXtpZighMT09PWJbZV0uYXBwbHkobFswXSxsLnNsaWNlKDEpKSlyZXR1cm4hMX1lbHNlIGlmKHdvKHcsZSxsKSwhMT09PWJbZV0uYXBwbHkobFtPYmplY3Qua2V5cyhsKVswXV0sKG49bCxPYmplY3Qua2V5cyhuKS5tYXAoZnVuY3Rpb24oZSl7cmV0dXJuIG5bZV19KSkpKXJldHVybiExO3JldHVybiEwfWZ1bmN0aW9uIEdlKGUpe3JldHVybiBlP25ldyBybihlKTpudWxsfWZ1bmN0aW9uIFVlKGUpe3JldHVybiBlP25ldyBsbihlKTpudWxsfWZ1bmN0aW9uIEZlKGUpe3ZhciB0PXt9O3JldHVybiBiLmF1dG9TY3JvbGxpbmcmJiFiLnNjcm9sbEJhcj8odC5vcHRpb25zPS1lLHQuZWxlbWVudD1Hbih1bilbMF0pOih0Lm9wdGlvbnM9ZSx0LmVsZW1lbnQ9YW4pLHR9ZnVuY3Rpb24gX2UoZSl7dmFyIHQ7bnVsbCE9KHQ9ZSkud3JhcEFyb3VuZEVsZW1lbnRzJiYodC5pc01vdmVtZW50VXA/aG8oR24od24pWzBdLHQud3JhcEFyb3VuZEVsZW1lbnRzKTpwbyhHbih3bilbR24od24pLmxlbmd0aC0xXSx0LndyYXBBcm91bmRFbGVtZW50cyksR3QoR24oeW4pWzBdLm9mZnNldFRvcCksRGUoKSx0LnNlY3Rpb25JbmRleD1ubyh0LmVsZW1lbnQsd24pLHQubGVhdmluZ1NlY3Rpb249bm8odC5hY3RpdmVTZWN0aW9uLHduKSsxKSxibyhiLmFmdGVyTG9hZCkmJiFlLmxvY2FsSXNSZXNpemluZyYmWGUoXCJhZnRlckxvYWRcIixlKSxiLnNjcm9sbE92ZXJmbG93JiZiLnNjcm9sbE92ZXJmbG93SGFuZGxlci5hZnRlckxvYWQoKSxKdChcInBhcmFsbGF4XCIsXCJhZnRlckxvYWRcIiksSnQoXCJkcm9wRWZmZWN0XCIsXCJhZnRlckxvYWRcIiksSnQoXCJzY3JvbGxPdmVyZmxvd1Jlc2V0XCIsXCJyZXNldFwiKSxRdChcInJlc2V0U2xpZGVyc1wiKSYmbS5yZXNldFNsaWRlcnMuYXBwbHkoZSksZS5sb2NhbElzUmVzaXppbmd8fHFlKGUuZWxlbWVudCksbG8oZS5lbGVtZW50LFNuKSxhbyhtbyhlLmVsZW1lbnQpLFNuKSxKZSgpLHg9ITAsYm8oZS5jYWxsYmFjaykmJmUuY2FsbGJhY2soKX1mdW5jdGlvbiBRZShlLHQpe2Uuc2V0QXR0cmlidXRlKHQsZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLVwiK3QpKSxlLnJlbW92ZUF0dHJpYnV0ZShcImRhdGEtXCIrdCl9ZnVuY3Rpb24gSmUoKXt2YXIgZT1HbihcIi5mcC1hdXRvLWhlaWdodFwiKVswXXx8YmUoKSYmR24oXCIuZnAtYXV0by1oZWlnaHQtcmVzcG9uc2l2ZVwiKVswXTtiLmxhenlMb2FkaW5nJiZlJiZHbih3bitcIjpub3QoXCIrbW4rXCIpXCIpLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQsbixvO3Q9ZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxuPXQudG9wLG89dC5ib3R0b20sKG4rMjx5JiYwPG58fDI8byYmbzx5KSYmS2UoZSl9KX1mdW5jdGlvbiBLZShvKXtiLmxhenlMb2FkaW5nJiZHbihcImltZ1tkYXRhLXNyY10sIGltZ1tkYXRhLXNyY3NldF0sIHNvdXJjZVtkYXRhLXNyY10sIHNvdXJjZVtkYXRhLXNyY3NldF0sIHZpZGVvW2RhdGEtc3JjXSwgYXVkaW9bZGF0YS1zcmNdLCBpZnJhbWVbZGF0YS1zcmNdXCIsbnQobykpLmZvckVhY2goZnVuY3Rpb24obil7aWYoW1wic3JjXCIsXCJzcmNzZXRcIl0uZm9yRWFjaChmdW5jdGlvbihlKXt2YXIgdD1uLmdldEF0dHJpYnV0ZShcImRhdGEtXCIrZSk7bnVsbCE9dCYmdCYmKFFlKG4sZSksbi5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLGZ1bmN0aW9uKCl7JGUobyl9KSl9KSx5byhuLFwic291cmNlXCIpKXt2YXIgZT12byhuLFwidmlkZW8sIGF1ZGlvXCIpO2UmJihlLmxvYWQoKSxlLm9ubG9hZGVkZGF0YT1mdW5jdGlvbigpeyRlKG8pfSl9fSl9ZnVuY3Rpb24gJGUoZSl7Yi5zY3JvbGxPdmVyZmxvdyYmKGNsZWFyVGltZW91dChXKSxXPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtGbihnLGZuKXx8cC5jcmVhdGVTY3JvbGxCYXIoZSl9LDIwMCkpfWZ1bmN0aW9uIHFlKGUpe3ZhciB0PW50KGUpO0duKFwidmlkZW8sIGF1ZGlvXCIsdCkuZm9yRWFjaChmdW5jdGlvbihlKXtlLmhhc0F0dHJpYnV0ZShcImRhdGEtYXV0b3BsYXlcIikmJlwiZnVuY3Rpb25cIj09dHlwZW9mIGUucGxheSYmZS5wbGF5KCl9KSxHbignaWZyYW1lW3NyYyo9XCJ5b3V0dWJlLmNvbS9lbWJlZC9cIl0nLHQpLmZvckVhY2goZnVuY3Rpb24oZSl7ZS5oYXNBdHRyaWJ1dGUoXCJkYXRhLWF1dG9wbGF5XCIpJiZldChlKSxlLm9ubG9hZD1mdW5jdGlvbigpe2UuaGFzQXR0cmlidXRlKFwiZGF0YS1hdXRvcGxheVwiKSYmZXQoZSl9fSl9ZnVuY3Rpb24gZXQoZSl7ZS5jb250ZW50V2luZG93LnBvc3RNZXNzYWdlKCd7XCJldmVudFwiOlwiY29tbWFuZFwiLFwiZnVuY1wiOlwicGxheVZpZGVvXCIsXCJhcmdzXCI6XCJcIn0nLFwiKlwiKX1mdW5jdGlvbiB0dChlKXt2YXIgdD1udChlKTtHbihcInZpZGVvLCBhdWRpb1wiLHQpLmZvckVhY2goZnVuY3Rpb24oZSl7ZS5oYXNBdHRyaWJ1dGUoXCJkYXRhLWtlZXBwbGF5aW5nXCIpfHxcImZ1bmN0aW9uXCIhPXR5cGVvZiBlLnBhdXNlfHxlLnBhdXNlKCl9KSxHbignaWZyYW1lW3NyYyo9XCJ5b3V0dWJlLmNvbS9lbWJlZC9cIl0nLHQpLmZvckVhY2goZnVuY3Rpb24oZSl7L3lvdXR1YmVcXC5jb21cXC9lbWJlZFxcLy8udGVzdChlLmdldEF0dHJpYnV0ZShcInNyY1wiKSkmJiFlLmhhc0F0dHJpYnV0ZShcImRhdGEta2VlcHBsYXlpbmdcIikmJmUuY29udGVudFdpbmRvdy5wb3N0TWVzc2FnZSgne1wiZXZlbnRcIjpcImNvbW1hbmRcIixcImZ1bmNcIjpcInBhdXNlVmlkZW9cIixcImFyZ3NcIjpcIlwifScsXCIqXCIpfSl9ZnVuY3Rpb24gbnQoZSl7dmFyIHQ9R24oSG4sZSk7cmV0dXJuIHQubGVuZ3RoJiYoZT10WzBdKSxlfWZ1bmN0aW9uIG90KGUpe3ZhciBzPVwiQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz1cIjtmdW5jdGlvbiBvKGUpe3ZhciB0LG4sbyxyLGksbCxhPVwiXCIsYz0wO2ZvcihlPWUucmVwbGFjZSgvW15BLVphLXowLTkrLz1dL2csXCJcIik7YzxlLmxlbmd0aDspdD1zLmluZGV4T2YoZS5jaGFyQXQoYysrKSk8PDJ8KHI9cy5pbmRleE9mKGUuY2hhckF0KGMrKykpKT4+NCxuPSgxNSZyKTw8NHwoaT1zLmluZGV4T2YoZS5jaGFyQXQoYysrKSkpPj4yLG89KDMmaSk8PDZ8KGw9cy5pbmRleE9mKGUuY2hhckF0KGMrKykpKSxhKz1TdHJpbmcuZnJvbUNoYXJDb2RlKHQpLDY0IT1pJiYoYSs9U3RyaW5nLmZyb21DaGFyQ29kZShuKSksNjQhPWwmJihhKz1TdHJpbmcuZnJvbUNoYXJDb2RlKG8pKTtyZXR1cm4gYT1mdW5jdGlvbihlKXtmb3IodmFyIHQsbj1cIlwiLG89MCxyPTAsaT0wO288ZS5sZW5ndGg7KShyPWUuY2hhckNvZGVBdChvKSk8MTI4PyhuKz1TdHJpbmcuZnJvbUNoYXJDb2RlKHIpLG8rKyk6MTkxPHImJnI8MjI0PyhpPWUuY2hhckNvZGVBdChvKzEpLG4rPVN0cmluZy5mcm9tQ2hhckNvZGUoKDMxJnIpPDw2fDYzJmkpLG8rPTIpOihpPWUuY2hhckNvZGVBdChvKzEpLHQ9ZS5jaGFyQ29kZUF0KG8rMiksbis9U3RyaW5nLmZyb21DaGFyQ29kZSgoMTUmcik8PDEyfCg2MyZpKTw8Nnw2MyZ0KSxvKz0zKTtyZXR1cm4gbn0oYSl9ZnVuY3Rpb24gcihlKXtyZXR1cm4gZS5zbGljZSgzKS5zbGljZSgwLC0zKX1yZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9ZS5zcGxpdChcIl9cIik7aWYoMTx0Lmxlbmd0aCl7dmFyIG49dFsxXTtyZXR1cm4gZS5yZXBsYWNlKHIodFsxXSksXCJcIikuc3BsaXQoXCJfXCIpWzBdK1wiX1wiK28obi5zbGljZSgzKS5zbGljZSgwLC0zKSl9cmV0dXJuIHIoZSl9KG8oZSkpfWZ1bmN0aW9uIHJ0KGcpe3ZhciBtPXZvaWQgMCE9PUdbZ10mJkdbZ10ubGVuZ3RoLGU9W10sUz0hMTtyZXR1cm4gaW8oR1tnXSk/ZT1HW2ddOmUucHVzaChHW2ddKSxlLmZvckVhY2goZnVuY3Rpb24oZSl7dmFyIHQ9ZnVuY3Rpb24oKXtpZihjbi5kb21haW4ubGVuZ3RoKXtmb3IodmFyIGU9Y24uZG9tYWluLnJlcGxhY2UoL14od3d3XFwuKS8sXCJcIikuc3BsaXQoXCIuXCIpOzI8ZS5sZW5ndGg7KWUuc2hpZnQoKTtyZXR1cm4gZS5qb2luKFwiLlwiKS5yZXBsYWNlKC8oXlxcLiopfChcXC4qJCkvZyxcIlwiKX1yZXR1cm5cIlwifSgpLG49W1wiTVRNMGJHOWpZV3hvYjNOME1qTTBcIixcIk1UTTBNQzR4TWpNMFwiLFwiTVRNMGFuTm9aV3hzTG01bGRESXpOQT09XCIsXCJVRGREUVU1Wk5sTk5cIixcIk5UWTNZblZ1Wkd4bE56ZzVcIixcIk5UVTFTMlY1TnpjM1wiXSxvPW90KG5bMF0pLHI9b3QoblsxXSksaT1vdChuWzJdKSxsPW90KG5bM10pLGE9b3Qobls0XSksYz1vdChuWzVdKSxzPXZvaWQgMCE9PWJbYStjXTttPW18fHM7dmFyIHU9W28scixpXS5pbmRleE9mKHQpPDAmJjAhPT10Lmxlbmd0aDtpZighbSYmIXMmJnUpcmV0dXJuITE7dmFyIGY9bT9vdChlKTpcIlwiLGQ9MTwoZj1mLnNwbGl0KFwiX1wiKSkubGVuZ3RoJiYtMTxmWzFdLmluZGV4T2YoZyxmWzFdLmxlbmd0aC1nLmxlbmd0aCksdj0xPGYubGVuZ3RoJiYtMTxmWzFdLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihhKSxwPWZbMF0uaW5kZXhPZih0LGZbMF0ubGVuZ3RoLXQubGVuZ3RoKTwwLGg9ZHx8djtTPVN8fCEocCYmdSYmbCE9ZlswXSkmJmh8fCF1fSksU31mdW5jdGlvbiBpdChlKXtlLmZvckVhY2goZnVuY3Rpb24oZSl7aWYoZS5yZW1vdmVkTm9kZXNbMF0mJmUucmVtb3ZlZE5vZGVzWzBdLmlzRXF1YWxOb2RlKEYpKXtjbGVhclRpbWVvdXQoXyk7dmFyIHQ9b3QoXCJiREl3YzJWMFZHbHRaVzkxZERBemJBPT1cIik7Xz1hblt0XShsdCw5MDApfX0pfWZ1bmN0aW9uIGx0KCl7ST0hMX1mdW5jdGlvbiBhdChlKXtpZihGPWNuLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksVT1vdChcIk1USXpQR1JwZGo0OFlTQm9jbVZtUFNKb2RIUndPaTh2WVd4MllYSnZkSEpwWjI4dVkyOXRMMloxYkd4UVlXZGxMMlY0ZEdWdWMybHZibk12SWlCemRIbHNaVDBpWTI5c2IzSTZJQ05tWm1ZZ0lXbHRjRzl5ZEdGdWREc2dkR1Y0ZEMxa1pXTnZjbUYwYVc5dU9tNXZibVVnSVdsdGNHOXlkR0Z1ZERzaVBsVnViR2xqWlc1elpXUWdablZzYkZCaFoyVXVhbk1nUlhoMFpXNXphVzl1UEM5aFBqd3ZaR2wyUGpFeU13PT1cIiksTnx8KFU9VS5yZXBsYWNlKFwiZXh0ZW5zaW9ucy9cIixcIlwiKS5yZXBsYWNlKFwiRXh0ZW5zaW9uXCIsXCJcIikpLEYuaW5uZXJIVE1MPVUsRj1GLmZpcnN0Q2hpbGQsXCJNdXRhdGlvbk9ic2VydmVyXCJpbiBhbiYmbmV3IE11dGF0aW9uT2JzZXJ2ZXIoaXQpLm9ic2VydmUoY24uYm9keSx7Y2hpbGRMaXN0OiEwLHN1YnRyZWU6ITF9KSwoIU58fFF0KGUpJiZtW2VdKSYmKCFydChlKXx8IU4pKXtjdCgpO3ZhciB0PW90KFwiTXpRMWMyVjBTVzUwWlhKMllXd3hNak09XCIpO2FuW3RdKGN0LDJlMyl9fWZ1bmN0aW9uIGN0KCl7RiYmKEl8fChNYXRoLnJhbmRvbSgpPC41P1RvKGcsRik6Y28oRixnKSxJPSEwKSxGLnNldEF0dHJpYnV0ZShcInN0eWxlXCIsb3QoXCJNVEl6ZWkxcGJtUmxlRG81T1RrNU9UazVPM0J2YzJsMGFXOXVPbVpwZUdWa08zUnZjRG95TUhCNE8ySnZkSFJ2YlRwaGRYUnZPMnhsWm5RNk1qQndlRHR5YVdkb2REcGhkWFJ2TzJKaFkydG5jbTkxYm1RNmNtVmtPM0JoWkdScGJtYzZOM0I0SURFMWNIZzdabTl1ZEMxemFYcGxPakUwY0hnN1ptOXVkQzFtWVcxcGJIazZZWEpwWVd3N1kyOXNiM0k2STJabVpqdGthWE53YkdGNU9tbHViR2x1WlMxaWJHOWphenQwY21GdWMyWnZjbTA2ZEhKaGJuTnNZWFJsTTJRb01Dd3dMREFwTzI5d1lXTnBkSGs2TVR0b1pXbG5hSFE2WVhWMGJ6dDNhV1IwYURwaGRYUnZPM3B2YjIwNk1UdHRZWEpuYVc0NllYVjBienRpYjNKa1pYSTZibTl1WlR0MmFYTnBZbWxzYVhSNU9uWnBjMmxpYkdVN1kyeHBjQzF3WVhSb09tNXZibVU3TVRJelwiKS5yZXBsYWNlKC87L2csb3QoXCJNVEl6SUNGcGJYQnZjblJoYm5RN016UTFcIikpKSl9ZnVuY3Rpb24gc3QoKXt2YXIgZT1mdCgpLHQ9ZS5zZWN0aW9uLG49ZS5zbGlkZTt0JiYoYi5hbmltYXRlQW5jaG9yP0J0KHQsbik6cGUodCxuKSl9ZnVuY3Rpb24gdXQoZSl7aWYoIVEmJiFiLmxvY2tBbmNob3JzKXt2YXIgdD1mdCgpLG49dC5zZWN0aW9uLG89dC5zbGlkZSxyPXZvaWQgMD09PVMsaT12b2lkIDA9PT1TJiZ2b2lkIDA9PT1vJiYhYTtuJiZuLmxlbmd0aCYmKG4mJm4hPT1TJiYhcnx8aSYmIUt0KCl8fCFhJiZsIT1vJiYhS3QoKSkmJkJ0KG4sbyl9fWZ1bmN0aW9uIGZ0KCl7dmFyIGUsdCxuPWFuLmxvY2F0aW9uLmhhc2g7aWYobi5sZW5ndGgpe3ZhciBvPW4ucmVwbGFjZShcIiNcIixcIlwiKS5zcGxpdChcIi9cIikscj0tMTxuLmluZGV4T2YoXCIjL1wiKTtlPXI/XCIvXCIrb1sxXTpkZWNvZGVVUklDb21wb25lbnQob1swXSk7dmFyIGk9cj9vWzJdOm9bMV07aSYmaS5sZW5ndGgmJih0PWRlY29kZVVSSUNvbXBvbmVudChpKSl9cmV0dXJue3NlY3Rpb246ZSxzbGlkZTp0fX1mdW5jdGlvbiBkdChlKXtjbGVhclRpbWVvdXQoayk7dmFyIHQ9Y24uYWN0aXZlRWxlbWVudCxuPWUua2V5Q29kZTs5PT09bj9mdW5jdGlvbihlKXt2YXIgdCxuLG8scixpLGwsYSxjPWUuc2hpZnRLZXkscz1jbi5hY3RpdmVFbGVtZW50LHU9Z3QobnQoR24oeW4pWzBdKSk7ZnVuY3Rpb24gZihlKXtyZXR1cm4gU28oZSksdVswXT91WzBdLmZvY3VzKCk6bnVsbH0odD1lLG49Z3QoY24pLG89bi5pbmRleE9mKGNuLmFjdGl2ZUVsZW1lbnQpLHI9dC5zaGlmdEtleT9vLTE6bysxLGk9bltyXSxsPVVlKHZvKGksQ24pKSxhPUdlKHZvKGksd24pKSxsfHxhKSYmKHM/bnVsbD09dm8ocyx5bitcIixcIit5bitcIiBcIitIbikmJihzPWYoZSkpOmYoZSksKCFjJiZzPT11W3UubGVuZ3RoLTFdfHxjJiZzPT11WzBdKSYmU28oZSkpfShlKTp5byh0LFwidGV4dGFyZWFcIil8fHlvKHQsXCJpbnB1dFwiKXx8eW8odCxcInNlbGVjdFwiKXx8XCJ0cnVlXCI9PT10LmdldEF0dHJpYnV0ZShcImNvbnRlbnRFZGl0YWJsZVwiKXx8XCJcIj09PXQuZ2V0QXR0cmlidXRlKFwiY29udGVudEVkaXRhYmxlXCIpfHwhYi5rZXlib2FyZFNjcm9sbGluZ3x8IWIuYXV0b1Njcm9sbGluZ3x8KC0xPFs0MCwzOCwzMiwzMywzNF0uaW5kZXhPZihuKSYmU28oZSksdT1lLmN0cmxLZXksaz1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7IWZ1bmN0aW9uKGUpe3ZhciB0PWUuc2hpZnRLZXksbj1jbi5hY3RpdmVFbGVtZW50LG89eW8obixcInZpZGVvXCIpfHx5byhuLFwiYXVkaW9cIik7aWYoeHx8IShbMzcsMzldLmluZGV4T2YoZS5rZXlDb2RlKTwwKSlzd2l0Y2goZS5rZXlDb2RlKXtjYXNlIDM4OmNhc2UgMzM6di5rLnVwJiZkZSgpO2JyZWFrO2Nhc2UgMzI6aWYodCYmdi5rLnVwJiYhbyl7ZGUoKTticmVha31jYXNlIDQwOmNhc2UgMzQ6di5rLmRvd24mJigzMj09PWUua2V5Q29kZSYmb3x8dmUoKSk7YnJlYWs7Y2FzZSAzNjp2LmsudXAmJmhlKDEpO2JyZWFrO2Nhc2UgMzU6di5rLmRvd24mJmhlKEduKHduKS5sZW5ndGgpO2JyZWFrO2Nhc2UgMzc6di5rLmxlZnQmJm1lKCk7YnJlYWs7Y2FzZSAzOTp2LmsucmlnaHQmJmdlKCl9fShlKX0sMTUwKSl9ZnVuY3Rpb24gdnQoZSl7dCYmKHU9ZS5jdHJsS2V5KX1mdW5jdGlvbiBwdChlKXsyPT1lLndoaWNoJiYobmU9ZS5wYWdlWSx3LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIixidCkpfWZ1bmN0aW9uIGh0KGUpezI9PWUud2hpY2gmJncucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLGJ0KX1mdW5jdGlvbiBndChlKXtyZXR1cm5bXS5zbGljZS5jYWxsKEduKEIsZSkpLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm5cIi0xXCIhPT1lLmdldEF0dHJpYnV0ZShcInRhYmluZGV4XCIpJiZudWxsIT09ZS5vZmZzZXRQYXJlbnR9KX1mdW5jdGlvbiBtdCgpe3Q9ITB9ZnVuY3Rpb24gU3QoKXt1PXQ9ITF9ZnVuY3Rpb24gYnQoZSl7Yi5hdXRvU2Nyb2xsaW5nJiYoeCYmKGUucGFnZVk8bmUmJnYubS51cD9kZSgpOmUucGFnZVk+bmUmJnYubS5kb3duJiZ2ZSgpKSxuZT1lLnBhZ2VZKX1mdW5jdGlvbiB3dChlLHQsbil7dmFyIG89dm8oZSx3bikscj17c2xpZGVzOmUsZGVzdGlueTp0LGRpcmVjdGlvbjpuLGRlc3RpbnlQb3M6e2xlZnQ6dC5vZmZzZXRMZWZ0fSxzbGlkZUluZGV4Om5vKHQpLHNlY3Rpb246byxzZWN0aW9uSW5kZXg6bm8obyx3biksYW5jaG9yTGluazpvLmdldEF0dHJpYnV0ZShcImRhdGEtYW5jaG9yXCIpLHNsaWRlc05hdjpHbihQbixvKVswXSxzbGlkZUFuY2hvcjpXdCh0KSxwcmV2U2xpZGU6R24oSG4sbylbMF0scHJldlNsaWRlSW5kZXg6bm8oR24oSG4sbylbMF0pLGxvY2FsSXNSZXNpemluZzpFfTtyLnhNb3ZlbWVudD1IdChyLnByZXZTbGlkZUluZGV4LHIuc2xpZGVJbmRleCksci5kaXJlY3Rpb249ci5kaXJlY3Rpb24/ci5kaXJlY3Rpb246ci54TW92ZW1lbnQsci5sb2NhbElzUmVzaXppbmd8fCh4PSExKSxKdChcInBhcmFsbGF4XCIsXCJhcHBseUhvcml6b250YWxcIixyKSxKdChcImNhcmRzXCIsXCJhcHBseVwiLHIpLEp0KFwiZHJvcEVmZmVjdFwiLFwiYXBwbHlcIixyKSxiLm9uU2xpZGVMZWF2ZSYmIXIubG9jYWxJc1Jlc2l6aW5nJiZcIm5vbmVcIiE9PXIueE1vdmVtZW50JiZibyhiLm9uU2xpZGVMZWF2ZSkmJiExPT09WGUoXCJvblNsaWRlTGVhdmVcIixyKT9hPSExOihRdChcImRyb3BFZmZlY3RcIikmJmIuZHJvcEVmZmVjdHx8KGxvKHQsZ24pLGFvKG1vKHQpLGduKSksci5sb2NhbElzUmVzaXppbmd8fCh0dChyLnByZXZTbGlkZSksS2UodCkpLHl0KHIpLEZuKG8sZ24pJiYhci5sb2NhbElzUmVzaXppbmcmJlB0KHIuc2xpZGVJbmRleCxyLnNsaWRlQW5jaG9yLHIuYW5jaG9yTGluayxyLnNlY3Rpb25JbmRleCksbS5jb250aW51b3VzSG9yaXpvbnRhbCYmbS5jb250aW51b3VzSG9yaXpvbnRhbC5hcHBseShyKSwkdCgpP0V0KHIpOnh0KGUsciwhMCksYi5pbnRlcmxvY2tlZFNsaWRlcyYmbS5pbnRlcmxvY2tlZFNsaWRlcyYmKFF0KFwiY29udGludW91c0hvcml6b250YWxcIikmJnZvaWQgMCE9PW4mJm4hPT1yLnhNb3ZlbWVudHx8bS5pbnRlcmxvY2tlZFNsaWRlcy5hcHBseShyKSkpfWZ1bmN0aW9uIHl0KGUpeyFiLmxvb3BIb3Jpem9udGFsJiZiLmNvbnRyb2xBcnJvd3MmJihFbyhHbihWbixlLnNlY3Rpb24pLDAhPT1lLnNsaWRlSW5kZXgpLEVvKEduKFpuLGUuc2VjdGlvbiksbnVsbCE9ZW8oZS5kZXN0aW55KSkpfWZ1bmN0aW9uIEV0KGUpe3ZhciB0LG47bS5jb250aW51b3VzSG9yaXpvbnRhbCYmbS5jb250aW51b3VzSG9yaXpvbnRhbC5hZnRlclNsaWRlTG9hZHMoZSksdD1lLnNsaWRlc05hdixuPWUuc2xpZGVJbmRleCxiLnNsaWRlc05hdmlnYXRpb24mJm51bGwhPXQmJihhbyhHbihtbix0KSxnbiksbG8oR24oXCJhXCIsR24oXCJsaVwiLHQpW25dKSxnbikpLGUubG9jYWxJc1Jlc2l6aW5nfHwoSnQoXCJwYXJhbGxheFwiLFwiYWZ0ZXJTbGlkZUxvYWRzXCIpLEp0KFwic2Nyb2xsT3ZlcmZsb3dSZXNldFwiLFwic2V0UHJldmlvdXNcIixlLnByZXZTbGlkZSksSnQoXCJzY3JvbGxPdmVyZmxvd1Jlc2V0XCIsXCJyZXNldFwiKSxibyhiLmFmdGVyU2xpZGVMb2FkKSYmWGUoXCJhZnRlclNsaWRlTG9hZFwiLGUpLHg9ITAscWUoZS5kZXN0aW55KSksYT0hMSxRdChcImludGVybG9ja2VkU2xpZGVzXCIpJiZtLmludGVybG9ja2VkU2xpZGVzLmFwcGx5KGUpfWZ1bmN0aW9uIHh0KGUsdCxuKXt2YXIgbz10LmRlc3RpbnlQb3M7aWYoYi5jc3MzKXt2YXIgcj1cInRyYW5zbGF0ZTNkKC1cIitNYXRoLnJvdW5kKG8ubGVmdCkrXCJweCwgMHB4LCAwcHgpXCI7bS50ZXN0LnRyYW5zbGF0ZTNkSFt0LnNlY3Rpb25JbmRleF09cixRdChcImRyYWdBbmRNb3ZlXCIpJiZ2b2lkIDAhPT10LmlzSW50ZXJsb2NrZWRTbGlkZXx8VHQoR24oTm4sZSkpLEpuKEduKE5uLGUpLFV0KHIpKSxNPXNldFRpbWVvdXQoZnVuY3Rpb24oKXtuJiZFdCh0KX0sYi5zY3JvbGxpbmdTcGVlZCl9ZWxzZSBtLnRlc3QubGVmdFt0LnNlY3Rpb25JbmRleF09TWF0aC5yb3VuZChvLmxlZnQpLHRuKGUsTWF0aC5yb3VuZChvLmxlZnQpLGIuc2Nyb2xsaW5nU3BlZWQsZnVuY3Rpb24oKXtuJiZFdCh0KX0pfWZ1bmN0aW9uIEx0KCl7Y2xlYXJUaW1lb3V0KGgpLGg9c2V0VGltZW91dChmdW5jdGlvbigpe2Zvcih2YXIgZT0wO2U8NDtlKyspTD1zZXRUaW1lb3V0KEF0LDIwMCplKX0sMjAwKX1mdW5jdGlvbiBBdCgpe2lmKEU9ITAsd28odyxcIm9uUmVzaXplXCIpLE10KCkscil7dmFyIGU9Y24uYWN0aXZlRWxlbWVudDtpZigheW8oZSxcInRleHRhcmVhXCIpJiYheW8oZSxcImlucHV0XCIpJiYheW8oZSxcInNlbGVjdFwiKSl7dmFyIHQ9X24oKTtNYXRoLmFicyh0LW9lKT4yMCpNYXRoLm1heChvZSx0KS8xMDAmJihTZSghMCksb2U9dCl9fWVsc2UgTGUoKTtFPSExfWZ1bmN0aW9uIE10KCl7dmFyIGU9Yi5yZXNwb25zaXZlfHxiLnJlc3BvbnNpdmVXaWR0aCx0PWIucmVzcG9uc2l2ZUhlaWdodCxuPWUmJmFuLmlubmVyV2lkdGg8ZSxvPXQmJmFuLmlubmVySGVpZ2h0PHQ7ZSYmdD93ZShufHxvKTplP3dlKG4pOnQmJndlKG8pfWZ1bmN0aW9uIFR0KGUpe3ZhciB0PVwiYWxsIFwiK2Iuc2Nyb2xsaW5nU3BlZWQrXCJtcyBcIitiLmVhc2luZ2NzczM7cmV0dXJuIGFvKGUsZG4pLEpuKGUse1wiLXdlYmtpdC10cmFuc2l0aW9uXCI6dCx0cmFuc2l0aW9uOnR9KX1mdW5jdGlvbiBPdChlKXtyZXR1cm4gbG8oZSxkbil9ZnVuY3Rpb24ga3QoZSx0KXt2YXIgbixvLHIsaTtuPWUsR24oYi5tZW51KS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2IubWVudSYmbnVsbCE9ZSYmKGFvKEduKG1uLGUpLGduKSxsbyhHbignW2RhdGEtbWVudWFuY2hvcj1cIicrbisnXCJdJyxlKSxnbikpfSksbz1lLHI9dCxpPUduKFRuKVswXSxiLm5hdmlnYXRpb24mJm51bGwhPWkmJlwibm9uZVwiIT09aS5zdHlsZS5kaXNwbGF5JiYoYW8oR24obW4sR24oVG4pWzBdKSxnbiksbG8obz9HbignYVtocmVmPVwiIycrbysnXCJdJyxHbihUbilbMF0pOkduKFwiYVwiLEduKFwibGlcIixHbihUbilbMF0pW3JdKSxnbikpfWZ1bmN0aW9uIEN0KGUpe3ZhciB0PW5vKEduKHluKVswXSx3biksbj1ubyhlLHduKTtyZXR1cm4gdD09bj9cIm5vbmVcIjpuPHQ/XCJ1cFwiOlwiZG93blwifWZ1bmN0aW9uIEh0KGUsdCl7cmV0dXJuIGU9PXQ/XCJub25lXCI6dDxlP1wibGVmdFwiOlwicmlnaHRcIn1mdW5jdGlvbiB6dChlKXtpZighRm4oZSxCbikpe3ZhciB0PWNuLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7dC5jbGFzc05hbWU9RW4sdC5zdHlsZS5oZWlnaHQ9UnQoZSkrXCJweFwiLGxvKGUsQm4pLHVvKGUsdCl9fWZ1bmN0aW9uIFJ0KGUpe3ZhciB0PVRlKGUpO2lmKGIucGFkZGluZ1RvcHx8Yi5wYWRkaW5nQm90dG9tKXt2YXIgbj1lO0ZuKG4sYm4pfHwobj12byhlLHduKSksdC09cGFyc2VJbnQoZ2V0Q29tcHV0ZWRTdHlsZShuKVtcInBhZGRpbmctdG9wXCJdKStwYXJzZUludChnZXRDb21wdXRlZFN0eWxlKG4pW1wicGFkZGluZy1ib3R0b21cIl0pfXJldHVybiB0fWZ1bmN0aW9uIEl0KGUsdCl7dD9UdCh3KTpPdCh3KSxjbGVhclRpbWVvdXQoSCksSm4odyxVdChlKSksbS50ZXN0LnRyYW5zbGF0ZTNkPWUsSD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7YW8odyxkbil9LDEwKX1mdW5jdGlvbiBOdChlKXt2YXIgdD1Hbih3bisnW2RhdGEtYW5jaG9yPVwiJytlKydcIl0nLHcpWzBdO2lmKCF0KXt2YXIgbj12b2lkIDAhPT1lP2UtMTowO3Q9R24od24pW25dfXJldHVybiB0fWZ1bmN0aW9uIEJ0KGUsdCl7dmFyIG49TnQoZSk7aWYobnVsbCE9bil7dmFyIG8scixpLGw9KG51bGw9PShpPUduKENuKydbZGF0YS1hbmNob3I9XCInKyhvPXQpKydcIl0nLHI9bilbMF0pJiYobz12b2lkIDAhPT1vP286MCxpPUduKENuLHIpW29dKSxpKTtXdChuKT09PVN8fEZuKG4sZ24pP2p0KGwpOlplKG4sZnVuY3Rpb24oKXtqdChsKX0pfX1mdW5jdGlvbiBqdChlKXtudWxsIT1lJiZ3dCh2byhlLFJuKSxlKX1mdW5jdGlvbiBQdChlLHQsbixvKXt2YXIgcj1cIlwiO2IuYW5jaG9ycy5sZW5ndGgmJiFiLmxvY2tBbmNob3JzJiYoZT8obnVsbCE9biYmKHI9biksbnVsbD09dCYmKHQ9ZSksWXQocitcIi9cIisobD10KSkpOihudWxsIT1lJiYobD10KSxZdChuKSkpLER0KCl9ZnVuY3Rpb24gWXQoZSl7aWYoYi5yZWNvcmRIaXN0b3J5KWxvY2F0aW9uLmhhc2g9ZTtlbHNlIGlmKHJ8fGkpYW4uaGlzdG9yeS5yZXBsYWNlU3RhdGUodm9pZCAwLHZvaWQgMCxcIiNcIitlKTtlbHNle3ZhciB0PWFuLmxvY2F0aW9uLmhyZWYuc3BsaXQoXCIjXCIpWzBdO2FuLmxvY2F0aW9uLnJlcGxhY2UodCtcIiNcIitlKX19ZnVuY3Rpb24gV3QoZSl7aWYoIWUpcmV0dXJuIG51bGw7dmFyIHQ9ZS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWFuY2hvclwiKSxuPW5vKGUpO3JldHVybiBudWxsPT10JiYodD1uKSx0fWZ1bmN0aW9uIER0KCl7dmFyIGU9R24oeW4pWzBdLHQ9R24oSG4sZSlbMF0sbj1XdChlKSxvPVd0KHQpLHI9U3RyaW5nKG4pO3QmJihyPXIrXCItXCIrbykscj1yLnJlcGxhY2UoXCIvXCIsXCItXCIpLnJlcGxhY2UoXCIjXCIsXCJcIik7dmFyIGk9bmV3IFJlZ0V4cChcIlxcXFxiXFxcXHM/XCIraG4rXCItW15cXFxcc10rXFxcXGJcIixcImdcIik7Zy5jbGFzc05hbWU9Zy5jbGFzc05hbWUucmVwbGFjZShpLFwiXCIpLGxvKGcsaG4rXCItXCIrcil9ZnVuY3Rpb24gVnQoKXtyZXR1cm4gYW4uUG9pbnRlckV2ZW50P3tkb3duOlwicG9pbnRlcmRvd25cIixtb3ZlOlwicG9pbnRlcm1vdmVcIn06e2Rvd246XCJNU1BvaW50ZXJEb3duXCIsbW92ZTpcIk1TUG9pbnRlck1vdmVcIn19ZnVuY3Rpb24gWnQoZSl7dmFyIHQ9W107cmV0dXJuIHQueT12b2lkIDAhPT1lLnBhZ2VZJiYoZS5wYWdlWXx8ZS5wYWdlWCk/ZS5wYWdlWTplLnRvdWNoZXNbMF0ucGFnZVksdC54PXZvaWQgMCE9PWUucGFnZVgmJihlLnBhZ2VZfHxlLnBhZ2VYKT9lLnBhZ2VYOmUudG91Y2hlc1swXS5wYWdlWCxpJiZCZShlKSYmYi5zY3JvbGxCYXImJnZvaWQgMCE9PWUudG91Y2hlcyYmKHQueT1lLnRvdWNoZXNbMF0ucGFnZVksdC54PWUudG91Y2hlc1swXS5wYWdlWCksdH1mdW5jdGlvbiBYdChlLHQpe2xlKDAsXCJpbnRlcm5hbFwiKSx2b2lkIDAhPT10JiYoRT0hMCksd3Qodm8oZSxSbiksZSksdm9pZCAwIT09dCYmKEU9ITEpLGxlKFYuc2Nyb2xsaW5nU3BlZWQsXCJpbnRlcm5hbFwiKX1mdW5jdGlvbiBHdChlKXt2YXIgdD1NYXRoLnJvdW5kKGUpO2lmKGIuY3NzMyYmYi5hdXRvU2Nyb2xsaW5nJiYhYi5zY3JvbGxCYXIpSXQoXCJ0cmFuc2xhdGUzZCgwcHgsIC1cIit0K1wicHgsIDBweClcIiwhMSk7ZWxzZSBpZihiLmF1dG9TY3JvbGxpbmcmJiFiLnNjcm9sbEJhcilKbih3LHt0b3A6LXQrXCJweFwifSksbS50ZXN0LnRvcD0tdCtcInB4XCI7ZWxzZXt2YXIgbj1GZSh0KTtubihuLmVsZW1lbnQsbi5vcHRpb25zKX19ZnVuY3Rpb24gVXQoZSl7cmV0dXJue1wiLXdlYmtpdC10cmFuc2Zvcm1cIjplLFwiLW1vei10cmFuc2Zvcm1cIjplLFwiLW1zLXRyYW5zZm9ybVwiOmUsdHJhbnNmb3JtOmV9fWZ1bmN0aW9uIEZ0KHQsZSxuKXtcImFsbFwiIT09ZT92W25dW2VdPXQ6T2JqZWN0LmtleXModltuXSkuZm9yRWFjaChmdW5jdGlvbihlKXt2W25dW2VdPXR9KX1mdW5jdGlvbiBfdChlKXtyZXR1cm4gSm4oZSx7XCItd2Via2l0LXRyYW5zaXRpb25cIjpcIm5vbmVcIix0cmFuc2l0aW9uOlwibm9uZVwifSl9ZnVuY3Rpb24gUXQoZSl7cmV0dXJuIG51bGwhPT1iW2VdJiZcIltvYmplY3QgQXJyYXldXCI9PT1PYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYltlXSk/YltlXS5sZW5ndGgmJm1bZV06YltlXSYmbVtlXX1mdW5jdGlvbiBKdChlLHQsbil7aWYoUXQoZSkpcmV0dXJuIG1bZV1bdF0obil9ZnVuY3Rpb24gS3QoKXtyZXR1cm4gUXQoXCJkcmFnQW5kTW92ZVwiKSYmbS5kcmFnQW5kTW92ZS5pc0FuaW1hdGluZ31mdW5jdGlvbiAkdCgpe3JldHVybiBRdChcImRyYWdBbmRNb3ZlXCIpJiZtLmRyYWdBbmRNb3ZlLmlzR3JhYmJpbmd9ZnVuY3Rpb24gcXQoZSx0LG4pe2JbZV09dCxcImludGVybmFsXCIhPT1uJiYoVltlXT10KX1mdW5jdGlvbiBlbigpe3ZhciBlPWIubGljZW5zZUtleSx0PVwiZm9udC1zaXplOiAxNXB4O2JhY2tncm91bmQ6eWVsbG93O1wiO24/ZSYmZS5sZW5ndGg8MjAmJihjb25zb2xlLndhcm4oXCIlYyBUaGlzIHdlYnNpdGUgd2FzIG1hZGUgdXNpbmcgZnVsbFBhZ2UuanMgc2xpZGVyLiBNb3JlIGluZm8gb24gdGhlIGZvbGxvd2luZyB3ZWJzaXRlOlwiLHQpLGNvbnNvbGUud2FybihcIiVjIGh0dHBzOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlL1wiLHQpKTooWG4oXCJlcnJvclwiLFwiRnVsbHBhZ2UuanMgdmVyc2lvbiAzIGhhcyBjaGFuZ2VkIGl0cyBsaWNlbnNlIHRvIEdQTHYzIGFuZCBpdCByZXF1aXJlcyBhIGBsaWNlbnNlS2V5YCBvcHRpb24uIFJlYWQgYWJvdXQgaXQgaGVyZTpcIiksWG4oXCJlcnJvclwiLFwiaHR0cHM6Ly9naXRodWIuY29tL2FsdmFyb3RyaWdvL2Z1bGxQYWdlLmpzI29wdGlvbnNcIikpLEZuKGMscG4pP1huKFwiZXJyb3JcIixcIkZ1bGxwYWdlLmpzIGNhbiBvbmx5IGJlIGluaXRpYWxpemVkIG9uY2UgYW5kIHlvdSBhcmUgZG9pbmcgaXQgbXVsdGlwbGUgdGltZXMhXCIpOihiLmNvbnRpbnVvdXNWZXJ0aWNhbCYmKGIubG9vcFRvcHx8Yi5sb29wQm90dG9tKSYmKGIuY29udGludW91c1ZlcnRpY2FsPSExLFhuKFwid2FyblwiLFwiT3B0aW9uIGBsb29wVG9wL2xvb3BCb3R0b21gIGlzIG11dHVhbGx5IGV4Y2x1c2l2ZSB3aXRoIGBjb250aW51b3VzVmVydGljYWxgOyBgY29udGludW91c1ZlcnRpY2FsYCBkaXNhYmxlZFwiKSksIWIuc2Nyb2xsT3ZlcmZsb3d8fCFiLnNjcm9sbEJhciYmYi5hdXRvU2Nyb2xsaW5nfHxYbihcIndhcm5cIixcIk9wdGlvbnMgc2Nyb2xsQmFyOnRydWUgYW5kIGF1dG9TY3JvbGxpbmc6ZmFsc2UgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZSB3aXRoIHNjcm9sbE92ZXJmbG93OnRydWUuIFNlY3Rpb25zIHdpdGggc2Nyb2xsT3ZlcmZsb3cgbWlnaHQgbm90IHdvcmsgd2VsbCBpbiBGaXJlZm94XCIpLCFiLmNvbnRpbnVvdXNWZXJ0aWNhbHx8IWIuc2Nyb2xsQmFyJiZiLmF1dG9TY3JvbGxpbmd8fChiLmNvbnRpbnVvdXNWZXJ0aWNhbD0hMSxYbihcIndhcm5cIixcIlNjcm9sbCBiYXJzIChgc2Nyb2xsQmFyOnRydWVgIG9yIGBhdXRvU2Nyb2xsaW5nOmZhbHNlYCkgYXJlIG11dHVhbGx5IGV4Y2x1c2l2ZSB3aXRoIGBjb250aW51b3VzVmVydGljYWxgOyBgY29udGludW91c1ZlcnRpY2FsYCBkaXNhYmxlZFwiKSksYi5zY3JvbGxPdmVyZmxvdyYmbnVsbD09Yi5zY3JvbGxPdmVyZmxvd0hhbmRsZXImJihiLnNjcm9sbE92ZXJmbG93PSExLFhuKFwiZXJyb3JcIixcIlRoZSBvcHRpb24gYHNjcm9sbE92ZXJmbG93OnRydWVgIHJlcXVpcmVzIHRoZSBmaWxlIGBzY3JvbGxvdmVyZmxvdy5taW4uanNgLiBQbGVhc2UgaW5jbHVkZSBpdCBiZWZvcmUgZnVsbFBhZ2UuanMuXCIpKSxiLmFuY2hvcnMuZm9yRWFjaChmdW5jdGlvbih0KXt2YXIgZT1bXS5zbGljZS5jYWxsKEduKFwiW25hbWVdXCIpKS5maWx0ZXIoZnVuY3Rpb24oZSl7cmV0dXJuIGUuZ2V0QXR0cmlidXRlKFwibmFtZVwiKSYmZS5nZXRBdHRyaWJ1dGUoXCJuYW1lXCIpLnRvTG93ZXJDYXNlKCk9PXQudG9Mb3dlckNhc2UoKX0pLG49W10uc2xpY2UuY2FsbChHbihcIltpZF1cIikpLmZpbHRlcihmdW5jdGlvbihlKXtyZXR1cm4gZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKSYmZS5nZXRBdHRyaWJ1dGUoXCJpZFwiKS50b0xvd2VyQ2FzZSgpPT10LnRvTG93ZXJDYXNlKCl9KTtpZihuLmxlbmd0aHx8ZS5sZW5ndGgpe1huKFwiZXJyb3JcIixcImRhdGEtYW5jaG9yIHRhZ3MgY2FuIG5vdCBoYXZlIHRoZSBzYW1lIHZhbHVlIGFzIGFueSBgaWRgIGVsZW1lbnQgb24gdGhlIHNpdGUgKG9yIGBuYW1lYCBlbGVtZW50IGZvciBJRSkuXCIpO3ZhciBvPW4ubGVuZ3RoP1wiaWRcIjpcIm5hbWVcIjsobi5sZW5ndGh8fGUubGVuZ3RoKSYmWG4oXCJlcnJvclwiLCdcIicrdCsnXCIgaXMgaXMgYmVpbmcgdXNlZCBieSBhbm90aGVyIGVsZW1lbnQgYCcrbytcImAgcHJvcGVydHlcIil9fSkpfWZ1bmN0aW9uIHRuKHQsbixvLHIpe3ZhciBlLGk9KGU9dCkuc2VsZiE9YW4mJkZuKGUsem4pP2Uuc2Nyb2xsTGVmdDohYi5hdXRvU2Nyb2xsaW5nfHxiLnNjcm9sbEJhcj9nbygpOmUub2Zmc2V0VG9wLGw9bi1pLGE9MDtZPSEwO3ZhciBjPWZ1bmN0aW9uKCl7aWYoWSl7dmFyIGU9bjthKz0yMCxvJiYoZT1hbi5mcF9lYXNpbmdzW2IuZWFzaW5nXShhLGksbCxvKSksbm4odCxlKSxhPG8/c2V0VGltZW91dChjLDIwKTp2b2lkIDAhPT1yJiZyKCl9ZWxzZSBhPG8mJnIoKX07YygpfWZ1bmN0aW9uIG5uKGUsdCl7IWIuYXV0b1Njcm9sbGluZ3x8Yi5zY3JvbGxCYXJ8fGUuc2VsZiE9YW4mJkZuKGUsem4pP2Uuc2VsZiE9YW4mJkZuKGUsem4pP2Uuc2Nyb2xsTGVmdD10OmUuc2Nyb2xsVG8oMCx0KTplLnN0eWxlLnRvcD10K1wicHhcIn1mdW5jdGlvbiBvbihlLHQpe3RoaXMuYW5jaG9yPWUuZ2V0QXR0cmlidXRlKFwiZGF0YS1hbmNob3JcIiksdGhpcy5pdGVtPWUsdGhpcy5pbmRleD1ubyhlLHQpLHRoaXMuaXNMYXN0PXRoaXMuaW5kZXg9PT1lLnBhcmVudEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCh0KS5sZW5ndGgtMSx0aGlzLmlzRmlyc3Q9IXRoaXMuaW5kZXh9ZnVuY3Rpb24gcm4oZSl7b24uY2FsbCh0aGlzLGUsd24pfWZ1bmN0aW9uIGxuKGUpe29uLmNhbGwodGhpcyxlLENuKX1lbigpfX0pLHdpbmRvdy5qUXVlcnkmJndpbmRvdy5mdWxscGFnZSYmZnVuY3Rpb24odCxuKXtcInVzZSBzdHJpY3RcIjt0JiZuP3QuZm4uZnVsbHBhZ2U9ZnVuY3Rpb24oZSl7ZT10LmV4dGVuZCh7fSxlLHskOnR9KTtuZXcgbih0aGlzWzBdLGUpfTp3aW5kb3cuZnBfdXRpbHMuc2hvd0Vycm9yKFwiZXJyb3JcIixcImpRdWVyeSBpcyByZXF1aXJlZCB0byB1c2UgdGhlIGpRdWVyeSBmdWxscGFnZSBhZGFwdGVyIVwiKX0od2luZG93LmpRdWVyeSx3aW5kb3cuZnVsbHBhZ2UpO1xuXG4vKioqLyB9KSxcbi8qIDUzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cblxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNTQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1Myk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuXG5cbi8qKiovIH0pLFxuLyogNTUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgbGlzdCA9IFtdO1xuXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblx0bGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuXHRcdFx0dmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cdFx0XHRpZihpdGVtWzJdKSB7XG5cdFx0XHRcdHJldHVybiBcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGNvbnRlbnQgKyBcIn1cIjtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiBjb250ZW50O1xuXHRcdFx0fVxuXHRcdH0pLmpvaW4oXCJcIik7XG5cdH07XG5cblx0Ly8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3Rcblx0bGlzdC5pID0gZnVuY3Rpb24obW9kdWxlcywgbWVkaWFRdWVyeSkge1xuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxuXHRcdFx0bW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuXHRcdHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpZCA9IHRoaXNbaV1bMF07XG5cdFx0XHRpZih0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcblx0XHR9XG5cdFx0Zm9yKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xuXHRcdFx0Ly8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuXHRcdFx0Ly8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG5cdFx0XHQvLyAgSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXHRcdFx0aWYodHlwZW9mIGl0ZW1bMF0gIT09IFwibnVtYmVyXCIgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuXHRcdFx0XHR9IGVsc2UgaWYobWVkaWFRdWVyeSkge1xuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRsaXN0LnB1c2goaXRlbSk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRyZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG5cdHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcblx0dmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXHRpZiAoIWNzc01hcHBpbmcpIHtcblx0XHRyZXR1cm4gY29udGVudDtcblx0fVxuXG5cdGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcblx0XHR2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcblx0XHR2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuXHRcdFx0cmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJ1xuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG5cdH1cblxuXHRyZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufVxuXG4vLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuXHR2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcblx0dmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcblxuXHRyZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufVxuXG5cbi8qKiovIH0pLFxuLyogNTYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1NSkoZmFsc2UpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaSwgXCIvKiFcXHJcXG4gKiBmdWxsUGFnZSAzLjEuMFxcclxcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9hbHZhcm90cmlnby9mdWxsUGFnZS5qc1xcclxcbiAqXFxyXFxuICogQGxpY2Vuc2UgR1BMdjMgZm9yIG9wZW4gc291cmNlIHVzZSBvbmx5XFxyXFxuICogb3IgRnVsbHBhZ2UgQ29tbWVyY2lhbCBMaWNlbnNlIGZvciBjb21tZXJjaWFsIHVzZVxcclxcbiAqIGh0dHA6Ly9hbHZhcm90cmlnby5jb20vZnVsbFBhZ2UvcHJpY2luZy9cXHJcXG4gKlxcclxcbiAqIENvcHlyaWdodCAoQykgMjAxOCBodHRwOi8vYWx2YXJvdHJpZ28uY29tL2Z1bGxQYWdlIC0gQSBwcm9qZWN0IGJ5IEFsdmFybyBUcmlnb1xcclxcbiAqLy5mcC1lbmFibGVkIGJvZHksaHRtbC5mcC1lbmFibGVke21hcmdpbjowO3BhZGRpbmc6MDtvdmVyZmxvdzpoaWRkZW47LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnJnYmEoMCwwLDAsMCl9LmZwLXNlY3Rpb257cG9zaXRpb246cmVsYXRpdmU7LXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNpemluZzpib3JkZXItYm94fS5mcC1zbGlkZXtmbG9hdDpsZWZ0fS5mcC1zbGlkZSwuZnAtc2xpZGVzQ29udGFpbmVye2hlaWdodDoxMDAlO2Rpc3BsYXk6YmxvY2t9LmZwLXNsaWRlc3t6LWluZGV4OjE7aGVpZ2h0OjEwMCU7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOnJlbGF0aXZlOy13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjNzIGVhc2Utb3V0O3RyYW5zaXRpb246YWxsIC4zcyBlYXNlLW91dH0uZnAtc2VjdGlvbi5mcC10YWJsZSwuZnAtc2xpZGUuZnAtdGFibGV7ZGlzcGxheTp0YWJsZTt0YWJsZS1sYXlvdXQ6Zml4ZWQ7d2lkdGg6MTAwJX0uZnAtdGFibGVDZWxse2Rpc3BsYXk6dGFibGUtY2VsbDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJX0uZnAtc2xpZGVzQ29udGFpbmVye2Zsb2F0OmxlZnQ7cG9zaXRpb246cmVsYXRpdmV9LmZwLWNvbnRyb2xBcnJvd3std2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDpub25lOy1raHRtbC11c2VyLXNlbGVjdDpub25lOy1tcy11c2VyLXNlbGVjdDpub25lO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6NDt0b3A6NTAlO2N1cnNvcjpwb2ludGVyO3dpZHRoOjA7aGVpZ2h0OjA7Ym9yZGVyLXN0eWxlOnNvbGlkO21hcmdpbi10b3A6LTM4cHg7LXdlYmtpdC10cmFuc2Zvcm06dHJhbnNsYXRlWigwKTstbXMtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7dHJhbnNmb3JtOnRyYW5zbGF0ZVooMCl9LmZwLWNvbnRyb2xBcnJvdy5mcC1wcmV2e2xlZnQ6MTVweDt3aWR0aDowO2JvcmRlci13aWR0aDozOC41cHggMzRweCAzOC41cHggMDtib3JkZXItY29sb3I6dHJhbnNwYXJlbnQgI2ZmZiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudH0uZnAtY29udHJvbEFycm93LmZwLW5leHR7cmlnaHQ6MTVweDtib3JkZXItd2lkdGg6MzguNXB4IDAgMzguNXB4IDM0cHg7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmZ9LmZwLXNjcm9sbGFibGV7cG9zaXRpb246cmVsYXRpdmV9LmZwLXNjcm9sbGFibGUsLmZwLXNjcm9sbGVye292ZXJmbG93OmhpZGRlbn0uaVNjcm9sbEluZGljYXRvcntib3JkZXI6MCFpbXBvcnRhbnR9LmZwLW5vdHJhbnNpdGlvbnstd2Via2l0LXRyYW5zaXRpb246bm9uZSFpbXBvcnRhbnQ7dHJhbnNpdGlvbjpub25lIWltcG9ydGFudH0jZnAtbmF2e3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6MTAwO3RvcDo1MCU7b3BhY2l0eToxO3RyYW5zZm9ybTp0cmFuc2xhdGVZKC01MCUpOy1tcy10cmFuc2Zvcm06dHJhbnNsYXRlWSgtNTAlKTstd2Via2l0LXRyYW5zZm9ybTp0cmFuc2xhdGUzZCgwLC01MCUsMCl9I2ZwLW5hdi5mcC1yaWdodHtyaWdodDoxN3B4fSNmcC1uYXYuZnAtbGVmdHtsZWZ0OjE3cHh9LmZwLXNsaWRlc05hdntwb3NpdGlvbjphYnNvbHV0ZTt6LWluZGV4OjQ7b3BhY2l0eToxOy13ZWJraXQtdHJhbnNmb3JtOnRyYW5zbGF0ZVooMCk7LW1zLXRyYW5zZm9ybTp0cmFuc2xhdGVaKDApO3RyYW5zZm9ybTp0cmFuc2xhdGVaKDApO2xlZnQ6MCFpbXBvcnRhbnQ7cmlnaHQ6MDttYXJnaW46MCBhdXRvIWltcG9ydGFudH0uZnAtc2xpZGVzTmF2LmZwLWJvdHRvbXtib3R0b206MTdweH0uZnAtc2xpZGVzTmF2LmZwLXRvcHt0b3A6MTdweH0jZnAtbmF2IHVsLC5mcC1zbGlkZXNOYXYgdWx7bWFyZ2luOjA7cGFkZGluZzowfSNmcC1uYXYgdWwgbGksLmZwLXNsaWRlc05hdiB1bCBsaXtkaXNwbGF5OmJsb2NrO3dpZHRoOjE0cHg7aGVpZ2h0OjEzcHg7bWFyZ2luOjdweDtwb3NpdGlvbjpyZWxhdGl2ZX0uZnAtc2xpZGVzTmF2IHVsIGxpe2Rpc3BsYXk6aW5saW5lLWJsb2NrfSNmcC1uYXYgdWwgbGkgYSwuZnAtc2xpZGVzTmF2IHVsIGxpIGF7ZGlzcGxheTpibG9jaztwb3NpdGlvbjpyZWxhdGl2ZTt6LWluZGV4OjE7d2lkdGg6MTAwJTtoZWlnaHQ6MTAwJTtjdXJzb3I6cG9pbnRlcjt0ZXh0LWRlY29yYXRpb246bm9uZX0jZnAtbmF2IHVsIGxpOmhvdmVyIGEuYWN0aXZlIHNwYW4sI2ZwLW5hdiB1bCBsaSBhLmFjdGl2ZSBzcGFuLC5mcC1zbGlkZXNOYXYgdWwgbGk6aG92ZXIgYS5hY3RpdmUgc3BhbiwuZnAtc2xpZGVzTmF2IHVsIGxpIGEuYWN0aXZlIHNwYW57aGVpZ2h0OjEycHg7d2lkdGg6MTJweDttYXJnaW46LTZweCAwIDAgLTZweDtib3JkZXItcmFkaXVzOjEwMCV9I2ZwLW5hdiB1bCBsaSBhIHNwYW4sLmZwLXNsaWRlc05hdiB1bCBsaSBhIHNwYW57Ym9yZGVyLXJhZGl1czo1MCU7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxO2hlaWdodDo0cHg7d2lkdGg6NHB4O2JvcmRlcjowO2JhY2tncm91bmQ6IzMzMztsZWZ0OjUwJTt0b3A6NTAlO21hcmdpbjotMnB4IDAgMCAtMnB4Oy13ZWJraXQtdHJhbnNpdGlvbjphbGwgLjFzIGVhc2UtaW4tb3V0Oy1tb3otdHJhbnNpdGlvbjphbGwgLjFzIGVhc2UtaW4tb3V0Oy1vLXRyYW5zaXRpb246YWxsIC4xcyBlYXNlLWluLW91dDt0cmFuc2l0aW9uOmFsbCAuMXMgZWFzZS1pbi1vdXR9I2ZwLW5hdiB1bCBsaTpob3ZlciBhIHNwYW4sLmZwLXNsaWRlc05hdiB1bCBsaTpob3ZlciBhIHNwYW57d2lkdGg6MTBweDtoZWlnaHQ6MTBweDttYXJnaW46LTVweCAwIDAgLTVweH0jZnAtbmF2IHVsIGxpIC5mcC10b29sdGlwe3Bvc2l0aW9uOmFic29sdXRlO3RvcDotMnB4O2NvbG9yOiNmZmY7Zm9udC1zaXplOjE0cHg7Zm9udC1mYW1pbHk6YXJpYWwsaGVsdmV0aWNhLHNhbnMtc2VyaWY7d2hpdGUtc3BhY2U6bm93cmFwO21heC13aWR0aDoyMjBweDtvdmVyZmxvdzpoaWRkZW47ZGlzcGxheTpibG9jaztvcGFjaXR5OjA7d2lkdGg6MDtjdXJzb3I6cG9pbnRlcn0jZnAtbmF2LmZwLXNob3ctYWN0aXZlIGEuYWN0aXZlKy5mcC10b29sdGlwLCNmcC1uYXYgdWwgbGk6aG92ZXIgLmZwLXRvb2x0aXB7LXdlYmtpdC10cmFuc2l0aW9uOm9wYWNpdHkgLjJzIGVhc2UtaW47dHJhbnNpdGlvbjpvcGFjaXR5IC4ycyBlYXNlLWluO3dpZHRoOmF1dG87b3BhY2l0eToxfSNmcC1uYXYgdWwgbGkgLmZwLXRvb2x0aXAuZnAtcmlnaHR7cmlnaHQ6MjBweH0jZnAtbmF2IHVsIGxpIC5mcC10b29sdGlwLmZwLWxlZnR7bGVmdDoyMHB4fS5mcC1hdXRvLWhlaWdodC5mcC1zZWN0aW9uLC5mcC1hdXRvLWhlaWdodCAuZnAtc2xpZGUsLmZwLWF1dG8taGVpZ2h0IC5mcC10YWJsZUNlbGwsLmZwLXJlc3BvbnNpdmUgLmZwLWF1dG8taGVpZ2h0LXJlc3BvbnNpdmUuZnAtc2VjdGlvbiwuZnAtcmVzcG9uc2l2ZSAuZnAtYXV0by1oZWlnaHQtcmVzcG9uc2l2ZSAuZnAtc2xpZGUsLmZwLXJlc3BvbnNpdmUgLmZwLWF1dG8taGVpZ2h0LXJlc3BvbnNpdmUgLmZwLXRhYmxlQ2VsbHtoZWlnaHQ6YXV0byFpbXBvcnRhbnR9LmZwLXNyLW9ubHl7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MXB4O2hlaWdodDoxcHg7cGFkZGluZzowO292ZXJmbG93OmhpZGRlbjtjbGlwOnJlY3QoMCwwLDAsMCk7d2hpdGUtc3BhY2U6bm93cmFwO2JvcmRlcjowfVwiLCBcIlwiXSk7XG5cbi8vIGV4cG9ydHNcblxuXG4vKioqLyB9KSxcbi8qIDU3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblxudmFyIGNvbnRlbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDU2KTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaSwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1NCkoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihmYWxzZSkge31cblxuLyoqKi8gfSksXG4vKiA1OCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xudmFyIGlzQXJyYXkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM0KTtcbnZhciBTUEVDSUVTID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbCkge1xuICB2YXIgQztcbiAgaWYgKGlzQXJyYXkob3JpZ2luYWwpKSB7XG4gICAgQyA9IG9yaWdpbmFsLmNvbnN0cnVjdG9yO1xuICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgaWYgKHR5cGVvZiBDID09ICdmdW5jdGlvbicgJiYgKEMgPT09IEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSkgQyA9IHVuZGVmaW5lZDtcbiAgICBpZiAoaXNPYmplY3QoQykpIHtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYgKEMgPT09IG51bGwpIEMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEM7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNTkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gOS40LjIuMyBBcnJheVNwZWNpZXNDcmVhdGUob3JpZ2luYWxBcnJheSwgbGVuZ3RoKVxudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oNTgpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvcmlnaW5hbCwgbGVuZ3RoKSB7XG4gIHJldHVybiBuZXcgKHNwZWNpZXNDb25zdHJ1Y3RvcihvcmlnaW5hbCkpKGxlbmd0aCk7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNjAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gMCAtPiBBcnJheSNmb3JFYWNoXG4vLyAxIC0+IEFycmF5I21hcFxuLy8gMiAtPiBBcnJheSNmaWx0ZXJcbi8vIDMgLT4gQXJyYXkjc29tZVxuLy8gNCAtPiBBcnJheSNldmVyeVxuLy8gNSAtPiBBcnJheSNmaW5kXG4vLyA2IC0+IEFycmF5I2ZpbmRJbmRleFxudmFyIGN0eCA9IF9fd2VicGFja19yZXF1aXJlX18oNDEpO1xudmFyIElPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDM5KTtcbnZhciB0b09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMjEpO1xudmFyIHRvTGVuZ3RoID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNyk7XG52YXIgYXNjID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1OSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUWVBFLCAkY3JlYXRlKSB7XG4gIHZhciBJU19NQVAgPSBUWVBFID09IDE7XG4gIHZhciBJU19GSUxURVIgPSBUWVBFID09IDI7XG4gIHZhciBJU19TT01FID0gVFlQRSA9PSAzO1xuICB2YXIgSVNfRVZFUlkgPSBUWVBFID09IDQ7XG4gIHZhciBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2O1xuICB2YXIgTk9fSE9MRVMgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWDtcbiAgdmFyIGNyZWF0ZSA9ICRjcmVhdGUgfHwgYXNjO1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0KSB7XG4gICAgdmFyIE8gPSB0b09iamVjdCgkdGhpcyk7XG4gICAgdmFyIHNlbGYgPSBJT2JqZWN0KE8pO1xuICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gSVNfTUFQID8gY3JlYXRlKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gY3JlYXRlKCR0aGlzLCAwKSA6IHVuZGVmaW5lZDtcbiAgICB2YXIgdmFsLCByZXM7XG4gICAgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKSB7XG4gICAgICB2YWwgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlcyA9IGYodmFsLCBpbmRleCwgTyk7XG4gICAgICBpZiAoVFlQRSkge1xuICAgICAgICBpZiAoSVNfTUFQKSByZXN1bHRbaW5kZXhdID0gcmVzOyAgIC8vIG1hcFxuICAgICAgICBlbHNlIGlmIChyZXMpIHN3aXRjaCAoVFlQRSkge1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWw7ICAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiByZXN1bHQucHVzaCh2YWwpOyAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBpZiAoSVNfRVZFUlkpIHJldHVybiBmYWxzZTsgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHJlc3VsdDtcbiAgfTtcbn07XG5cblxuLyoqKi8gfSksXG4vKiA2MSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxuLy8gMjIuMS4zLjggQXJyYXkucHJvdG90eXBlLmZpbmQocHJlZGljYXRlLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxudmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xudmFyICRmaW5kID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2MCkoNSk7XG52YXIgS0VZID0gJ2ZpbmQnO1xudmFyIGZvcmNlZCA9IHRydWU7XG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuaWYgKEtFWSBpbiBbXSkgQXJyYXkoMSlbS0VZXShmdW5jdGlvbiAoKSB7IGZvcmNlZCA9IGZhbHNlOyB9KTtcbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogZm9yY2VkLCAnQXJyYXknLCB7XG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbl9fd2VicGFja19yZXF1aXJlX18oMjMpKEtFWSk7XG5cblxuLyoqKi8gfSksXG4vKiA2MiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgTUFUQ0ggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApKCdtYXRjaCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciByZSA9IC8uLztcbiAgdHJ5IHtcbiAgICAnLy4vJ1tLRVldKHJlKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHRyeSB7XG4gICAgICByZVtNQVRDSF0gPSBmYWxzZTtcbiAgICAgIHJldHVybiAhJy8uLydbS0VZXShyZSk7XG4gICAgfSBjYXRjaCAoZikgeyAvKiBlbXB0eSAqLyB9XG4gIH0gcmV0dXJuIHRydWU7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNjMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gNy4yLjggSXNSZWdFeHAoYXJndW1lbnQpXG52YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xudmFyIGNvZiA9IF9fd2VicGFja19yZXF1aXJlX18oMjcpO1xudmFyIE1BVENIID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKSgnbWF0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBpc1JlZ0V4cDtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiAoKGlzUmVnRXhwID0gaXRbTUFUQ0hdKSAhPT0gdW5kZWZpbmVkID8gISFpc1JlZ0V4cCA6IGNvZihpdCkgPT0gJ1JlZ0V4cCcpO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDY0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8vIGhlbHBlciBmb3IgU3RyaW5nI3tzdGFydHNXaXRoLCBlbmRzV2l0aCwgaW5jbHVkZXN9XG52YXIgaXNSZWdFeHAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYzKTtcbnZhciBkZWZpbmVkID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRoYXQsIHNlYXJjaFN0cmluZywgTkFNRSkge1xuICBpZiAoaXNSZWdFeHAoc2VhcmNoU3RyaW5nKSkgdGhyb3cgVHlwZUVycm9yKCdTdHJpbmcjJyArIE5BTUUgKyBcIiBkb2Vzbid0IGFjY2VwdCByZWdleCFcIik7XG4gIHJldHVybiBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNjUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG4vLyAyMS4xLjMuNyBTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzKHNlYXJjaFN0cmluZywgcG9zaXRpb24gPSAwKVxuXG52YXIgJGV4cG9ydCA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG52YXIgY29udGV4dCA9IF9fd2VicGFja19yZXF1aXJlX18oNjQpO1xudmFyIElOQ0xVREVTID0gJ2luY2x1ZGVzJztcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBfX3dlYnBhY2tfcmVxdWlyZV9fKDYyKShJTkNMVURFUyksICdTdHJpbmcnLCB7XG4gIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhzZWFyY2hTdHJpbmcgLyogLCBwb3NpdGlvbiA9IDAgKi8pIHtcbiAgICByZXR1cm4gISF+Y29udGV4dCh0aGlzLCBzZWFyY2hTdHJpbmcsIElOQ0xVREVTKVxuICAgICAgLmluZGV4T2Yoc2VhcmNoU3RyaW5nLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG5cbi8qKiovIH0pLFxuLyogNjYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L0FycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xudmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xudmFyICRpbmNsdWRlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMzgpKHRydWUpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ0FycmF5Jywge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoZWwgLyogLCBmcm9tSW5kZXggPSAwICovKSB7XG4gICAgcmV0dXJuICRpbmNsdWRlcyh0aGlzLCBlbCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXygyMykoJ2luY2x1ZGVzJyk7XG5cblxuLyoqKi8gfSksXG4vKiA2NyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcbnZhciBjb3JlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMyk7XG52YXIgZmFpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZLCBleGVjKSB7XG4gIHZhciBmbiA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXTtcbiAgdmFyIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uICgpIHsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG5cblxuLyoqKi8gfSksXG4vKiA2OCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMjEpO1xudmFyICRrZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG5cbl9fd2VicGFja19yZXF1aXJlX18oNjcpKCdrZXlzJywgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCkge1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuLyoqKi8gfSksXG4vKiA2OSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG52YXIgdG9PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIxKTtcbnZhciBJRV9QUk9UTyA9IF9fd2VicGFja19yZXF1aXJlX18oMjYpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG5cblxuLyoqKi8gfSksXG4vKiA3MCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGNyZWF0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oMzMpO1xudmFyIGRlc2NyaXB0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4KTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IF9fd2VicGFja19yZXF1aXJlX18oMjgpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5fX3dlYnBhY2tfcmVxdWlyZV9fKDMpKEl0ZXJhdG9yUHJvdG90eXBlLCBfX3dlYnBhY2tfcmVxdWlyZV9fKDApKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG4vKioqLyB9KSxcbi8qIDcxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgTElCUkFSWSA9IF9fd2VicGFja19yZXF1aXJlX18oMTYpO1xudmFyICRleHBvcnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xudmFyIHJlZGVmaW5lID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNSk7XG52YXIgaGlkZSA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG52YXIgSXRlcmF0b3JzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMik7XG52YXIgJGl0ZXJDcmVhdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcwKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IF9fd2VicGFja19yZXF1aXJlX18oMjgpO1xudmFyIGdldFByb3RvdHlwZU9mID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2OSk7XG52YXIgSVRFUkFUT1IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmIHR5cGVvZiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0gIT0gJ2Z1bmN0aW9uJykgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNzIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmUgfTtcbn07XG5cblxuLyoqKi8gfSksXG4vKiA3MyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgJGl0ZXJhdG9ycyA9IF9fd2VicGFja19yZXF1aXJlX18oMzEpO1xudmFyIGdldEtleXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcbnZhciByZWRlZmluZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTUpO1xudmFyIGdsb2JhbCA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG52YXIgaGlkZSA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG52YXIgSXRlcmF0b3JzID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMik7XG52YXIgd2tzID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbnZhciBJVEVSQVRPUiA9IHdrcygnaXRlcmF0b3InKTtcbnZhciBUT19TVFJJTkdfVEFHID0gd2tzKCd0b1N0cmluZ1RhZycpO1xudmFyIEFycmF5VmFsdWVzID0gSXRlcmF0b3JzLkFycmF5O1xuXG52YXIgRE9NSXRlcmFibGVzID0ge1xuICBDU1NSdWxlTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IGZhbHNlLFxuICBDU1NWYWx1ZUxpc3Q6IGZhbHNlLFxuICBDbGllbnRSZWN0TGlzdDogZmFsc2UsXG4gIERPTVJlY3RMaXN0OiBmYWxzZSxcbiAgRE9NU3RyaW5nTGlzdDogZmFsc2UsXG4gIERPTVRva2VuTGlzdDogdHJ1ZSxcbiAgRGF0YVRyYW5zZmVySXRlbUxpc3Q6IGZhbHNlLFxuICBGaWxlTGlzdDogZmFsc2UsXG4gIEhUTUxBbGxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTENvbGxlY3Rpb246IGZhbHNlLFxuICBIVE1MRm9ybUVsZW1lbnQ6IGZhbHNlLFxuICBIVE1MU2VsZWN0RWxlbWVudDogZmFsc2UsXG4gIE1lZGlhTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIE1pbWVUeXBlQXJyYXk6IGZhbHNlLFxuICBOYW1lZE5vZGVNYXA6IGZhbHNlLFxuICBOb2RlTGlzdDogdHJ1ZSxcbiAgUGFpbnRSZXF1ZXN0TGlzdDogZmFsc2UsXG4gIFBsdWdpbjogZmFsc2UsXG4gIFBsdWdpbkFycmF5OiBmYWxzZSxcbiAgU1ZHTGVuZ3RoTGlzdDogZmFsc2UsXG4gIFNWR051bWJlckxpc3Q6IGZhbHNlLFxuICBTVkdQYXRoU2VnTGlzdDogZmFsc2UsXG4gIFNWR1BvaW50TGlzdDogZmFsc2UsXG4gIFNWR1N0cmluZ0xpc3Q6IGZhbHNlLFxuICBTVkdUcmFuc2Zvcm1MaXN0OiBmYWxzZSxcbiAgU291cmNlQnVmZmVyTGlzdDogZmFsc2UsXG4gIFN0eWxlU2hlZXRMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgVGV4dFRyYWNrQ3VlTGlzdDogZmFsc2UsXG4gIFRleHRUcmFja0xpc3Q6IGZhbHNlLFxuICBUb3VjaExpc3Q6IGZhbHNlXG59O1xuXG5mb3IgKHZhciBjb2xsZWN0aW9ucyA9IGdldEtleXMoRE9NSXRlcmFibGVzKSwgaSA9IDA7IGkgPCBjb2xsZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IGNvbGxlY3Rpb25zW2ldO1xuICB2YXIgZXhwbGljaXQgPSBET01JdGVyYWJsZXNbTkFNRV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICB2YXIga2V5O1xuICBpZiAocHJvdG8pIHtcbiAgICBpZiAoIXByb3RvW0lURVJBVE9SXSkgaGlkZShwcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICBpZiAoIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgICBJdGVyYXRvcnNbTkFNRV0gPSBBcnJheVZhbHVlcztcbiAgICBpZiAoZXhwbGljaXQpIGZvciAoa2V5IGluICRpdGVyYXRvcnMpIGlmICghcHJvdG9ba2V5XSkgcmVkZWZpbmUocHJvdG8sIGtleSwgJGl0ZXJhdG9yc1trZXldLCB0cnVlKTtcbiAgfVxufVxuXG5cbi8qKiovIH0pLFxuLyogNzQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIHBJRSA9IF9fd2VicGFja19yZXF1aXJlX18oMjQpO1xudmFyIGNyZWF0ZURlc2MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4KTtcbnZhciB0b0lPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xudmFyIHRvUHJpbWl0aXZlID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMCk7XG52YXIgaGFzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcbnZhciBJRThfRE9NX0RFRklORSA9IF9fd2VicGFja19yZXF1aXJlX18oNDcpO1xudmFyIGdPUEQgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuXG5leHBvcnRzLmYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKSA/IGdPUEQgOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUCkge1xuICBPID0gdG9JT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZ09QRChPLCBQKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmIChoYXMoTywgUCkpIHJldHVybiBjcmVhdGVEZXNjKCFwSUUuZi5jYWxsKE8sIFApLCBPW1BdKTtcbn07XG5cblxuLyoqKi8gfSksXG4vKiA3NSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcbnZhciBnT1BOID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMikuZjtcbnZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIHdpbmRvdyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdPUE4oaXQpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KSB7XG4gIHJldHVybiB3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJyA/IGdldFdpbmRvd05hbWVzKGl0KSA6IGdPUE4odG9JT2JqZWN0KGl0KSk7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNzYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cbi8qKiovIH0pLFxuLyogNzcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxudmFyIGRQID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG52YXIgYW5PYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5KTtcbnZhciBnZXRLZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG5cbm1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCkgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG5cblxuLyoqKi8gfSksXG4vKiA3OCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgdG9JbnRlZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygzNik7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogNzkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciBnZXRLZXlzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG52YXIgZ09QUyA9IF9fd2VicGFja19yZXF1aXJlX18oMzUpO1xudmFyIHBJRSA9IF9fd2VicGFja19yZXF1aXJlX18oMjQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHJlc3VsdCA9IGdldEtleXMoaXQpO1xuICB2YXIgZ2V0U3ltYm9scyA9IGdPUFMuZjtcbiAgaWYgKGdldFN5bWJvbHMpIHtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpO1xuICAgIHZhciBpc0VudW0gPSBwSUUuZjtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAoc3ltYm9scy5sZW5ndGggPiBpKSBpZiAoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpIHJlc3VsdC5wdXNoKGtleSk7XG4gIH0gcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLyoqKi8gfSksXG4vKiA4MCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG52YXIgTUVUQSA9IF9fd2VicGFja19yZXF1aXJlX18oMTQpKCdtZXRhJyk7XG52YXIgaXNPYmplY3QgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xudmFyIGhhcyA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG52YXIgc2V0RGVzYyA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpLmY7XG52YXIgaWQgPSAwO1xudmFyIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG52YXIgRlJFRVpFID0gIV9fd2VicGFja19yZXF1aXJlX18oOSkoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gaXNFeHRlbnNpYmxlKE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh7fSkpO1xufSk7XG52YXIgc2V0TWV0YSA9IGZ1bmN0aW9uIChpdCkge1xuICBzZXREZXNjKGl0LCBNRVRBLCB7IHZhbHVlOiB7XG4gICAgaTogJ08nICsgKytpZCwgLy8gb2JqZWN0IElEXG4gICAgdzoge30gICAgICAgICAgLy8gd2VhayBjb2xsZWN0aW9ucyBJRHNcbiAgfSB9KTtcbn07XG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uIChpdCwgY3JlYXRlKSB7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmICghaGFzKGl0LCBNRVRBKSkge1xuICAgIC8vIGNhbid0IHNldCBtZXRhZGF0YSB0byB1bmNhdWdodCBmcm96ZW4gb2JqZWN0XG4gICAgaWYgKCFpc0V4dGVuc2libGUoaXQpKSByZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3NpbmcgbWV0YWRhdGFcbiAgICBzZXRNZXRhKGl0KTtcbiAgLy8gcmV0dXJuIG9iamVjdCBJRFxuICB9IHJldHVybiBpdFtNRVRBXS5pO1xufTtcbnZhciBnZXRXZWFrID0gZnVuY3Rpb24gKGl0LCBjcmVhdGUpIHtcbiAgaWYgKCFoYXMoaXQsIE1FVEEpKSB7XG4gICAgLy8gY2FuJ3Qgc2V0IG1ldGFkYXRhIHRvIHVuY2F1Z2h0IGZyb3plbiBvYmplY3RcbiAgICBpZiAoIWlzRXh0ZW5zaWJsZShpdCkpIHJldHVybiB0cnVlO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIG1ldGFkYXRhXG4gICAgaWYgKCFjcmVhdGUpIHJldHVybiBmYWxzZTtcbiAgICAvLyBhZGQgbWlzc2luZyBtZXRhZGF0YVxuICAgIHNldE1ldGEoaXQpO1xuICAvLyByZXR1cm4gaGFzaCB3ZWFrIGNvbGxlY3Rpb25zIElEc1xuICB9IHJldHVybiBpdFtNRVRBXS53O1xufTtcbi8vIGFkZCBtZXRhZGF0YSBvbiBmcmVlemUtZmFtaWx5IG1ldGhvZHMgY2FsbGluZ1xudmFyIG9uRnJlZXplID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChGUkVFWkUgJiYgbWV0YS5ORUVEICYmIGlzRXh0ZW5zaWJsZShpdCkgJiYgIWhhcyhpdCwgTUVUQSkpIHNldE1ldGEoaXQpO1xuICByZXR1cm4gaXQ7XG59O1xudmFyIG1ldGEgPSBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgS0VZOiBNRVRBLFxuICBORUVEOiBmYWxzZSxcbiAgZmFzdEtleTogZmFzdEtleSxcbiAgZ2V0V2VhazogZ2V0V2VhayxcbiAgb25GcmVlemU6IG9uRnJlZXplXG59O1xuXG5cbi8qKiovIH0pLFxuLyogODEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKiovIH0pLFxuLyogODIgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuXCJ1c2Ugc3RyaWN0XCI7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29yZV9qc19tb2R1bGVzX2VzN19zeW1ib2xfYXN5bmNfaXRlcmF0b3JfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNDUpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNvcmVfanNfbW9kdWxlc19lczdfc3ltYm9sX2FzeW5jX2l0ZXJhdG9yX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY29yZV9qc19tb2R1bGVzX2VzN19zeW1ib2xfYXN5bmNfaXRlcmF0b3JfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29yZV9qc19tb2R1bGVzX2VzNl9zeW1ib2xfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNDIpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNvcmVfanNfbW9kdWxlc19lczZfc3ltYm9sX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY29yZV9qc19tb2R1bGVzX2VzNl9zeW1ib2xfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzFfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29yZV9qc19tb2R1bGVzX3dlYl9kb21faXRlcmFibGVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNzMpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNvcmVfanNfbW9kdWxlc193ZWJfZG9tX2l0ZXJhYmxlX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8yX19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY29yZV9qc19tb2R1bGVzX3dlYl9kb21faXRlcmFibGVfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzJfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29yZV9qc19tb2R1bGVzX2VzNl9hcnJheV9pdGVyYXRvcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fID0gX193ZWJwYWNrX3JlcXVpcmVfXygzMSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29yZV9qc19tb2R1bGVzX2VzNl9hcnJheV9pdGVyYXRvcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfM19fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNvcmVfanNfbW9kdWxlc19lczZfYXJyYXlfaXRlcmF0b3JfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzNfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29yZV9qc19tb2R1bGVzX2VzNl9vYmplY3Rfa2V5c19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2OCk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29yZV9qc19tb2R1bGVzX2VzNl9vYmplY3Rfa2V5c19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNF9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNvcmVfanNfbW9kdWxlc19lczZfb2JqZWN0X2tleXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzRfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29yZV9qc19tb2R1bGVzX2VzN19hcnJheV9pbmNsdWRlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNV9fID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2Nik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29yZV9qc19tb2R1bGVzX2VzN19hcnJheV9pbmNsdWRlc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfNV9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGNvcmVfanNfbW9kdWxlc19lczdfYXJyYXlfaW5jbHVkZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzVfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29yZV9qc19tb2R1bGVzX2VzNl9zdHJpbmdfaW5jbHVkZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzZfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNjUpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGNvcmVfanNfbW9kdWxlc19lczZfc3RyaW5nX2luY2x1ZGVzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV82X19fZGVmYXVsdCA9IC8qI19fUFVSRV9fKi9fX3dlYnBhY2tfcmVxdWlyZV9fLm4oY29yZV9qc19tb2R1bGVzX2VzNl9zdHJpbmdfaW5jbHVkZXNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzZfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgY29yZV9qc19tb2R1bGVzX2VzNl9hcnJheV9maW5kX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV83X18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYxKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBjb3JlX2pzX21vZHVsZXNfZXM2X2FycmF5X2ZpbmRfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzdfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihjb3JlX2pzX21vZHVsZXNfZXM2X2FycmF5X2ZpbmRfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzdfXyk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgcmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzhfXyA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgcmVhY3RfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzhfX19kZWZhdWx0ID0gLyojX19QVVJFX18qL19fd2VicGFja19yZXF1aXJlX18ubihyZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfOF9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBmdWxscGFnZV9qc19kaXN0X2Z1bGxwYWdlX21pbl9jc3NfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzlfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNTcpO1xuLyogaGFybW9ueSBpbXBvcnQgKi8gdmFyIGZ1bGxwYWdlX2pzX2Rpc3RfZnVsbHBhZ2VfbWluX2Nzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfOV9fX2RlZmF1bHQgPSAvKiNfX1BVUkVfXyovX193ZWJwYWNrX3JlcXVpcmVfXy5uKGZ1bGxwYWdlX2pzX2Rpc3RfZnVsbHBhZ2VfbWluX2Nzc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfOV9fKTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciBfTG9nZ2VyX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xMF9fID0gX193ZWJwYWNrX3JlcXVpcmVfXygyMCk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgX3NlbGVjdG9yc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMTFfXyA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG5mdW5jdGlvbiBfdHlwZW9mKG9iail7aWYodHlwZW9mIFN5bWJvbD09PVwiZnVuY3Rpb25cIiYmdHlwZW9mIFN5bWJvbC5pdGVyYXRvcj09PVwic3ltYm9sXCIpe190eXBlb2Y9ZnVuY3Rpb24gX3R5cGVvZihvYmope3JldHVybiB0eXBlb2Ygb2JqO307fWVsc2V7X3R5cGVvZj1mdW5jdGlvbiBfdHlwZW9mKG9iail7cmV0dXJuIG9iaiYmdHlwZW9mIFN5bWJvbD09PVwiZnVuY3Rpb25cIiYmb2JqLmNvbnN0cnVjdG9yPT09U3ltYm9sJiZvYmohPT1TeW1ib2wucHJvdG90eXBlP1wic3ltYm9sXCI6dHlwZW9mIG9iajt9O31yZXR1cm4gX3R5cGVvZihvYmopO31mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCl7Zm9yKHZhciBpPTE7aTxhcmd1bWVudHMubGVuZ3RoO2krKyl7dmFyIHNvdXJjZT1hcmd1bWVudHNbaV0hPW51bGw/YXJndW1lbnRzW2ldOnt9O3ZhciBvd25LZXlzPU9iamVjdC5rZXlzKHNvdXJjZSk7aWYodHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHM9PT0nZnVuY3Rpb24nKXtvd25LZXlzPW93bktleXMuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoc291cmNlKS5maWx0ZXIoZnVuY3Rpb24oc3ltKXtyZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2Usc3ltKS5lbnVtZXJhYmxlO30pKTt9b3duS2V5cy5mb3JFYWNoKGZ1bmN0aW9uKGtleSl7X2RlZmluZVByb3BlcnR5KHRhcmdldCxrZXksc291cmNlW2tleV0pO30pO31yZXR1cm4gdGFyZ2V0O31mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLGtleSx2YWx1ZSl7aWYoa2V5IGluIG9iail7T2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaixrZXkse3ZhbHVlOnZhbHVlLGVudW1lcmFibGU6dHJ1ZSxjb25maWd1cmFibGU6dHJ1ZSx3cml0YWJsZTp0cnVlfSk7fWVsc2V7b2JqW2tleV09dmFsdWU7fXJldHVybiBvYmo7fWZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSxDb25zdHJ1Y3Rvcil7aWYoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSl7dGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTt9fWZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCxwcm9wcyl7Zm9yKHZhciBpPTA7aTxwcm9wcy5sZW5ndGg7aSsrKXt2YXIgZGVzY3JpcHRvcj1wcm9wc1tpXTtkZXNjcmlwdG9yLmVudW1lcmFibGU9ZGVzY3JpcHRvci5lbnVtZXJhYmxlfHxmYWxzZTtkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZT10cnVlO2lmKFwidmFsdWVcImluIGRlc2NyaXB0b3IpZGVzY3JpcHRvci53cml0YWJsZT10cnVlO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsZGVzY3JpcHRvci5rZXksZGVzY3JpcHRvcik7fX1mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IscHJvdG9Qcm9wcyxzdGF0aWNQcm9wcyl7aWYocHJvdG9Qcm9wcylfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUscHJvdG9Qcm9wcyk7aWYoc3RhdGljUHJvcHMpX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3Isc3RhdGljUHJvcHMpO3JldHVybiBDb25zdHJ1Y3Rvcjt9ZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4oc2VsZixjYWxsKXtpZihjYWxsJiYoX3R5cGVvZihjYWxsKT09PVwib2JqZWN0XCJ8fHR5cGVvZiBjYWxsPT09XCJmdW5jdGlvblwiKSl7cmV0dXJuIGNhbGw7fXJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO31mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpe2lmKHNlbGY9PT12b2lkIDApe3Rocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTt9cmV0dXJuIHNlbGY7fWZ1bmN0aW9uIF9nZXRQcm90b3R5cGVPZihvKXtfZ2V0UHJvdG90eXBlT2Y9T2JqZWN0LnNldFByb3RvdHlwZU9mP09iamVjdC5nZXRQcm90b3R5cGVPZjpmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobyl7cmV0dXJuIG8uX19wcm90b19ffHxPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7fTtyZXR1cm4gX2dldFByb3RvdHlwZU9mKG8pO31mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3Msc3VwZXJDbGFzcyl7aWYodHlwZW9mIHN1cGVyQ2xhc3MhPT1cImZ1bmN0aW9uXCImJnN1cGVyQ2xhc3MhPT1udWxsKXt0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7fXN1YkNsYXNzLnByb3RvdHlwZT1PYmplY3QuY3JlYXRlKHN1cGVyQ2xhc3MmJnN1cGVyQ2xhc3MucHJvdG90eXBlLHtjb25zdHJ1Y3Rvcjp7dmFsdWU6c3ViQ2xhc3Msd3JpdGFibGU6dHJ1ZSxjb25maWd1cmFibGU6dHJ1ZX19KTtpZihzdXBlckNsYXNzKV9zZXRQcm90b3R5cGVPZihzdWJDbGFzcyxzdXBlckNsYXNzKTt9ZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8scCl7X3NldFByb3RvdHlwZU9mPU9iamVjdC5zZXRQcm90b3R5cGVPZnx8ZnVuY3Rpb24gX3NldFByb3RvdHlwZU9mKG8scCl7by5fX3Byb3RvX189cDtyZXR1cm4gbzt9O3JldHVybiBfc2V0UHJvdG90eXBlT2YobyxwKTt9LyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLWV4dHJhbmVvdXMtZGVwZW5kZW5jaWVzICovIC8qIGVzbGludC1kaXNhYmxlIHJlYWN0L3Byb3AtdHlwZXMgKi8vLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG52YXIgRnVsbHBhZ2U7dmFyIGlzRnVuYz1mdW5jdGlvbiBpc0Z1bmModmFsKXtyZXR1cm4gdHlwZW9mIHZhbD09PSdmdW5jdGlvbic7fTt2YXIgaXNFcXVhbEFycmF5PWZ1bmN0aW9uIGlzRXF1YWxBcnJheShmaXJzdEFycixzZWNvbmRBcnIpe2lmKGZpcnN0QXJyLmxlbmd0aCE9PXNlY29uZEFyci5sZW5ndGgpcmV0dXJuIGZhbHNlO3JldHVybiBmaXJzdEFyci5maW5kKGZ1bmN0aW9uKGVsKXtyZXR1cm4hc2Vjb25kQXJyLmluY2x1ZGVzKGVsKTt9KT09bnVsbDt9O3ZhciBmdWxscGFnZUNhbGxiYWNrcz1bJ2FmdGVyTG9hZCcsJ2FmdGVyUmVuZGVyJywnYWZ0ZXJSZXNpemUnLCdhZnRlclJlc3BvbnNpdmUnLCdhZnRlclNsaWRlTG9hZCcsJ29uTGVhdmUnLCdvblNsaWRlTGVhdmUnXTt2YXIgUmVhY3RGdWxscGFnZT0vKiNfX1BVUkVfXyovZnVuY3Rpb24oX1JlYWN0JENvbXBvbmVudCl7X2luaGVyaXRzKFJlYWN0RnVsbHBhZ2UsX1JlYWN0JENvbXBvbmVudCk7ZnVuY3Rpb24gUmVhY3RGdWxscGFnZShwcm9wcyl7dmFyIF90aGlzO19jbGFzc0NhbGxDaGVjayh0aGlzLFJlYWN0RnVsbHBhZ2UpO190aGlzPV9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHRoaXMsX2dldFByb3RvdHlwZU9mKFJlYWN0RnVsbHBhZ2UpLmNhbGwodGhpcyxwcm9wcykpO3ZhciBfdGhpcyRwcm9wcz1fdGhpcy5wcm9wcyxyZW5kZXI9X3RoaXMkcHJvcHMucmVuZGVyLHBsdWdpbldyYXBwZXI9X3RoaXMkcHJvcHMucGx1Z2luV3JhcHBlcjtpZighaXNGdW5jKHJlbmRlcikpe3Rocm93IG5ldyBFcnJvcignbXVzdCBwcm92aWRlIHJlbmRlciBwcm9wIHRvIDxSZWFjdEZ1bGxwYWdlIC8+Jyk7fV90aGlzLmxvZz1PYmplY3QoX0xvZ2dlcl9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMTBfX1svKiBkZWZhdWx0ICovIFwiYVwiXSkoX3RoaXMucHJvcHMuZGVidWcsJ1JlYWN0RnVsbHBhZ2UnKTtfdGhpcy5sb2coJ0J1aWxkaW5nIGNvbXBvbmVudCcpO190aGlzLmxvZygnSW1wb3J0aW5nIHZlbmRvciBmaWxlcycpO190aGlzLmltcG9ydFZlbmRvcnMoKTtpZihwbHVnaW5XcmFwcGVyKXtfdGhpcy5sb2coJ0NhbGxpbmcgcGx1Z2luIHdyYXBwZXInKTtwbHVnaW5XcmFwcGVyKCk7fV90aGlzLmxvZygnUmVxdWlyaW5nIGZ1bGxwYWdlLmpzJyk7RnVsbHBhZ2U9X193ZWJwYWNrX3JlcXVpcmVfXyg1Mik7X3RoaXMuc3RhdGU9e2luaXRpYWxpemVkOmZhbHNlLHNlY3Rpb25Db3VudDowLHNsaWRlQ291bnQ6MH07cmV0dXJuIF90aGlzO31fY3JlYXRlQ2xhc3MoUmVhY3RGdWxscGFnZSxbe2tleTpcImNvbXBvbmVudERpZE1vdW50XCIsdmFsdWU6ZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKXt2YXIgb3B0cz10aGlzLmJ1aWxkT3B0aW9ucygpO3RoaXMubG9nKCdSZWFjdCBMaWZlY3ljbGU6IGNvbXBvbmVudERpZE1vdW50KCknKTtpZihGdWxscGFnZSl7dGhpcy5pbml0KG9wdHMpO3RoaXMubWFya0luaXRpYWxpemVkKCk7fX19LHtrZXk6XCJjb21wb25lbnREaWRVcGRhdGVcIix2YWx1ZTpmdW5jdGlvbiBjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzKXt0aGlzLmxvZygnUmVhY3QgTGlmZWN5Y2xlOiBjb21wb25lbnREaWRVcGRhdGUoKScpO3ZhciBuZXdTZWN0aW9uQ291bnQ9dGhpcy5nZXRTZWN0aW9uQ291bnQoKTt2YXIgbmV3U2xpZGVDb3VudD10aGlzLmdldFNsaWRlQ291bnQoKTt2YXIgX3RoaXMkc3RhdGU9dGhpcy5zdGF0ZSxzZWN0aW9uQ291bnQ9X3RoaXMkc3RhdGUuc2VjdGlvbkNvdW50LHNsaWRlQ291bnQ9X3RoaXMkc3RhdGUuc2xpZGVDb3VudDsvLyBjb21wYXJpbmcgc2VjdGlvbkNvbG9ycyBhcnJheSBvcHRpb25cbnZhciBhcmVTYW1lU2VjdGlvbkNvbG9ycz1pc0VxdWFsQXJyYXkocHJldlByb3BzLnNlY3Rpb25zQ29sb3IsdGhpcy5wcm9wcy5zZWN0aW9uc0NvbG9yKTsvLyBOT1RFOiBpZiBmdWxscGFnZSBwcm9wcyBoYXZlIGNoYW5nZWQgd2UgbmVlZCB0byByZWJ1aWxkXG5pZighYXJlU2FtZVNlY3Rpb25Db2xvcnMpe3RoaXMubG9nKCdyZWJ1aWxkaW5nIGR1ZSB0byBhIGNoYW5nZSBpbiBmdWxscGFnZS5qcyBwcm9wcycpO3RoaXMucmVSZW5kZXIoKTtyZXR1cm47fWlmKHNlY3Rpb25Db3VudD09PW5ld1NlY3Rpb25Db3VudCYmc2xpZGVDb3VudD09PW5ld1NsaWRlQ291bnQpe3JldHVybjt9Ly8gTk9URTogaWYgc2VjdGlvbnMvc2xpZGVzIGhhdmUgY2hhbmdlZCB3ZSBuZWVkIHRvIHJlYnVpbGRcbnRoaXMubG9nKCdyZWJ1aWxkaW5nIGR1ZSB0byBhIGNoYW5nZSBpbiBmdWxscGFnZS5qcyBzZWN0aW9ucy9zbGlkZXMnKTt0aGlzLnJlUmVuZGVyKCk7fX0se2tleTpcImNvbXBvbmVudFdpbGxVbm1vdW50XCIsdmFsdWU6ZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKXt0aGlzLmRlc3Ryb3koKTt9fSx7a2V5OlwiZ2V0U2VjdGlvbkNvdW50XCIsdmFsdWU6ZnVuY3Rpb24gZ2V0U2VjdGlvbkNvdW50KCl7dmFyIF90aGlzJHByb3BzJHNlY3Rpb25TZT10aGlzLnByb3BzLnNlY3Rpb25TZWxlY3RvcixzZWN0aW9uU2VsZWN0b3I9X3RoaXMkcHJvcHMkc2VjdGlvblNlPT09dm9pZCAwP19zZWxlY3RvcnNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzExX19bLyogREVGQVVMVF9TRUNUSU9OICovIFwiYVwiXTpfdGhpcyRwcm9wcyRzZWN0aW9uU2U7dmFyIF9kb2N1bWVudCRxdWVyeVNlbGVjdD1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlY3Rpb25TZWxlY3RvciksbGVuZ3RoPV9kb2N1bWVudCRxdWVyeVNlbGVjdC5sZW5ndGg7cmV0dXJuIGxlbmd0aDt9fSx7a2V5OlwiZ2V0U2xpZGVDb3VudFwiLHZhbHVlOmZ1bmN0aW9uIGdldFNsaWRlQ291bnQoKXt2YXIgX3RoaXMkcHJvcHMkc2xpZGVTZWxlPXRoaXMucHJvcHMuc2xpZGVTZWxlY3RvcixzbGlkZVNlbGVjdG9yPV90aGlzJHByb3BzJHNsaWRlU2VsZT09PXZvaWQgMD9fc2VsZWN0b3JzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8xMV9fWy8qIERFRkFVTFRfU0xJREUgKi8gXCJiXCJdOl90aGlzJHByb3BzJHNsaWRlU2VsZTt2YXIgX2RvY3VtZW50JHF1ZXJ5U2VsZWN0Mj1kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNsaWRlU2VsZWN0b3IpLGxlbmd0aD1fZG9jdW1lbnQkcXVlcnlTZWxlY3QyLmxlbmd0aDtyZXR1cm4gbGVuZ3RoO319LHtrZXk6XCJpbXBvcnRWZW5kb3JzXCIsdmFsdWU6ZnVuY3Rpb24gaW1wb3J0VmVuZG9ycygpe3ZhciBfdGhpcyRwcm9wczI9dGhpcy5wcm9wcyxzY3JvbGxPdmVyZmxvdz1fdGhpcyRwcm9wczIuc2Nyb2xsT3ZlcmZsb3csZWFzaW5nPV90aGlzJHByb3BzMi5lYXNpbmc7aWYoc2Nyb2xsT3ZlcmZsb3cpe19fd2VicGFja19yZXF1aXJlX18oNTEpO31pZihlYXNpbmcpe19fd2VicGFja19yZXF1aXJlX18oNTApO319fSx7a2V5OlwiaW5pdFwiLHZhbHVlOmZ1bmN0aW9uIGluaXQob3B0cyl7dGhpcy5sb2coJ1JlaW5pdGlhbGl6aW5nIGZ1bGxwYWdlIHdpdGggb3B0aW9ucycsb3B0cyk7bmV3IEZ1bGxwYWdlKF9zZWxlY3RvcnNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzExX19bLyogSURfU0VMRUNUT1IgKi8gXCJjXCJdLG9wdHMpOy8vIGVzbGludC1kaXNhYmxlLWxpbmVcbnRoaXMuZnVsbHBhZ2VBcGk9d2luZG93LmZ1bGxwYWdlX2FwaTt0aGlzLmZwVXRpbHM9d2luZG93LmZwX3V0aWxzO3RoaXMuZnBFYXNpbmdzPXdpbmRvdy5mcF9lYXNpbmdzO319LHtrZXk6XCJkZXN0cm95XCIsdmFsdWU6ZnVuY3Rpb24gZGVzdHJveSgpe3RoaXMubG9nKCdEZXN0cm95aW5nIGZ1bGxwYWdlIGluc3RhbmNlJyk7dGhpcy5mdWxscGFnZUFwaS5kZXN0cm95KCdhbGwnKTt9fSx7a2V5OlwicmVSZW5kZXJcIix2YWx1ZTpmdW5jdGlvbiByZVJlbmRlcigpe3RoaXMuZGVzdHJveSgpO3RoaXMuaW5pdCh0aGlzLmJ1aWxkT3B0aW9ucygpKTt9fSx7a2V5OlwibWFya0luaXRpYWxpemVkXCIsdmFsdWU6ZnVuY3Rpb24gbWFya0luaXRpYWxpemVkKCl7dGhpcy5sb2coJ01hcmtpbmcgaW5pdGlhbGl6ZWQnKTt0aGlzLnNldFN0YXRlKHtpbml0aWFsaXplZDp0cnVlLHNlY3Rpb25Db3VudDp0aGlzLmdldFNlY3Rpb25Db3VudCgpLHNsaWRlQ291bnQ6dGhpcy5nZXRTbGlkZUNvdW50KCl9KTt9fSx7a2V5OlwiYnVpbGRPcHRpb25zXCIsdmFsdWU6ZnVuY3Rpb24gYnVpbGRPcHRpb25zKCl7dmFyIF90aGlzMj10aGlzO3ZhciBmaWx0ZXJDYj1mdW5jdGlvbiBmaWx0ZXJDYihrZXkpe3JldHVybiEhT2JqZWN0LmtleXMoX3RoaXMyLnByb3BzKS5maW5kKGZ1bmN0aW9uKGNiKXtyZXR1cm4gY2I9PT1rZXk7fSk7fTt2YXIgcmVnaXN0ZXJlZD1mdWxscGFnZUNhbGxiYWNrcy5maWx0ZXIoZmlsdGVyQ2IpO3ZhciBsaXN0ZW5lcnM9cmVnaXN0ZXJlZC5yZWR1Y2UoZnVuY3Rpb24ocmVzdWx0LGtleSl7cmV0dXJuIF9vYmplY3RTcHJlYWQoe30scmVzdWx0LF9kZWZpbmVQcm9wZXJ0eSh7fSxrZXksZnVuY3Rpb24oKXtmb3IodmFyIF9sZW49YXJndW1lbnRzLmxlbmd0aCxhcmdzPW5ldyBBcnJheShfbGVuKSxfa2V5PTA7X2tleTxfbGVuO19rZXkrKyl7YXJnc1tfa2V5XT1hcmd1bWVudHNbX2tleV07fXJldHVybiBfdGhpczIudXBkYXRlLmFwcGx5KF90aGlzMixba2V5XS5jb25jYXQoYXJncykpO30pKTt9LHt9KTsvLyBOT1RFOiBvdmVycmlkZSBwYXNzZWQgaW4gY2FsbGJhY2tzIHcvICB3cmFwcGVkIGxpc3RlbmVyc1xudmFyIG9wdGlvbnM9X29iamVjdFNwcmVhZCh7fSx0aGlzLnByb3BzLGxpc3RlbmVycyk7dGhpcy5sb2coJ0J1aWxkaW5nIGZ1bGxwYWdlLmpzIG9wdGlvbnM6ICcsb3B0aW9ucyk7cmV0dXJuIG9wdGlvbnM7fX0se2tleTpcInVwZGF0ZVwiLHZhbHVlOmZ1bmN0aW9uIHVwZGF0ZShsYXN0RXZlbnQpe3ZhciBfdGhpcyRwcm9wczM7Zm9yKHZhciBfbGVuMj1hcmd1bWVudHMubGVuZ3RoLGFyZ3M9bmV3IEFycmF5KF9sZW4yPjE/X2xlbjItMTowKSxfa2V5Mj0xO19rZXkyPF9sZW4yO19rZXkyKyspe2FyZ3NbX2tleTItMV09YXJndW1lbnRzW19rZXkyXTt9dGhpcy5sb2coJ0V2ZW50IHRyaWdnZXI6ICcsbGFzdEV2ZW50KTt2YXIgc3RhdGU9X29iamVjdFNwcmVhZCh7fSx0aGlzLnN0YXRlLHtzZWN0aW9uQ291bnQ6dGhpcy5nZXRTZWN0aW9uQ291bnQoKSxzbGlkZUNvdW50OnRoaXMuZ2V0U2xpZGVDb3VudCgpfSk7dmFyIG1ha2VTdGF0ZT1mdW5jdGlvbiBtYWtlU3RhdGUoY2FsbGJhY2tQYXJhbWV0ZXJzKXtyZXR1cm4gX29iamVjdFNwcmVhZCh7fSxzdGF0ZSxjYWxsYmFja1BhcmFtZXRlcnMse2xhc3RFdmVudDpsYXN0RXZlbnR9KTt9O3ZhciBmcm9tQXJncz1mdW5jdGlvbiBmcm9tQXJncyhhcmdMaXN0KXtyZXR1cm4gYXJnTGlzdC5yZWR1Y2UoZnVuY3Rpb24ocmVzdWx0LGtleSxpKXt2YXIgdmFsdWU9YXJnc1tpXTtyZXN1bHRba2V5XT12YWx1ZTsvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG5yZXR1cm4gcmVzdWx0O30se30pO307Ly8gTk9URTogcmVtYXBwaW5nIGNhbGxiYWNrIGFyZ3MgdG8gdjNcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9hbHZhcm90cmlnby9mdWxsUGFnZS5qcyNjYWxsYmFja3NcbnN3aXRjaChsYXN0RXZlbnQpey8vIEFmdGVyLSpcbmNhc2UnYWZ0ZXJMb2FkJzpzdGF0ZT1tYWtlU3RhdGUoZnJvbUFyZ3MoWydvcmlnaW4nLCdkZXN0aW5hdGlvbicsJ2RpcmVjdGlvbiddKSk7YnJlYWs7Y2FzZSdhZnRlclJlc2l6ZSc6c3RhdGU9bWFrZVN0YXRlKGZyb21BcmdzKFsnJ10pKTticmVhaztjYXNlJ2FmdGVyUmVzcG9uc2l2ZSc6c3RhdGU9bWFrZVN0YXRlKGZyb21BcmdzKFsnaXNSZXNwb25zaXZlJ10pKTticmVhaztjYXNlJ2FmdGVyU2xpZGVMb2FkJzpzdGF0ZT1tYWtlU3RhdGUoZnJvbUFyZ3MoWydzZWN0aW9uJywnb3JpZ2luJywnZGVzdGluYXRpb24nLCdkaXJlY3Rpb24nXSkpO2JyZWFrOy8vIE9uLSpcbmNhc2Unb25MZWF2ZSc6c3RhdGU9bWFrZVN0YXRlKGZyb21BcmdzKFsnb3JpZ2luJywnZGVzdGluYXRpb24nLCdkaXJlY3Rpb24nXSkpO2JyZWFrO2Nhc2Unb25TbGlkZUxlYXZlJzpzdGF0ZT1tYWtlU3RhdGUoZnJvbUFyZ3MoWydzZWN0aW9uJywnb3JpZ2luJywnc2xpZGVJbmRleCcsJ2Rlc3RpbmF0aW9uJywnZGlyZWN0aW9uJ10pKTticmVhaztkZWZhdWx0OmJyZWFrO312YXIgcmV0dXJuZWQ9KF90aGlzJHByb3BzMz10aGlzLnByb3BzKVtsYXN0RXZlbnRdLmFwcGx5KF90aGlzJHByb3BzMyxhcmdzKTt0aGlzLmxvZygnQ2FsbGVkIGNhbGxiYWNrOiBSZXR1cm5pbmcgPT4gJyxyZXR1cm5lZCk7dGhpcy5sb2coJ1VwZGF0aW5nIFN0YXRlID0+ICcsc3RhdGUpO3RoaXMuc2V0U3RhdGUoc3RhdGUpO3JldHVybiByZXR1cm5lZDt9fSx7a2V5OlwicmVuZGVyXCIsdmFsdWU6ZnVuY3Rpb24gcmVuZGVyKCl7dGhpcy5sb2coJzw9PSBSZW5kZXJpbmcgPT0+Jyk7cmV0dXJuIHJlYWN0X19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV84X19fZGVmYXVsdC5hLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIix7aWQ6X3NlbGVjdG9yc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMTFfX1svKiBNQUlOX1NFTEVDVE9SICovIFwiZFwiXX0sdGhpcy5wcm9wcy5yZW5kZXIodGhpcykpO319XSk7cmV0dXJuIFJlYWN0RnVsbHBhZ2U7fShyZWFjdF9fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfOF9fX2RlZmF1bHQuYS5Db21wb25lbnQpO1JlYWN0RnVsbHBhZ2UuZGVmYXVsdFByb3BzPXtzZWN0aW9uc0NvbG9yOltdfTsvKiBoYXJtb255IGRlZmF1bHQgZXhwb3J0ICovIF9fd2VicGFja19leHBvcnRzX19bXCJkZWZhdWx0XCJdID0gKFJlYWN0RnVsbHBhZ2UpO1xuXG4vKioqLyB9KSxcbi8qIDgzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cblwidXNlIHN0cmljdFwiO1xuXG52YXIgaGlkZSA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG52YXIgcmVkZWZpbmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE1KTtcbnZhciBmYWlscyA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG52YXIgZGVmaW5lZCA9IF9fd2VicGFja19yZXF1aXJlX18oMTcpO1xudmFyIHdrcyA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSwgbGVuZ3RoLCBleGVjKSB7XG4gIHZhciBTWU1CT0wgPSB3a3MoS0VZKTtcbiAgdmFyIGZucyA9IGV4ZWMoZGVmaW5lZCwgU1lNQk9MLCAnJ1tLRVldKTtcbiAgdmFyIHN0cmZuID0gZm5zWzBdO1xuICB2YXIgcnhmbiA9IGZuc1sxXTtcbiAgaWYgKGZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgTyA9IHt9O1xuICAgIE9bU1lNQk9MXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH07XG4gICAgcmV0dXJuICcnW0tFWV0oTykgIT0gNztcbiAgfSkpIHtcbiAgICByZWRlZmluZShTdHJpbmcucHJvdG90eXBlLCBLRVksIHN0cmZuKTtcbiAgICBoaWRlKFJlZ0V4cC5wcm90b3R5cGUsIFNZTUJPTCwgbGVuZ3RoID09IDJcbiAgICAgIC8vIDIxLjIuNS44IFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXShzdHJpbmcsIHJlcGxhY2VWYWx1ZSlcbiAgICAgIC8vIDIxLjIuNS4xMSBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdKHN0cmluZywgbGltaXQpXG4gICAgICA/IGZ1bmN0aW9uIChzdHJpbmcsIGFyZykgeyByZXR1cm4gcnhmbi5jYWxsKHN0cmluZywgdGhpcywgYXJnKTsgfVxuICAgICAgLy8gMjEuMi41LjYgUmVnRXhwLnByb3RvdHlwZVtAQG1hdGNoXShzdHJpbmcpXG4gICAgICAvLyAyMS4yLjUuOSBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXShzdHJpbmcpXG4gICAgICA6IGZ1bmN0aW9uIChzdHJpbmcpIHsgcmV0dXJuIHJ4Zm4uY2FsbChzdHJpbmcsIHRoaXMpOyB9XG4gICAgKTtcbiAgfVxufTtcblxuXG4vKioqLyB9KSxcbi8qIDg0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8vIEBAbWF0Y2ggbG9naWNcbl9fd2VicGFja19yZXF1aXJlX18oODMpKCdtYXRjaCcsIDEsIGZ1bmN0aW9uIChkZWZpbmVkLCBNQVRDSCwgJG1hdGNoKSB7XG4gIC8vIDIxLjEuMy4xMSBTdHJpbmcucHJvdG90eXBlLm1hdGNoKHJlZ2V4cClcbiAgcmV0dXJuIFtmdW5jdGlvbiBtYXRjaChyZWdleHApIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIE8gPSBkZWZpbmVkKHRoaXMpO1xuICAgIHZhciBmbiA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiByZWdleHBbTUFUQ0hdO1xuICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkID8gZm4uY2FsbChyZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW01BVENIXShTdHJpbmcoTykpO1xuICB9LCAkbWF0Y2hdO1xufSk7XG5cblxuLyoqKi8gfSlcbi8qKioqKiovIF0pOyIsImltcG9ydCBSZWFjdCwgeyBGQywgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgU2xpZGVyIGZyb20gJ0Bjb21wb25lbnRzL0hvbWUvU2xpZGVyJztcclxuaW1wb3J0IE1lbnUgZnJvbSAnQGFzc2V0cy9zdmcvbWVudS5zdmcnO1xyXG5pbXBvcnQgQmFja2dyb3VuZENvbG9yIGZyb20gJ0Bjb21wb25lbnRzL0hvbWUvQmFja2dyb3VuZENvbG9yJztcclxuaW1wb3J0IGNuIGZyb20gJ2NsYXNzbmFtZXMnO1xyXG5pbXBvcnQgc3R5bGUgZnJvbSAnQGFzc2V0cy9zdHlsZXMvc3R5bGUubW9kdWxlLmNzcyc7XHJcblxyXG5pbXBvcnQgRm9ybSBmcm9tICdAY29tcG9uZW50cy9Ib21lL0Zvcm1zJztcclxuaW1wb3J0IEZvb3RlciBmcm9tICdAY29tcG9uZW50cy9Ib21lL0Zvb3Rlcic7XHJcbmltcG9ydCB7IFpvb20gfSBmcm9tICdyZWFjdC1hd2Vzb21lLXJldmVhbCc7XHJcbmltcG9ydCB7IHVzZUludGVyc2VjdGlvbk9ic2VydmVyIH0gZnJvbSAnQGxpYi9ob29rcy91c2UtaW50ZXJzZWN0aW9uLW9ic2VydmVyJztcclxuaW1wb3J0IHsgTW9kYWwgfSBmcm9tICdAY29tcG9uZW50cy91aSc7XHJcbmltcG9ydCBMb2dvU2xpZGVyIGZyb20gJ0Bjb21wb25lbnRzL0xvZ28vTG9nb1NsaWRlcic7XHJcbmltcG9ydCBCYWNrZ3JvdW5kTG9nbyBmcm9tICdAY29tcG9uZW50cy9Mb2dvL0JhY2tncm91bmRMb2dvJztcclxuXHJcbmltcG9ydCBNZWV0bHlQYWdlIGZyb20gJ0Bjb21wb25lbnRzL01haW4vTWVldGx5UGFnZSc7XHJcbmltcG9ydCBCZWF1dGlja2V0UGFnZSBmcm9tICdAY29tcG9uZW50cy9NYWluL0JlYXV0aWNrZXRQYWdlJztcclxuaW1wb3J0IEV2ZXRQYWdlIGZyb20gJ0Bjb21wb25lbnRzL01haW4vRXZldFBhZ2UnO1xyXG5pbXBvcnQgRmxvd1BhZ2UgZnJvbSAnQGNvbXBvbmVudHMvTWFpbi9GbG93UGFnZSc7XHJcbmltcG9ydCBNaW5pbWlkbWFrc1BhZ2UgZnJvbSAnQGNvbXBvbmVudHMvTWFpbi9NaW5pbWlkbWFrc1BhZ2UnO1xyXG5pbXBvcnQgU3RpbHlQYWdlIGZyb20gJ0Bjb21wb25lbnRzL01haW4vU3RpbHlQYWdlJztcclxuaW1wb3J0IFdpbmdsZVBhZ2UgZnJvbSAnQGNvbXBvbmVudHMvTWFpbi9XaW5nbGVQYWdlJztcclxuaW1wb3J0IENpcmNsZTEgZnJvbSAnQGFzc2V0cy9zdmcvY2lyY2xlLnN2Zyc7XHJcblxyXG5pbXBvcnQgUmVhY3RGdWxscGFnZSBmcm9tICdAZnVsbHBhZ2UvcmVhY3QtZnVsbHBhZ2UnO1xyXG5cclxuaW1wb3J0IEZ1bGxQYWdlIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvTWFpbi9GdWxsU2Nyb2xsUGFnZSc7XHJcbi8vIGltcG9ydCAnLi9pbmRleC5jc3MnO1xyXG5cclxuY29uc3QgZGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgICBzcmM6ICcvaW1hZ2VzL2V2ZXQvMS5wbmcnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGREQ5NkMnLFxyXG4gICAgICAgIGxvZ286ICcvaW1hZ2VzL2xvZ28vZXZldC5wbmcnLFxyXG4gICAgICAgIHRleHQ6ICdFdmV0JyxcclxuICAgICAgICBidXR0b246ICcjRkREOTZDJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc3JjOiAnL2ltYWdlcy9XaW5nbGUvd2luZ2xlMS5wbmcnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM5QURFRUMnLFxyXG4gICAgICAgIGxvZ286ICcvaW1hZ2VzL2xvZ28vd2luZ2xlLnBuZycsXHJcbiAgICAgICAgdGV4dDogJ1dpbmdsZScsXHJcbiAgICAgICAgYnV0dG9uOiAnIzlBREVFQycsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNyYzogJy9pbWFnZXMvRmxvdy9mbG93MS5wbmcnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNCODkzREQnLFxyXG4gICAgICAgIGxvZ286ICcvaW1hZ2VzL2xvZ28vZmxvdy5wbmcnLFxyXG4gICAgICAgIHRleHQ6ICdGbG93JyxcclxuICAgICAgICBidXR0b246ICcjQjg5M0REJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc3JjOiAnL2ltYWdlcy9TdGlseS9zdGlseTEucG5nJyxcclxuICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjRjJENDc0JyxcclxuICAgICAgICBsb2dvOiAnL2ltYWdlcy9sb2dvL3N0aWx5LnBuZycsXHJcbiAgICAgICAgdGV4dDogJ1N0aWx5JyxcclxuICAgICAgICBidXR0b246ICcjRjJENDc0JyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc3JjOiAnL2ltYWdlcy9NZWV0bHkvbWVldGx5MS5wbmcnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGREQ5NkMnLFxyXG4gICAgICAgIGxvZ286ICcvaW1hZ2VzL2xvZ28vbWVldGx5LnBuZycsXHJcbiAgICAgICAgdGV4dDogJ01lZXRseScsXHJcbiAgICAgICAgYnV0dG9uOiAnI0ZGOUE5RScsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHNyYzogJy9pbWFnZXMvbWluaW1pZG1ha3MvbWluaW1pZGltYWtzMS5wbmcnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyM2N0Q0REQnLFxyXG4gICAgICAgIGxvZ286ICcvaW1hZ2VzL2xvZ28vTWluaWxvZ28ucG5nJyxcclxuICAgICAgICB0ZXh0OiAnTWluaU1pZGlNYWtzJyxcclxuICAgICAgICBidXR0b246ICcjNjdENEREJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgc3JjOiAnL2ltYWdlcy9CZXV0aWNrZXQvYmV1dGlja2V0MS5wbmcnLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogJyNGQjVGN0UnLFxyXG4gICAgICAgIGxvZ286ICcvaW1hZ2VzL2xvZ28vYmV1dGlja2V0LnBuZycsXHJcbiAgICAgICAgdGV4dDogJ0JldXRpY2tldCcsXHJcbiAgICAgICAgYnV0dG9uOiAnI0ZCNUY3RScsXHJcbiAgICB9LFxyXG5dO1xyXG5jb25zdCBkYXRhSW1hZ2UgPSBbXHJcbiAgICB7IHNyYzogJy9pbWFnZXMvbG9nby9ldmV0LnBuZycsIHRleHQ6ICdFdmV0JyB9LFxyXG4gICAgeyBzcmM6ICcvaW1hZ2VzL2xvZ28vd2luZ2xlLnBuZycsIHRleHQ6ICdXaW5nbGUnIH0sXHJcbiAgICB7IHNyYzogJy9pbWFnZXMvbG9nby9mbG93LnBuZycsIHRleHQ6ICdGbG93JyB9LFxyXG4gICAgeyBzcmM6ICcvaW1hZ2VzL2xvZ28vc3RpbHkucG5nJywgdGV4dDogJ1N0aWx5JyB9LFxyXG4gICAgeyBzcmM6ICcvaW1hZ2VzL2xvZ28vbWVldGx5LnBuZycsIHRleHQ6ICdNZWV0bHknIH0sXHJcbiAgICB7IHNyYzogJy9pbWFnZXMvbG9nby9NaW5pbG9nby5wbmcnLCB0ZXh0OiAnTWluaU1pZGlNYWtzJyB9LFxyXG4gICAgeyBzcmM6ICcvaW1hZ2VzL2xvZ28vYmV1dGlja2V0LnBuZycsIHRleHQ6ICdCZXV0aWNrZXQnIH0sXHJcbl07XHJcblxyXG5jb25zdCBIb21lOiBGQyA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGU8YW55PigpO1xyXG4gICAgY29uc3QgW3BsYXksIHNldFBsYXldID0gdXNlU3RhdGU8YW55PigpO1xyXG4gICAgY29uc3QgW3BsYXlBbmltLCBzZXRQbGF5QW5pbV0gPSB1c2VTdGF0ZTxhbnk+KCk7XHJcbiAgICBjb25zdCBbY2hhbmdlLCBzZXRDaGFuZ2VdID0gdXNlU3RhdGU8c3RyaW5nPigncGFnZTEnKTtcclxuICAgIGNvbnN0IFtjb2xvckxvZ28sIHNldENvbG9yTG9nb10gPSB1c2VTdGF0ZTxzdHJpbmc+KCcnKTtcclxuICAgIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuICAgIGNvbnN0IFtzY3JlZW4sIHNldFNjcmVlbl0gPSB1c2VTdGF0ZTxhbnk+KCk7XHJcbiAgICBjb25zdCBbc2Nyb2xsLCBzZXRTY3JvbGxdID0gdXNlU3RhdGU8YW55PigyKTtcclxuICAgIGNvbnN0IFtsb2NrLCBzZXRMb2NrXSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCBbZnVsbFNjcm9sbCwgc2V0RnVsbFNjcm9sbF0gPSB1c2VTdGF0ZTxhbnk+KCk7XHJcblxyXG4gICAgY29uc3QgZWxlbWVudFJlZiA9IHVzZVJlZjxhbnk+KG51bGwpO1xyXG4gICAgY29uc3QgZm9ybSA9IHVzZVJlZjxhbnk+KG51bGwpO1xyXG4gICAgY29uc3QgZGl2ID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcclxuXHJcbiAgICBjb25zdCBmdWxsUGFnZVNjcm9sbCA9IHVzZVJlZjxhbnk+KG51bGwpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKGxvY2spIHJldHVybjtcclxuICAgICAgICBpZiAoc2Nyb2xsID09IDMpIHNldExvY2sodHJ1ZSk7XHJcbiAgICAgICAgbGV0IGZ1bGxTY3JvbGxOZXcgPSBuZXcgRnVsbFBhZ2UoMSwgc2Nyb2xsLCBmdWxsUGFnZVNjcm9sbC5jdXJyZW50KTtcclxuXHJcbiAgICAgICAgZnVsbFNjcm9sbE5ldy5pbml0KCk7XHJcbiAgICAgICAgc2V0RnVsbFNjcm9sbChmdWxsU2Nyb2xsTmV3KTtcclxuICAgIH0sIFtzY3JvbGxdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHNldFBsYXkoIXBsYXkpO1xyXG4gICAgICAgIHNldFBsYXlBbmltKCFwbGF5QW5pbSk7XHJcbiAgICB9LCBbY29sb3JdKTtcclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHNjcmVlbiA9IHdpbmRvdy5zY3JlZW4ud2lkdGg7XHJcbiAgICAgICAgc2NyZWVuV2lkdGgoc2NyZWVuKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHNjcmVlbldpZHRoID0gKHNjcmVlbjogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgc2V0U2NyZWVuKHNjcmVlbiA+IDQ1MCk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGNsaWNrIHN3aXRjaCBpbiB0aGUgcGFnZXNcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICBmdWxsU2Nyb2xsLnNjcm9sbERvd24oKTtcclxuICAgICAgICBzZXRTY3JvbGwoMyk7XHJcbiAgICAgICAgbGV0IGEgPSBjaGFuZ2U7XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDApIHtcclxuICAgICAgICAgICAgYSA9ICdwYWdlMCc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGEgPSAncGFnZTEnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT0gMikge1xyXG4gICAgICAgICAgICBhID0gJ3BhZ2UyJztcclxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09IDMpIHtcclxuICAgICAgICAgICAgYSA9ICdwYWdlMyc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PSA0KSB7XHJcbiAgICAgICAgICAgIGEgPSAncGFnZTQnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT0gNSkge1xyXG4gICAgICAgICAgICBhID0gJ3BhZ2U1JztcclxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09IDYpIHtcclxuICAgICAgICAgICAgYSA9ICdwYWdlNic7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBjb2xvciA9IGNvbG9yTG9nbztcclxuICAgICAgICBpZiAoaW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICBjb2xvciA9ICcjRkREOTZDJztcclxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09IDEpIHtcclxuICAgICAgICAgICAgY29sb3IgPSAnIzlBREVFQyc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PSAyKSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gJyNCODkzREQnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT0gMykge1xyXG4gICAgICAgICAgICBjb2xvciA9ICcjRjJENDc0JztcclxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09IDQpIHtcclxuICAgICAgICAgICAgY29sb3IgPSAnI0ZGOUE5RSc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PSA1KSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gJyM2N0Q0REQnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT0gNikge1xyXG4gICAgICAgICAgICBjb2xvciA9ICcjRkI1RjdFJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb2xvciA9ICcjRkY5QTlFJztcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0Q2hhbmdlKGEpO1xyXG4gICAgICAgIHNldENvbG9yTG9nbyhjb2xvcik7XHJcbiAgICAgICAgc2V0U2hvdyh0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gY2xpY2sgc3dpdGNoIGluIHRoZSBwYWdlc1xyXG4gICAgY29uc3Qgc3dpdGNoTG9nb1BhZ2UgPSAoaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGxldCBhID0gY2hhbmdlO1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGEgPSAncGFnZTAnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT0gMSkge1xyXG4gICAgICAgICAgICBhID0gJ3BhZ2UxJztcclxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09IDIpIHtcclxuICAgICAgICAgICAgYSA9ICdwYWdlMic7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PSAzKSB7XHJcbiAgICAgICAgICAgIGEgPSAncGFnZTMnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT0gNCkge1xyXG4gICAgICAgICAgICBhID0gJ3BhZ2U0JztcclxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09IDUpIHtcclxuICAgICAgICAgICAgYSA9ICdwYWdlNSc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PSA2KSB7XHJcbiAgICAgICAgICAgIGEgPSAncGFnZTYnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgY29sb3IgPSBjb2xvckxvZ287XHJcbiAgICAgICAgaWYgKGluZGV4ID09IDApIHtcclxuICAgICAgICAgICAgY29sb3IgPSAnI0ZERDk2Qyc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PSAxKSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gJyM5QURFRUMnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT0gMikge1xyXG4gICAgICAgICAgICBjb2xvciA9ICcjQjg5M0REJztcclxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09IDMpIHtcclxuICAgICAgICAgICAgY29sb3IgPSAnI0YyRDQ3NCc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PSA0KSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gJyNGRjlBOUUnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT0gNSkge1xyXG4gICAgICAgICAgICBjb2xvciA9ICcjNjdENEREJztcclxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09IDYpIHtcclxuICAgICAgICAgICAgY29sb3IgPSAnI0ZCNUY3RSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29sb3IgPSAnI0ZGOUE5RSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldENoYW5nZShhKTtcclxuICAgICAgICBzZXRDb2xvckxvZ28oY29sb3IpO1xyXG4gICAgICAgIHNldFNob3codHJ1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IGxvZ29DbGljayA9IChpbmRleDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgZnVsbFNjcm9sbC5zY3JvbGxVcCgpO1xyXG5cclxuICAgICAgICBsZXQgYSA9IGNoYW5nZTtcclxuICAgICAgICBpZiAoaW5kZXggPT0gMCkge1xyXG4gICAgICAgICAgICBhID0gJ3BhZ2UwJztcclxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09IDEpIHtcclxuICAgICAgICAgICAgYSA9ICdwYWdlMSc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PSAyKSB7XHJcbiAgICAgICAgICAgIGEgPSAncGFnZTInO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT0gMykge1xyXG4gICAgICAgICAgICBhID0gJ3BhZ2UzJztcclxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09IDQpIHtcclxuICAgICAgICAgICAgYSA9ICdwYWdlNCc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PSA1KSB7XHJcbiAgICAgICAgICAgIGEgPSAncGFnZTUnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT0gNikge1xyXG4gICAgICAgICAgICBhID0gJ3BhZ2U2JztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGNvbG9yID0gY29sb3JMb2dvO1xyXG4gICAgICAgIGlmIChpbmRleCA9PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gJyNGREQ5NkMnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT0gMSkge1xyXG4gICAgICAgICAgICBjb2xvciA9ICcjOUFERUVDJztcclxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09IDIpIHtcclxuICAgICAgICAgICAgY29sb3IgPSAnI0I4OTNERCc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PSAzKSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gJyNGMkQ0NzQnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaW5kZXggPT0gNCkge1xyXG4gICAgICAgICAgICBjb2xvciA9ICcjRkY5QTlFJztcclxuICAgICAgICB9IGVsc2UgaWYgKGluZGV4ID09IDUpIHtcclxuICAgICAgICAgICAgY29sb3IgPSAnIzY3RDRERCc7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpbmRleCA9PSA2KSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gJyNGQjVGN0UnO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbG9yID0gJyNGRjlBOUUnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRDaGFuZ2UoYSk7XHJcbiAgICAgICAgc2V0Q29sb3JMb2dvKGNvbG9yKTtcclxuICAgICAgICBzZXRTaG93KHRydWUpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBsb2NhbCA9ICgpID0+IHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc3RhdGUnLCAndHJ1ZScpO1xyXG4gICAgfTtcclxuICAgIC8vIG9wZW4gbW9kYWxcclxuICAgIGNvbnN0IG1vdXNlTW92ZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zdCBhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0YXRlJyk7XHJcbiAgICAgICAgaWYgKGEgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBzZXRPcGVuKHRydWUpO1xyXG4gICAgICAgICAgICBsb2NhbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gc2Nyb2xsIHRvIGZvcm1cclxuICAgIGNvbnN0IGNvbnRhY3RVcyA9ICgpID0+IHtcclxuICAgICAgICBmdWxsU2Nyb2xsLnNjcm9sbERvd24oKTtcclxuICAgICAgICBmdWxsU2Nyb2xsLnNjcm9sbERvd24oKTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHRydWUpXHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxSZWFjdEZ1bGxwYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgLy9mdWxscGFnZSBvcHRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgbGljZW5zZUtleT17J1lPVVJfS0VZX0hFUkUnfVxyXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbGluZ1NwZWVkPXsxMDAwfSAvKiBPcHRpb25zIGhlcmUgKi9cclxuICAgICAgICAgICAgICAgICAgICByZW5kZXI9eyh7IHN0YXRlLCBmdWxscGFnZUFwaSB9KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8UmVhY3RGdWxscGFnZS5XcmFwcGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5TZWN0aW9uIDEgKHdlbGNvbWUgdG8gZnVsbHBhZ2UuanMpPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGZ1bGxwYWdlQXBpLm1vdmVTZWN0aW9uRG93bigpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENsaWNrIG1lIHRvIG1vdmUgZG93blxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+U2VjdGlvbiAyPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdEZ1bGxwYWdlLldyYXBwZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICk7XHJcblxyXG4gICAgaWYgKGZhbHNlKVxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZnVsbCBtYXgtdy04eGwgbXgtYXV0byAgZmxleCBmbGV4LWNvbCBtaW4taC1zY3JlZW5cIlxyXG4gICAgICAgICAgICAgICAgb25Nb3VzZUxlYXZlPXsoKSA9PiBtb3VzZU1vdmUoKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy1oaWRkZW4gaC1zY3JlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHJlZj17ZnVsbFBhZ2VTY3JvbGx9IGNsYXNzTmFtZT1cInRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCByZWxhdGl2ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1zY3JlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbignbGc6LW10LTEgbWQ6LW10LTYgc206LW10LTE0IC1tdC0xNCcpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17JyAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWhpZGRlbiBhYnNvbHV0ZSB3LWZ1bGwgLW10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWNrZ3JvdW5kQ29sb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb249e3BsYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPXtjb2xvcj8uYmFja2dyb3VuZENvbG9yID8/ICcjRkY5QTlFJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbGc6dG9wLTYgbWQ6dG9wLTcgdG9wLTE2IGxnOm10LTIgbWQ6LW10LTIgLW10LTcgdy1mdWxsIGFic29sdXRlIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzptci0xMCBtZDptci0xMCBtci0yIHJpZ2h0LTAgYWJzb2x1dGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIiBsZzp3LTE4IG1kOnctOCB3LTdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL21lbnUucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHRleHQtbGVmdCBsZzptci0wIG1kOm1yLTAgbXItMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIC1tbC01IDN4bDp3LTE0IGxnOnctMTAgbWQ6dy0xMCB3LTlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm91bmRlZC1sZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9eyhjb2xvciBhcyBhbnkpPy5sb2dvfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTYgM3hsOm1sLTEyIDN4bDptdC0zIG10LTIgYWJzb2x1dGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZm9udC1ib2xkXCI+eyhjb2xvciBhcyBhbnkpPy50ZXh0fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzptbC0xMCBtZDptbC0xMCBtbC0zIHctMjAgbWQ6dy0yOCBsZzp3LTI4IGFic29sdXRlIGxlZnQtMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiM3hsOnctMjggbGc6dy0yNCBtZDp3LTIwIHctMTZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2xvZ28vbG9nb1doYWl0LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFNsaWRlciAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzp0b3AtMCBtZDp0b3AtMCBsZzptdC0xIG1kOm10LTcgbXQtMTRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTbGlkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyh7IHNyYyB9LCBpbmRleCwgYWN0aXZlKSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZUNsaWNrKGluZGV4IGFzIG51bWJlcil9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBjdXJzb3ItcG9pbnRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxDaXJjbGUxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD17Y29sb3I/LmJhY2tncm91bmRDb2xvcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2BhYnNvbHV0ZSB6LTEwICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZSA/ICdibG9jaycgOiAnaGlkZGVuJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gYW5pbWF0ZS1waW5nVG91Y2ggbGc6dy0xNiBsZzpoLTE2IG1kOnctMTAgbWQ6aC0xMCB3LTcgaC03YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwic2xpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AzeGw6dy00OCBsZzp3LTQwIHNtOnctNDAgeHM6dy0zNiB3LTQ4IG10LTEwIG1kOnctNDAgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwICR7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFjdGl2ZSAmJiAndHJhbnNmb3JtIHNjYWxlLTEyNSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2V0Q29sb3I9eyhjb2xvcikgPT4gc2V0Q29sb3IoY29sb3IpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ1dHRvbkNvbG9yPXsoY29sb3IgYXMgYW55KT8uYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihgZmxleCBqdXN0aWZ5LWNlbnRlciAtbXQtMjBgKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtjb250YWN0VXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZS5zY2FsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLnNoYWRvd0J0bixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgYmctd2hpdGUgM3hsOnctMzYgM3hsOnRleHQtbGcgdy0yOCBwLTIgcm91bmRlZC1mdWxsIHNoYWRvdy1jdXN0b20gb3V0bGluZS1ub25lIDN4bDotbXQtM2AsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBjb2xvcj8uYnV0dG9uIHx8ICcjQjg5M0REJyB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGFjdCBVc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3cgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidy1mdWxsIGgtc2NyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFpvb20+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihgdHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTEwMDBgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtaGlkZGVuIGFic29sdXRlIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFja2dyb3VuZExvZ29cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRMb2dvPXtjb2xvckxvZ28gfHwgJyM5QURFRUMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPXtwbGF5QW5pbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOi1tdC0yNCAtbXQtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTE2IG10LTEwIGxnOm10LTI0IG1kOm10LTI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOm1yLTEwIG1kOm1yLTEwIG1yLTQgbXQtNCByaWdodC0wIGFic29sdXRlIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibGc6dy04IG1kOnctMTAgdy03XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9tZW51LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzptbC0xMCBtZDptbC0xMCBsZzp3LTI0IHctMTQgbWwtNCBtdC00IG1kOnctMjAgYWJzb2x1dGUgbGVmdC0wIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9sb2dvL2xvZ29XaGFpdC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6bXItNDggbGc6bWwtNDggeGw6LW10LTUgM3hsOm10LTEgLW10LTVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2dvU2xpZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YUltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09eyh7IHNyYyB9LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaExvZ29QYWdlKGluZGV4IGFzIG51bWJlcilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInNsaWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgM3hsOnctMTcgMnhsOnctMTQgbGc6dy0xNCB3LTEwIG1kOnctMTQgbXQtNSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgcm91bmRlZC1mdWxsIHNoYWRvdy0yeGxgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGByaWdodC0yIGFic29sdXRlIC1tdC0yMCBtci03IGxnOmJsb2NrIGhpZGRlbiB4bDotbXQtMTZgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NvbnRhY3RVc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZS5zY2FsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCBiZy13aGl0ZSB3LTI4IHAtMiByb3VuZGVkLWZ1bGwgc2hhZG93LWlubmVyIG91dGxpbmUtbm9uZWAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogY29sb3JMb2dvIHx8ICcjOUFERUVDJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3QgVXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi1tdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiIGFic29sdXRlIHotMTAgbXQtMjAgbGVmdC0yIGxnOmhpZGRlblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NvbnRhY3RVc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZS5zY2FsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGFuaW1hdGUtYnV0dG9uIHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGRlbGF5LTUwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTIwIGJnLXdoaXRlIHctMjAgdGV4dC14cyBwLTIgcm91bmRlZC1mdWxsIHNoYWRvdy0yeGxgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yTG9nbyB8fCAnIzlBREVFQycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250YWN0IFVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzN4bDptdC0yIDJ4bDptdC0xNiAgbGc6bXQtMyBtdC0yIGgtc2NyZWVuIGxnOm92ZXJmbG93LWhpZGRlbiBtZDpvdmVyZmxvdy1oaWRkZW4gc206b3ZlcmZsb3ctaGlkZGVuIHhzOm92ZXJmbG93LWhpZGRlbiBvdmVyZmxvdy1hdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2UgPT0gJ3BhZ2UwJyA/ICdibG9jaycgOiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFdmV0UGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRMb2dvPXtjb2xvckxvZ28gfHwgJyNGREQ5NkMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbignaC00MCcpfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzN4bDptdC0yIDJ4bDptdC0xNiAgbGc6bXQtMyAgbXQtMiBoLXNjcmVlbiBsZzpvdmVyZmxvdy1oaWRkZW4gbWQ6b3ZlcmZsb3ctaGlkZGVuIHNtOm92ZXJmbG93LWhpZGRlbiB4czpvdmVyZmxvdy1oaWRkZW4gb3ZlcmZsb3ctYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlID09ICdwYWdlMScgPyAnYmxvY2snIDogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8V2luZ2xlUGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRMb2dvPXtjb2xvckxvZ28gfHwgJyM5QURFRUMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbignaC00MCcpfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzN4bDptdC0yIDJ4bDptdC0xNiAgbGc6bXQtMyAgbXQtMiBoLXNjcmVlbiBsZzpvdmVyZmxvdy1oaWRkZW4gbWQ6b3ZlcmZsb3ctaGlkZGVuIHNtOm92ZXJmbG93LWhpZGRlbiB4czpvdmVyZmxvdy1oaWRkZW4gb3ZlcmZsb3ctYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlID09ICdwYWdlMicgPyAnYmxvY2snIDogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rmxvd1BhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kTG9nbz17Y29sb3JMb2dvIHx8ICcjRkY5QTlFJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oJ2gtNDAnKX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICczeGw6bXQtMiAyeGw6bXQtMTYgIGxnOm10LTMgIG10LTIgaC1zY3JlZW4gbGc6b3ZlcmZsb3ctaGlkZGVuIG1kOm92ZXJmbG93LWhpZGRlbiBzbTpvdmVyZmxvdy1oaWRkZW4geHM6b3ZlcmZsb3ctaGlkZGVuIG92ZXJmbG93LWF1dG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZSA9PSAncGFnZTMnID8gJ2Jsb2NrJyA6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0aWx5UGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRMb2dvPXtjb2xvckxvZ28gfHwgJyNGRjlBOUUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbignaC00MCcpfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzN4bDptdC0wIDJ4bDptdC0xNiBsZzptdC0wICBtdC0yIGgtc2NyZWVuIGxnOm92ZXJmbG93LWhpZGRlbiBtZDpvdmVyZmxvdy1oaWRkZW4gc206b3ZlcmZsb3ctaGlkZGVuIHhzOm92ZXJmbG93LWhpZGRlbiBvdmVyZmxvdy1hdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2UgPT0gJ3BhZ2U0JyA/ICdibG9jaycgOiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZWV0bHlQYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZExvZ289e2NvbG9yTG9nbyB8fCAnI0ZGOUE5RSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKCdoLTQwJyl9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnM3hsOm10LTIgMnhsOm10LTE2ICBsZzptdC0zICBtdC0yIGgtc2NyZWVuIGxnOm92ZXJmbG93LWhpZGRlbiBtZDpvdmVyZmxvdy1oaWRkZW4gc206b3ZlcmZsb3ctaGlkZGVuIHhzOm92ZXJmbG93LWhpZGRlbiBvdmVyZmxvdy1hdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2UgPT0gJ3BhZ2U1JyA/ICdibG9jaycgOiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNaW5pbWlkbWFrc1BhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kTG9nbz17Y29sb3JMb2dvIHx8ICcjRkY5QTlFJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oJ2gtNDAnKX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICczeGw6bXQtMiAyeGw6bXQtMTYgIGxnOm10LTAgIG10LTIgaC1zY3JlZW4gbGc6b3ZlcmZsb3ctaGlkZGVuIG1kOm92ZXJmbG93LWhpZGRlbiBzbTpvdmVyZmxvdy1oaWRkZW4geHM6b3ZlcmZsb3ctaGlkZGVuIG92ZXJmbG93LWF1dG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZSA9PSAncGFnZTYnID8gJ2Jsb2NrJyA6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJlYXV0aWNrZXRQYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZExvZ289e2NvbG9yTG9nbyB8fCAnI0ZGOUE5RSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKCdoLTQwJyl9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L1pvb20+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y24oYHctZnVsbCBoLXNjcmVlbmApfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xvc2U9eygpID0+IHNldE9wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlPXtvcGVufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiei0xMCBhYnNvbHV0ZSBsZzotbXQtNSBsZzpyaWdodC05IG1kOi1yaWdodC0xNiBtZDotbXQtMTAgLXJpZ2h0LTI0IGZsZXggbXQtMiBtci0zMiBjdXJzb3ItcG9pbnRlciBwLTFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwidy01XCIgc3JjPVwiL2ltYWdlcy9jYW5jZWwucG5nXCIgYWx0PVwiXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xnOm10LTEwIG1kOm10LTEwIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIGJhY2tncm91bmRGb3JtPXtjb2xvckxvZ28gfHwgJyM5QURFRUMnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L01vZGFsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyogc2xpZGV0IG1lbnUgaW4gZm9ybSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6LW10LTI0IG1kOi1tdC0yNCAtbXQtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPExvZ28gZGF0YUltYWdlPXtkYXRhSW1hZ2V9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbignJyl9IHJlZj17Zm9ybX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbihgdHJhbnNmb3JtIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTEwMDAgYCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtaGlkZGVuIG92ZXJmbG93LXktaGlkZGVuIDN4bDpoLTUyIGxnOmgtNDQgbWQ6aC00MCBzbTpoLTQwIGgtMzYgIGFic29sdXRlIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QmFja2dyb3VuZExvZ29cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRMb2dvPXtjb2xvckxvZ28gfHwgJyM5QURFRUMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPXtwbGF5QW5pbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOi1tdC02IG1kOi1tdC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC0xNiBtdC0xMCBsZzptdC0yNCBtZDptdC0yNFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzptci0xMCBtZDptci0xMCBtci00IG10LTQgdy04IHJpZ2h0LTAgYWJzb2x1dGUgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZzp3LTEwIG1kOnctMTAgeHM6dy0xMCB4bTp3LTdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL21lbnUucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOm1sLTEwIG1kOm1sLTEwIDN4bDp3LTI4IGxnOnctMjQgeHM6dy0yMCB4bTp3LTE2IG1sLTQgbXQtNCBtZDp3LTIwIGFic29sdXRlIGxlZnQtMCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvbG9nby9sb2dvV2hhaXQucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOm1yLTQ4IGxnOm1sLTQ4IHhsOi1tdC01IC1tdC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9nb1NsaWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE9e2RhdGFJbWFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoeyBzcmMgfSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dvQ2xpY2soaW5kZXggYXMgbnVtYmVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtzcmN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwic2xpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AzeGw6dy0xNiB3LTEwIG1kOnctMTQgbXQtNSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0zMDAgcm91bmRlZC1mdWxsIHNoYWRvdy0yeGxgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgM3hsOm10LTE2IHhsOm10LTEwIG1kOm10LTEwIHhzOm10LTE0IG10LTcgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm0gYmFja2dyb3VuZEZvcm09e2NvbG9yTG9nbyB8fCAnIzlBREVFQyd9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIHtzY3JlZW4gPT0gdHJ1ZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYDN4bDptdC0xNiB4bDptdC0xMCBtZDptdC0xMCBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBiYWNrZ3JvdW5kRm9ybT17Y29sb3JMb2dvIHx8ICcjOUFERUVDJ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfSAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtjbihgbXQtMTZgKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvb3RlciBiYWNrZ3JvdW5kRm9vdGVyPXtjb2xvckxvZ28gfHwgJyM5QURFRUMnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCIgb25Nb3VzZUxlYXZlPXsoKSA9PiBtb3VzZU1vdmUoKX0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGUuYm9keX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUubWFpbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdyZWxhdGl2ZSB3LWZ1bGwgbWF4LXctOHhsIG14LWF1dG8gIGZsZXggZmxleC1jb2wgbWluLWgtc2NyZWVuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGUuZGl2KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9eydsZzotbXQtMSAtbXQtMjAnfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVyZmxvdy14LWhpZGRlbiBhYnNvbHV0ZSB3LWZ1bGwgLW10LTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWNrZ3JvdW5kQ29sb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb249e3BsYXl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yPXtjb2xvcj8uYmFja2dyb3VuZENvbG9yID8/ICcjRkY5QTlFJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggbGc6dG9wLTYgbWQ6dG9wLTcgdG9wLTE2IGxnOm10LTIgbWQ6LW10LTIgLW10LTcgdy1mdWxsIGFic29sdXRlIGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzptci0xMCBtZDptci0xMCBtci0yIHJpZ2h0LTAgYWJzb2x1dGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIjN4bDp3LTEwIGxnOnctMTAgbWQ6dy0xMCB3LTEwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9tZW51LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB0ZXh0LWxlZnQgbGc6bXItMCBtZDptci0wIG1yLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSAtbWwtNSAzeGw6dy0xNCBsZzp3LTEwIG1kOnctMTAgdy05XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdW5kZWQtbGdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXsoY29sb3IgYXMgYW55KT8ubG9nb31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtbC02IDN4bDptbC0xMiAzeGw6bXQtMyBtdC0yIGFic29sdXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPnsoY29sb3IgYXMgYW55KT8udGV4dH08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6bWwtMTAgbWQ6bWwtMTAgbWwtMyB3LTIwIG1kOnctMjggbGc6dy0yOCBhYnNvbHV0ZSBsZWZ0LTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIjN4bDp3LTI4IGxnOnctMjQgbWQ6dy0yMCB3LTE2XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9sb2dvL2xvZ29XaGFpdC5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBTbGlkZXIgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6dG9wLTAgbWQ6dG9wLTAgbGc6bXQtMSBtZDptdC03IG10LTE0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2xpZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoeyBzcmMgfSwgaW5kZXgsIGFjdGl2ZSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhpbmRleCBhcyBudW1iZXIpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgY3Vyc29yLXBvaW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Q2lyY2xlMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9e2NvbG9yPy5iYWNrZ3JvdW5kQ29sb3J9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYWJzb2x1dGUgei0xMCAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmUgPyAnYmxvY2snIDogJ2hpZGRlbidcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGFuaW1hdGUtcGluZ1RvdWNoIGxnOnctMTYgbGc6aC0xNiBtZDp3LTEwIG1kOmgtMTAgdy03IGgtN2B9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInNsaWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgM3hsOnctNDggbGc6dy00MCBzbTp3LTQwIHhzOnctMzYgdy00OCBtdC0xMCBtZDp3LTQwIHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCAke1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhY3RpdmUgJiYgJ3RyYW5zZm9ybSBzY2FsZS0xMjUnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdldENvbG9yPXsoY29sb3IpID0+IHNldENvbG9yKGNvbG9yKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidXR0b25Db2xvcj17KGNvbG9yIGFzIGFueSk/LmJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oYGZsZXgganVzdGlmeS1jZW50ZXIgLW10LTIwYCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y29udGFjdFVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUuc2NhbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZS5zaGFkb3dCdG4sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGJnLXdoaXRlIDN4bDp3LTM2IDN4bDp0ZXh0LWxnIHctMjggcC0yIHJvdW5kZWQtZnVsbCBzaGFkb3ctY3VzdG9tIG91dGxpbmUtbm9uZSAzeGw6LW10LTNgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogY29sb3I/LmJ1dHRvbiB8fCAnI0I4OTNERCcgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbnRhY3QgVXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgey8qIFNsaWRlciBMb2dvICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiByZWY9e2VsZW1lbnRSZWZ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93ICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKHN0eWxlLmRpdil9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFpvb20+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYHRyYW5zZm9ybSB0cmFuc2l0aW9uLWFsbCBkdXJhdGlvbi0xMDAwIGxnOm10LTQwIG1kOm10LTIwIHNtOm10LTcyIG10LTEwMGAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtaGlkZGVuIGFic29sdXRlIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJhY2tncm91bmRMb2dvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZExvZ289e2NvbG9yTG9nbyB8fCAnIzlBREVFQyd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPXtwbGF5QW5pbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi1tdC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtMTYgbXQtMTAgbGc6bXQtMjQgbWQ6bXQtMjRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOm1yLTEwIG1kOm1yLTEwIG1yLTQgbXQtNCByaWdodC0wIGFic29sdXRlIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJsZzp3LTEwIG1kOnctMTAgdy03XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvbWVudS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOm1sLTEwIG1kOm1sLTEwIGxnOnctMjQgdy0xNCBtbC00IG10LTQgbWQ6dy0yMCBhYnNvbHV0ZSBsZWZ0LTAgXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvaW1hZ2VzL2xvZ28vbG9nb1doYWl0LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOm1yLTQ4IGxnOm1sLTQ4IHhsOi1tdC01IDN4bDptdC0xIC1tdC01XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExvZ29TbGlkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YUltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXsoeyBzcmMgfSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVDbGljayhpbmRleCBhcyBudW1iZXIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJzbGlkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2AzeGw6dy0xNyAyeGw6dy0xNCBsZzp3LTE0IHctMTAgbWQ6dy0xNCBtdC01IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCByb3VuZGVkLWZ1bGwgc2hhZG93LTJ4bGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgcmlnaHQtMiBhYnNvbHV0ZSAtbXQtMjAgbXItNyBsZzpibG9jayBoaWRkZW4geGw6LW10LTE2YCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17Y29udGFjdFVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGUuc2NhbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGJnLXdoaXRlIHctMjggcC0yIHJvdW5kZWQtZnVsbCBzaGFkb3ctaW5uZXIgb3V0bGluZS1ub25lYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvckxvZ28gfHwgJyM5QURFRUMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29udGFjdCBVc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIi1tdC00XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIiBhYnNvbHV0ZSB6LTEwIG10LTIwIGxlZnQtMiBsZzpoaWRkZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2NvbnRhY3RVc31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLnNjYWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGFuaW1hdGUtYnV0dG9uIHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMzAwIGRlbGF5LTUwMCB0cmFuc2Zvcm0gaG92ZXI6c2NhbGUtMTIwIGJnLXdoaXRlIHctMjAgdGV4dC14cyBwLTIgcm91bmRlZC1mdWxsIHNoYWRvdy0yeGxgLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IGNvbG9yTG9nbyB8fCAnIzlBREVFQycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb250YWN0IFVzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnM3hsOm10LTIgMnhsOm10LTE2ICBsZzptdC0zIG10LTIgaC1zY3JlZW4gbGc6b3ZlcmZsb3ctaGlkZGVuIG1kOm92ZXJmbG93LWhpZGRlbiBzbTpvdmVyZmxvdy1oaWRkZW4geHM6b3ZlcmZsb3ctaGlkZGVuIG92ZXJmbG93LWF1dG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2UgPT0gJ3BhZ2UwJyA/ICdibG9jaycgOiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxFdmV0UGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kTG9nbz17Y29sb3JMb2dvIHx8ICcjRkREOTZDJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbignaC00MCcpfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICczeGw6bXQtMiAyeGw6bXQtMTYgIGxnOm10LTMgIG10LTIgaC1zY3JlZW4gbGc6b3ZlcmZsb3ctaGlkZGVuIG1kOm92ZXJmbG93LWhpZGRlbiBzbTpvdmVyZmxvdy1oaWRkZW4geHM6b3ZlcmZsb3ctaGlkZGVuIG92ZXJmbG93LWF1dG8nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFuZ2UgPT0gJ3BhZ2UxJyA/ICdibG9jaycgOiAnaGlkZGVuJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxXaW5nbGVQYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRMb2dvPXtjb2xvckxvZ28gfHwgJyM5QURFRUMnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKCdoLTQwJyl9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzN4bDptdC0yIDJ4bDptdC0xNiAgbGc6bXQtMyAgbXQtMiBoLXNjcmVlbiBsZzpvdmVyZmxvdy1oaWRkZW4gbWQ6b3ZlcmZsb3ctaGlkZGVuIHNtOm92ZXJmbG93LWhpZGRlbiB4czpvdmVyZmxvdy1oaWRkZW4gb3ZlcmZsb3ctYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZSA9PSAncGFnZTInID8gJ2Jsb2NrJyA6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZsb3dQYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRMb2dvPXtjb2xvckxvZ28gfHwgJyNGRjlBOUUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKCdoLTQwJyl9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzN4bDptdC0yIDJ4bDptdC0xNiAgbGc6bXQtMyAgbXQtMiBoLXNjcmVlbiBsZzpvdmVyZmxvdy1oaWRkZW4gbWQ6b3ZlcmZsb3ctaGlkZGVuIHNtOm92ZXJmbG93LWhpZGRlbiB4czpvdmVyZmxvdy1oaWRkZW4gb3ZlcmZsb3ctYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZSA9PSAncGFnZTMnID8gJ2Jsb2NrJyA6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPFN0aWx5UGFnZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kTG9nbz17Y29sb3JMb2dvIHx8ICcjRkY5QTlFJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbignaC00MCcpfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICczeGw6bXQtMCAyeGw6bXQtMTYgbGc6bXQtMCAgbXQtMiBoLXNjcmVlbiBsZzpvdmVyZmxvdy1oaWRkZW4gbWQ6b3ZlcmZsb3ctaGlkZGVuIHNtOm92ZXJmbG93LWhpZGRlbiB4czpvdmVyZmxvdy1oaWRkZW4gb3ZlcmZsb3ctYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZSA9PSAncGFnZTQnID8gJ2Jsb2NrJyA6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lZXRseVBhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZExvZ289e2NvbG9yTG9nbyB8fCAnI0ZGOUE5RSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oJ2gtNDAnKX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnM3hsOm10LTIgMnhsOm10LTE2ICBsZzptdC0zICBtdC0yIGgtc2NyZWVuIGxnOm92ZXJmbG93LWhpZGRlbiBtZDpvdmVyZmxvdy1oaWRkZW4gc206b3ZlcmZsb3ctaGlkZGVuIHhzOm92ZXJmbG93LWhpZGRlbiBvdmVyZmxvdy1hdXRvJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhbmdlID09ICdwYWdlNScgPyAnYmxvY2snIDogJ2hpZGRlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWluaW1pZG1ha3NQYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRMb2dvPXtjb2xvckxvZ28gfHwgJyNGRjlBOUUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKCdoLTQwJyl9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJzN4bDptdC0yIDJ4bDptdC0xNiAgbGc6bXQtMCAgbXQtMiBoLXNjcmVlbiBsZzpvdmVyZmxvdy1oaWRkZW4gbWQ6b3ZlcmZsb3ctaGlkZGVuIHNtOm92ZXJmbG93LWhpZGRlbiB4czpvdmVyZmxvdy1oaWRkZW4gb3ZlcmZsb3ctYXV0bycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYW5nZSA9PSAncGFnZTYnID8gJ2Jsb2NrJyA6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJlYXV0aWNrZXRQYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRMb2dvPXtjb2xvckxvZ28gfHwgJyNGRjlBOUUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKCdoLTQwJyl9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9ab29tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1vZGFsIGNsYXNzTmFtZT1cInctZnVsbFwiIG9uQ2xvc2U9eygpID0+IHNldE9wZW4oZmFsc2UpfSB2aXNpYmxlPXtvcGVufT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInotMTAgYWJzb2x1dGUgbGc6LW10LTUgbGc6cmlnaHQtOSBtZDotcmlnaHQtMTYgbWQ6LW10LTEwIC1yaWdodC0yNCBmbGV4IG10LTIgbXItMzIgY3Vyc29yLXBvaW50ZXIgcC0xXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInctNVwiIHNyYz1cIi9pbWFnZXMvY2FuY2VsLnBuZ1wiIGFsdD1cIlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xnOm10LTEwIG1kOm10LTEwIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIGJhY2tncm91bmRGb3JtPXtjb2xvckxvZ28gfHwgJyM5QURFRUMnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Nb2RhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiBzbGlkZXQgbWVudSBpbiBmb3JtICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTI4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPExvZ28gZGF0YUltYWdlPXtkYXRhSW1hZ2V9IC8+ICovfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y24oc3R5bGUuZGl2LCBgbGc6bXQtMzYgbWQ6bXQtNjAgc206bXQtOTYgbXQtOTZgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY9e2Zvcm19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NuKGB0cmFuc2Zvcm0gdHJhbnNpdGlvbi1hbGwgZHVyYXRpb24tMTAwMCBgKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXgtaGlkZGVuIG92ZXJmbG93LXktaGlkZGVuIDN4bDpoLTUyIGxnOmgtNDQgbWQ6aC00MCBzbTpoLTQwIGgtMzYgIGFic29sdXRlIHctZnVsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCYWNrZ3JvdW5kTG9nb1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kTG9nbz17Y29sb3JMb2dvIHx8ICcjOUFERUVDJ31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uPXtwbGF5QW5pbX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOi1tdC02IG1kOi1tdC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLTE2IG10LTEwIGxnOm10LTI0IG1kOm10LTI0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGc6bXItMTAgbWQ6bXItMTAgbXItNCBtdC00IHctOCByaWdodC0wIGFic29sdXRlIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImxnOnctMTAgbWQ6dy0xMCB4czp3LTEwIHhtOnctN1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy9tZW51LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxnOm1sLTEwIG1kOm1sLTEwIDN4bDp3LTI4IGxnOnctMjQgeHM6dy0yMCB4bTp3LTE2IG1sLTQgbXQtNCBtZDp3LTIwIGFic29sdXRlIGxlZnQtMCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvbG9nby9sb2dvV2hhaXQucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZzptci00OCBsZzptbC00OCB4bDotbXQtNSAtbXQtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TG9nb1NsaWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YT17ZGF0YUltYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVuZGVySXRlbT17KHsgc3JjIH0sIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2soaW5kZXggYXMgbnVtYmVyKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17c3JjfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwic2xpZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YDN4bDp3LTE2IHctMTAgbWQ6dy0xNCBtdC01IHRyYW5zaXRpb24tYWxsIGR1cmF0aW9uLTMwMCByb3VuZGVkLWZ1bGwgc2hhZG93LTJ4bGB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzY3JlZW4gPT0gZmFsc2UgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NuKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlLmRpdixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgeHM6LW10LTEgbXQtNyBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlcmAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybSBiYWNrZ3JvdW5kRm9ybT17Y29sb3JMb2dvIHx8ICcjOUFERUVDJ30gLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3NjcmVlbiA9PSB0cnVlICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbihcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgM3hsOm10LTE2IHhsOm10LTEwIG1kOm10LTEwIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyYCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtIGJhY2tncm91bmRGb3JtPXtjb2xvckxvZ28gfHwgJyM5QURFRUMnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y24oc3R5bGUuZGl2LCBgbGc6bXQtMTYgbWQ6bXQtMjAgc206bXQtMjAgbXQtNDggdy1mdWxsYCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZvb3RlciBiYWNrZ3JvdW5kRm9vdGVyPXtjb2xvckxvZ28gfHwgJyM5QURFRUMnfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9