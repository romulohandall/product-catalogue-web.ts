webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".logo {\n  width: 1em;\n  height: 1em;\n  margin-right: .5em;\n  display: inline-block;\n  vertical-align: middle;\n}\n\n.container {\n  display: block;\n  max-width: 50em;\n  margin: 0 auto;\n  padding: 1em;\n}\n\n.app-title {\n  margin-left: auto;\n  font-size: .8em;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <a href=\"https://www.contentful.com\">\n    <svg class=\"logo\" aria-label=\"Contentful Website\" width=\"29\" height=\"32\" viewBox=\"0 0 29 32\" xmlns=\"http://www.w3.org/2000/svg\"><title>contentful-dark-1a51a42b</title><g fill-rule=\"nonzero\" fill=\"none\"><path d=\"M9.7 22.3C8 20.7 7 18.5 7 16s1-4.7 2.6-6.3c1.4-1.4 1.4-3.6 0-5s-3.6-1.4-5 0C1.8 7.6 0 11.6 0 16s1.8 8.4 4.7 11.3c1.4 1.4 3.6 1.4 5 0 1.3-1.4 1.3-3.6 0-5z\" fill=\"#FAE501\"/><path d=\"M9.7 9.7C11.3 8 13.5 7 16 7s4.7 1 6.3 2.6c1.4 1.4 3.6 1.4 5 0s1.4-3.6 0-5C24.4 1.8 20.4 0 16 0S7.6 1.8 4.7 4.7c-1.4 1.4-1.4 3.6 0 5 1.4 1.3 3.6 1.3 5 0z\" fill=\"#4FB5E1\"/><path d=\"M22.3 22.3C20.7 24 18.5 25 16 25s-4.7-1-6.3-2.6c-1.4-1.4-3.6-1.4-5 0s-1.4 3.6 0 5C7.6 30.2 11.6 32 16 32s8.4-1.8 11.3-4.7c1.4-1.4 1.4-3.6 0-5-1.4-1.3-3.6-1.3-5 0z\" fill=\"#F05751\"/><circle fill=\"#0681B6\" cx=\"7.2\" cy=\"7.2\" r=\"3.5\"/><circle fill=\"#CD4739\" cx=\"7.2\" cy=\"24.8\" r=\"3.5\"/></g></svg>\n  </a>\n  <a mat-button routerLink=\"/products\">\n    Products\n  </a>\n  <a mat-button routerLink=\"/categories\">Categories</a>\n  <a mat-button routerLink=\"/settings\">Settings</a>\n\n  <span class=\"app-title\">{{ title }}</span>\n</mat-toolbar>\n\n<main class=\"container\">\n  <router-outlet></router-outlet>\n</main>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contentful_service__ = __webpack_require__("../../../../../src/app/contentful.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(ContentfulService) {
        this.ContentfulService = ContentfulService;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ContentfulService.onTitleChange(function (title) { return _this.title = title; });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__contentful_service__["a" /* ContentfulService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__product_list_product_list_component__ = __webpack_require__("../../../../../src/app/product-list/product-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__product_detail_product_detail_component__ = __webpack_require__("../../../../../src/app/product-detail/product-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__category_list_category_list_component__ = __webpack_require__("../../../../../src/app/category-list/category-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contentful_service__ = __webpack_require__("../../../../../src/app/contentful.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












// check this and make a module out of it
var routes = [
    { path: '', redirectTo: '/products', pathMatch: 'full' },
    { path: 'products', component: __WEBPACK_IMPORTED_MODULE_7__product_list_product_list_component__["a" /* ProductListComponent */] },
    { path: 'products/:slug', component: __WEBPACK_IMPORTED_MODULE_8__product_detail_product_detail_component__["a" /* ProductDetailComponent */] },
    { path: 'categories', component: __WEBPACK_IMPORTED_MODULE_9__category_list_category_list_component__["a" /* CategoryListComponent */] },
    { path: 'settings', component: __WEBPACK_IMPORTED_MODULE_11__settings_settings_component__["a" /* SettingsComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["K" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__product_list_product_list_component__["a" /* ProductListComponent */],
                __WEBPACK_IMPORTED_MODULE_8__product_detail_product_detail_component__["a" /* ProductDetailComponent */],
                __WEBPACK_IMPORTED_MODULE_9__category_list_category_list_component__["a" /* CategoryListComponent */],
                __WEBPACK_IMPORTED_MODULE_11__settings_settings_component__["a" /* SettingsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true }),
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatInputModule */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["d" /* MatListModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["f" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["e" /* MatTabsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_material__["c" /* MatInputModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__contentful_service__["a" /* ContentfulService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/category-list/category-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".category-grid {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin: -0.5em;\n}\n\n.category-grid > * {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 5em;\n          flex: 1 0 5em;\n  margin: 0.5em;\n\n  min-width: 20em;\n  max-width: 37.5em;\n}\n\n.category-card {\n  height: 100%;\n}\n\n.category-image {\n  width: 3em;\n  height: 3em;\n\n  margin-left: auto;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/category-list/category-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <ul class=\"u-listReset category-grid\">\n    <li *ngFor=\"let category of categories\">\n      <mat-card class=\"category-card\">\n        <mat-card-header>\n          <img *ngIf=\"category.fields.icon\" class=\"category-image\" src=\"{{ category.fields.icon.fields.file.url }}\">\n          <mat-card-title>{{ category.fields.title }}</mat-card-title>\n          <mat-card-subtitle>{{ category.fields.categoryDescription }}</mat-card-subtitle>\n        </mat-card-header>\n        <mat-card-content>\n          <mat-list>\n            <mat-list-item *ngFor=\"let product of productsForCategories[category.sys.id]\">\n              <a mat-line [routerLink]=\"['/products', product.fields.slug]\">{{product.fields.productName}}</a>\n            </mat-list-item>\n          </mat-list>\n        </mat-card-content>\n      </mat-card>\n    </li>\n  </ul>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/category-list/category-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contentful_service__ = __webpack_require__("../../../../../src/app/contentful.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import { MdList } from '@angular/material';

var CategoryListComponent = (function () {
    function CategoryListComponent(contentfulService) {
        this.contentfulService = contentfulService;
        this.productsForCategories = {};
    }
    CategoryListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contentfulService.getCategories()
            .then(function (categories) {
            _this.categories = categories;
            return Promise.all(_this.categories.map(function (category) { return _this.contentfulService.getProducts({
                'fields.categories.sys.id': category.sys.id
            }); }));
        })
            .then(function (productListings) {
            _this.categories.forEach(function (cat, i) {
                _this.productsForCategories[cat.sys.id] = productListings[i];
            });
        });
    };
    CategoryListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-category-list',
            template: __webpack_require__("../../../../../src/app/category-list/category-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/category-list/category-list.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__contentful_service__["a" /* ContentfulService */]])
    ], CategoryListComponent);
    return CategoryListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/contentful.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentfulService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_contentful__ = __webpack_require__("../../../../contentful/dist/es-modules/contentful.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// change these to include your own settings
var DEFAULT_CONFIG = {
    credentials: {
        space: 'wl1z0pal05vy',
        accessToken: '0e3ec801b5af550c8a1257e8623b1c77ac9b3d8fcfc1b2b7494e3cb77878f92a',
    },
    contentTypeIds: {
        product: '2PqfXUJwE8qSYKuM0U6w8M',
        category: '6XwpTaSiiI2Ak2Ww0oi6qa'
    }
};
var ContentfulService = (function () {
    function ContentfulService() {
        try {
            this.config = JSON.parse(localStorage.catalogConfig);
        }
        catch (e) {
            this.config = DEFAULT_CONFIG.credentials;
        }
        this.titleHandlers = [];
        this._createClient();
        this.getSpace();
    }
    ContentfulService.prototype.onTitleChange = function (fn) {
        this.titleHandlers.push(fn);
    };
    // get the current space
    ContentfulService.prototype.getSpace = function () {
        var _this = this;
        return this.cdaClient.getSpace()
            .then(function (space) {
            _this.titleHandlers.forEach(function (handler) { return handler(space.name); });
            return space;
        });
    };
    // fetch products
    ContentfulService.prototype.getProducts = function (query) {
        return this.cdaClient.getEntries(Object.assign({
            content_type: DEFAULT_CONFIG.contentTypeIds.product
        }, query))
            .then(function (res) { return res.items; });
    };
    // fetch products with a given slug
    // and return one of them
    ContentfulService.prototype.getProduct = function (slug) {
        return this.getProducts({ 'fields.slug': slug })
            .then(function (items) { return items[0]; });
    };
    // fetch categories
    ContentfulService.prototype.getCategories = function () {
        return this.cdaClient.getEntries({
            content_type: '6XwpTaSiiI2Ak2Ww0oi6qa'
        })
            .then(function (res) { return res.items; });
    };
    // return a custom config if available
    ContentfulService.prototype.getConfig = function () {
        return this.config !== DEFAULT_CONFIG.credentials ?
            Object.assign({}, this.config) :
            { space: '', accessToken: '' };
    };
    // set a new config and store it in localStorage
    ContentfulService.prototype.setConfig = function (config) {
        localStorage.setItem('catalogConfig', JSON.stringify(config));
        this.config = config;
        this._createClient();
        this.getSpace();
        return Object.assign({}, this.config);
    };
    // set config back to default values
    ContentfulService.prototype.resetConfig = function () {
        localStorage.removeItem('catalogConfig');
        this.config = DEFAULT_CONFIG.credentials;
        this._createClient();
        this.getSpace();
        return Object.assign({}, this.config);
    };
    ContentfulService.prototype._createClient = function () {
        this.cdaClient = Object(__WEBPACK_IMPORTED_MODULE_1_contentful__["a" /* createClient */])({
            space: this.config.space,
            accessToken: this.config.accessToken
        });
    };
    ContentfulService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], ContentfulService);
    return ContentfulService;
}());



/***/ }),

/***/ "../../../../../src/app/product-detail/product-detail.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".tab-container {\n  padding: 2em 0;\n}\n\n.brand-panel {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.brand-panel-img {\n  -webkit-box-flex: 0;\n      -ms-flex: 0 0 10em;\n          flex: 0 0 10em;\n  margin-right: 2em;\n\n  display: -webkit-box;\n\n  display: -ms-flexbox;\n\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-detail/product-detail.component.html":
/***/ (function(module, exports) {

module.exports = " <p *ngIf=\"product\">\n  <mat-card class=\"product-card\">\n    <mat-card-header>\n      <mat-card-title>{{ product.fields.productName }}</mat-card-title>\n      <mat-card-subtitle>{{ product.fields.sizetypecolor }} | <strong>Price: {{ product.fields.price }} $</strong></mat-card-subtitle>\n    </mat-card-header>\n    <mat-card-content>\n      <mat-tab-group>\n        <mat-tab *ngIf=\"product.fields.image\" label=\"Image\">\n          <div class=\"tab-container\">\n            <img class=\"u-marginAutoHorizontal\" src=\"{{ product.fields.image[0].fields.file.url }}\">\n            <p>{{ product.fields.image[0].fields.description }}</p>\n          </div>\n        </mat-tab>\n        <mat-tab label=\"Description\">\n          <div class=\"tab-container\">\n            <p>{{ product.fields.productDescription }}</p>\n            <p>SKU: {{ product.fields.sku || 'SKU not available' }}</p>\n          </div>\n        </mat-tab>\n        <mat-tab *ngIf=\"product.fields.brand\" label=\"Brand\">\n          <div class=\"tab-container\">\n            <div class=\"brand-panel\">\n              <div class=\"brand-panel-img\">\n                <img src=\"{{ product.fields.brand.fields.logo.fields.file.url }}\">\n              </div>\n              <div>\n                <h3>{{ product.fields.brand.fields.companyName }}</h3>\n                <p>{{ product.fields.brand.fields.companyDescription }}</p>\n              </div>\n            </div>\n          </div>\n        </mat-tab>\n      </mat-tab-group>\n    </mat-card-content>\n  </mat-card>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/product-detail/product-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contentful_service__ = __webpack_require__("../../../../../src/app/contentful.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductDetailComponent = (function () {
    function ProductDetailComponent(ContentfulService, route) {
        this.ContentfulService = ContentfulService;
        this.route = route;
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.ContentfulService.getProduct(params.get('slug')); })
            .subscribe(function (product) { return _this.product = product; });
    };
    ProductDetailComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
            selector: 'app-product-detail',
            template: __webpack_require__("../../../../../src/app/product-detail/product-detail.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product-detail/product-detail.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__contentful_service__["a" /* ContentfulService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* ActivatedRoute */]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".product-grid {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  margin: -0.5em;\n}\n\n.product-grid > * {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 0 5em;\n          flex: 1 0 5em;\n  margin: 0.5em;\n\n  min-width: 20em;\n  max-width: 37.5em;\n}\n\n.product-card {\n  height: 100%;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"u-listReset product-grid\">\n  <li class=\"u-marginBottom\" *ngFor=\"let product of products\">\n    <mat-card class=\"product-card\">\n      <mat-card-header>\n        <mat-card-title>{{ product.fields.productName }}</mat-card-title>\n        <mat-card-subtitle><strong>Price: {{ product.fields.price }} $</strong></mat-card-subtitle>\n      </mat-card-header>\n      <img mat-card-image src=\"{{ product.fields.image[0].fields.file.url }}\">\n      <mat-card-actions class=\"u-marginTopAuto\">\n        <a mat-button [routerLink]=\"['/products', product.fields.slug]\">View details</a>\n      </mat-card-actions>\n    </mat-card>\n  </li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/product-list/product-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__contentful_service__ = __webpack_require__("../../../../../src/app/contentful.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProductListComponent = (function () {
    function ProductListComponent(contentfulService) {
        this.contentfulService = contentfulService;
    }
    ProductListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contentfulService.getProducts()
            .then(function (products) { return _this.products = products; });
    };
    ProductListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-product-list',
            template: __webpack_require__("../../../../../src/app/product-list/product-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/product-list/product-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__contentful_service__["a" /* ContentfulService */]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".example-full-width {\n  width: 100%;\n}\n\n.push-down {\n  margin-bottom: 1em;\n}\n\n.mat-hint {\n  color: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-header>\n    <mat-card-title>Settings</mat-card-title>\n    <mat-card-subtitle>Use your own space</mat-card-subtitle>\n  </mat-card-header>\n  <p>\n      This demo application is connected to a read-only demo space. Use the form below\n      to connect to your own space. The space needs to be created implementing the\n      product catalogue data template from Contentful to function properly.\n  </p>\n  <p>Once a valid space id and api for the deliver api is provided, the credentials need to\n      be saved in the current browser tab session. For convenience a deeplink to the settings dialogue\n      can be created.\n  </p>\n  <mat-card-content>\n    <form #settingsForm=\"ngForm\" (submit)=\"saveConfig()\">\n      <mat-input-container class=\"example-full-width push-down\">\n        <input matInput placeholder=\"Space Id\" [(ngModel)]=\"config.space\" name=\"spaceId\" required>\n        <mat-hint align=\"start\" *ngIf=\"errorMessages.space\"><strong>12 alpha-numeric characters required</strong> </mat-hint>\n      </mat-input-container>\n      <mat-input-container class=\"example-full-width push-down\">\n        <input matInput placeholder=\"CDA access token\" [(ngModel)]=\"config.accessToken\" name=\"accessToken\" required>\n        <mat-hint align=\"start\" *ngIf=\"errorMessages.accessToken\"><strong>64 alpha-numeric characters required</strong> </mat-hint>\n      </mat-input-container>\n\n      <p *ngIf=\"deepLink\">\n        You can quickly access this configuration by calling <a href=\"{{ deepLink }}\">this URL</a>.\n      <p>\n\n      <p>\n        <button mat-button [disabled]=\"settingsForm.invalid\">Save configuration</button>\n        <button mat-button (click)=\"resetConfig()\" type=\"reset\">Reset</button>\n      </p>\n    </form>\n  </mat-card-content>\n</mat-card>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__contentful_service__ = __webpack_require__("../../../../../src/app/contentful.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ErrorMessages = (function () {
    function ErrorMessages() {
    }
    return ErrorMessages;
}());
var SettingsComponent = (function () {
    function SettingsComponent(ContentfulService, route) {
        this.ContentfulService = ContentfulService;
        this.route = route;
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.errorMessages = { space: null, accessToken: null };
        this.config = this.ContentfulService.getConfig();
        this.deepLink = false;
        if (this.route.snapshot.queryParams.spaceId &&
            this.route.snapshot.queryParams.apiKey) {
            console.log('joooo');
            this.config.space = this.route.snapshot.queryParams.spaceId;
            this.config.accessToken = this.route.snapshot.queryParams.apiKey;
            this.saveConfig();
        }
    };
    SettingsComponent.prototype.saveConfig = function () {
        this.errorMessages = this.getValidationErrors();
        if (!this.errorMessages.space && !this.errorMessages.accessToken) {
            this.ContentfulService.setConfig(this.config);
            this.deepLink = window.location.href + "?spaceId=" + this.config.space + "&apiKey=" + this.config.accessToken;
        }
    };
    SettingsComponent.prototype.resetConfig = function () {
        this.errorMessages = { space: null, accessToken: null };
        this.config = this.ContentfulService.resetConfig();
    };
    SettingsComponent.prototype.getValidationErrors = function () {
        var messages = { space: null, accessToken: null };
        if (!/^[a-z0-9]{12}$/.test(this.config.space)) {
            messages.space = true;
        }
        if (!/^[a-z0-9]{64}$/.test(this.config.accessToken)) {
            messages.accessToken = true;
        }
        return messages;
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-settings',
            template: __webpack_require__("../../../../../src/app/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/settings/settings.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__contentful_service__["a" /* ContentfulService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_17" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map