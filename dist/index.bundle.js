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
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _liona_speech_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);

window.customElements.define('liona-speech-input', _liona_speech_input__WEBPACK_IMPORTED_MODULE_0__["LionaSpeechInput"]);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LionaSpeechInput", function() { return LionaSpeechInput; });
/* harmony import */ var _log_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _speech_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _speech_output__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var template = document.createElement('template');
template.innerHTML = "\n     <style>\n         \n     </style>\n    <div>\n      <label for=\"eingabefeld\">Suchbegriffe:</label>\n      <input id=\"eingabefeld\">\n      <button id=\"microphon-button\"><em>Freie Spracheingabe starten ...</em></button>\n      <button id=\"reader-button\"><em>Suchkriterien vorlesen</em></button>\n    </div>\n";

var LionaSpeechInput =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(LionaSpeechInput, _HTMLElement);

  function LionaSpeechInput() {
    var _this;

    _classCallCheck(this, LionaSpeechInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(LionaSpeechInput).call(this)); // immer zuerst aufrufen
    // for init attribut defaults
    // e.g. this.src = '';

    _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage('constructor called');
    return _this;
  }

  _createClass(LionaSpeechInput, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage('custom element in Seite eingehängt');
      this.erzeugeShadowDOMIfNotExists();
      _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage('ShadowDom befüllt');
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage('element has been removed');
    }
  }, {
    key: "attributeChangedCallback",
    value: function attributeChangedCallback(name, oldval, newval) {
      // do something every time the attribute changes
      _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage("the ".concat(name, " attribute has changed from ").concat(oldval, " to ").concat(newval, "!!"));
    }
  }, {
    key: "erzeugeShadowDOMIfNotExists",
    value: function erzeugeShadowDOMIfNotExists() {
      if (!this.shadowRoot) {
        _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage('creating shadow dom');
        this.attachShadow({
          mode: 'open'
        });
      }

      this.shadowRoot.appendChild(template.content.cloneNode(true));
      var spracheingabe = new _speech_input__WEBPACK_IMPORTED_MODULE_1__["Spracheingabe"](this.shadowRoot, 'eingabefeld');
      var sprachausgabe = new _speech_output__WEBPACK_IMPORTED_MODULE_2__["Sprachausgabe"](this.shadowRoot, 'eingabefeld'); // onClick auf Micro Button definieren

      this.microphonButton = this.shadowRoot.getElementById('microphon-button');
      this.microphonButton.addEventListener('click', function () {
        spracheingabe.erkenneSprachEingabe(function (text) {
          sprachausgabe.suchkriterienVorlesen(text);
        });
      }); // onClick auf Reader Button definieren

      var eingabeFeld = this.shadowRoot.getElementById('eingabefeld');
      _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage('##feld' + eingabeFeld.outerHTML);
      this.readerButton = this.shadowRoot.getElementById('reader-button');
      this.readerButton.addEventListener('click', function () {
        sprachausgabe.suchkriterienVorlesen(eingabeFeld.value);
      });
    } // static get observedAttributes() {
    //     return ['toggled'];
    // }
    // get toggled() {
    //     return this.getAttribute('toggled') === 'true';
    // }
    //
    // // the second argument for setAttribute is mandatory, so we’ll use an empty string
    // set toggled(val) {
    //     if (val) {
    //         this.setAttribute('toggled', true);
    //     } else {
    //         this.setAttribute('toggled', false);
    //     }
    // }

  }]);

  return LionaSpeechInput;
}(_wrapNativeSuper(HTMLElement));



/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logger", function() { return Logger; });


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Logger =
/*#__PURE__*/
function () {
  function Logger() {
    _classCallCheck(this, Logger);
  }

  _createClass(Logger, null, [{
    key: "logMessage",
    value: function logMessage(message) {
      console.log(message);
    }
  }, {
    key: "debugMessage",
    value: function debugMessage(message) {
      console.debug(message);
    }
  }, {
    key: "errorMessage",
    value: function errorMessage(message) {
      console.error(message);
    }
  }, {
    key: "infoMessage",
    value: function infoMessage(message) {
      console.info(message);
    }
  }]);

  return Logger;
}();



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Spracheingabe", function() { return Spracheingabe; });
/* harmony import */ var _log_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
var SpeechGrammarList = window.SpeechGrammarList || window.webkitSpeechGrammarList;
var SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

var Spracheingabe =
/*#__PURE__*/
function () {
  function Spracheingabe(shadowRootRef, inputFieldIdRef, wortliste) {
    _classCallCheck(this, Spracheingabe);

    this.shadowRoot = shadowRootRef;
    this.eingabeFeldId = inputFieldIdRef;
    this.words = wortliste;
    this.recognition = this.initialisiereSpracherkennung();
    _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage('####shadow root:' + this.shadowRoot);
    _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage('####eingabe feld id:' + this.eingabeFeldId);
  }

  _createClass(Spracheingabe, [{
    key: "initialisiereSpracherkennung",
    value: function initialisiereSpracherkennung() {
      // Spracherkennung konfigurieren
      var sprachErkennung = new SpeechRecognition(); // Grammatik initialisieren

      if (this.words) {
        var speechRecognitionList = new SpeechGrammarList();
        var grammar = '#JSGF V1.0; grammar words; public <word> = ' + wortliste + ' ;';
        speechRecognitionList.addFromString(grammar, 1);
        sprachErkennung.grammars = speechRecognitionList;
      }

      sprachErkennung.lang = 'de-DE';
      sprachErkennung.interimResults = false;
      SpeechRecognition.continuous = false;
      sprachErkennung.maxAlternatives = 2;
      return sprachErkennung;
    }
  }, {
    key: "erkenneSprachEingabe",
    value: function erkenneSprachEingabe(callback) {
      var _this = this;

      // Spracherkennung starten
      this.recognition.start();
      _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage('###speaker:' + this.recognition); // Callbacks implementieren

      var eingabeFeld = this.shadowRoot.getElementById(this.eingabeFeldId);
      _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage('####bevor this.eingabefeld:' + eingabeFeld.outerHTML);

      this.recognition.onresult = function (event) {
        _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage('####eingabefeld:' + eingabeFeld.outerHTML);
        var speechResult = event.results[0][0].transcript;
        eingabeFeld.value = speechResult;
        _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage('####eingabefeld changed:' + eingabeFeld.outerHTML);
        _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage('Confidence: ' + event.results[0][0].confidence);
        callback(speechResult);
      };

      this.recognition.onnomatch = function () {
        callback('Ihre Sprache wurde nicht erkannt');
      };

      this.recognition.onspeechend = function () {
        _this.recognition.stop();
      };
    }
  }]);

  return Spracheingabe;
}();



/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sprachausgabe", function() { return Sprachausgabe; });
/* harmony import */ var _log_helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);


function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Sprachausgabe =
/*#__PURE__*/
function () {
  function Sprachausgabe() {
    _classCallCheck(this, Sprachausgabe);

    this.sprachSynthese = window.speechSynthesis;
    _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage('####constructor called');
  }

  _createClass(Sprachausgabe, [{
    key: "suchkriterienVorlesen",
    value: function suchkriterienVorlesen(zuLesenderText) {
      if (this.sprachSynthese.speaking) {
        _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage('Spricht bereits');
        return;
      }

      if (zuLesenderText !== '') {
        var vorleseText = 'Ihre Eingaben zur Kontrolle: ' + zuLesenderText;
        _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage("Text:" + vorleseText);
        var leserStimmeMitText = new SpeechSynthesisUtterance(vorleseText);

        leserStimmeMitText.onend = function () {
          return event;
        };

        {
          _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage('Vorlesen beendet');
        }

        leserStimmeMitText.onerror = function () {
          return event;
        };

        {
          _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage('Fehler beim Vorlesen');
        }
        var voices = this.sprachSynthese.getVoices();

        for (var i = 0; i < voices.length; i++) {
          if (voices[i]["default"]) {
            _log_helper__WEBPACK_IMPORTED_MODULE_0__["Logger"].logMessage("Voice:" + voices[i].name + voices[i].lang);
            leserStimmeMitText.voice = voices[i];
            break;
          }
        }

        leserStimmeMitText.pitch = 1;
        leserStimmeMitText.rate = 1;
        leserStimmeMitText.volume = 1;
        this.sprachSynthese.speak(leserStimmeMitText);
      }
    }
  }]);

  return Sprachausgabe;
}();



/***/ })
/******/ ]);