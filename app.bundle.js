webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var common_1 = __webpack_require__(1);
	var platform_browser_dynamic_1 = __webpack_require__(160);
	var core_1 = __webpack_require__(4);
	var http_1 = __webpack_require__(280);
	var router_1 = __webpack_require__(301);
	var kitchen_sink_1 = __webpack_require__(323);
	// enableProdMode()
	platform_browser_dynamic_1.bootstrap(kitchen_sink_1.KitchenSink, [
	    http_1.HTTP_PROVIDERS,
	    router_1.ROUTER_PROVIDERS,
	    core_1.provide(common_1.LocationStrategy, { useClass: common_1.HashLocationStrategy })
	])
	    .catch(function (err) { return console.error(err); });
	

/***/ },

/***/ 323:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var router_1 = __webpack_require__(301);
	var onsen_1 = __webpack_require__(324);
	var home_1 = __webpack_require__(342);
	var animations_1 = __webpack_require__(348);
	var forms_1 = __webpack_require__(349);
	var dialogs_1 = __webpack_require__(350);
	var tabbar_1 = __webpack_require__(351);
	var KitchenSink = (function () {
	    function KitchenSink() {
	    }
	    KitchenSink = __decorate([
	        core_1.Component({
	            selector: 'kitchen-sink',
	            providers: [],
	            pipes: [],
	            directives: [router_1.ROUTER_DIRECTIVES, tabbar_1.Tabbar, onsen_1.ONS_DIRECTIVES],
	            templateUrl: 'app/kitchen-sink.html',
	        }),
	        router_1.Routes([
	            { path: '/home', component: home_1.Home, },
	            { path: '/forms', component: forms_1.Forms, },
	            { path: '/dialogs', component: dialogs_1.Dialogs, },
	            { path: '/animations', component: animations_1.Animations, },
	        ]), 
	        __metadata('design:paramtypes', [])
	    ], KitchenSink);
	    return KitchenSink;
	}());
	exports.KitchenSink = KitchenSink;
	

/***/ },

/***/ 324:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(325));
	

/***/ },

/***/ 325:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var browser = __webpack_require__(160);
	__export(__webpack_require__(4));
	__export(__webpack_require__(162));
	__export(__webpack_require__(326));
	__export(__webpack_require__(327));
	__export(__webpack_require__(328));
	__export(__webpack_require__(329));
	__export(__webpack_require__(330));
	__export(__webpack_require__(331));
	__export(__webpack_require__(332));
	__export(__webpack_require__(333));
	__export(__webpack_require__(334));
	__export(__webpack_require__(335));
	__export(__webpack_require__(336));
	__export(__webpack_require__(337));
	__export(__webpack_require__(338));
	__export(__webpack_require__(339));
	__export(__webpack_require__(340));
	__export(__webpack_require__(341));
	function bootstrap(type, providers) {
	    if (providers === void 0) { providers = []; }
	    return browser.bootstrap(type, providers);
	}
	exports.bootstrap = bootstrap;
	;
	var ons_navigator_2 = __webpack_require__(326);
	var ons_carousel_2 = __webpack_require__(327);
	var ons_tabbar_2 = __webpack_require__(328);
	var ons_alert_dialog_2 = __webpack_require__(329);
	var ons_popover_2 = __webpack_require__(330);
	var ons_switch_2 = __webpack_require__(331);
	var ons_range_2 = __webpack_require__(332);
	var ons_input_2 = __webpack_require__(333);
	var ons_pull_hook_2 = __webpack_require__(334);
	var ons_lazy_repeat_2 = __webpack_require__(335);
	var ons_page_2 = __webpack_require__(337);
	var ons_splitter_2 = __webpack_require__(336);
	exports.ONS_DIRECTIVES = [
	    ons_navigator_2.OnsNavigator,
	    ons_carousel_2.OnsCarousel,
	    ons_tabbar_2.OnsTabbar,
	    ons_alert_dialog_2.OnsAlertDialog,
	    ons_popover_2.OnsPopover,
	    ons_switch_2.OnsSwitch,
	    ons_range_2.OnsRange,
	    ons_input_2.OnsInput,
	    ons_pull_hook_2.OnsPullHook,
	    ons_lazy_repeat_2.OnsLazyRepeat,
	    ons_splitter_2.OnsSplitterSide,
	    ons_splitter_2.OnsSplitterContent,
	    ons_page_2.OnsPage
	];
	

/***/ },

/***/ 326:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var PageParams = (function () {
	    function PageParams(_data) {
	        if (_data === void 0) { _data = {}; }
	        this._data = _data;
	    }
	    PageParams.prototype.at = function (key) {
	        return this._data[key];
	    };
	    Object.defineProperty(PageParams.prototype, "data", {
	        get: function () {
	            return this._data;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return PageParams;
	}());
	exports.PageParams = PageParams;
	var NavigatorPage = (function () {
	    function NavigatorPage(elementRef, destroy, animator, params) {
	        if (elementRef === void 0) { elementRef = null; }
	        if (destroy === void 0) { destroy = function () { }; }
	        if (animator === void 0) { animator = null; }
	        if (params === void 0) { params = new PageParams(); }
	        this.elementRef = elementRef;
	        this.destroy = destroy;
	        this.animator = animator;
	        this.params = params;
	    }
	    return NavigatorPage;
	}());
	exports.NavigatorPage = NavigatorPage;
	/**
	 * @element ons-navigator
	 */
	var OnsNavigator = (function () {
	    function OnsNavigator(_elementRef, _resolver, _viewContainer, _injector) {
	        this._elementRef = _elementRef;
	        this._resolver = _resolver;
	        this._viewContainer = _viewContainer;
	        this._injector = _injector;
	        this._navigator = _elementRef.nativeElement;
	        this._pages = [];
	    }
	    /**
	     * Deal with (page) input on initilization.
	     */
	    OnsNavigator.prototype._loadInitialPageComponent = function () {
	        var _this = this;
	        var injector = core_1.ReflectiveInjector.resolveAndCreate([
	            core_1.provide(OnsNavigator, { useValue: this })
	        ], this._injector);
	        this._resolver.resolveComponent(this.pageComponentType).then(function (factory) {
	            while (_this._navigator.firstChild) {
	                _this._navigator.removeChild(_this._navigator.firstChild);
	            }
	            var pageComponentRef = _this._viewContainer.createComponent(factory, 0, injector);
	            var pageElement = pageComponentRef.location.nativeElement;
	            _this._verifyPageElement(pageElement);
	            _this._navigator.appendChild(pageElement); // dirty fix to insert in correct position
	            var page = new NavigatorPage(pageComponentRef.location, function () { return pageComponentRef.destroy(); });
	            _this._pages.push(page);
	        });
	    };
	    OnsNavigator.prototype._verifyPageElement = function (element) {
	        if (element.nodeName.toLowerCase() !== 'ons-page') {
	            throw Error('Navigator\'s page element must be an "ons-page" element.');
	        }
	    };
	    OnsNavigator.prototype._createAnimator = function (options) {
	        if (options === void 0) { options = {}; }
	        return this._navigator._animatorFactory.newAnimator(options);
	    };
	    OnsNavigator.prototype.ngOnInit = function () {
	        if (this.pageComponentType) {
	            // Handle '(page)' input
	            this._loadInitialPageComponent();
	        }
	        else if (this._navigator.children.length > 0) {
	            // Put navigator page for initial contents page
	            var pageElement_1 = this._navigator.children[0];
	            this._verifyPageElement(pageElement_1);
	            this._pages.push(new NavigatorPage(null, function () { return pageElement_1.remove(); }, null));
	        }
	        else {
	        }
	    };
	    OnsNavigator.prototype.ngOnDestroy = function () {
	        this._pages.forEach(function (page) { return page.destroy(); });
	        this._navigator = null;
	    };
	    /**
	     * @method pushComponent
	     * @signature pushComponent(type: Type, params: Object = {})
	     * @param {Type} type
	     *   [en][/en]
	     *   [ja]navigatorに挿入するコンポーネントのクラスを指定します。[/ja]
	     * @param {Object} [options]
	     *   [en][/en]
	     *   [ja][/ja]
	     * @param {Object} [options.animation]
	     * @param {Object} [params]
	     *   [en][/en]
	     *   [ja]
	     *     新しく生成するページへのパラメータを指定します。
	     *     navigatorに挿入されたコンポーネントが初期化される際に、
	     *     このパラメータをコンストラクタから受け取ることができます。
	     *   [/ja]
	     * @return {Promise}
	     *   [en][/en]
	     *   [ja]コンポーネントが生成され、遷移アニメーションが終わった時に解決されます。[/ja]
	     * @description
	     *   [en][/en]
	     *   [ja][/ja]
	     */
	    OnsNavigator.prototype.pushComponent = function (type, options, params) {
	        var _this = this;
	        if (options === void 0) { options = {}; }
	        if (params === void 0) { params = {}; }
	        return new Promise(function (resolve, reject) {
	            _this._loadPageComponent(type, options, params, function (navigatorPage) {
	                _this._pages.push(navigatorPage);
	                var enterPageElement = _this._navigator.children[_this._navigator.children.length - 1];
	                var leavePageElement = _this._navigator.children[_this._navigator.children.length - 2];
	                navigatorPage.animator.push(enterPageElement, leavePageElement, function () { return resolve(navigatorPage); });
	            });
	        });
	    };
	    OnsNavigator.prototype._loadPageComponent = function (type, options, params, done) {
	        var _this = this;
	        var pageParams = new PageParams(params);
	        var injector = core_1.ReflectiveInjector.resolveAndCreate([
	            core_1.provide(PageParams, { useValue: pageParams }),
	            core_1.provide(OnsNavigator, { useValue: this })
	        ], this._injector);
	        this._resolver.resolveComponent(type).then(function (factory) {
	            var componentRef = _this._viewContainer.createComponent(factory, 0, injector);
	            var elementRef = componentRef.location;
	            var destroy = function () { return componentRef.destroy(); };
	            var pageElement = elementRef.nativeElement;
	            _this._verifyPageElement(pageElement);
	            // dirty fix to insert in correct position
	            _this._elementRef.nativeElement.appendChild(pageElement);
	            done(new NavigatorPage(elementRef, destroy, _this._createAnimator(options), pageParams));
	        });
	    };
	    /**
	     * @method popComponent
	     * @signature popComponent()
	     * @param {Object} [options]
	     *   [en][/en]
	     *   [ja][/ja]
	     * @param {Object} [options.animation]
	     * @return {Promise}
	     * @description
	     *   [en][/en]
	     *   [ja][/ja]
	     */
	    OnsNavigator.prototype.popComponent = function (options) {
	        var _this = this;
	        if (options === void 0) { options = {}; }
	        if (this._pages.length <= 1) {
	            // do nothing
	            return;
	        }
	        return new Promise(function (resolve, reject) {
	            var page = _this._pages.pop();
	            var enterPageElement = _this._navigator.children[_this._navigator.children.length - 2];
	            var leavePageElement = _this._navigator.children[_this._navigator.children.length - 1];
	            getAnimator(page).pop(enterPageElement, leavePageElement, function () {
	                page.destroy();
	                leavePageElement.remove();
	                resolve();
	            });
	        });
	        function getAnimator(page) {
	            if (typeof options.animation === 'string') {
	                return this._navigator.animatorFactory.newAnimator(options);
	            }
	            else {
	                return page.animator;
	            }
	        }
	    };
	    __decorate([
	        core_1.Input('page'), 
	        __metadata('design:type', core_1.Type)
	    ], OnsNavigator.prototype, "pageComponentType", void 0);
	    OnsNavigator = __decorate([
	        core_1.Directive({
	            selector: 'ons-navigator'
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ComponentResolver, core_1.ViewContainerRef, core_1.Injector])
	    ], OnsNavigator);
	    return OnsNavigator;
	}());
	exports.OnsNavigator = OnsNavigator;
	

/***/ },

/***/ 327:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	/**
	 * @element ons-carousel
	 */
	var OnsCarousel = (function () {
	    function OnsCarousel(_elementRef) {
	        this._elementRef = _elementRef;
	        this._carousel = _elementRef.nativeElement;
	    }
	    Object.defineProperty(OnsCarousel.prototype, "element", {
	        get: function () {
	            return this._carousel;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OnsCarousel = __decorate([
	        core_1.Directive({
	            selector: 'ons-carousel'
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], OnsCarousel);
	    return OnsCarousel;
	}());
	exports.OnsCarousel = OnsCarousel;
	

/***/ },

/***/ 328:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var OnsTabbar = (function () {
	    function OnsTabbar(_elementRef) {
	        this._elementRef = _elementRef;
	        this._tabbar = _elementRef.nativeElement;
	    }
	    Object.defineProperty(OnsTabbar.prototype, "element", {
	        get: function () {
	            return this._tabbar;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OnsTabbar = __decorate([
	        core_1.Directive({
	            selector: 'ons-tabbar'
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], OnsTabbar);
	    return OnsTabbar;
	}());
	exports.OnsTabbar = OnsTabbar;
	var OnsTab = (function () {
	    function OnsTab(_elementRef) {
	        this._elementRef = _elementRef;
	        this._tab = _elementRef.nativeElement;
	    }
	    Object.defineProperty(OnsTab.prototype, "element", {
	        get: function () {
	            return this._tab;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OnsTab = __decorate([
	        core_1.Directive({
	            selector: 'ons-tab'
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], OnsTab);
	    return OnsTab;
	}());
	exports.OnsTab = OnsTab;
	

/***/ },

/***/ 329:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var OnsAlertDialog = (function () {
	    function OnsAlertDialog(elementRef) {
	        this._onsAlertDialog = elementRef.nativeElement;
	    }
	    /**
	     * @method show
	     * @signature show()
	     * @return Promise<any>
	     */
	    OnsAlertDialog.prototype.show = function () {
	        return this._onsAlertDialog.show();
	    };
	    /**
	     * @method hide
	     * @signature hide()
	     * @return Promise<any>
	     */
	    OnsAlertDialog.prototype.hide = function () {
	        return this._onsAlertDialog.hide();
	    };
	    /**
	     * @method destroy
	     * @signature destroy()
	     * @return Promise<any>
	     */
	    OnsAlertDialog.prototype.destroy = function () {
	        return this._onsAlertDialog.destroy();
	    };
	    Object.defineProperty(OnsAlertDialog.prototype, "element", {
	        /**
	         * @return {Element}
	         */
	        get: function () {
	            return this._onsAlertDialog;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OnsAlertDialog = __decorate([
	        core_1.Directive({
	            selector: 'ons-alert-dialog'
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], OnsAlertDialog);
	    return OnsAlertDialog;
	}());
	exports.OnsAlertDialog = OnsAlertDialog;
	

/***/ },

/***/ 330:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var OnsPopover = (function () {
	    function OnsPopover(elementRef) {
	        this._onsPopover = elementRef.nativeElement;
	    }
	    Object.defineProperty(OnsPopover.prototype, "element", {
	        /**
	         * @return {Element}
	         */
	        get: function () {
	            return this._onsPopover;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OnsPopover = __decorate([
	        core_1.Directive({
	            selector: 'ons-popover'
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], OnsPopover);
	    return OnsPopover;
	}());
	exports.OnsPopover = OnsPopover;
	

/***/ },

/***/ 331:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var OnsSwitch = (function () {
	    function OnsSwitch(_elementRef) {
	        this._elementRef = _elementRef;
	        this._valueChange = new core_1.EventEmitter();
	        this._boundOnChange = this._onChange.bind(this);
	        this._element = _elementRef.nativeElement;
	        this._element.checkbox.addEventListener('change', this._boundOnChange);
	    }
	    OnsSwitch.prototype._onChange = function (event) {
	        this._valueChange.emit(this._element.checked);
	    };
	    OnsSwitch.prototype.ngOnChanges = function (changeRecord) {
	        var value = !!changeRecord['_value'].currentValue;
	        this._element.checked = value;
	    };
	    Object.defineProperty(OnsSwitch.prototype, "element", {
	        get: function () {
	            return this._element;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OnsSwitch.prototype.ngOnDestroy = function () {
	        this._element.checkbox.removeEventListener('change', this._boundOnChange);
	        this._element = null;
	    };
	    __decorate([
	        core_1.Input('value'), 
	        __metadata('design:type', Boolean)
	    ], OnsSwitch.prototype, "_value", void 0);
	    __decorate([
	        core_1.Output('valueChange'), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], OnsSwitch.prototype, "_valueChange", void 0);
	    OnsSwitch = __decorate([
	        core_1.Directive({
	            selector: 'ons-switch'
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], OnsSwitch);
	    return OnsSwitch;
	}());
	exports.OnsSwitch = OnsSwitch;
	

/***/ },

/***/ 332:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var OnsRange = (function () {
	    function OnsRange(_elementRef) {
	        this._elementRef = _elementRef;
	        this._valueChange = new core_1.EventEmitter();
	        this._boundOnChange = this._onChange.bind(this);
	        this._element = _elementRef.nativeElement;
	        this._element.addEventListener('change', this._boundOnChange);
	    }
	    OnsRange.prototype._onChange = function (event) {
	        this._valueChange.emit(this._element.value);
	    };
	    OnsRange.prototype.ngOnChanges = function (changeRecord) {
	        var value = changeRecord['_value'].currentValue;
	        this._element.value = value;
	    };
	    Object.defineProperty(OnsRange.prototype, "element", {
	        get: function () {
	            return this._element;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OnsRange.prototype.ngOnDestroy = function () {
	        this._element.removeEventListener('change', this._boundOnChange);
	        this._element = null;
	    };
	    __decorate([
	        core_1.Input('value'), 
	        __metadata('design:type', String)
	    ], OnsRange.prototype, "_value", void 0);
	    __decorate([
	        core_1.Output('valueChange'), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], OnsRange.prototype, "_valueChange", void 0);
	    OnsRange = __decorate([
	        core_1.Directive({
	            selector: 'ons-range'
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], OnsRange);
	    return OnsRange;
	}());
	exports.OnsRange = OnsRange;
	

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var OnsInput = (function () {
	    function OnsInput(_elementRef) {
	        this._elementRef = _elementRef;
	        this._valueChange = new core_1.EventEmitter();
	        this._boundOnChange = this._onChange.bind(this);
	        this._element = _elementRef.nativeElement;
	        this._element.addEventListener('change', this._boundOnChange);
	    }
	    OnsInput.prototype._onChange = function (event) {
	        this._valueChange.emit(this._element.value);
	    };
	    OnsInput.prototype.ngOnChanges = function (changeRecord) {
	        var value = changeRecord['_value'].currentValue;
	        this._element.value = value;
	    };
	    Object.defineProperty(OnsInput.prototype, "element", {
	        get: function () {
	            return this._element;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OnsInput.prototype.ngOnDestroy = function () {
	        this._element.removeEventListener('change', this._boundOnChange);
	        this._element = null;
	    };
	    __decorate([
	        core_1.Input('value'), 
	        __metadata('design:type', String)
	    ], OnsInput.prototype, "_value", void 0);
	    __decorate([
	        core_1.Output('valueChange'), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], OnsInput.prototype, "_valueChange", void 0);
	    OnsInput = __decorate([
	        core_1.Directive({
	            selector: 'ons-input'
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], OnsInput);
	    return OnsInput;
	}());
	exports.OnsInput = OnsInput;
	

/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var OnsPullHook = (function () {
	    function OnsPullHook(_elementRef) {
	        this._elementRef = _elementRef;
	        this._element = _elementRef.nativeElement;
	    }
	    OnsPullHook.prototype.ngOnInit = function () {
	        this._element.onAction = this.onAction;
	    };
	    OnsPullHook.prototype.ngOnDestroy = function () {
	        this._element.onAction = null;
	        this._element = null;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Function)
	    ], OnsPullHook.prototype, "onAction", void 0);
	    OnsPullHook = __decorate([
	        core_1.Directive({
	            selector: 'ons-pull-hook'
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], OnsPullHook);
	    return OnsPullHook;
	}());
	exports.OnsPullHook = OnsPullHook;
	

/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var ItemContext = (function () {
	    function ItemContext($implicit, index, count) {
	        this.$implicit = $implicit;
	        this.index = index;
	        this.count = count;
	    }
	    return ItemContext;
	}());
	var OnsLazyRepeat = (function () {
	    function OnsLazyRepeat(_elementRef, _templateRef, _viewContainer) {
	        this._elementRef = _elementRef;
	        this._templateRef = _templateRef;
	        this._viewContainer = _viewContainer;
	    }
	    OnsLazyRepeat.prototype.ngOnInit = function () {
	    };
	    Object.defineProperty(OnsLazyRepeat.prototype, "onsLazyRepeatOf", {
	        set: function (value) {
	            var _this = this;
	            this._onsLazyRepeatOf = value;
	            this._provider = new ons._internal.LazyRepeatProvider(this._elementRef.nativeElement.parentElement, new ons._internal.LazyRepeatDelegate({
	                loadItemElement: function (index, parent, done) {
	                    _this._loadItemTemplate(index, parent, done);
	                },
	                countItems: function () {
	                    return _this._onsLazyRepeatOf.length;
	                }
	            }));
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OnsLazyRepeat.prototype._loadItemTemplate = function (index, parent, done) {
	        var context = new ItemContext(this._onsLazyRepeatOf[index], index, this._onsLazyRepeatOf.length);
	        var view = this._viewContainer.createEmbeddedView(this._templateRef, context);
	        // dirty fix on createEmbeddedView() does not insert DOM element randomly.
	        parent.appendChild(view.rootNodes[0]);
	        done(view.rootNodes[0]);
	    };
	    OnsLazyRepeat.prototype.refresh = function () {
	        if (this._provider) {
	            this._viewContainer.clear();
	            this._provider.refresh();
	        }
	    };
	    OnsLazyRepeat.prototype.ngOnDestroy = function () {
	        if (this._provider) {
	            this._provider.destroy();
	        }
	        this._viewContainer.clear();
	        this._provider = null;
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Object), 
	        __metadata('design:paramtypes', [Object])
	    ], OnsLazyRepeat.prototype, "onsLazyRepeatOf", null);
	    OnsLazyRepeat = __decorate([
	        core_1.Directive({
	            selector: '[onsLazyRepeat]'
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.TemplateRef, core_1.ViewContainerRef])
	    ], OnsLazyRepeat);
	    return OnsLazyRepeat;
	}());
	exports.OnsLazyRepeat = OnsLazyRepeat;
	

/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() { this.constructor = d; }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	};
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var BasePageLoaderDirectiveImpl = (function () {
	    function BasePageLoaderDirectiveImpl(_elementRef, _viewContainer, _resolver) {
	        this._elementRef = _elementRef;
	        this._viewContainer = _viewContainer;
	        this._resolver = _resolver;
	    }
	    BasePageLoaderDirectiveImpl.prototype.ngOnInit = function () {
	        var _this = this;
	        if (this.pageComponentType) {
	            this._resolver.resolveComponent(this.pageComponentType).then(function (factory) {
	                if (_this._pageComponent) {
	                    _this._pageComponent.destroy();
	                }
	                _this._pageComponent = _this._viewContainer.createComponent(factory, 0, _this._viewContainer.injector);
	                // dirty fix to insert in correct position
	                var pageElement = _this._pageComponent.location.nativeElement;
	                _this._elementRef.nativeElement.appendChild(pageElement);
	            });
	        }
	    };
	    BasePageLoaderDirectiveImpl.prototype.ngOnDestroy = function () {
	        if (this._pageComponent) {
	            this._pageComponent.destroy();
	            this._pageComponent = null;
	        }
	    };
	    return BasePageLoaderDirectiveImpl;
	}());
	var OnsSplitterSide = (function (_super) {
	    __extends(OnsSplitterSide, _super);
	    function OnsSplitterSide(_elementRef, _viewContainer, _resolver) {
	        _super.call(this, _elementRef, _viewContainer, _resolver);
	    }
	    __decorate([
	        core_1.Input('page'), 
	        __metadata('design:type', core_1.Type)
	    ], OnsSplitterSide.prototype, "pageComponentType", void 0);
	    OnsSplitterSide = __decorate([
	        core_1.Directive({
	            selector: 'ons-splitter-side'
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ViewContainerRef, core_1.ComponentResolver])
	    ], OnsSplitterSide);
	    return OnsSplitterSide;
	}(BasePageLoaderDirectiveImpl));
	exports.OnsSplitterSide = OnsSplitterSide;
	var OnsSplitterContent = (function (_super) {
	    __extends(OnsSplitterContent, _super);
	    function OnsSplitterContent(_elementRef, _viewContainer, _resolver) {
	        _super.call(this, _elementRef, _viewContainer, _resolver);
	    }
	    __decorate([
	        core_1.Input('page'), 
	        __metadata('design:type', core_1.Type)
	    ], OnsSplitterContent.prototype, "pageComponentType", void 0);
	    OnsSplitterContent = __decorate([
	        core_1.Directive({
	            selector: 'ons-splitter-content'
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef, core_1.ViewContainerRef, core_1.ComponentResolver])
	    ], OnsSplitterContent);
	    return OnsSplitterContent;
	}(BasePageLoaderDirectiveImpl));
	exports.OnsSplitterContent = OnsSplitterContent;
	

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var OnsPage = (function () {
	    function OnsPage(elementRef) {
	        this._element = elementRef.nativeElement;
	    }
	    Object.defineProperty(OnsPage.prototype, "element", {
	        get: function () {
	            return this._element;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    OnsPage = __decorate([
	        core_1.Directive({
	            selector: 'ons-page'
	        }), 
	        __metadata('design:paramtypes', [core_1.ElementRef])
	    ], OnsPage);
	    return OnsPage;
	}());
	exports.OnsPage = OnsPage;
	

/***/ },

/***/ 338:
/***/ function(module, exports) {

	"use strict";
	exports.onsNotification = ons.notification;
	

/***/ },

/***/ 339:
/***/ function(module, exports) {

	"use strict";
	exports.onsPlatform = ons.platform;
	

/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var gen = (function () {
	    var i = 0;
	    return function () {
	        return i++;
	    };
	})();
	var AlertDialogFactory = (function () {
	    function AlertDialogFactory(_dcl, _rootRenderer, _injector) {
	        this._dcl = _dcl;
	        this._rootRenderer = _rootRenderer;
	        this._injector = _injector;
	    }
	    AlertDialogFactory.prototype.createAlertDialog = function (componentType, params) {
	        if (params === void 0) { params = {}; }
	        var id = this._createBackDrop();
	        var dispose = function () {
	            var backdrop = document.querySelector('#' + id);
	            if (backdrop.childen[0] && backdrop.children[0].dismiss instanceof Function) {
	                backdrop.children[0].dismiss();
	            }
	            backdrop.remove();
	        };
	        return this._dcl.loadAsRoot(componentType, '#' + id, this._injector, dispose)
	            .then(function (componentRef) {
	            return new Promise(function (resolve) {
	                setImmediate(function () {
	                    componentRef.location.nativeElement.children[0].show();
	                    resolve(componentRef);
	                });
	            });
	        });
	    };
	    AlertDialogFactory.prototype._createBackDrop = function () {
	        var backdrop = window.document.createElement('div');
	        var id = 'ons-alert-dialog-backdrop-' + gen();
	        backdrop.setAttribute('id', id);
	        window.document.body.appendChild(backdrop);
	        return id;
	    };
	    AlertDialogFactory = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.RootRenderer, core_1.Injector])
	    ], AlertDialogFactory);
	    return AlertDialogFactory;
	}());
	exports.AlertDialogFactory = AlertDialogFactory;
	

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var gen = (function () {
	    var i = 0;
	    return function () {
	        return i++;
	    };
	})();
	var PopoverFactory = (function () {
	    function PopoverFactory(_dcl, _rootRenderer, _injector) {
	        this._dcl = _dcl;
	        this._rootRenderer = _rootRenderer;
	        this._injector = _injector;
	    }
	    PopoverFactory.prototype.createPopover = function (componentType, params) {
	        if (params === void 0) { params = {}; }
	        var id = this._createBackDrop();
	        var dispose = function () {
	            var backdrop = document.querySelector('#' + id);
	            if (backdrop.childen[0] && backdrop.children[0].dismiss instanceof Function) {
	                backdrop.children[0].dismiss();
	            }
	            backdrop.remove();
	        };
	        return this._dcl.loadAsRoot(componentType, '#' + id, this._injector, dispose)
	            .then(function (componentRef) {
	            return new Promise(function (resolve) {
	                setImmediate(function () {
	                    componentRef.location.nativeElement.children[0].show('ons-button'); // TODO: fix
	                    resolve(componentRef);
	                });
	            });
	        });
	    };
	    PopoverFactory.prototype._createBackDrop = function () {
	        var backdrop = window.document.createElement('div');
	        var id = 'ons-popover-backdrop-' + gen();
	        backdrop.setAttribute('id', id);
	        window.document.body.appendChild(backdrop);
	        return id;
	    };
	    PopoverFactory = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [core_1.DynamicComponentLoader, core_1.RootRenderer, core_1.Injector])
	    ], PopoverFactory);
	    return PopoverFactory;
	}());
	exports.PopoverFactory = PopoverFactory;
	

/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(4);
	var onsen_1 = __webpack_require__(324);
	var pull_hook_1 = __webpack_require__(343);
	var lazy_repeat_1 = __webpack_require__(344);
	var splitter_1 = __webpack_require__(345);
	var fab_1 = __webpack_require__(346);
	var speed_dial_1 = __webpack_require__(347);
	var Home = (function () {
	    function Home(_navigator) {
	        this._navigator = _navigator;
	    }
	    Home.prototype.log = function () {
	        console.log(this._navigator);
	    };
	    Home.prototype.push = function (page) {
	        var component = { PullHook: pull_hook_1.PullHook, LazyRepeat: lazy_repeat_1.LazyRepeat, Splitter: splitter_1.Splitter, Fab: fab_1.Fab, SpeedDial: speed_dial_1.SpeedDial }[page];
	        this._navigator.pushComponent(component, { animation: 'fade ' }, {});
	    };
	    Home.prototype.ngOnInit = function () {
	    };
	    Home = __decorate([
	        core_1.Component({
	            selector: 'home',
	            templateUrl: 'app/components/home/home.html',
	            providers: [],
	            directives: [],
	            pipes: []
	        }),
	        __param(0, core_1.Inject(core_1.forwardRef(function () { return onsen_1.OnsNavigator; }))), 
	        __metadata('design:paramtypes', [onsen_1.OnsNavigator])
	    ], Home);
	    return Home;
	}());
	exports.Home = Home;
	

/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var PullHook = (function () {
	    function PullHook() {
	        this.data = [];
	        this.timeout = 0;
	        this.message = 'Pull down to refresh';
	        this.messages = {
	            initial: 'Pull down to refresh',
	            preaction: 'Release to refresh',
	            action: 'Loading data...'
	        };
	    }
	    PullHook.prototype.getRandomName = function () {
	        var names = ['Oscar', 'Max', 'Tiger', 'Sam', 'Misty', 'Simba', 'Coco', 'Chloe', 'Lucy', 'Missy'];
	        return names[Math.floor(Math.random() * names.length)];
	    };
	    PullHook.prototype.getRandomUrl = function () {
	        var width = 40 + Math.floor(20 * Math.random());
	        var height = 40 + Math.floor(20 * Math.random());
	        return "https://placekitten.com/g/" + width + "/" + height;
	    };
	    PullHook.prototype.getRandomKitten = function () {
	        return {
	            name: this.getRandomName(),
	            url: this.getRandomUrl()
	        };
	    };
	    PullHook.prototype.updateData = function () {
	        this.data = [];
	        for (var i = 0; i < 20; i++) {
	            this.data.push(this.getRandomKitten());
	        }
	    };
	    PullHook.prototype.ngOnInit = function () {
	        this.updateData();
	        this.boundOnAction = this.onAction.bind(this);
	    };
	    PullHook.prototype.onAction = function (done) {
	        var _this = this;
	        if (this.timeout) {
	            clearTimeout(this.timeout);
	        }
	        this.timeout = setTimeout(function () {
	            _this.updateData();
	            done();
	        }, 1000);
	    };
	    PullHook.prototype.onChangeState = function (pullHook) {
	        this.message = this.messages[pullHook.state];
	    };
	    PullHook = __decorate([
	        core_1.Component({
	            selector: 'ons-page',
	            providers: [],
	            directives: [],
	            template: "\n  <ons-toolbar>\n    <div class=\"left\"><ons-back-button>Back</ons-back-button></div>\n    <div class=\"center\">Pull to refresh</div>\n  </ons-toolbar>\n\n  <div class=\"scroll\">\n    <ons-pull-hook height=\"64px\" threshold-height=\"128px\" (changestate)=\"onChangeState(pullHook)\" [onAction]=\"boundOnAction\" #pullHook>\n      {{message}}\n    </ons-pull-hook>\n\n    <ons-list>\n      <ons-list-item *ngFor=\"let item of data\">\n        <div class=\"left\"><img class=\"list__item__thumbnail\" [src]=\"item.url\"></div>\n        <div class=\"center\">{{item.name}}</div>\n      </ons-list-item>\n    </ons-list>\n  </div>\n  ",
	            pipes: []
	        }), 
	        __metadata('design:paramtypes', [])
	    ], PullHook);
	    return PullHook;
	}());
	exports.PullHook = PullHook;
	

/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var onsen_1 = __webpack_require__(324);
	var LazyRepeat = (function () {
	    function LazyRepeat() {
	        this.items = [];
	    }
	    LazyRepeat.prototype.ngOnInit = function () {
	        // for (var i = 0; i < 1000; ++i) {
	        //   this.items.push(i);
	        // }
	        var lazyRepeat = document.getElementById('lazyRepeat');
	        lazyRepeat.delegate = {
	            createItemContent: function (i, template) {
	                var element = template.cloneNode(true);
	                element.innerHTML = element.innerHTML.replace('#', i);
	                console.log(template, element.innerHTML);
	                return element;
	            },
	            countItems: function () { return 10000; }
	        };
	    };
	    LazyRepeat = __decorate([
	        core_1.Component({
	            selector: 'ons-page',
	            providers: [],
	            directives: [onsen_1.ONS_DIRECTIVES],
	            template: "\n  <ons-toolbar>\n    <div class=\"left\"><ons-back-button>Back</ons-back-button></div>\n    <div class=\"center\">Infinite Scroll (lazy repeat)</div>\n  </ons-toolbar>\n  <ons-pull-hook></ons-pull-hook>\n  <ons-list>\n    <!--\n    <ons-list-item *onsLazyRepeat=\"let i of items\">\n    -->\n    <ons-lazy-repeat id=\"lazyRepeat\">\n      <ons-list-item>\n        <div class=\"center\">\n          Item #\n        </div>\n      </ons-list-item>\n     </ons-lazy-repeat>\n  </ons-list>\n  ",
	            pipes: []
	        }), 
	        __metadata('design:paramtypes', [])
	    ], LazyRepeat);
	    return LazyRepeat;
	}());
	exports.LazyRepeat = LazyRepeat;
	

/***/ },

/***/ 345:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var Splitter = (function () {
	    function Splitter() {
	    }
	    Splitter = __decorate([
	        core_1.Component({
	            selector: 'ons-page',
	            providers: [],
	            directives: [],
	            template: "\n  <ons-splitter>\n    <ons-splitter-side side=\"right\" width=\"240px\" swipeable collapse #menu>\n      <ons-page>\n        <ons-list>\n          <ons-list-header>Menu</ons-list-header>\n          <ons-list-item modifier=\"longdivider\" tappable *ngFor=\"let i of [1, 2, 3, 4]\">\n            Menu item #{{i}}\n          </ons-list-item>\n        </ons-list>\n      </ons-page>\n    </ons-splitter-side>\n\n    <ons-splitter-content>\n      <ons-page>\n        <ons-toolbar>\n          <div class=\"left\"><ons-back-button>Back</ons-back-button></div>\n          <div class=\"center\">Sliding menu</div>\n          <div class=\"right\" (click)=\"menu.open()\">\n            <ons-toolbar-button>=</ons-toolbar-button>\n          </div>\n        </ons-toolbar>\n        <p>Swipe left to open menu!</p>\n      </ons-page>\n    </ons-splitter-content>\n  </ons-splitter>\n  ",
	            pipes: []
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Splitter);
	    return Splitter;
	}());
	exports.Splitter = Splitter;
	

/***/ },

/***/ 346:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var Fab = (function () {
	    function Fab() {
	    }
	    Fab = __decorate([
	        core_1.Component({
	            selector: 'ons-page',
	            providers: [],
	            directives: [],
	            template: "\n  <ons-toolbar>\n    <div class=\"left\"><ons-back-button>Back</ons-back-button></div>\n    <div class=\"center\">Floating Action Button</div>\n  </ons-toolbar>\n  <ons-fab position=\"bottom right\" ripple>+</ons-fab>\n  ",
	            pipes: []
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Fab);
	    return Fab;
	}());
	exports.Fab = Fab;
	

/***/ },

/***/ 347:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var SpeedDial = (function () {
	    function SpeedDial() {
	    }
	    SpeedDial = __decorate([
	        core_1.Component({
	            selector: 'ons-page',
	            providers: [],
	            directives: [],
	            template: "\n  <ons-toolbar>\n    <div class=\"left\"><ons-back-button>Back</ons-back-button></div>\n    <div class=\"center\">Speed dial</div>\n  </ons-toolbar>\n  <p>A speed dial is a Floating action button that expands into a menu.</p>\n  <ons-speed-dial position=\"bottom right\">\n    <ons-fab>+</ons-fab>\n    <ons-speed-dial-item>a</ons-speed-dial-item>\n    <ons-speed-dial-item>b</ons-speed-dial-item>\n    <ons-speed-dial-item>c</ons-speed-dial-item>\n  </ons-speed-dial>\n  ",
	            pipes: []
	        }), 
	        __metadata('design:paramtypes', [])
	    ], SpeedDial);
	    return SpeedDial;
	}());
	exports.SpeedDial = SpeedDial;
	

/***/ },

/***/ 348:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(4);
	var onsen_1 = __webpack_require__(324);
	var TempPage = (function () {
	    function TempPage(_navigator) {
	        this._navigator = _navigator;
	        this.animations = ['none', 'fade', 'slide', 'lift'];
	    }
	    TempPage.prototype.ngOnInit = function () {
	    };
	    TempPage = __decorate([
	        core_1.Component({
	            selector: 'ons-page',
	            template: "\n    <div class=\"waiting\">Please wait...</div>\n   ",
	            styles: ["\n    .waiting {\n      text-align: center;\n      font-size: 24px;\n      margin: 100px auto 0;\n    }\n  "],
	            providers: [],
	            directives: [onsen_1.ONS_DIRECTIVES],
	            pipes: []
	        }),
	        __param(0, core_1.Inject(core_1.forwardRef(function () { return onsen_1.OnsNavigator; }))), 
	        __metadata('design:paramtypes', [onsen_1.OnsNavigator])
	    ], TempPage);
	    return TempPage;
	}());
	exports.TempPage = TempPage;
	var Animations = (function () {
	    function Animations(_navigator) {
	        this._navigator = _navigator;
	        this.animations = ['none', 'fade', 'slide', 'lift'];
	    }
	    Animations.prototype.push = function (animation) {
	        var _this = this;
	        this._navigator.pushComponent(TempPage, { animation: animation });
	        setTimeout(function () { return _this._navigator.popComponent(); }, 1500);
	    };
	    Animations.prototype.ngOnInit = function () {
	    };
	    Animations = __decorate([
	        core_1.Component({
	            selector: 'animations',
	            templateUrl: 'app/components/animations/animations.html',
	            providers: [],
	            directives: [onsen_1.ONS_DIRECTIVES],
	            pipes: []
	        }),
	        __param(0, core_1.Inject(core_1.forwardRef(function () { return onsen_1.OnsNavigator; }))), 
	        __metadata('design:paramtypes', [onsen_1.OnsNavigator])
	    ], Animations);
	    return Animations;
	}());
	exports.Animations = Animations;
	

/***/ },

/***/ 349:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var onsen_1 = __webpack_require__(324);
	var Forms = (function () {
	    function Forms() {
	        this.target = true;
	        this.switchEnabled = true;
	        this.vegetables = [
	            'Tomato',
	            'Cabbage',
	            'Cucumber'
	        ];
	        this.selectedVegetable = 'Cabbage';
	        this.colors = [
	            'Red',
	            'Blue',
	            'Green',
	            'Yellow'
	        ];
	        this.name = 'Argelius';
	    }
	    Forms.prototype.ngOnInit = function () {
	    };
	    Forms = __decorate([
	        core_1.Component({
	            selector: 'forms',
	            templateUrl: 'app/components/forms/forms.html',
	            directives: [onsen_1.ONS_DIRECTIVES],
	            pipes: []
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Forms);
	    return Forms;
	}());
	exports.Forms = Forms;
	

/***/ },

/***/ 350:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var onsen_1 = __webpack_require__(324);
	var Dialogs = (function () {
	    function Dialogs() {
	        this.isOpen = false;
	    }
	    // constructor(
	    //   private _popoverFactory: PopoverFactory,
	    //   private _alertDialogFactory: AlertDialogFactory
	    // ) { }
	    Dialogs.prototype.alert = function () {
	        onsen_1.onsNotification.alert('Be careful!');
	    };
	    Dialogs.prototype.confirm = function () {
	        onsen_1.onsNotification.confirm('This is dangerous. Are you sure?');
	    };
	    Dialogs.prototype.prompt = function () {
	        onsen_1.onsNotification.prompt('What\'s 42?');
	    };
	    Dialogs.prototype.showDialog = function () {
	    };
	    Dialogs.prototype.showPopover = function () {
	        // this._popoverFactory.createPopover(OnsPopover);
	    };
	    Dialogs = __decorate([
	        core_1.Component({
	            selector: 'dialogs',
	            templateUrl: 'app/components/dialogs/dialogs.html',
	            directives: [onsen_1.ONS_DIRECTIVES],
	            pipes: []
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Dialogs);
	    return Dialogs;
	}());
	exports.Dialogs = Dialogs;
	

/***/ },

/***/ 351:
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(4);
	var router_1 = __webpack_require__(301);
	var Tabbar = (function () {
	    function Tabbar() {
	        this.tabs = [
	            { path: '/home', label: 'Home', },
	            { path: '/forms', label: 'Forms', },
	            { path: '/dialogs', label: 'Dialogs', },
	            { path: '/animations', label: 'Animations', },
	        ];
	        this.material = ons.platform.isAndroid();
	    }
	    Tabbar.prototype.updateStyle = function (platform) {
	        this.material = platform === 'android';
	    };
	    Tabbar = __decorate([
	        core_1.Component({
	            selector: 'tabbar',
	            providers: [],
	            pipes: [],
	            directives: [router_1.ROUTER_DIRECTIVES],
	            templateUrl: 'app/components/tabbar/tabbar.html',
	            styleUrls: ['app/components/tabbar/tabbar.css'],
	        }), 
	        __metadata('design:paramtypes', [])
	    ], Tabbar);
	    return Tabbar;
	}());
	exports.Tabbar = Tabbar;
	

/***/ }

});
//# sourceMappingURL=app.map