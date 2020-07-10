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
/******/ 	__webpack_require__.p = "https://usejerry.github.io/nie/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 86);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(30)('wks');
var uid = __webpack_require__(31);
var Symbol = __webpack_require__(0).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.11' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var createDesc = __webpack_require__(26);
module.exports = __webpack_require__(5) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(18)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(2);
var ctx = __webpack_require__(9);
var hide = __webpack_require__(4);
var has = __webpack_require__(12);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
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
/* 7 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(10);
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
/* 10 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(3);
var IE8_DOM_DEFINE = __webpack_require__(52);
var toPrimitive = __webpack_require__(53);
var dP = Object.defineProperty;

exports.f = __webpack_require__(5) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(7);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(28);
var defined = __webpack_require__(16);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(30)('keys');
var uid = __webpack_require__(31);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(11).f;
var has = __webpack_require__(12);
var TAG = __webpack_require__(1)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(10);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(45);


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(17);
var $export = __webpack_require__(6);
var redefine = __webpack_require__(54);
var hide = __webpack_require__(4);
var Iterators = __webpack_require__(8);
var $iterCreate = __webpack_require__(55);
var setToStringTag = __webpack_require__(22);
var getPrototypeOf = __webpack_require__(61);
var ITERATOR = __webpack_require__(1)('iterator');
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
/* 26 */
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
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(58);
var enumBugKeys = __webpack_require__(32);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(13);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(15);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(17) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 31 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(0).document;
module.exports = document && document.documentElement;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(16);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(13);
var TAG = __webpack_require__(1)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(3);
var aFunction = __webpack_require__(10);
var SPECIES = __webpack_require__(1)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(9);
var invoke = __webpack_require__(72);
var html = __webpack_require__(33);
var cel = __webpack_require__(19);
var global = __webpack_require__(0);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(13)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(3);
var isObject = __webpack_require__(7);
var newPromiseCapability = __webpack_require__(23);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(47);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(80), __esModule: true };

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(85), __esModule: true };

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */
 /* unused harmony default export */ var _unused_webpack_default_export = (_node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_popup_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(46);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 46 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(48), __esModule: true };

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(49);
__webpack_require__(50);
__webpack_require__(62);
__webpack_require__(66);
__webpack_require__(78);
__webpack_require__(79);
module.exports = __webpack_require__(2).Promise;


/***/ }),
/* 49 */
/***/ (function(module, exports) {



/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(51)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(25)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(15);
var defined = __webpack_require__(16);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(5) && !__webpack_require__(18)(function () {
  return Object.defineProperty(__webpack_require__(19)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(7);
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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4);


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(56);
var descriptor = __webpack_require__(26);
var setToStringTag = __webpack_require__(22);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(4)(IteratorPrototype, __webpack_require__(1)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(3);
var dPs = __webpack_require__(57);
var enumBugKeys = __webpack_require__(32);
var IE_PROTO = __webpack_require__(21)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(19)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(33).appendChild(iframe);
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var anObject = __webpack_require__(3);
var getKeys = __webpack_require__(27);

module.exports = __webpack_require__(5) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(12);
var toIObject = __webpack_require__(20);
var arrayIndexOf = __webpack_require__(59)(false);
var IE_PROTO = __webpack_require__(21)('IE_PROTO');

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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(20);
var toLength = __webpack_require__(29);
var toAbsoluteIndex = __webpack_require__(60);
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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(15);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(12);
var toObject = __webpack_require__(34);
var IE_PROTO = __webpack_require__(21)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(63);
var global = __webpack_require__(0);
var hide = __webpack_require__(4);
var Iterators = __webpack_require__(8);
var TO_STRING_TAG = __webpack_require__(1)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(64);
var step = __webpack_require__(65);
var Iterators = __webpack_require__(8);
var toIObject = __webpack_require__(20);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(25)(Array, 'Array', function (iterated, kind) {
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
/* 64 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(17);
var global = __webpack_require__(0);
var ctx = __webpack_require__(9);
var classof = __webpack_require__(35);
var $export = __webpack_require__(6);
var isObject = __webpack_require__(7);
var aFunction = __webpack_require__(10);
var anInstance = __webpack_require__(67);
var forOf = __webpack_require__(68);
var speciesConstructor = __webpack_require__(36);
var task = __webpack_require__(37).set;
var microtask = __webpack_require__(73)();
var newPromiseCapabilityModule = __webpack_require__(23);
var perform = __webpack_require__(38);
var userAgent = __webpack_require__(74);
var promiseResolve = __webpack_require__(39);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(1)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(75)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(22)($Promise, PROMISE);
__webpack_require__(76)(PROMISE);
Wrapper = __webpack_require__(2)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(77)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(9);
var call = __webpack_require__(69);
var isArrayIter = __webpack_require__(70);
var anObject = __webpack_require__(3);
var toLength = __webpack_require__(29);
var getIterFn = __webpack_require__(71);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(3);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(8);
var ITERATOR = __webpack_require__(1)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(35);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(8);
module.exports = __webpack_require__(2).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 72 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var macrotask = __webpack_require__(37).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(13)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(4);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(0);
var core = __webpack_require__(2);
var dP = __webpack_require__(11);
var DESCRIPTORS = __webpack_require__(5);
var SPECIES = __webpack_require__(1)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(1)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(6);
var core = __webpack_require__(2);
var global = __webpack_require__(0);
var speciesConstructor = __webpack_require__(36);
var promiseResolve = __webpack_require__(39);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(6);
var newPromiseCapability = __webpack_require__(23);
var perform = __webpack_require__(38);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(81);
module.exports = __webpack_require__(2).Object.assign;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(6);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(82) });


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(5);
var getKeys = __webpack_require__(27);
var gOPS = __webpack_require__(83);
var pIE = __webpack_require__(84);
var toObject = __webpack_require__(34);
var IObject = __webpack_require__(28);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(18)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 83 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 84 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(2);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/components/popup/popup.vue?vue&type=template&id=23290f29&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.showPopup,
          expression: "showPopup"
        }
      ],
      staticClass: "popup"
    },
    [
      _c("div", { staticClass: "popup-mask", class: { show: _vm.showTrans } }),
      _vm._v(" "),
      _c("div", { staticClass: "popup-box", class: { show: _vm.showTrans } }, [
        _c(
          "div",
          {
            staticClass: "popup-content",
            on: {
              click: function($event) {
                $event.stopPropagation()
                return _vm.clear($event)
              }
            }
          },
          [
            _c(
              "a",
              {
                staticClass: "close",
                attrs: { href: "javascript:void(0);" },
                on: { click: _vm.close }
              },
              [_vm._v("关闭")]
            ),
            _vm._v(" "),
            _vm._t("default")
          ],
          2
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/popup/popup.vue?vue&type=template&id=23290f29&

// CONCATENATED MODULE: ./node_modules/happypack/loader.js?id=babel!./node_modules/vue-loader/lib??vue-loader-options!./src/components/popup/popup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/**
 * PopUp 弹出层
 * @event {Function} popupChange 打开关闭弹窗触发，e={show: false}
 */

/* harmony default export */ var popupvue_type_script_lang_js_ = ({
	name: 'Popup',
	components: {},
	props: {
		showState: { //弹窗默认隐藏
			type: Boolean,
			default: false
		}
	},
	data: function data() {
		return {
			duration: 300,
			showPopup: this.showState,
			showTrans: this.showState
		};
	},

	computed: {},
	created: function created() {
		if (this.animation) {
			this.duration = 300;
		} else {
			this.duration = 0;
		}
	},

	methods: {
		clear: function clear(e) {
			// TODO nvue 取消冒泡
			e.stopPropagation();
		},
		open: function open() {
			var _this = this;

			this.showPopup = true;
			this.$nextTick(function () {
				clearTimeout(_this.timer);
				_this.timer = setTimeout(function () {
					_this.showTrans = true;
				}, 50);
			});
			this.$emit('popupChange', {
				show: true
			});
		},
		close: function close() {
			var _this2 = this;

			this.showTrans = false;
			this.$nextTick(function () {
				clearTimeout(_this2.timer);
				_this2.timer = setTimeout(function () {
					_this2.$emit('popupChange', {
						show: false
					});
					_this2.showPopup = false;
				}, 300);
			});
		}
	},
	mounted: function mounted() {
		// console.log("...",this.showState);
	}
});
// CONCATENATED MODULE: ./src/components/popup/popup.vue?vue&type=script&lang=js&
 /* harmony default export */ var popup_popupvue_type_script_lang_js_ = (popupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/popup/popup.vue?vue&type=style&index=0&lang=css&
var popupvue_type_style_index_0_lang_css_ = __webpack_require__(44);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
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
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

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
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
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

// CONCATENATED MODULE: ./src/components/popup/popup.vue






/* normalize component */

var component = normalizeComponent(
  popup_popupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/popup/popup.vue"
/* harmony default export */ var popup = (component.exports);
// CONCATENATED MODULE: ./src/js/store/mutations.js
/* harmony default export */ var mutations = ({
	/************公共************/
	//设置是否登录
	setIsLogin: function setIsLogin(state, data) {
		state.isLogin = data;
	},

	//设置授权用户id
	setUserId: function setUserId(state, data) {
		state.userId = data;
	},

	//设置授权用户token
	setToken: function setToken(state, data) {
		state.token = data;
	},

	//设置玩家当前个人页信息-字段
	setUserInfoField: function setUserInfoField(state, data) {
		var field = data.field,
		    info = data.info;
		state.userInfo[field] = info;
	}
});
// CONCATENATED MODULE: ./src/js/store/actions.js
/* harmony default export */ var actions = ({});
// CONCATENATED MODULE: ./src/js/store/index.js
// import Vue from 'vue'
// import Vuex from 'vuex'



// Vue.use(Vuex)

function createStore() {
	// const store	= new Vuex.Store({
	return new Vuex.Store({
		state: {
			isLogin: false, //是否已授权登录
			token: '',
			userId: ''
		},
		mutations: mutations,
		actions: actions
	});
}

// export default store;
// EXTERNAL MODULE: ./node_modules/babel-runtime/regenerator/index.js
var regenerator = __webpack_require__(24);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator);

// EXTERNAL MODULE: ./node_modules/babel-runtime/helpers/asyncToGenerator.js
var asyncToGenerator = __webpack_require__(40);
var asyncToGenerator_default = /*#__PURE__*/__webpack_require__.n(asyncToGenerator);

// CONCATENATED MODULE: ./src/js/api/base.js


// import Axios from 'axios'
// import axiosJsonpAdapter from 'axios-jsonp'
var apiHost = 'https://interact2.webapp.easebar.com/g83military';

var apiBase = function () {
	var _ref = asyncToGenerator_default()( /*#__PURE__*/regenerator_default.a.mark(function _callee(url, params) {
		var axioUrl;
		return regenerator_default.a.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						axioUrl = apiHost + url;
						// let axioUrl = url;

						// params = Object.assign(params,{
						// 	random: new Date().getTime()
						// });


						return _context.abrupt('return', axios({
							method: 'get',
							url: axioUrl,
							params: params,
							withCredentials: true,
							adapter: axiosJsonpAdapter
						}).then(function (result) {
							// console.log(result.data);
							return result.data;
						}));

					case 2:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, this);
	}));

	return function apiBase(_x, _x2) {
		return _ref.apply(this, arguments);
	};
}();
// CONCATENATED MODULE: ./src/js/api/index.js
// import Login from './login.js'
// const allApi = Object.assign(Login);
// export default allApi



/* harmony default export */ var js_api = ({
	/**
 *	开宝箱
 */
	help: function help(params) {
		return apiBase('/help', params);
	},

	/**
 	开宝箱记录
 */
	helpLog: function helpLog(params) {
		return apiBase('/help_log', params);
	},

	/**
 	查询游戏角色
 */
	queryRole: function queryRole(params) {
		return apiBase('/query_uidinfo', params);
	},

	/**
 	绑定角色
 */
	bindRole: function bindRole(params) {
		return apiBase('/bind_character', params);
	},

	/**
 	查询全服福袋数
 */
	queryHelpnum: function queryHelpnum(params) {
		return apiBase('/query_helpnum', params);
	},

	/**
 *	twitter授权拉取request_token
 */
	twitterRequestToken: function twitterRequestToken(params) {
		return apiBase('/twitter/request_token', params);
	},
	/**
 *	 twitter授权登录
 */
	twitterLogin: function twitterLogin(params) {
		return apiBase('/twitter/login', params);
	},
	/**
 *	 line授权登录
 */
	lineLogin: function lineLogin(params) {
		return apiBase('/line/login', params);
	},
	/**
 *	获取群列表
 */
	lineGroupList: function lineGroupList(params) {
		return apiBase('/line/group_list', params);
	},
	/**
 *	获取好友列表
 */
	lineFriendList: function lineFriendList(params) {
		return apiBase('/line/friend_list', params);
	},
	/**
 *	 line发送flexmessage
 */
	lineFlexSend: function lineFlexSend(params) {
		return apiBase('/line/flex/send', params);
	},
	/**
 *	分享回调（废弃）
 */
	share: function share(params) {
		return apiBase('/sharing', params);
	}

});
// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/object/assign.js
var object_assign = __webpack_require__(41);
var assign_default = /*#__PURE__*/__webpack_require__.n(object_assign);

// EXTERNAL MODULE: ./node_modules/babel-runtime/core-js/json/stringify.js
var stringify = __webpack_require__(42);
var stringify_default = /*#__PURE__*/__webpack_require__.n(stringify);

// CONCATENATED MODULE: ./src/js/common/common.js

/* harmony default export */ var common = ({
    //打开弹层
    popWindow: function popWindow(popID) {
        var obj = $("#" + popID);
        var width = obj.width();
        var height = obj.height();
        var popTop = obj.height() / 2;
        var popLeft = obj.width() / 2;
        obj.css({ "margin-top": -popTop, "margin-left": -popLeft }).fadeIn();
        if ($("#fade").length < 1) $('body').append('<div id="fade"></div>');
        $('#fade').css({ 'filter': 'alpha(opacity=80)' }).fadeIn();
    },
    //关闭弹层
    popClose: function popClose(popID) {
        $('#fade ,.dialog ,#' + popID).fadeOut();
    },
    //打开第二层弹层
    popWindow2: function popWindow2(popID) {
        var obj = $("#" + popID);
        var width = obj.width();
        var height = obj.height();
        var popTop = obj.height() / 2;
        var popLeft = obj.width() / 2;
        obj.css({ "margin-top": -popTop, "margin-left": -popLeft }).fadeIn();
    },
    //关闭第二层弹层
    popClose2: function popClose2(popID) {
        $('.dialog ,#' + popID).fadeOut();
    },
    stopDefault: function stopDefault(event) {
        if (event && event.preventDefault) {
            event.preventDefault();
        } else {
            window.event.returnValue = false;
        }
    },
    //检测号码正确性
    checkPhone: function checkPhone(phonenum) {
        return (/^(13|14|15|17|18|19)\d{9}$/.test(phonenum)
        );
    },
    checkEmail: function checkEmail(email) {
        return (/^[a-zA-Z0-9]+([._\\-]*[a-zA-Z0-9])+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(email)
        );
    },
    picPreload: function picPreload(src, cb) {
        var img = new Image();
        img.onload = function () {
            // console.log(src+':加载好了，请享用');
        };
        img.src = src;
    },
    getUrlParam: function getUrlParam(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        // if (r != null) return r[2];
        if (r != null) {
            var reg2 = new RegExp("\\+", "g");
            var r2 = r[2].replace(reg2, "%20");
            // return decodeURIComponent(r[2]);
            return decodeURIComponent(r2);
        }
        return "";
    },
    getUrlHash: function getUrlHash(name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var index = window.location.hash.indexOf("?");
        var r = window.location.hash.substr(index + 1).match(reg);
        // if (r != null) return r[2];
        if (r != null) {
            var reg2 = new RegExp("\\+", "g");
            var r2 = r[2].replace(reg2, "%20");
            // return decodeURIComponent(r[2]);
            return decodeURIComponent(r2);
        }
        return "";
    },
    hostUrl: function hostUrl() {
        return "https://usejerry.github.io/nie/";
    },
    openTips: function openTips(msg) {
        var $pop = $(".pop-tips").parents(".popup");
        $pop.css("display", "block");
        $pop.find(".msg").html(msg);
        setTimeout(function () {
            $pop.find(".popup-mask").addClass("show");
            $pop.find(".popup-box").addClass("show");
        }, 300);
        // $("#JtipsPop .msg").html(msg);
        // this.popWindow("JtipsPop");
    },
    closeTips: function closeTips() {
        var $pop = $(".pop-tips").parents(".popup");
        $pop.find(".close").click(function () {
            $pop.find(".popup-mask").removeClass("show");
            $pop.find(".popup-box").removeClass("show");
            setTimeout(function () {
                $pop.css("display", "none");
                $pop.find(".msg").html("");
            }, 300);
        });
    },
    openTips2: function openTips2(msg) {
        $("#JtipsPop2 .msg").html(msg);
        this.popWindow("JtipsPop2");
    },
    failCallback: function failCallback(msg) {
        if (typeof msg == "string") {
            $("#JtipsPop .msg").html(msg);
            this.popWindow("JtipsPop");
        } else {
            $("#JtipsPop .msg").html(stringify_default()(msg));
            this.popWindow("JtipsPop");
        }
    },
    isTwitter: function isTwitter() {
        return (/twitter/i.test(navigator.userAgent.toLowerCase())
        );
    },
    isLine: function isLine() {
        return (/line/i.test(navigator.userAgent.toLowerCase())
        );
    }
});
// CONCATENATED MODULE: ./src/js/common/global_m.js
var isAppInside = /micromessenger/i.test(navigator.userAgent.toLowerCase()) || /yixin/i.test(navigator.userAgent.toLowerCase());
var isIos = /iphone os/i.test(navigator.userAgent.toLowerCase()) || /ipad/i.test(navigator.userAgent.toLowerCase());
var isAndroid = /android/i.test(navigator.userAgent.toLowerCase());

//初始化html  font-size
var initScreen = function initScreen(callback) {

  //单屏全屏布局时使用,短屏下自动缩放
  // $("html").css("font-size",document.documentElement.clientHeight/document.documentElement.clientWidth<1.5 ? (document.documentElement.clientHeight/603*312.5+"%") : (document.documentElement.clientWidth/375*312.5+"%"));

  //长页面时使用,不缩放
  $("html").css("font-size", document.documentElement.clientWidth / 375 * 312.5 + "%");

  if (callback) callback();

  // setTimeout(function(){
  // 	$("html").css("font-size",document.documentElement.clientWidth/375*312.5+"%");
  // },600);

  /*横屏内嵌*/
  // var h = document.documentElement.clientHeight;
  //    var w =document.documentElement.clientWidth;
  //    document.documentElement.style.fontSize=(h>w?h:w)/667*312.5+"%";
  //    if(callback)callback();
};

//初始化关注公众号弹层
var _initAttention = function _initAttention() {
  $("#btn_attention").bind("click", function (e) {
    $("#md_attention").show();
    var st = setTimeout(function () {
      $("#md_attention").addClass("show");
    }, 50);
  });
  $("#md_attention").bind("click", function (e) {
    $("#md_attention").removeClass("show");
    var st = setTimeout(function () {
      $("#md_attention").hide();
    }, 300);
  });
  if ($("#md_attention").length > 0) {
    $("#md_attention")[0].addEventListener("touchmove", function (e) {
      e.preventDefault();
      //e.stopPropagation()
    }, false);
  }
};

//监听横竖屏
var _addEvent = function _addEvent() {
  window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", function (e) {
    _onorientationchange(e);
  }, false);

  $(".btn_toTop").click(function (e) {
    window.scrollTo(0, 0);
  });
};
var _onorientationchange = function _onorientationchange(e) {
  if (window.orientation == 90 || window.orientation == -90) {
    $("#forhorview").css("display", "-webkit-box"); //显示竖屏浏览提示框
  } else {
    //竖屏下恢复默认显示效果
    var st = setTimeout(initScreen, 300);
    $("#forhorview").css("display", "none");
  }
};

var initPage = function initPage() {
  //官网通用页面初始化处理
  initScreen(function () {
    // _initShare();
    _initAttention();
    _addEvent();
  });
};

/* harmony default export */ var global_m = ({
  globalInit: initPage
});
// CONCATENATED MODULE: ./src/js/common/index.js


 //移动端初始脚本

var Utils = assign_default()(common, global_m);

/* harmony default export */ var js_common = (Utils);
// CONCATENATED MODULE: ./src/js/app/index.js
__webpack_require__(43);







Vue.prototype.$Api = js_api;
Vue.prototype.$Utils = js_common;
Vue.prototype.resPath = "https://usejerry.github.io/nie/";

Vue.component('popup', popup);

var store = createStore();

var app = new Vue({
	el: "#app",
	store: store,
	data: function data() {
		return {
			start_show: true, //开场动画
			page_state: 'home', // 首页
			request_ok: true,
			nickName: '', //游戏昵称，地址上携带
			isLogin: false, //已授权登录
			isLottery: false,
			noPagePkey: false,
			checkClick: true,
			record: [], //分享者被开福袋记录
			serverId: '', //选择的服务器id
			serverName: '', //选择的服务器名称
			roleId: '', //输入的角色ID
			roleName: '', //输入的角色ID对应的昵称
			roleDataKey: '', //
			errorMsg: '', //
			bjTime: null,
			gamestart: null,
			usernumber: 0,
			currentTime: '', //服务器时间
			activityEnd: false, //活动是否结束
			pageUrl:  true ? 'https://test.nie.163.com/test_html/knivesout.jp/sns/hyxd_junxu/' : undefined,
			ealphaData: 0,
			ebetaData: 0,
			egammaData: 0,
			position: { x: 0, y: 0 },
			start_ealpha: 0, // 上移 
			start_ebeta: 0, // 下移
			span_h: 0,
			span_w: 0,
			bg_box: { w: 0, h: 0 },
			startX: 0,
			startY: 0,
			isTouch: false, //是否滑动
			isOk: true,
			aimData: { w: 0, h: 0, coreX: 0, coreY: 0, effect: false }, // 瞄准     
			monsterData: { blood: 10000 },
			jlu: 0,
			gamma: 0,
			beta: 0,
			target_core: { x: 0, y: 0 },
			count: '',
			count_num: 59
		};
	},
	components: {},
	computed: {},
	watch: {
		serverId: function serverId() {
			if (this.serverId == "") {
				this.errorMsg = " サーバーを選択してください";
			} else {
				this.errorMsg = "";
			}
		},
		roleId: function roleId() {
			if (this.roleId == "") {
				this.errorMsg = " キャラクターIDを入力する";
			} else {
				this.errorMsg = "";
			}
		}
	},
	created: function created() {},
	methods: {
		//登录
		login: function login() {
			var _this = this;
			var apiUrl = 'https://interact2.webapp.easebar.com/g83military/'; //配置平台提供的接口域名链接
			function getLoginInfo() {
				var myurl = myLogin.urlps(location.href);
				var dev = myLogin.dev() || myLogin.def;
				var page_key = myurl.data("page_key");
				var code = '';
				var ap = '';
				var dobj = { page_key: page_key, need_userinfo: 1 };
				switch (dev) {
					case 'weixin':
						code = myurl.data('code');
						dobj.code = code;
						ap = 'wx/login';
						break;
					case 'qq':
						code = myurl.data('code');
						dobj.code = code;
						dobj.redirect_uri = myurl.data("rurl");
						ap = 'qq/login';
						break;
					case 'weibo':
						code = myurl.data('code');
						dobj.code = code;
						dobj.redirect_uri = "https://game.163.com/weibo/callback/";
						ap = 'weibo/login';
						break;
					// case 'facebook':
					// 	code = myurl.data('code');
					// 	dobj.code = code;
					// 	dobj.redirect_uri = "https://www.knivesout.jp/callback/";
					// 	ap = 'fb/login';
					// 	break;
					// case 'line':
					// 	code = myurl.data('code');
					// 	dobj.code = code;
					// 	dobj.redirect_uri = "https://www.knivesout.jp/callback/";
					// 	ap = 'line/login';
					// 	break;
					// case 'twitter':
					// 	code = myurl.data('oauth_token');
					// 	dobj.oauth_token = code;
					// 	dobj.oauth_verifier = myurl.data("oauth_verifier");
					// 	ap = 'twitter/login';
					// 	break;
				}

				$.ajax({
					url: apiUrl + ap,
					data: dobj,
					dataType: "jsonp",
					success: function success(data) {
						if (data.success == true) {
							_this.loginSuccess(data);
							// alert(data)
						} else {
							if (!data.msg) {
								data.msg = data.error;
							}
							if (data.msg.indexOf('invalid') != -1) {
								myLogin.go();
							} else if (data.msg == '无效的Code：') {
								myLogin.go();
							} else if (data.msg.toLowerCase().indexOf('code') != -1) {
								myLogin.go();
							} else if (data.msg.toLowerCase().indexOf('req_id') != -1) {
								myLogin.go();
							} else if (data.msg.toLowerCase().indexOf('信息异常') != -1) {
								myLogin.go();
							} else if (data.msg.toLowerCase().indexOf('failed') != -1) {
								myLogin.go();
							} else if (data.msg.toLowerCase().indexOf('error') != -1) {
								myLogin.go();
							} else {
								alert(data.msg);
							}
						}
					},
					error: function error() {
						alert('网络信号不好，请刷新再试');
					}
				});
			}
			var dev = myLogin.dev();

			if (!dev) {
				myLogin.def = 'twitter'; //配置当前页面使用哪个平台的授权，可配置值 weixin,qq,weibo,facebook,line,twitter,不配置则自动判断当前所属平台，国内平台判断会正常，海外的判断不了平台，海外的项目需要指定一下
			}
			myLogin.apiUrl = apiUrl + 'twitter/request_token'; //配置平台提供的获取推特request_token的链接
			if (!myLogin.check()) {
				myLogin.go();
			} else {
				getLoginInfo();
			}
		},

		//登录成功后处理
		loginSuccess: function loginSuccess(data) {
			var $this = this;
			this.isLogin = true;
			this.currentTime = data.curr_time;
			// this.$store.commit("setUserId",data.user_id);
			// this.$store.commit("setToken",data.weixin_token);
			console.log(data);
			//授权登录后上报
			MShare.loginReport({
				user_id: data.user_id, //一般为用户的openid值
				user_name: data.nickname, //用户的昵称
				login_from: data.login_type
			});
			gtag('send', 'event', data.login_type + '\u5DF2\u767B\u5F55\u6388\u6743');
		},

		//分享初始
		mshareInit: function mshareInit() {
			//初始化组件
			MShare.init({
				product: '', //产品代号名，默认不填为当前页面域名
				activity: 'hyxd_junxu', //活动名，方便多个URL统计到一起，默认不填为当前页面地址
				debug: false, //开启调试，则会在左下角显示上报的log
				hideMoments: false, //隐藏"微信"分享到朋友圈的按钮，默认是false，不隐藏，非微信无作用
				hideFriend: false //隐藏"微信"分享到朋友的按钮，默认是false，不隐藏，非微信无作用
			});
		},

		//twitter分享
		twitterShare: function twitterShare() {

			//自定义事件上报，比如：按了某个按钮
			MShare.report({
				monitor: 'twitter-btn', //必填，需要使用英文，上报的关键字
				type: '点击twitter分享按钮' //可以上报多个自定义属性与值，这里是举例子，并非一定是game_id，可以为其他数据，或者没有
			});
			gtag('event', '点击twitter分享按钮');
			//分享信息设置
			var shareConfig = {
				title: '荒野行動で #物資引き直しカード宝箱 を入手しました。さらに他に報酬も盛り沢山！早速宝箱をタッチして受け取りましょう！', //分享标题
				url: MShare.getShareUrl(this.pageUrl + '?page_key=' + this.$Utils.getUrlParam("page_key")),
				image: 'https://www.knivesout.jp/m/zt/20200617183628/data/prize/twShare2.png'
				//首次点击分享按钮显示分享获奖弹窗
			};if (!localStorage.getItem("knivesout.jp-shareclick")) {

				localStorage.getItem("knivesout.jp-shareclick", true);
			}
			//非twitter环境下点击分享（社交环境需使用组件MShare.openShare()）
			// location.href = "https://twitter.com/intent/tweet?text=" + encodeURIComponent(shareConfig.title) + "&url=" + encodeURIComponent(MShare.getShareUrl());
			MShare.openShare({
				title: shareConfig.title,
				desc: shareConfig.title,
				url: shareConfig.url,
				imgurl: shareConfig.image,
				type: 'twitter', //当需要在浏览器中分享，则要指定分享渠道
				callback: function callback(ret) {
					//此为打开分享窗口后的回调（非分享成功）
					//ret.channel为客户端类型
				}
			});
		},

		//line分享
		lineShare: function lineShare() {
			var $this = this;
			//自定义事件上报，比如：按了某个按钮
			MShare.report({
				monitor: 'line-btn', //必填，需要使用英文，上报的关键字
				type: '点击line分享按钮' //可以上报多个自定义属性与值，这里是举例子，并非一定是game_id，可以为其他数据，或者没有
			});
			gtag('event', '点击line分享按钮');
			//分享信息设置
			var shareConfig = {
				title: '荒野行動で #物資引き直しカード宝箱 を入手しました。さらに他に報酬も盛り沢山！早速宝箱をタッチして受け取りましょう！', //分享标题
				url: MShare.getShareUrl(this.pageUrl + '?page_key=' + this.$Utils.getUrlParam("page_key")),
				image: 'https://www.knivesout.jp/m/zt/20200617183628/data/prize/falineShare2.png'
				//首次点击分享按钮显示分享获奖弹窗
			};if (!localStorage.getItem("knivesout.jp-shareclick")) {
				localStorage.getItem("knivesout.jp-shareclick", true);
			}
			//非line环境下点击分享（社交环境需使用组件MShare.openShare()）
			// location.href = "https://lineit.line.me/share/ui?url=" + encodeURIComponent(shareConfig.url)
			MShare.openShare({
				title: shareConfig.title,
				desc: shareConfig.title,
				url: shareConfig.url,
				imgurl: shareConfig.image,
				type: 'line', //当需要在浏览器中分享，则要指定分享渠道
				callback: function callback(ret) {
					//此为打开分享窗口后的回调（非分享成功）
					//ret.channel为客户端类型
				}
			});
		},

		//facebook分享
		faceShare: function faceShare() {
			var $this = this;
			//自定义事件上报，比如：按了某个按钮
			MShare.report({
				monitor: 'facebook-btn', //必填，需要使用英文，上报的关键字
				type: '点击facebook分享按钮' //可以上报多个自定义属性与值，这里是举例子，并非一定是game_id，可以为其他数据，或者没有
			});
			gtag('event', '点击facebook分享按钮');
			//分享信息设置
			var shareConfig = {
				title: '荒野行動で #物資引き直しカード宝箱 を入手しました。さらに他に報酬も盛り沢山！早速宝箱をタッチして受け取りましょう！', //分享标题
				url: MShare.getShareUrl(this.pageUrl + '?page_key=' + this.$Utils.getUrlParam("page_key")),
				image: 'https://www.knivesout.jp/m/zt/20200617183628/data/prize/falineShare2.png'
				//首次点击分享按钮显示分享获奖弹窗
			};if (!localStorage.getItem("knivesout.jp-shareclick")) {

				localStorage.getItem("knivesout.jp-shareclick", true);
			}
			//非facebook环境下点击分享（社交环境需使用组件MShare.openShare()）
			// location.href = "https://www.facebook.com/sharer.php?u="+ encodeURIComponent(shareConfig.url) + "&t="+ encodeURIComponent(shareConfig.title), "sharer","toolbar=0,status=0,width=626,height=436";
			MShare.openShare({
				title: shareConfig.title,
				desc: shareConfig.title,
				url: shareConfig.url,
				imgurl: shareConfig.image,
				type: 'facebook', //当需要在浏览器中分享，则要指定分享渠道
				callback: function callback(ret) {
					//此为打开分享窗口后的回调（非分享成功）
					//ret.channel为客户端类型
				}
			});
		},

		// 开始战斗
		goBattle: function goBattle() {
			var _this2 = this;

			var _this = this;
			this.page_state = 'game';
			this.$nextTick(function () {
				_this2.bg_box.h = _this2.$refs.gametarget.offsetHeight;
				_this2.bg_box.w = _this2.$refs.gametarget.offsetWidth;
				_this2.span_w = (_this2.bg_box.w / 2 - 62.5 - 40) / 90;
				_this2.span_h = (_this2.bg_box.h / 2 - 62.5 - 40) / 90;
				_this2.aimData.coreX = _this2.bg_box.w / 2;
				_this2.aimData.coreY = _this2.bg_box.h / 2;

				console.log(_this2.span_h, _this2.span_w);
				_this2.randomTarget();

				var endTime = new Date(new Date().getTime() + 60000); //下一分钟
				var s = setInterval(function () {
					var dates = _this.countDown(endTime);
					if (dates <= 0) {
						clearInterval(s);
					}
				}, 50);
			});
			this.getGyroscope();
		},

		// 进入首页		
		goHome: function goHome() {
			//  0到89 -89到0  0到89 -89到0
			this.start_show = false;
		},

		// 获取陀螺仪权限
		getGyroscope: function getGyroscope() {
			var _this = this;
			if (window.DeviceOrientationEvent !== undefined && typeof window.DeviceOrientationEvent.requestPermission === 'function') {

				window.DeviceOrientationEvent.requestPermission().then(function (response) {
					if (response == 'granted') {
						window.addEventListener('deviceorientation', _this.onDeviceOrientationChangeEvent, false);
					} else if (response == 'denied') {}
				}).catch(function (error) {});
			} else {
				window.addEventListener('deviceorientation', _this.onDeviceOrientationChangeEvent, false);
			}
		},
		onDeviceOrientationChangeEvent: function onDeviceOrientationChangeEvent(event) {
			// console.log(event)

			if (!this.isTouch) {
				// 正常  89 - 0 -  -89
				// let isok = true
				var leftData = Math.ceil(event.gamma || 0); // alpha  //gamma
				var topData = Math.ceil(event.beta || 0);
				this.beta = topData;
				this.gamma = leftData;

				/* 没有边界值
    if (leftData > -90 && leftData < 90 ) {
    	this.egammaData = -leftData * this.span_w
    	this.ebetaData = -topData * this.span_h
     }
     */

				if (Math.abs(leftData - this.start_ealpha) > 50) {
					// console.log(leftData , this.start_ealpha)
					this.isOk = false;
					console.log('false', leftData);
					this.jlu = this.start_ealpha; // 边界值的前数据
				}
				if (!this.isOk) {
					if (this.jlu > 88 && this.jlu > 0) {
						// 左边开始翻
						if (leftData - this.start_ealpha > 0) {
							// 左顺时针 

							this.egammaData = -(90*this.span_w - (90 + leftData)*this.span_w)
							console.log("左顺时针");
							if (leftData == 0) {
								console.log("左0");
								this.isOk = true;
							}
						} else if (leftData - this.start_ealpha < 0) {
							// 左逆时针
							this.egammaData = leftData*this.span_w
							console.log("左逆时针");
							// if(leftData == -89){
							// 	console.log("左-89")
							// 	this.isOk = true
							// }
						}
					} else if (this.jlu > -90 && this.jlu < 0) {
						// 右边开始翻

						if (leftData - this.start_ealpha < 0) {
							// 右逆时针
							console.log("右逆时针");
							this.egammaData = -(90*this.span_w - (90 + leftData)*this.span_w)
							if (leftData == 0) {
								console.log("右0");
								this.isOk = true;
							}
						} else if (leftData - this.start_ealpha > 0) {
							// 右顺时针
							this.egammaData = leftData*this.span_w
							console.log("右顺时针");
							if (leftData == 89) {
								console.log("右90");
								this.isOk = true;
							}
						}
					}
				} else {
					this.egammaData = -leftData * this.span_w;
					this.ebetaData = -topData * this.span_h + 90;
				}

				this.start_ealpha = leftData;
				this.start_ebeta = topData;

				console.log('left', this.target_core.x - (this.aimData.coreX + Math.ceil(this.egammaData)), 'top', this.target_core.y - (this.aimData.coreY + Math.ceil(this.ebetaData)));

				var distanceX = this.target_core.x - (this.aimData.coreX + Math.ceil(this.egammaData)),
				    distanceY = this.target_core.y - (this.aimData.coreY + Math.ceil(this.ebetaData));
				if (distanceX < 10 && distanceY < 10) {
					this.aimData.effect = true;
				} else {
					this.aimData.effect = false;
				}
				// if(this.target_core.x > this.aimData.coreX){
				// 	console.log(this.target_core.x - )
				// }
			}
		},

		//射击
		shooting: function shooting(e) {
			// this.$refs.gametarget.offsetLeft = 
			if (this.aimData.effect) {
				//瞄准了 伤害 30 - 60   
				this.monsterData.blood -= 60; // 血量减少60
				console.log(this.monsterData.blood);
			}
		},

		//随机目标
		randomTarget: function randomTarget() {
			var _this3 = this;

			var max_X = this.bg_box.w / 2 + 40,
			    max_Y = this.bg_box.h / 2 + 40,
			    min_X = this.bg_box.w / 2 - 40,
			    min_Y = this.bg_box.h / 2 - 40;

			var x = Math.floor(Math.random() * (min_X - max_X) + max_X),
			    // 85 目标的大小
			y = Math.floor(Math.random() * (min_Y - max_Y) + max_Y); // 85 目标的大小'
			this.$nextTick(function () {
				// console.log(this.$refs.target1.style.offsetHeight)
				_this3.$refs.target1.style.left = x + 'px';
				_this3.$refs.target1.style.top = y + 'px';
				_this3.target_core.x = x + 42;
				_this3.target_core.y = y + 42;
			});
		},
		touchstart: function touchstart() {
			event.preventDefault(); //阻止默认事件（长按的时候出现复制）
			this.isTouch = true;
			this.startX = event.changedTouches[0].pageX;
			this.startY = event.changedTouches[0].pageY;
			// console.log(this.startX , this.startY , this.egammaData, this.ebetaData)
		},
		touchmove: function touchmove() {
			// 如果手指有移动，则取消所有事件，此时说明用户只是要移动而不是长按
			event.preventDefault();
			var moveEndX = event.changedTouches[0].pageX;
			var moveEndY = event.changedTouches[0].pageY;
			var X = moveEndX - this.startX;
			var Y = moveEndY - this.startY;
			// this.ealphaData = this.ealphaData + 1 - 0
			// this.ebetaData = this.ebetaData + 1 - 0
			if (X > 0) {
				//右滑
				this.ealphaData = this.ealphaData + 2 - 0;
			} else if (X < 0) {
				//左滑
				this.ealphaData = this.ealphaData - 2 - 0;
			} else if (Y > 0) {
				// 下滑
				this.ebetaData = this.ebetaData + 2 - 0;
			} else if (Y < 0) {
				// 上滑
				this.ebetaData = this.ebetaData - 2 - 0;
			}
			// this.$nextTick(() => {
			// 	this.$refs.aim.style.transform = `translate(${this.ealphaData}px, ${this.ebetaData}px)`
			// })
			this.startX = moveEndX;
			this.startY = moveEndY;
		},
		touchend: function touchend() {
			// 手释放，如果在500毫秒内就释放，则取消长按事件
			event.preventDefault();
			this.isTouch = false;
			// if (this.EndTime - this.StarTime < 500) {
			//   this.EndTime = 0
			//   this.StarTime = 0
			//   clearTimeout(this.timeOutEvent)// 清除定时器
			//   alert('取消')
			// } else {
			//   alert('松手')
			// }
			console.log('松手');
		},
		update: function update(h, v) {
			var t, xh, xv;
			var R = 100;
			var ch = 0,
			    cv = 0;
			if (h > 90) {
				h = 180 - h;
			} else if (h < -90) {
				h = -180 - h;
			}
			if (v > 90) {
				v = 180 - v;
			} else if (v < -90) {
				v = -180 - v;
			}
			var r = Math.max(Math.abs(h), Math.abs(v)) / 90;
			var range = Math.round(R * r);
			if (h == 0) {
				cv = range * v / 90;
			} else if (v == 0) {
				ch = range * h / 90;
			} else {
				var a = Math.atan2(v, h);
				ch = range * Math.cos(a);
				cv = range * Math.sin(a);
			}
			ch = Math.round(ch);
			cv = Math.round(cv);

			// t.style.webkitTransform = "translate(" + ch + "px," + cv + "px)";
			console.log(ch, cv);
		},
		countDown: function countDown(time) {
			var date = new Date();
			var now = date.getTime();
			var endDate = time; //设置截止时间
			var end = endDate.getTime();
			var leftTime = end - now; //时间差                        
			var d, h, m, s, ms;
			if (leftTime >= 0) {
				m = Math.floor(leftTime / 1000 / 60 % 60);
				s = Math.floor(leftTime / 1000 % 60);
				ms = Math.floor(leftTime % 60);
				if (ms < 10) {
					ms = "0" + ms;
				}
				if (s < 10) {
					s = "0" + s;
				}
				if (m < 10) {
					m = "0" + m;
				}
				this.count = m + ":" + s + ":" + ms;
				//将倒计时赋值到div中
			} else {
				this.count = "00:00:00";
				console.log('已截止', leftTime);
				//将倒计时赋值到div中
			}
			//递归每秒调用countTime方法，显示动态时间效果
			return leftTime;
		}
	},
	mounted: function mounted() {
		this.$Utils.closeTips();
		// this.login();
		this.mshareInit();
		$(".start-btn").on("click", function (e) {
			gtag('event', '点击【启动游戏】按钮');
			MShare.report({
				monitor: 'start_game_btn', // 点击【启动游戏】按钮
				desc: '点击【启动游戏】按钮' // 
			});
		});
		// this.span_w = this.bg_box.w/2 - 62.5
		// this.span_h = this.bg_box.h/2 - 62.5
		// console.log(this.span_w, this.span_h)
		var ua = navigator.userAgent;
		var isSafari = ua.indexOf("Safari") != -1 && ua.indexOf("Version") != -1;
		var isIphone = ua.indexOf("iPhone") != -1 && ua.indexOf("Version") != -1;
		var isIPad = isSafari && !isIphone && 'ontouchend' in document; //判断IPad
		if (isIPad) {
			document.documentElement.style.backgroundColor = 'black';
			document.getElementsByTagName("body")[0].classList.add("isIPadBody");
		}
	}

});
// CONCATENATED MODULE: ./src/js/entry/index.js


/***/ })
/******/ ]);