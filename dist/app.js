/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/src/app.js":
/*!***************************!*\
  !*** ./assets/src/app.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ "./assets/src/data.js");
// const Vue = window.vue;

Vue.createApp({
  data: function data() {
    return _data__WEBPACK_IMPORTED_MODULE_0__["default"];
  },
  methods: {
    activeProtein: function activeProtein(index, ingredient, name) {
      var _this = this;

      if (ingredient == 0) {
        if (this.selectedProtein.length < 2) {
          if (!this.selectedProtein.includes(index)) {
            this.selectedProtein.push(index);
          } else {
            this.selectedProtein.pop();
          }
        } else {
          console.log(index);

          if (this.selectedProtein[0] == index) {
            this.selectedProtein.splice(0, 1);
            this.proteinActiveIndexOne = null;
          } else if (this.selectedProtein[1] == index) {
            this.selectedProtein.splice(1, 1);
            this.proteinActiveIndexTwo = null;
          } else {
            this.showProteinFlash = true;
            this.indexProteinFlash = index;
            setTimeout(function () {
              _this.showProteinFlash = false;
              _this.showProteinFlash = false;
            }, 1000);
          }
        }
      }

      if (ingredient == 1) {
        if (this.selectedRice.length < 2 && name !== 'NO RICE') {
          if (!this.selectedRice.includes(index)) {
            this.selectedRice.push(index);
          } else {
            this.selectedRice.pop();
          }
        } else {
          if (this.selectedRice[0] == index) {
            this.selectedRice.splice(0, 1);
          } else if (this.selectedRice[1] == index) {
            this.selectedRice.splice(1, 1);
          } else if (name == 'NO RICE') {
            this.selectedRice.splice(0, 2);
          }
        }
      }

      if (ingredient == 2) {
        console.log('hello');

        if (this.selectedBeans.length < 2 && name !== 'NO BEANS') {
          if (!this.selectedBeans.includes(index)) {
            this.selectedBeans.push(index);
          } else {
            this.selectedBeans.pop();
          }
        } else {
          if (this.selectedBeans[0] == index) {
            this.selectedBeans.splice(0, 1);
          } else if (this.selectedBeans[1] == index) {
            this.selectedBeans.splice(1, 1);
          } else if (name == 'NO BEANS') {
            this.selectedBeans.splice(0, 2);
          }
        }
      }

      if (ingredient == 3) {
        if (!this.selectedExtras.includes(index)) {
          this.selectedExtras.push(index);
        } else {
          this.selectedExtras.splice(this.selectedExtras.indexOf(index), 1); // console.log(this.ingredients[3])
        }
      }
    },
    isSelected: function isSelected(val, index) {
      if (index == 0) {
        if (this.selectedProtein.includes(val)) {
          return true;
        } else {
          return false;
        }
      }

      if (index == 1) {
        if (this.selectedRice.includes(val)) {
          return true;
        } else {
          return false;
        }
      }

      if (index == 2) {
        if (this.selectedBeans.includes(val)) {
          return true;
        } else {
          return false;
        }
      }

      if (index == 3) {
        if (this.selectedExtras.includes(val)) {
          return true;
        } else {
          return false;
        }
      } // return true;

    },
    isSelectedCountOne: function isSelectedCountOne(index) {
      if (index == 0 && this.selectedProtein.length == 1) {
        return true;
      }

      if (index == 1 && this.selectedRice.length == 1) {
        return true;
      }

      if (index == 2 && this.selectedBeans.length == 1) {
        return true;
      }

      if (index == 3) {
        return true;
      }
    },
    isSelectedCountTwo: function isSelectedCountTwo(index) {
      if (index == 0 && this.selectedProtein.length == 2) {
        return true;
      }

      if (index == 1 && this.selectedRice.length == 2) {
        return true;
      }

      if (index == 2 && this.selectedBeans.length == 2) {
        return true;
      }
    },
    showDouble: function showDouble(index, ingredient) {
      // console.log(index)
      this.ingredients[ingredient].proteinVeggie[index].showDouble = !this.ingredients[ingredient].proteinVeggie[index].showDouble;
    },
    activateDouble: function activateDouble(index, ingredient) {
      if (index !== 'YES') {
        this.ingredients[ingredient].proteinVeggie[index].showDouble = !this.ingredients[ingredient].proteinVeggie[index].showDouble;
      }

      this.doubleProtein = !this.doubleProtein;
    },
    getDouble: function getDouble(index, ingredient) {
      return this.ingredients[ingredient].proteinVeggie[index].ingredient;
    },
    showHigherPrice: function showHigherPrice() {
      var _this2 = this;

      var _final = [];
      this.selectedProtein.forEach(function (element) {
        _final.push({
          'price': _this2.ingredients[0].proteinVeggie[element].doublePrice,
          'id': _this2.ingredients[0].proteinVeggie[element].index
        });
      });

      var higher = _final.sort(function (a, b) {
        return parseFloat(b.price) - parseFloat(a.price);
      });

      return higher[0].price;
    }
  }
}).mount('#app');

/***/ }),

/***/ "./assets/src/data.js":
/*!****************************!*\
  !*** ./assets/src/data.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  showDoubleProtein: false,
  doubleProtein: false,
  selectedProtein: [],
  selectedRice: [],
  selectedBeans: [],
  selectedExtras: [],
  indexProteinFlash: '',
  showProteinFlash: false,
  proteinActiveIndexOne: null,
  proteinActiveIndexTwo: null,
  ingredients: [{
    title: 'PROTEIN OR VEGGIE',
    subtitle: 'Choose up to two.',
    index: 0,
    proteinVeggie: [{
      index: 0,
      ingredient: 'POLLO ASADO',
      price: '9.60',
      cal: '210 cal',
      img: './assets/img/proteinveggie/polloasado.png',
      showDouble: false,
      doublePrice: '4.00'
    }, {
      index: 1,
      ingredient: 'CHICKEN',
      price: '8.95',
      cal: '180 cal',
      img: './assets/img/proteinveggie/chicken.png',
      showDouble: false,
      doublePrice: '3.35'
    }, {
      index: 2,
      ingredient: 'STEAK',
      price: '10.55',
      cal: '150 cal',
      img: './assets/img/proteinveggie/steak.png',
      showDouble: false,
      doublePrice: '4.95'
    }, {
      index: 3,
      ingredient: 'BARBACOA',
      price: '10.55',
      cal: '170 cal',
      img: './assets/img/proteinveggie/barbacoa.png',
      showDouble: false,
      doublePrice: '4.95'
    }, {
      index: 4,
      ingredient: 'CARNITAS',
      price: '9.60',
      cal: '170 cal',
      img: './assets/img/proteinveggie/carnitas.png',
      showDouble: false,
      doublePrice: '4.00'
    }, {
      index: 5,
      ingredient: 'SOFRITAS',
      subIngredient: 'Plant-Based Protein',
      price: '9.60',
      cal: '170 cal',
      img: './assets/img/proteinveggie/sofritas.png',
      showDouble: false,
      doublePrice: '3.35'
    }, {
      index: 6,
      ingredient: 'VEGGIE',
      subIngredient: 'Includes Guacamole',
      price: '8.95',
      cal: '0 cal',
      img: './assets/img/proteinveggie/veggie.png',
      showDouble: false,
      doublePrice: '4.00'
    }, {
      show: false,
      index: 7,
      ingredient: 'DOUBLE YOUR PROTEIN',
      img: '',
      subIngredient: '',
      price: '+3.95',
      cal: '',
      showDouble: false,
      doublePrice: '4.00'
    }]
  }, {
    title: 'RICE',
    subtitle: '',
    index: 1,
    proteinVeggie: [{
      index: 0,
      ingredient: 'WHITE RICE',
      price: '',
      cal: '210 cal',
      img: './assets/img/rice/whiterice.png',
      showDouble: false,
      doublePrice: ''
    }, {
      index: 1,
      ingredient: 'BROWN RICE',
      price: '',
      cal: '210 cal',
      img: './assets/img/rice/brownrice.png',
      showDouble: false,
      doublePrice: ''
    }, {
      index: 2,
      ingredient: 'NO RICE',
      price: '',
      cal: '',
      img: './assets/img/no.png',
      showDouble: false,
      doublePrice: ''
    }]
  }, {
    title: 'BEANS',
    subtitle: '',
    index: 2,
    proteinVeggie: [{
      index: 0,
      ingredient: 'BLACK BEANS',
      price: '',
      cal: '130 cal',
      img: './assets/img/beans/blackbeans.png',
      showDouble: false,
      doublePrice: ''
    }, {
      index: 1,
      ingredient: 'PINTO BEANS',
      price: '',
      cal: '210 cal',
      img: './assets/img/beans/pinto.png',
      showDouble: false,
      doublePrice: ''
    }, {
      index: 2,
      ingredient: 'NO BEANS',
      price: '',
      cal: '',
      img: './assets/img/no.png',
      showDouble: false,
      doublePrice: ''
    }]
  }, {
    title: 'TOP THINGS OFF',
    subtitle: '',
    index: 3,
    proteinVeggie: [{
      index: 0,
      ingredient: 'GUACAMOLE',
      price: '2.60',
      cal: '230 cal',
      img: './assets/img/topthingsoff/guac.png',
      showDouble: false,
      doublePrice: ''
    }, {
      index: 1,
      ingredient: 'FRESH TOMATO SALSA',
      price: '',
      cal: '25 cal',
      img: './assets/img/topthingsoff/salsa.png',
      showDouble: false,
      doublePrice: ''
    }, {
      index: 2,
      ingredient: 'ROASTED CHILI-CORN SALSA',
      price: '',
      cal: '80 cal',
      img: './assets/img/topthingsoff/chilicornsalsa.png',
      showDouble: false,
      doublePrice: ''
    }, {
      index: 3,
      ingredient: 'TOTMATILLO-GREEN CHILI SALSA',
      price: '',
      cal: '15 cal',
      img: './assets/img/topthingsoff/tomatillo-green-chilli-salsa.png',
      showDouble: false,
      doublePrice: ''
    }, {
      index: 4,
      ingredient: 'TOTMATILLO-RED CHILI SALSA',
      price: '',
      cal: '15 cal',
      img: './assets/img/topthingsoff/tomatillo-red-chilli-salsa.png',
      showDouble: false,
      doublePrice: ''
    }, {
      index: 5,
      ingredient: 'SOUR CREAM',
      price: '',
      cal: '110 cal',
      img: './assets/img/topthingsoff/sourcream.png',
      showDouble: false,
      doublePrice: ''
    }, {
      index: 6,
      ingredient: 'ROMAINE LETTUCE',
      price: '',
      cal: '5 cal',
      img: './assets/img/topthingsoff/romainelettuce.png',
      showDouble: false,
      doublePrice: ''
    }, {
      index: 7,
      ingredient: 'QUESO BLANCO',
      price: '1.55',
      cal: '120 cal',
      img: './assets/img/topthingsoff/queso.png',
      showDouble: false,
      doublePrice: ''
    }]
  }]
});

/***/ }),

/***/ "./assets/src/app.scss":
/*!*****************************!*\
  !*** ./assets/src/app.scss ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/******/ 			// no module.id needed
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
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
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
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"/app": 0,
/******/ 			"app": 0
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
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkchipotle_copy"] = self["webpackChunkchipotle_copy"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, ["app"], () => (__webpack_require__("./assets/src/app.js")))
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["app"], () => (__webpack_require__("./assets/src/app.scss")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;