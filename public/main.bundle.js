webpackJsonp(["main"],{

/***/ "./node_modules/angular-sweetalert-service/node_modules/@angular/core/@angular lazy recursive":
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
webpackEmptyAsyncContext.id = "./node_modules/angular-sweetalert-service/node_modules/@angular/core/@angular lazy recursive";

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = "h1{\r\n  color: #8235ff;\r\n}\r\nh2{\r\n  color: #33acfe;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<app-navbaruser></app-navbaruser>\n<router-outlet></router-outlet>\n<app-footer></app-footer>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Kitchen Talk';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__ = __webpack_require__("./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_landingpage_landingpage_component__ = __webpack_require__("./src/app/components/landingpage/landingpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_footer_footer_component__ = __webpack_require__("./src/app/components/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__ = __webpack_require__("./src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__ = __webpack_require__("./src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__ = __webpack_require__("./src/app/components/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_searchpage_searchpage_component__ = __webpack_require__("./src/app/components/searchpage/searchpage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_recipecard_recipecard_component__ = __webpack_require__("./src/app/components/recipecard/recipecard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_navbaruser_navbaruser_component__ = __webpack_require__("./src/app/components/navbaruser/navbaruser.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angular_sweetalert_service__ = __webpack_require__("./node_modules/angular-sweetalert-service/js/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_addpart_addpart_component__ = __webpack_require__("./src/app/components/addpart/addpart.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__service_partdata_service__ = __webpack_require__("./src/app/service/partdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_partdetails_partdetails_component__ = __webpack_require__("./src/app/components/partdetails/partdetails.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_checkout_checkout_component__ = __webpack_require__("./src/app/components/checkout/checkout.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_checkoutcard_checkoutcard_component__ = __webpack_require__("./src/app/components/checkoutcard/checkoutcard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_editpartcard_editpartcard_component__ = __webpack_require__("./src/app/components/editpartcard/editpartcard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__components_editpart_editpart_component__ = __webpack_require__("./src/app/components/editpart/editpart.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var applicationRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_7__components_landingpage_landingpage_component__["a" /* LandingpageComponent */] },
    { path: 'profile', component: __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */] },
    { path: 'search', component: __WEBPACK_IMPORTED_MODULE_13__components_searchpage_searchpage_component__["a" /* SearchpageComponent */] },
    { path: 'editpart/:_id', component: __WEBPACK_IMPORTED_MODULE_23__components_editpart_editpart_component__["a" /* EditpartComponent */] },
    { path: 'addpart', component: __WEBPACK_IMPORTED_MODULE_17__components_addpart_addpart_component__["a" /* AddpartComponent */] },
    { path: 'part/:_id', component: __WEBPACK_IMPORTED_MODULE_19__components_partdetails_partdetails_component__["a" /* PartdetailsComponent */] },
    { path: 'checkout', component: __WEBPACK_IMPORTED_MODULE_20__components_checkout_checkout_component__["a" /* CheckoutComponent */] },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_landingpage_landingpage_component__["a" /* LandingpageComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_register_register_component__["a" /* RegisterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__components_profile_profile_component__["a" /* ProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_13__components_searchpage_searchpage_component__["a" /* SearchpageComponent */],
                __WEBPACK_IMPORTED_MODULE_14__components_recipecard_recipecard_component__["a" /* RecipecardComponent */],
                __WEBPACK_IMPORTED_MODULE_15__components_navbaruser_navbaruser_component__["a" /* NavbaruserComponent */],
                __WEBPACK_IMPORTED_MODULE_17__components_addpart_addpart_component__["a" /* AddpartComponent */],
                __WEBPACK_IMPORTED_MODULE_19__components_partdetails_partdetails_component__["a" /* PartdetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_20__components_checkout_checkout_component__["a" /* CheckoutComponent */],
                __WEBPACK_IMPORTED_MODULE_21__components_checkoutcard_checkoutcard_component__["a" /* CheckoutcardComponent */],
                __WEBPACK_IMPORTED_MODULE_22__components_editpartcard_editpartcard_component__["a" /* EditpartcardComponent */],
                __WEBPACK_IMPORTED_MODULE_23__components_editpart_editpart_component__["a" /* EditpartComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */].forRoot(applicationRoutes)
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__service_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_16_angular_sweetalert_service__["a" /* SweetAlertService */],
                __WEBPACK_IMPORTED_MODULE_18__service_partdata_service__["a" /* PartdataService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/addpart/addpart.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/addpart/addpart.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"profile-page\">\n  <div class=\"wrapper\">\n    <div class=\"header header-filter\" style=\"background-image: url('https://media.istockphoto.com/photos/car-engine-detail-picture-id856707194?s=612x612'); width:100%;  \"></div>\n  \n    <div class=\"main main-raised\">\n      <div class=\"profile-content\">\n        <div class=\"container\">\n          <div class=\"row\" >\n            <div class=\"profile\">\n              <div class=\"name\">\n                <h3 class=\"title\">Add New Part</h3>\n              </div>\n              <form class=\"form-group\">\n              <div class=\"row col-md-6\">\n                <div class=\"col-sm-12 col-md-12\">\n                    <h4>Part name</h4>\n                    <input  placeholder=\"Enter spare part name\" class=\"form-control\" required=\"true\" name=\"name\" [(ngModel)]=\"name\"/>\n                    <br>\n                    <h4>Description</h4>\n                    <textarea class=\"form-control\" placeholder=\"Please enter a brief description for the spare part\" rows=\"5\" required=\"true\"\n                              name=\"description\" [(ngModel)]=\"description\"></textarea>\n                    <br>\n                    <h4>Brand</h4>\n                    <div class=\"row\">\n                      <input placeholder=\"Enter Brand\" class=\"form-control\" name=\"ingredient\" [(ngModel)]=\"brand\">\n                    </div>\n                    <br>\n                    <h4>Price</h4>\n                    <textarea class=\"form-control\" placeholder=\"Enter the price\" rows=\"1\" required=\"true\"\n                              name=\"price\" [(ngModel)]=\"price\"></textarea>\n                    <br>\n  \n                </div>\n              </div>\n              <div class=\"col-md-6\">\n                <h4>Conditions</h4>\n                <div class=\"row\">\n                  <input name=\"heal\" [(ngModel)]=\"condition\" placeholder=\"Enter part conditions\" class=\"form-control\"/>\n                  <!-- <button class=\"btn btn-success\" (click)=\"addHealth()\">add</button>\n                  <div class=\"row col-md-12\" *ngFor=\"let i of health\">\n                    <p>{{i}}</p>\n                  </div> -->\n                </div>\n                <br>\n                <h4>Suitable Vehicle Type</h4>\n                <div class=\"row\">\n                  <input name=\"occasion\" [(ngModel)]=\"vehicle_type\" placeholder=\"Enter suitable vehicle type\" class=\"form-control\"/>\n                  <!-- <button class=\"btn btn-success\" (click)=\"addOccasions()\">add</button>\n                  <div class=\"row col-md-12\" *ngFor=\"let i of occasions\">\n                    <p>{{i}}</p>\n                  </div> -->\n                </div>\n                <br>\n                <h4>Image</h4>\n                <input name=\"img\" [(ngModel)]=\"img\" placeholder=\"Enter image URL\" class=\"form-control\" required=\"true\" />\n                <br>\n              </div>\n                <div class=\"row\">\n                  <button  class=\"btn btn-primary\" (click)=\"savePart()\">Save Part</button>\n                  <button class=\"btn btn-danger\" (click)=\"cancelAdding()\">Cancel</button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  \n  </div>\n  \n  \n  \n  \n  </body>\n  \n  "

/***/ }),

/***/ "./src/app/components/addpart/addpart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AddpartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_partdata_service__ = __webpack_require__("./src/app/service/partdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AddpartComponent = /** @class */ (function () {
    function AddpartComponent(partdata, authservice, router) {
        // this.brands = [];
        // this.conditions = [];
        // this.vehicle_types = [];
        this.partdata = partdata;
        this.authservice = authservice;
        this.router = router;
    }
    AddpartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authservice.getProfile().subscribe(function (res) {
            _this.user = res.user;
            _this.username = res.user.username;
        }, function (err) {
            _this.router.navigate(['/home']);
            return false;
        });
        this.date = this.getDate();
    };
    AddpartComponent.prototype.getDate = function () {
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        return (dd + '.' + mm + '.' + yyyy);
    };
    AddpartComponent.prototype.savePart = function () {
        var _this = this;
        this.part = {
            name: this.name,
            brand: this.brand,
            img: this.img,
            description: this.description,
            price: this.price,
            condition: this.condition,
            vehicle_type: this.vehicle_type,
            rating: 0.0,
            count: 0,
            author: this.user._id,
            date: this.date,
            comments: this.comments,
        };
        this.partdata.savePart(this.part).subscribe(function (res) {
            if (res.state) {
                alert("data saved");
                _this.router.navigate(['/profile']);
            }
            else {
                console.log(res);
            }
        });
    };
    AddpartComponent.prototype.cancelAdding = function () {
        this.router.navigate(['/profile']);
    };
    AddpartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-addpart',
            template: __webpack_require__("./src/app/components/addpart/addpart.component.html"),
            styles: [__webpack_require__("./src/app/components/addpart/addpart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_partdata_service__["a" /* PartdataService */],
            __WEBPACK_IMPORTED_MODULE_2__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], AddpartComponent);
    return AddpartComponent;
}());



/***/ }),

/***/ "./src/app/components/checkout/checkout.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/checkout/checkout.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"profile-page\">\n  <div class=\"wrapper\">\n    <div class=\"header header-filter\" style=\"background-image: url('https://lirp.cdn-website.com/37bf5133/dms3rep/multi/opt/Hamilton-Honda-Hyundai-Auto-Spares-About-Gears-640w.jpg'); width:100%;  \"></div>\n  \n    <div class=\"main main-raised\">\n      <div class=\"profile-content\">\n        <div class=\"container\">\n          <div class=\"row\" >\n            <div class=\"profile\">\n              <div class=\"name\">\n                <h3 class=\"title\">Checkout</h3>\n              </div>\n              <form class=\"form-group\">\n              <h4>{{this.msg}}</h4>\n              <div class=\"col-md-12\">\n                <div class=\"col-md-4\">\n                  <h4 class=\"title\">Name</h4>\n                </div>\n                <div class=\"col-md-4\">\n                  <h4 class=\"title\">Price</h4>\n                </div>\n                <div class=\"tab-pane active\" id=\"studio\" *ngFor=\"let i of this.lis\">\n                  <div class=\"col-md-12\">\n                    <app-checkoutcard [Part]=\"i\" ></app-checkoutcard>\n                  </div>\n                </div>\n                <div class=\"col-md-12\">\n                  <div class=\"col-md-4\">\n                    <h4 class=\"title\">Total</h4>\n                  </div>\n                  <div class=\"col-md-4\">\n                    <h4 class=\"title\">{{this.total}}</h4>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <button  class=\"btn btn-primary\" (click)=\"checkout()\">Checkout Parts</button>\n                <button class=\"btn btn-danger\" (click)=\"cancelCheckout()\">Cancel</button>\n              </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  \n  </div>\n  \n  </body>\n  \n  "

/***/ }),

/***/ "./src/app/components/checkout/checkout.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_partdata_service__ = __webpack_require__("./src/app/service/partdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CheckoutComponent = /** @class */ (function () {
    function CheckoutComponent(authservice, partdata, router) {
        this.authservice = authservice;
        this.partdata = partdata;
        this.router = router;
        CheckoutComponent_1.instance = this;
    }
    CheckoutComponent_1 = CheckoutComponent;
    CheckoutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authservice.getProfile().subscribe(function (res) {
            CheckoutComponent_1.user = res.user;
            _this.msg = "User found";
            _this.getParts();
        }, function (err) {
            _this.msg = "An error occured;";
            return false;
        });
    };
    CheckoutComponent.deletePart = function (_id) {
        var index = 0;
        var list = CheckoutComponent_1.instance.lis;
        for (var i in list) {
            var id = list[i]['_id'];
            if (_id == id) {
                index = Number(i);
            }
        }
        list.splice(index, 1);
        var total = 0;
        for (var i in list) {
            total += Number(list[i]["price"]);
        }
        CheckoutComponent_1.instance.total = total;
        CheckoutComponent_1.instance.saveData();
    };
    CheckoutComponent.prototype.getParts = function () {
        var _this = this;
        var total = 0;
        var partlist = { partlist: CheckoutComponent_1.user.cart };
        this.partdata.searchByIdMult(partlist).subscribe(function (res) {
            _this.lis = res.part;
            for (var i in _this.lis) {
                total += Number(_this.lis[i]["price"]);
                _this.total = total;
            }
            if (_this.lis.length == 0) {
                _this.msg = "You didn't add any parts to your cart yet";
                return true;
            }
            else {
                _this.msg = "We found " + _this.lis.length + " parts in your cart ";
                return true;
            }
        });
        return true;
    };
    CheckoutComponent.prototype.checkout = function () {
        alert("Not Implemented");
    };
    CheckoutComponent.prototype.cancelCheckout = function () {
        this.router.navigate(['/home']);
    };
    CheckoutComponent.prototype.saveData = function () {
        var user = CheckoutComponent_1.user;
        var cart = [];
        for (var i in this.lis) {
            cart.push(this.lis[i]['_id']);
        }
        user.cart = cart;
        this.authservice.editUser(user).subscribe(function (res) {
            if (res.state) {
                alert("item removed");
            }
            else {
                alert("An error occurred");
            }
        });
    };
    CheckoutComponent = CheckoutComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-checkout',
            template: __webpack_require__("./src/app/components/checkout/checkout.component.html"),
            styles: [__webpack_require__("./src/app/components/checkout/checkout.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__service_partdata_service__["a" /* PartdataService */],
            __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], CheckoutComponent);
    return CheckoutComponent;
    var CheckoutComponent_1;
}());



/***/ }),

/***/ "./src/app/components/checkoutcard/checkoutcard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/checkoutcard/checkoutcard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12 col-sm-12\">\n  <div class=\"tim-row\">\n    <div class=\"col-md-4 col-sm-4\">\n      <label style=\"padding: 20;\">{{Part.name}}</label>\n    </div>\n    <div class=\"col-md-4 col-sm-4\">\n      <label style=\"left: 300;\">{{Part.price}}</label>\n    </div>\n    <div class=\"col-md-4 col-sm-4\">\n      <button class=\"btn btn-danger\"><i class=\"material-icons\" (click)=\"this.deletePart()\">delete</i></button>\n    </div>\n    \n    \n    \n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/checkoutcard/checkoutcard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckoutcardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__checkout_checkout_component__ = __webpack_require__("./src/app/components/checkout/checkout.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CheckoutcardComponent = /** @class */ (function () {
    function CheckoutcardComponent() {
    }
    CheckoutcardComponent.prototype.ngOnInit = function () {
    };
    CheckoutcardComponent.prototype.deletePart = function () {
        __WEBPACK_IMPORTED_MODULE_1__checkout_checkout_component__["a" /* CheckoutComponent */].deletePart(this.Part['_id']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], CheckoutcardComponent.prototype, "Part", void 0);
    CheckoutcardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-checkoutcard',
            template: __webpack_require__("./src/app/components/checkoutcard/checkoutcard.component.html"),
            styles: [__webpack_require__("./src/app/components/checkoutcard/checkoutcard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CheckoutcardComponent);
    return CheckoutcardComponent;
}());



/***/ }),

/***/ "./src/app/components/editpart/editpart.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/editpart/editpart.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"profile-page\">\n\n  <div class=\"wrapper\">\n    <div class=\"header header-filter\" >\n      <img src=\"{{this.part.img}}\" width=\"100%\" height=\"700\">\n    </div>\n  \n    <div class=\"main main-raised\">\n      <div class=\"profile-content\">\n        <div class=\"container\">\n          <form class=\"form-group\">\n            <div class=\"row\">\n              <div class=\"profile\">\n                <button class=\"btn btn-simple btn-primary btn-sm\" (click)=\"showImg()\">Edit Image</button>\n                <div class=\"col-md-12\" id=\"imgdiv\">\n                  <input class=\"form-control\" value={{this.part.img}} id=\"myimg\">\n                  <button class=\"btn-primary btn-simple btn\" id=\"imgbtn\" (click)=\"editImg()\">done</button>\n                </div>\n  \n  \n                <div class=\"name\">\n                  <h3 class=\"title\">Part name : {{this.part.name}}<button class=\"btn btn-simple btn-primary btn-sm\" (click)=\"showName()\">Edit</button></h3>\n                </div>\n                <div class=\"col-md-12\" id=\"namediv\">\n                  <input class=\"form-control\" value={{this.part.name}} id=\"myname\">\n                  <button class=\"btn-primary btn-simple btn\" id=\"namebtn\" (click)=\"editName()\">done</button>\n                </div>\n  \n              </div>\n            </div>\n            <div class=\"description text-center\">\n              <p>Description: {{this.part.description}}<button class=\"btn btn-simple btn-primary btn-sm\" (click)=\"showDescription()\">Edit</button></p>\n            </div>\n            <div class=\"col-md-12\" id=\"descriptiondiv\" align=\"center\">\n              <textarea class=\"form-control\" value={{this.part.description}} id=\"mydescription\"></textarea>\n              <button class=\"btn-primary btn-simple btn\" id=\"descriptionbtn\" (click)=\"editDescription()\">done</button>\n            </div>\n  \n            <div class=\"row\">\n              <div class=\"col-md-12 \">\n                <div class=\"profile-tabs\">\n                  <div class=\"name\" align=\"center\">\n                    <h3 class=\"title\">Vehicle Type <button class=\"btn btn-simple btn-primary btn-sm\" (click)=\"showType()\">Edit</button></h3>\n                    <div class=\"col-md-12\" id=\"typediv\">\n                      <input class=\"form-control\" value={{this.part.vehicle_type}} id=\"mytype\" >\n                      <button class=\"btn-primary btn-simple btn\" id=\"typebtn\" (click)=\"editType()\">done</button>\n                    </div>\n                    \n                  </div> \n  \n                  <div class=\"name\" align=\"center\">\n                    <h3 class=\"title\">Vehicle Condition <button class=\"btn btn-simple btn-primary btn-sm\" (click)=\"showCondition()\">Edit</button></h3>\n                    <div class=\"col-md-12\" id=\"conditiondiv\">\n                      <input class=\"form-control\" value={{this.part.condition}} id=\"mycondition\" >\n                      <button class=\"btn-primary btn-simple btn\" id=\"conditionbtn\" (click)=\"editCondition()\">done</button>\n                    </div>\n                    \n                  </div>\n  \n                  <div class=\"name\" align=\"center\">\n                    <h3 class=\"title\">Brand <button class=\"btn btn-simple btn-primary btn-sm\" (click)=\"showBrand()\">Edit</button></h3>\n                    <div class=\"col-md-12\" id=\"branddiv\">\n                      <input class=\"form-control\" value={{this.part.brand}} id=\"mybrand\" >\n                      <button class=\"btn-primary btn-simple btn\" id=\"brandbtn\" (click)=\"editBrand()\">done</button>\n                    </div>\n                    \n                  </div>\n\n\n                </div>\n  \n                \n              </div>\n              <div class=\"name\" align=\"center\">\n                <h3 class=\"title\">Price <button class=\"btn btn-simple btn-primary btn-sm\" (click)=\"showPrice()\">Edit</button></h3>\n                <p>{{this.part.price}}</p>\n              </div>\n              <div class=\"col-md-12\" id=\"pricediv\" align=\"center\">\n                <input class=\"form-control\" value={{this.part.price}} id=\"myprice\">\n                <button class=\"btn-primary btn-simple btn\" id=\"pricebtn\" (click)=\"editPrice()\">done</button>\n              </div>\n  \n            </div>\n\n            <div class=\"row\">\n              <div class=\"col-md-12\" align=\"center\">\n                <button class=\"btn btn-primary\" (click)=\"this.doneEditing()\">Done Editing</button>\n                <button class=\"btn btn-danger\" (click)=\"cancelEditing()\">Cancel Editing</button>\n              </div>\n              \n\n            </div>\n\n\n          </form>\n        </div>\n      </div>\n    </div>\n  \n  </div>\n  \n  \n  \n  </body>\n  "

/***/ }),

/***/ "./src/app/components/editpart/editpart.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditpartComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_partdata_service__ = __webpack_require__("./src/app/service/partdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditpartComponent = /** @class */ (function () {
    function EditpartComponent(partdata, acrouter, authservice, router) {
        var _this = this;
        this.partdata = partdata;
        this.acrouter = acrouter;
        this.authservice = authservice;
        this.router = router;
        // this.id = acrouter.snapshot.params['_id'];
        this.id = acrouter.snapshot.url[1].path;
        // console.log(acrouter.snapshot.url[1].path);
        partdata.searchById({ _id: this.id }).subscribe(function (res) {
            _this.part = res.part;
        });
    }
    EditpartComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authservice.getProfile().subscribe(function (res) {
            _this.user = res.user;
            _this.id = res.user._id;
        }, function (err) {
            _this.router.navigate(['/login']);
            return false;
        });
        document.getElementById("imgdiv").style.display = "none";
        document.getElementById("namediv").style.display = "none";
        document.getElementById("descriptiondiv").style.display = "none";
        document.getElementById("typediv").style.display = "none";
        document.getElementById("conditiondiv").style.display = "none";
        document.getElementById("branddiv").style.display = "none";
        document.getElementById("pricediv").style.display = "none";
    };
    EditpartComponent.prototype.showImg = function () {
        document.getElementById("imgdiv").style.display = "block";
        document.getElementById("myimg").select();
    };
    EditpartComponent.prototype.editImg = function () {
        document.getElementById("imgdiv").style.display = "none";
        this.part.img = document.getElementById("myimg").value;
        this.partdata.editPart(this.part).subscribe(function (res) {
            if (res.state) {
                alert("data updated");
            }
            else {
                console.log(res);
            }
        });
    };
    EditpartComponent.prototype.showName = function () {
        document.getElementById("namediv").style.display = "block";
        document.getElementById("myname").select();
    };
    EditpartComponent.prototype.editName = function () {
        document.getElementById("namediv").style.display = "none";
        this.part.name = document.getElementById("myname").value;
        this.partdata.editPart(this.part).subscribe(function (res) {
            if (res.state) {
                alert("data updated");
            }
            else {
                console.log(res);
            }
        });
    };
    EditpartComponent.prototype.showDescription = function () {
        document.getElementById("descriptiondiv").style.display = "block";
        document.getElementById("mydescription").select();
    };
    EditpartComponent.prototype.editDescription = function () {
        document.getElementById("descriptiondiv").style.display = "none";
        this.part.description = document.getElementById("mydescription").value;
        this.partdata.editPart(this.part).subscribe(function (res) {
            if (res.state) {
                alert("data updated");
            }
            else {
                console.log(res);
            }
        });
    };
    EditpartComponent.prototype.showType = function () {
        document.getElementById("typediv").style.display = "block";
        document.getElementById("mytype").select();
    };
    EditpartComponent.prototype.editType = function () {
        document.getElementById("typediv").style.display = "none";
        this.part.vehicle_type = document.getElementById("mytype").value;
        this.partdata.editPart(this.part).subscribe(function (res) {
            if (res.state) {
                alert("data updated");
            }
            else {
                console.log(res);
            }
        });
    };
    EditpartComponent.prototype.showCondition = function () {
        document.getElementById("conditiondiv").style.display = "block";
        document.getElementById("mycondition").select();
    };
    EditpartComponent.prototype.editCondition = function () {
        document.getElementById("conditiondiv").style.display = "none";
        this.part.condition = document.getElementById("mycondition").value.split(",");
        this.partdata.editPart(this.part).subscribe(function (res) {
            if (res.state) {
                alert("data updated");
            }
            else {
                console.log(res);
            }
        });
    };
    EditpartComponent.prototype.showBrand = function () {
        document.getElementById("branddiv").style.display = "block";
        document.getElementById("mybrand").select();
    };
    EditpartComponent.prototype.editBrand = function () {
        document.getElementById("branddiv").style.display = "none";
        this.part.brand = document.getElementById("mybrand").value.split(",");
        console.log(this.part);
        this.partdata.editPart(this.part).subscribe(function (res) {
            if (res.state) {
                alert("data updated");
            }
            else {
                console.log(res);
            }
        });
    };
    EditpartComponent.prototype.showPrice = function () {
        document.getElementById("pricediv").style.display = "block";
        document.getElementById("myprice").select();
    };
    EditpartComponent.prototype.editPrice = function () {
        document.getElementById("pricediv").style.display = "none";
        this.part.price = Number(document.getElementById("myprice").value);
        this.partdata.editPart(this.part).subscribe(function (res) {
            if (res.state) {
                alert("data updated");
            }
            else {
                console.log(res);
            }
        });
    };
    EditpartComponent.prototype.doneEditing = function () {
        alert("Data saved");
        this.router.navigate(['/profile']);
    };
    EditpartComponent.prototype.cancelEditing = function () {
        this.router.navigate(['/profile']);
    };
    EditpartComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-editpart',
            template: __webpack_require__("./src/app/components/editpart/editpart.component.html"),
            styles: [__webpack_require__("./src/app/components/editpart/editpart.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_partdata_service__["a" /* PartdataService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_3__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], EditpartComponent);
    return EditpartComponent;
}());



/***/ }),

/***/ "./src/app/components/editpartcard/editpartcard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/editpartcard/editpartcard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-nav-tabs\" style=\"background-color: #f8f1f5\">\n  <div class=\"header\" style=\"background-color: #fff8fc;\n  background-size: cover\">\n    <!-- colors: \"header-primary\", \"header-info\", \"header-success\", \"header-warning\", \"header-danger\" -->\n    <img class=\"img-src\" src=\"{{Part.img}}\" height=\"100%\" width=\"100%\">\n  </div>\n  <div class=\"content\">\n    <h3 class=\"header-primary text-center\">{{Part.name}}</h3>\n    <div class=\"tab-content text-center\">\n      <div class=\"tab-pane active\">\n        <p>{{Part.description}} </p>\n      </div>\n      <div>\n        <a [routerLink] = \"['/editpart',Part._id]\"><button class=\"btn btn-simple btn-primary btn-lg\">Edit Part</button></a>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/editpartcard/editpartcard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditpartcardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EditpartcardComponent = /** @class */ (function () {
    function EditpartcardComponent() {
    }
    EditpartcardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], EditpartcardComponent.prototype, "Part", void 0);
    EditpartcardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-editpartcard',
            template: __webpack_require__("./src/app/components/editpartcard/editpartcard.component.html"),
            styles: [__webpack_require__("./src/app/components/editpartcard/editpartcard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EditpartcardComponent);
    return EditpartcardComponent;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"footer\">\n  <div class=\"container\">\n    <nav class=\"pull-left\">\n      <ul>\n        <li>\n          <!-- <a [routerLink] = \"['/adminlogin']\" id=\"adminlog\" >\n            Administrative Login\n          </a> -->\n        </li>\n      </ul>\n    </nav>\n  </div>\n</footer>\n"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FooterComponent = /** @class */ (function () {
    function FooterComponent(router, authservice) {
        this.router = router;
        this.authservice = authservice;
    }
    FooterComponent.prototype.ngOnInit = function () {
        this.authservice.getProfile().subscribe(function (res) {
            document.getElementById("adminlog").style.display = "none";
        }, function (err) {
            console.log(err);
            return false;
        });
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__("./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__service_auth_service__["a" /* AuthService */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/landingpage/landingpage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/landingpage/landingpage.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"landing-page\">\r\n\r\n<div class=\"wrapper\">\r\n  <div class=\"header header-filter\" style=\"background-image: url('https://static3.bigstockphoto.com/2/0/3/large1500/302421448.jpg');\">\r\n    <div class=\"container\">\r\n      <div class=\"row\">\r\n        <div class=\"col-md-10\">\r\n          <h1 class=\"title\">T’S AUTO SPARE PARTS</h1>\r\n          <h4>A spare parts collection with hundreds of rare components suitable for any vehicle type, brand and in any condition with an\r\n            amazing search engine for browse spare parts easily. </h4>\r\n          <br />\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"main main-raised\">\r\n    <div class=\"container\">\r\n      <div class=\"section text-center section-landing\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-8 col-md-offset-2\">\r\n            <h2 class=\"title\">What is T’s auto spare parts</h2>\r\n            <h5 class=\"description\">Explore our online store</h5>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"features\">\r\n          <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n              <div class=\"info\">\r\n                <div class=\"icon icon-primary\">\r\n                  <i class=\"material-icons\">library_books</i>\r\n                </div>\r\n                <a [routerLink] = \"['/search']\"><h4 class=\"info-title\">Online spare parts Library</h4></a>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-md-6\">\r\n              <div class=\"info\">\r\n                <div class=\"icon icon-danger\">\r\n                  <i class=\"material-icons\">search</i>\r\n                </div>\r\n                <a [routerLink] = \"['/search']\"><h4 class=\"info-title\">Customizable spare parts search</h4></a>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n</body>\r\n"

/***/ }),

/***/ "./src/app/components/landingpage/landingpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingpageComponent = /** @class */ (function () {
    function LandingpageComponent(router) {
        this.router = router;
    }
    LandingpageComponent.prototype.ngOnInit = function () {
    };
    LandingpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-landingpage',
            template: __webpack_require__("./src/app/components/landingpage/landingpage.component.html"),
            styles: [__webpack_require__("./src/app/components/landingpage/landingpage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], LandingpageComponent);
    return LandingpageComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"signup-page\">\n  <div class=\"wrapper\">\n    <div class=\"header header-filter\" style=\"background-image: url('https://as1.ftcdn.net/v2/jpg/02/69/17/22/1000_F_269172204_8zG4wsLsPfBHSJqLuGkzR412UBWumrVk.jpg'); background-size: cover; background-position: top center;\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3\">\n            <div class=\"card card-signup\">\n              <form class=\"form-group\" (submit)=\"LoginData()\">\n                <div class=\"header header-primary text-center\">\n                  <h4>Log In</h4>\n                  <div class=\"social-line\">\n                    <a href=\"#facebook\" class=\"btn btn-simple btn-just-icon\">\n                      <i class=\"fa fa-facebook-square\"></i>\n                    </a>\n                    <a href=\"#twitter\" class=\"btn btn-simple btn-just-icon\">\n                      <i class=\"fa fa-twitter\"></i>\n                    </a>\n                    <a href=\"#g+\" class=\"btn btn-simple btn-just-icon\">\n                      <i class=\"fa fa-google-plus\"></i>\n                    </a>\n                  </div>\n                </div>\n                <p class=\"text-divider\">Or Be Classical</p>\n                <div class=\"content\">\n\n\n\n                  <div class=\"input-group label-floating has-error\">\n                        <span class=\"input-group-addon\">\n                          <i class=\"material-icons\">email</i>\n                        </span>\n                    <input type=\"email\" class=\"form-control\"  placeholder=\"Email...\" name=\"email\" [(ngModel)]=\"email\"/>\n                  </div>\n\n                  <div class=\"input-group label-floating has-error\">\n                        <span class=\"input-group-addon\">\n                          <i class=\"material-icons\">lock_outline</i>\n                        </span>\n                    <input type=\"password\" placeholder=\"Password...\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\"/>\n                  </div>\n\n                  <!-- If you want to add a checkbox to this form, uncomment this code\n\n                                    <div class=\"checkbox\">\n                                        <label>\n                                            <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\n                                            Subscribe to newsletter\n                                        </label>\n                                    </div> -->\n                </div>\n                <div class=\"footer text-center\">\n                  <button class=\"btn btn-simple btn-primary btn-lg\" type=\"submit\">Log In</button>\n                  <p class=\"text-divider\">Don't have an account?</p>\n                  <a [routerLink] = \"['/register']\" class=\"btn btn-simple btn-primary btn-lg\">Sign Up</a>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</body>\n\n\n\n\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__navbaruser_navbaruser_component__ = __webpack_require__("./src/app/components/navbaruser/navbaruser.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.LoginData = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        this.authService.loginUser(user).subscribe(function (res) {
            if (res.state) {
                __WEBPACK_IMPORTED_MODULE_3__navbaruser_navbaruser_component__["a" /* NavbaruserComponent */].user = res.userData;
                __WEBPACK_IMPORTED_MODULE_3__navbaruser_navbaruser_component__["a" /* NavbaruserComponent */].instance.update();
                _this.authService.saveData(res.token, res.userData);
                alert("You are logged in");
                _this.router.navigate(['/home']);
            }
            else {
                alert("logging in failed");
                _this.router.navigate(['/login']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/components/login/login.component.html"),
            styles: [__webpack_require__("./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-transparent navbar-absolute\">\n  <div class=\"container\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"navigation-example\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" [routerLink] = \"['/home']\">T’s Auto Spare Parts</a>\n    </div>\n\n    <div class=\"collapse navbar-collapse \" id=\"navigation-example\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li>\n          <a class=\"nav-link\" [routerLink] = \"['/login']\"><h4>Login / Sign In</h4> </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router) {
        this.router = router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__("./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/navbaruser/navbaruser.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbaruser/navbaruser.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar navbar-transparent navbar-absolute\">\n  <div class=\"container\">\n    <!-- Brand and toggle get grouped for better mobile display -->\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\"navigation-example\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button>\n      <a class=\"navbar-brand\" [routerLink] = \"['/home']\">T’S AUTO SPARE PARTS</a>\n    </div>\n\n    <div class=\"collapse navbar-collapse \" id=\"navigation-example\">\n      <ul class=\"nav navbar-nav navbar-right\">\n        <li id=\"profile\">\n          <a class=\"btn btn-simple\" style=\"color: #ffffff;\" [routerLink] = [this.address]><h4>{{this.name}}</h4> </a>\n        </li>\n        <li id=\"checkout\">\n          <a class=\"btn btn-simple\" style=\"color: #ffffff;\" (click) = \"checkout()\"><h4>Checkout</h4> </a>\n        </li>\n        <li id=\"login\">\n          <a class=\"btn btn-simple\" style=\"color: #ffffff;\" (click)=\"logout()\"><h4>Log Out</h4> </a>\n        </li>\n      </ul>\n    </div>\n  </div>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/navbaruser/navbaruser.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbaruserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbaruserComponent = /** @class */ (function () {
    function NavbaruserComponent(router, authservice) {
        this.router = router;
        this.authservice = authservice;
        NavbaruserComponent_1.instance = this;
    }
    NavbaruserComponent_1 = NavbaruserComponent;
    NavbaruserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authservice.getProfile().subscribe(function (res) {
            NavbaruserComponent_1.user = res.user;
            _this.update();
        }, function (err) {
            console.log(err);
            NavbaruserComponent_1.user = null;
            _this.update();
        });
    };
    NavbaruserComponent.prototype.update = function () {
        if (NavbaruserComponent_1.user == undefined || NavbaruserComponent_1.user == null) {
            this.name = 'Login / Sign Up';
            this.address = '/login';
            document.getElementById("login").style.display = "none";
            document.getElementById("checkout").style.display = "none";
        }
        else {
            this.name = "My Profile".toString();
            this.address = '/profile';
            document.getElementById("login").style.display = "block";
            document.getElementById("checkout").style.display = "block";
            if (NavbaruserComponent_1.user.isadmin) {
                document.getElementById("profile").style.display = "block";
            }
        }
    };
    NavbaruserComponent.prototype.logout = function () {
        localStorage.clear();
        alert("You are logged out");
        NavbaruserComponent_1.user = null;
        this.router.navigate(['/home']);
        this.update();
    };
    NavbaruserComponent.prototype.checkout = function () {
        this.router.navigate(['/checkout']);
    };
    NavbaruserComponent = NavbaruserComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbaruser',
            template: __webpack_require__("./src/app/components/navbaruser/navbaruser.component.html"),
            styles: [__webpack_require__("./src/app/components/navbaruser/navbaruser.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__service_auth_service__["a" /* AuthService */]])
    ], NavbaruserComponent);
    return NavbaruserComponent;
    var NavbaruserComponent_1;
}());



/***/ }),

/***/ "./src/app/components/partdetails/partdetails.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/partdetails/partdetails.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"profile-page\">\n\n  <div class=\"wrapper\">\n    <div class=\"header header-filter\" >\n      <!-- <img src=\"{{this.img}}\" width=\"100%\" height=\"700\"> -->\n      <img src=\"https://static3.bigstockphoto.com/2/0/3/large1500/302421448.jpg\" width=\"100%\" height=\"700\">\n    </div>\n  \n    <div class=\"main main-raised\">\n      <div class=\"profile-content\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"profile\">\n              <div class=\"name\">\n                <h3 class=\"title\">Part name : {{part.name}}</h3>\n                <h6>{{rating| number:'1.1-2'}}/5.0</h6>\n                <div id=\"rate\">\n                  <button class=\"btn btn-simple btn-primary btn-sm\" (click)=\"showRate()\">Rate This part</button>\n                  <div class=\"col-md-12\" id=\"ratediv\" align=\"center\">\n                    <input class=\"form-control\" placeholder=\"Enter your rating here\" id=\"myrate\" >\n                    <button class=\"btn-primary btn-simple btn\" id=\"ratebtn\" (click)=\"saveRate()\">done</button>\n                    <button class=\"btn-danger btn-simple btn\" id=\"cancelratebtn\" (click)=\"closeRate()\">Cancel</button>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"description text-center\">\n            <p>{{part.description}}</p>\n          </div>\n  \n          <div class=\"row\">\n            <div class=\"col-md-6 col-md-offset-3\">\n              <div class=\"profile-tabs\">\n                <div class=\"name\" align=\"center\">\n                  <h3 class=\"title\">Brand</h3>\n                  <!-- <div *ngFor=\"let i of this.part.brand\">\n                    <p>{{i}}</p><br>\n                  </div> -->\n                  <p>{{part.brand}}</p>\n                </div>\n                <div class=\"name\" align=\"center\">\n                  <h3 class=\"title\">Price</h3>\n                  <p>{{part.price}}</p>\n                </div>\n                <div class=\"name\" align=\"center\">\n                  <h3 class=\"title\">Comments</h3>\n                  <div *ngFor=\"let i of this.users\">\n                    <p><b>{{i}} :</b> {{this.part.comments[i]}}</p><br>\n                  </div>\n                </div>\n              </div>\n              <form class=\"form-group\">\n                <div id=\"comment\">\n                <p align=\"center\">Add new comment: <button class=\"btn btn-simple btn-primary btn-sm\" (click)=\"showComment()\">Add New</button></p>\n                <div class=\"col-md-12\" id=\"commentdiv\" align=\"center\">\n                  <input class=\"form-control\" placeholder=\"Enter your new comment here\" id=\"mycomment\" >\n                  <button class=\"btn-primary btn-simple btn\" id=\"commentbtn\" (click)=\"saveComment()\">done</button>\n                  <button class=\"btn-danger btn-simple btn\" id=\"cancelbtn\" (click)=\"closeComment()\">Cancel</button>\n                </div>\n                </div>\n              </form>\n              <!-- End Profile Tabs -->\n            </div>\n  \n          </div>\n  \n        </div>\n      </div>\n    </div>\n  \n  </div>\n  \n  \n  \n  </body>\n  "

/***/ }),

/***/ "./src/app/components/partdetails/partdetails.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartdetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_partdata_service__ = __webpack_require__("./src/app/service/partdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PartdetailsComponent = /** @class */ (function () {
    function PartdetailsComponent(partdata, authservice, acrouter) {
        var _this = this;
        this.partdata = partdata;
        this.authservice = authservice;
        this.acrouter = acrouter;
        // this.id = acrouter.snapshot.params['_id'];
        this.id = acrouter.snapshot.url[1].path;
        console.log(this.id);
        partdata.searchById({ id: this.id }).subscribe(function (res) {
            _this.part = res.part;
            _this.img = res.part.img;
            _this.comments = res.part.comments;
            _this.users = Object.keys(_this.comments);
            _this.rating = res.part.rating;
            _this.count = res.part.count;
            _this.temprate = 0;
        });
        this.user = JSON.parse(localStorage.getItem("user"));
    }
    PartdetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authservice.getProfile().subscribe(function (res) {
            _this.user = res.user;
            console.log(_this.user);
            document.getElementById("ratediv").style.display = "none";
        }, function (err) {
            document.getElementById("rate").style.display = "none";
            document.getElementById("comment").style.display = "none";
            return false;
        });
    };
    PartdetailsComponent.prototype.showComment = function () {
        document.getElementById("commentdiv").style.display = "block";
        //(<HTMLInputElement>document.getElementById("myemail")).select();
    };
    PartdetailsComponent.prototype.saveComment = function () {
        alert(this.count);
        document.getElementById("commentdiv").style.display = "none";
        if (this.part.comments == null) {
            alert("no comments");
            this.part.comments = {};
            this.users = [];
            this.part.comments[this.user.username] = (document.getElementById("mycomment").value);
            this.users.push(this.user.username);
            this.partdata.saveComment(this.part).subscribe(function (res) {
                if (res.state) {
                    alert("data updated");
                }
                else {
                    alert("data not updated");
                }
            });
        }
        else {
            this.part.comments[this.user.username] = (document.getElementById("mycomment").value);
            this.users.push(this.user.username);
            this.partdata.saveComment(this.part).subscribe(function (res) {
                if (res.state) {
                    alert("data updated");
                }
                else {
                    alert("data not updated");
                }
            });
        }
    };
    PartdetailsComponent.prototype.closeComment = function () {
        document.getElementById("commentdiv").style.display = "none";
        document.getElementById("mycomment").value = "";
    };
    PartdetailsComponent.prototype.showRate = function () {
        document.getElementById("ratediv").style.display = "block";
    };
    PartdetailsComponent.prototype.saveRate = function () {
        document.getElementById("ratediv").style.display = "none";
        this.temprate = Number(document.getElementById("myrate").value);
        this.part.rating = (this.rating * this.count + this.temprate) / (this.count + 1);
        this.rating = this.part.rating;
        this.count = +1;
        this.part.count = this.count;
        this.partdata.saveRate(this.part).subscribe(function (res) {
            if (res.state) {
                alert("data updated");
            }
            else {
                alert("data not updated");
            }
        });
    };
    PartdetailsComponent.prototype.closeRate = function () {
        document.getElementById("ratediv").style.display = "none";
        document.getElementById("myrate").value = "";
    };
    PartdetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-partdetails',
            template: __webpack_require__("./src/app/components/partdetails/partdetails.component.html"),
            styles: [__webpack_require__("./src/app/components/partdetails/partdetails.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__service_partdata_service__["a" /* PartdataService */],
            __WEBPACK_IMPORTED_MODULE_3__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], PartdetailsComponent);
    return PartdetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"profile-page\">\n<div class=\"wrapper\">\n  <div class=\"header header-filter\" style=\"background-image: url('http://fitphysio.com.au/wp-content/uploads/2015/06/slider03-1440x511.jpg'); width:100%;  \"></div>\n\n  <div class=\"main main-raised\">\n    <div class=\"profile-content\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <form class=\"form-group\">\n          <div class=\"profile\">\n            <div class=\"avatar\">\n              <img src={{this.user.img}} alt=\"Circle Image\" class=\"img-circle img-responsive img-raised\">\n              <button class=\"btn btn-simple btn-primary btn-sm\" (click)=\"showImg()\">Edit</button>\n              <div class=\"col-md-12\" id=\"imgdiv\">\n                <input class=\"form-control\" value={{this.user.img}} id=\"myimg\">\n                <button class=\"btn-primary btn-simple btn\" id=\"imgbtn\" (click)=\"editImg()\">done</button>\n              </div>\n            </div>\n            <div class=\"name\">\n              <h3 class=\"title\">{{this.user.name}}</h3>\n\n              <input type=\"hidden\" id=\"id\" value={{this.user._id}}>\n            </div>\n            <br>\n            <div class=\"name\">\n              <p>Country: {{this.user.country}} <button class=\"btn btn-simple btn-primary btn-sm\" (click)=\"showCountry()\">Edit</button></p>\n              <div class=\"col-md-12\" id=\"countrydiv\">\n                <input class=\"form-control\" value={{this.user.country}} id=\"mycountry\">\n                <button class=\"btn-primary btn-simple btn\" id=\"countrybtn\" (click)=\"editCountry()\">done</button>\n              </div>\n\n              <p>City: {{this.user.city}}  <button class=\"btn btn-simple btn-primary btn-sm\" (click)=\"showCity()\">Edit</button></p>\n              <div class=\"col-md-12\" id=\"citydiv\">\n                <input class=\"form-control\" value={{this.user.city}} id=\"mycity\">\n                <button class=\"btn-primary btn-simple btn\" id=\"citybtn\" (click)=\"editCity()\">done</button>\n              </div>\n            </div>\n          </div>\n          </form>\n        </div>\n\n        <div>\n          <div class=\"col-md-12 \">\n            <form class=\"form-group\">\n            <div class=\"profile-tabs\" align=\"center\">\n              <h5 >Email : {{this.user.email}} <button class=\"btn btn-simple btn-primary btn-sm\" (click)=\"showEmail()\">Edit</button></h5>\n              <div class=\"col-md-12\" id=\"emaildiv\">\n                <input class=\"form-control\" value={{this.user.email}} id=\"myemail\" type=\"email\">\n                <button class=\"btn-primary btn-simple btn\" id=\"emailbtn\" (click)=\"editEmail()\">done</button>\n              </div>\n\n              <p> User Name: {{this.user.username}} <button class=\"btn btn-simple btn-primary btn-sm\" (click)=\"showUsername()\">Edit</button></p>\n              <div class=\"col-md-12\" id=\"usernamediv\">\n                <input class=\"form-control\" value={{this.user.username}} id=\"myusername\" >\n                <button class=\"btn-primary btn-simple btn\" id=\"usernamebtn\" (click)=\"editUsername()\">done</button>\n              </div>\n\n              <div class=\"nav-align-center\">\n\n                <div class=\"tab-content gallery\">\n                  <div class=\"tab-pane active\" id=\"studio\">\n                    <div class=\"row\">\n                      <div class=\"col-md-12\" align=\"center\">\n                        <button class=\"btn btn-simple btn-primary btn-lg\" (click)=\"updatefinal()\">Update Profile</button>\n                        <br>\n                        <button class=\"btn btn-simple btn-danger btn-lg\" (click)=\"goback()\">Cancel</button>\n                      </div>\n                    </div>\n                  </div>\n\n                  <div class=\"row\">\n\n                    <div>\n                      <h3><b>My Parts</b> <button class=\"btn btn-simple btn-success btn-lg\" (click)=\"addPartNav()\">Add New Part</button></h3>\n                      <div class=\" gallery\">\n                        <div >\n                          <h4 align=\"center\">{{this.msg}}</h4>\n                        </div>\n                        <div class=\"tab-pane active\" id=\"studio2\" *ngFor=\"let i of this.lis\">\n                          <div class=\"col-sm-4\">\n                            <app-editpartcard [Part]=\"i\" ></app-editpartcard>\n                          </div>\n                        </div>\n\n                      </div>\n                      <!-- End Profile Tabs -->\n                    </div>\n                  </div>\n\n\n                </div>\n              </div>\n            </div>\n            <!-- End Profile Tabs -->\n            </form>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n</div>\n\n\n\n</body>\n"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service_partdata_service__ = __webpack_require__("./src/app/service/partdata.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(authservice, partdata, router) {
        this.authservice = authservice;
        this.partdata = partdata;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authservice.getProfile().subscribe(function (res) {
            _this.user = res.user;
            _this.id = res.user._id;
            _this.name = res.user.username;
            _this.getParts();
        }, function (err) {
            _this.router.navigate(['/login']);
            return false;
        });
        document.getElementById("emaildiv").style.display = "none";
        document.getElementById("usernamediv").style.display = "none";
        document.getElementById("countrydiv").style.display = "none";
        document.getElementById("citydiv").style.display = "none";
        document.getElementById("imgdiv").style.display = "none";
    };
    ProfileComponent.prototype.showEmail = function () {
        document.getElementById("emaildiv").style.display = "block";
        document.getElementById("myemail").select();
    };
    ProfileComponent.prototype.editEmail = function () {
        document.getElementById("emaildiv").style.display = "none";
        this.user.email = document.getElementById("myemail").value;
        this.authservice.editUser(this.user).subscribe(function (res) {
            if (res.state) {
                alert("data updated");
            }
            else {
                console.log(res);
            }
        });
    };
    ProfileComponent.prototype.showUsername = function () {
        document.getElementById("usernamediv").style.display = "block";
        document.getElementById("myusername").select();
    };
    ProfileComponent.prototype.editUsername = function () {
        document.getElementById("usernamediv").style.display = "none";
        this.user.username = document.getElementById("myusername").value;
        this.authservice.editUser(this.user).subscribe(function (res) {
            if (res.state) {
                alert("data updated");
            }
            else {
                console.log(res);
            }
        });
    };
    ProfileComponent.prototype.showCountry = function () {
        document.getElementById("countrydiv").style.display = "block";
        document.getElementById("mycountry").select();
    };
    ProfileComponent.prototype.editCountry = function () {
        document.getElementById("countrydiv").style.display = "none";
        this.user.country = document.getElementById("mycountry").value;
        this.authservice.editUser(this.user).subscribe(function (res) {
            if (res.state) {
                alert("data updated");
            }
            else {
                console.log(res);
            }
        });
    };
    ProfileComponent.prototype.showCity = function () {
        document.getElementById("citydiv").style.display = "block";
        document.getElementById("mycity").select();
    };
    ProfileComponent.prototype.editCity = function () {
        document.getElementById("citydiv").style.display = "none";
        this.user.city = document.getElementById("mycity").value;
        this.authservice.editUser(this.user).subscribe(function (res) {
            if (res.state) {
                alert("data updated");
            }
            else {
                console.log(res);
            }
        });
    };
    ProfileComponent.prototype.showOccupation = function () {
        document.getElementById("occupationdiv").style.display = "block";
        document.getElementById("myoccupation").select();
    };
    ProfileComponent.prototype.editOccupation = function () {
        document.getElementById("occupationdiv").style.display = "none";
        this.user.occupation = document.getElementById("myoccupation").value;
        this.authservice.editUser(this.user).subscribe(function (res) {
            if (res.state) {
                alert("data updated");
            }
            else {
                console.log(res);
            }
        });
    };
    ProfileComponent.prototype.showImg = function () {
        document.getElementById("imgdiv").style.display = "block";
        document.getElementById("myimg").select();
    };
    ProfileComponent.prototype.editImg = function () {
        document.getElementById("imgdiv").style.display = "none";
        this.user.img = document.getElementById("myimg").value;
        this.authservice.editUser(this.user).subscribe(function (res) {
            if (res.state) {
                alert("data updated");
            }
            else {
                console.log(res);
            }
        });
    };
    ProfileComponent.prototype.updatefinal = function () {
        alert("Profile Updated successfully !");
        this.router.navigate(['/profile']);
    };
    ProfileComponent.prototype.goback = function () {
        this.router.navigate(['/home']);
    };
    ProfileComponent.prototype.getParts = function () {
        var _this = this;
        var author = { author: this.user._id };
        this.partdata.searchByAuthor(author).subscribe(function (res) {
            _this.lis = res.part;
            if (_this.lis.length == 0) {
                _this.msg = "You didn't add any part yet";
                return true;
            }
            else {
                _this.msg = "We found " + _this.lis.length + " parts added by you ";
                return true;
            }
        });
        return true;
    };
    ProfileComponent.prototype.addPartNav = function () {
        this.router.navigate(['/addpart']);
    };
    ProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_3__service_partdata_service__["a" /* PartdataService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/recipecard/recipecard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/recipecard/recipecard.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card card-nav-tabs\" style=\"background-color: #f8f1f5\">\n  <div class=\"header\" style=\"background-color: #fff8fc;\n  background-size: cover\">\n    <!-- colors: \"header-primary\", \"header-info\", \"header-success\", \"header-warning\", \"header-danger\" -->\n    <img class=\"img-src\" src=\"{{Part.img}}\" height=\"100%\" width=\"100%\">\n  </div>\n  <div class=\"content\">\n    <h3 class=\"header-primary text-center\">{{Part.name}}</h3>\n    <!-- <h3 class=\"header-primary text-center\">Name</h3> -->\n    <div class=\"tim-row\" style=\"background-color: #7b1fa2;\">\n      <h3 class=\"text-center\" style=\"color:#ffffff;\">Price: $ {{Part.price}} </h3>\n      <!-- <h4 class=\"text-center\" style=\"color:#ffffff;\">{{Part.rating}}</h4> -->\n    </div>\n    \n    <div class=\"tab-content text-center\">\n      <div class=\"tab-pane active\">\n        <p>{{Part.description}} </p>\n        <!-- <p>This is description</p> -->\n      </div>\n      <div>\n        <!-- <a [routerLink] = \"['/part',Part._id]\"><button class=\"btn btn-primary\">View</button></a> -->\n        <a (click)= \"addToCart()\"><button class=\"btn btn-success\">Buy</button></a>\n      </div>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/recipecard/recipecard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipecardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__searchpage_searchpage_component__ = __webpack_require__("./src/app/components/searchpage/searchpage.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RecipecardComponent = /** @class */ (function () {
    function RecipecardComponent() {
    }
    RecipecardComponent.prototype.ngOnInit = function () {
    };
    RecipecardComponent.prototype.addToCart = function () {
        if (!this.User) {
            alert("Please login first");
        }
        else {
            // alert(this.User["name"])
            this.SearchPage.updateCart(this.Part["_id"]);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], RecipecardComponent.prototype, "Part", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], RecipecardComponent.prototype, "User", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__searchpage_searchpage_component__["a" /* SearchpageComponent */])
    ], RecipecardComponent.prototype, "SearchPage", void 0);
    RecipecardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-recipecard',
            template: __webpack_require__("./src/app/components/recipecard/recipecard.component.html"),
            styles: [__webpack_require__("./src/app/components/recipecard/recipecard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RecipecardComponent);
    return RecipecardComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"signup-page\">\n<div class=\"wrapper\">\n  <div class=\"header header-filter\" style=\"background-image: url('https://media.istockphoto.com/photos/car-engine-detail-picture-id856707194?s=612x612'); background-size: cover; background-position: top center;\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-md-4 col-md-offset-4 col-sm-6 col-sm-offset-3\">\n          <div class=\"card card-signup\">\n            <form class=\"form\" (submit)=\"registerData()\">\n              <div class=\"header header-primary text-center\">\n                <h4>Sign Up</h4>\n                <div class=\"social-line\">\n                  <a href=\"#facebook\" class=\"btn btn-simple btn-just-icon\">\n                    <i class=\"fa fa-facebook-square\"></i>\n                  </a>\n                  <a href=\"#twitter\" class=\"btn btn-simple btn-just-icon\">\n                    <i class=\"fa fa-twitter\"></i>\n                  </a>\n                  <a href=\"#g+\" class=\"btn btn-simple btn-just-icon\">\n                    <i class=\"fa fa-google-plus\"></i>\n                  </a>\n                </div>\n              </div>\n              <p class=\"text-divider\">Or Be Classical</p>\n              <div class=\"content\">\n                <div class=\"input-group label-floating has-error\">\n                        <span class=\"input-group-addon\">\n                          <i class=\"material-icons\">face</i>\n                        </span>\n                  <input type=\"text\" placeholder=\"Name...\" class=\"form-control\" name=\"Name\" [(ngModel)]=\"name\"/>\n                </div><div class=\"input-group label-floating has-error\">\n                        <span class=\"input-group-addon\">\n                          <i class=\"material-icons\">account_circle</i>\n                        </span>\n                <input type=\"text\" placeholder=\"User Name...\" class=\"form-control\" name=\"username\" [(ngModel)]=\"username\"/>\n              </div>\n\n\n                <div class=\"input-group label-floating has-error\">\n                        <span class=\"input-group-addon\">\n                          <i class=\"material-icons\">email</i>\n                        </span>\n                  <input type=\"email\" class=\"form-control\"  placeholder=\"Email...\" name=\"email\" [(ngModel)]=\"email\"/>\n                </div>\n\n                <div class=\"input-group label-floating has-error\">\n                        <span class=\"input-group-addon\">\n                          <i class=\"material-icons\">lock_outline</i>\n                        </span>\n                  <input type=\"password\" placeholder=\"Password...\" class=\"form-control\" name=\"password\" [(ngModel)]=\"password\"/>\n                </div>\n\n                <!-- If you want to add a checkbox to this form, uncomment this code\n\n                                  <div class=\"checkbox\">\n                                      <label>\n                                          <input type=\"checkbox\" name=\"optionsCheckboxes\" checked>\n                                          Subscribe to newsletter\n                                      </label>\n                                  </div> -->\n              </div>\n              <div class=\"footer text-center\">\n                <button class=\"btn btn-simple btn-primary btn-lg\" type=\"submit\">Get Started</button>\n                <p class=\"text-divider\">Already have an account?</p>\n                <a [routerLink] = \"['/login']\" class=\"btn btn-simple btn-primary btn-lg\">Log In</a>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n</body>\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerData = function () {
        var _this = this;
        var user = {
            name: this.name,
            username: this.username,
            email: this.email,
            password: this.password
        };
        this.authService.registerUser(user).subscribe(function (res) {
            console.log("Sign up successfully");
            _this.router.navigate(['/login']);
        });
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-register',
            template: __webpack_require__("./src/app/components/register/register.component.html"),
            styles: [__webpack_require__("./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/searchpage/searchpage.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/searchpage/searchpage.component.html":
/***/ (function(module, exports) {

module.exports = "<body class=\"profile-page\">\n<div class=\"wrapper\">\n  <div class=\"header header-filter\" style=\"background-image: url('https://static3.bigstockphoto.com/2/0/3/large1500/302421448.jpg'); width:100%;  \"></div>\n\n  <div class=\"main main-raised\">\n    <div class=\"profile-content\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"profile\">\n            <div class=\"name\">\n              <h3 class=\"title\">Search Spare Parts</h3>\n            </div>\n          </div>\n        </div>\n        <div class=\"text-center\">\n          <div class=\"container-fluid row \" style=\"background: #7b1fa2\">\n            <div class=\"col-md-4\">\n              <label class=\"h4\" for=\"sel1\" style=\"color: #ffffff;\">Select search option:</label>\n              <select class=\"form-control h4\" id=\"sel1\" name=\"searchcategory\" [(ngModel)]=\"searchcategory\" style=\"text-align: center; font-size: larger; color: #ffffff;\">\n                <option class=\"h3\" style=\"background: #ffffff\" value=\"Select\" disabled=\"disabled\">Select search option</option>\n                <option class=\"h3\" style=\"background: #7b1fa2\">Brand</option>\n                <option class=\"h3\" style=\"background: #7b1fa2\">Condition</option>\n                <option class=\"h3\" style=\"background: #7b1fa2\">Vehicle Type</option>\n              </select>\n            </div>\n\n            <div class=\"col-md-4\">\n              <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control h4\" placeholder=\"Type key words\" name=\"keyword\" [(ngModel)]=\"keyword\" style=\"color: #ffffff;\">\n              </div>\n            </div>\n            <div class=\"col-md-4\">\n              <div class=\"row\">\n                <label></label>\n              </div>\n              <button class=\"btn btn-info\" (click)=\"partSearch()\" style=\"align-items: center;\">\n                Search Spare Parts\n              </button>\n            </div>\n          </div>\n\n        </div>\n\n        <div class=\"row\">\n\n              <div>\n\n                <div class=\" gallery\">\n                  <div >\n                    <h4 align=\"center\">{{this.msg}}</h4>\n                  </div>\n                  <div class=\"tab-pane active\" id=\"studio\" *ngFor=\"let i of this.lis\">\n                    <div class=\"col-sm-4\">\n                      <app-recipecard [Part]=\"i\" [User]=\"this.user\" [SearchPage] = \"this.instance\"></app-recipecard>\n                    </div>\n                  </div>\n\n                </div>\n            <!-- End Profile Tabs -->\n              </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n\n</div>\n\n\n\n\n</body>\n"

/***/ }),

/***/ "./src/app/components/searchpage/searchpage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchpageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_partdata_service__ = __webpack_require__("./src/app/service/partdata.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service_auth_service__ = __webpack_require__("./src/app/service/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchpageComponent = /** @class */ (function () {
    function SearchpageComponent(partdata, authservice) {
        this.partdata = partdata;
        this.authservice = authservice;
    }
    SearchpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.authservice.getProfile().subscribe(function (res) {
            _this.user = res.user;
            _this.msg = "";
            console.log(_this.msg);
        }, function (err) {
            _this.msg = "An error occured;";
            console.log(err);
        });
        this.instance = this;
    };
    SearchpageComponent.prototype.updateCart = function (partid) {
        var cart = this.user["cart"];
        cart.push(partid);
        this.user.cart = cart;
        console.log(this.user.cart);
        this.authservice.editUser(this.user).subscribe(function (res) {
            if (res.state) {
                alert("data updated");
            }
            else {
                console.log(res);
            }
        });
    };
    SearchpageComponent.prototype.partSearch = function () {
        var _this = this;
        var t = performance.now();
        var part = {
            searchcategory: this.searchcategory,
            keyword: this.keyword
        };
        var data;
        switch (this.searchcategory) {
            case "Brand": {
                data = { brand: [part.keyword] };
                this.partdata.searchByBrand(data).subscribe(function (res) {
                    _this.lis = res.part;
                    if (_this.lis.length == 0) {
                        _this.msg = "No Available parts for your search";
                    }
                    else {
                        _this.msg = "We found " + _this.lis.length + " parts of brand " + part.keyword;
                    }
                });
                break;
            }
            case "Vehicle Type": {
                data = { vehicle_type: [part.keyword] };
                this.partdata.searchByVehicle_type(data).subscribe(function (res) {
                    _this.lis = res.part;
                    if (_this.lis.length == 0) {
                        _this.msg = "No Available parts for your search";
                    }
                    else {
                        _this.msg = "We found " + _this.lis.length + " parts for " + part.keyword;
                    }
                });
                break;
            }
            case "Condition": {
                data = { condition: [part.keyword] };
                this.partdata.searchByCondition(data).subscribe(function (res) {
                    _this.lis = res.part;
                    if (_this.lis.length == 0) {
                        _this.msg = "No Available parts for your search";
                    }
                    else {
                        _this.msg = "We found " + _this.lis.length + " in " + part.keyword + "condition";
                    }
                });
                break;
            }
            default: {
                // data = {brand:[part.keyword]};
                this.partdata.searchAllPart().subscribe(function (res) {
                    _this.lis = res.part;
                    if (_this.lis.length == 0) {
                        _this.msg = "No Available parts for your search";
                    }
                    else {
                        _this.msg = "We found " + _this.lis.length + " parts";
                    }
                    console.log(_this.msg);
                });
                break;
            }
        }
        console.log(performance.now() - t);
    };
    SearchpageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-searchpage',
            template: __webpack_require__("./src/app/components/searchpage/searchpage.component.html"),
            styles: [__webpack_require__("./src/app/components/searchpage/searchpage.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_partdata_service__["a" /* PartdataService */],
            __WEBPACK_IMPORTED_MODULE_2__service_auth_service__["a" /* AuthService */]])
    ], SearchpageComponent);
    return SearchpageComponent;
}());



/***/ }),

/***/ "./src/app/service/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// import {Http, Headers} from '@angular/http';



var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    AuthService.prototype.registerUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/user/register', user, { headers: headers }).map(function (res) { return res; });
    };
    AuthService.prototype.fetchToken = function () {
        this.authtoken = localStorage.getItem("tokenId");
    };
    AuthService.prototype.fetchUser = function () {
        var user = localStorage.getItem("user");
    };
    AuthService.prototype.loginUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/user/login', user, { headers: headers }).map(function (res) { return res; });
    };
    AuthService.prototype.loginAdmin = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/admin/login', user, { headers: headers }).map(function (res) { return res; });
    };
    AuthService.prototype.saveData = function (token, userdata) {
        this.authtoken = token;
        this.user = userdata;
        localStorage.setItem("tokenId", token);
        localStorage.setItem('user', JSON.stringify(userdata));
    };
    AuthService.prototype.editUser = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/user/update', user, { headers: headers }).map(function (res) { return res; });
    };
    AuthService.prototype.getAdminProfile = function () {
        this.fetchToken();
        return this.http.post('http://localhost:3000/admin/getprofile', { user: "asm" }, { headers: { 'Authorization': this.authtoken } })
            .map(function (res) { return res; });
    };
    AuthService.prototype.getProfile = function () {
        //this.fetchToken();
        /*const headers =  new HttpHeaders();
        const data = {user: 'asm'};
        this.fetchToken();
        headers.append('Authorization', 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1YWE5MDMyMzY1ODQ4MDNjM2MwNDBkZDkiLCJ1c2VybmFtZSI6ImFzbSIsIm5hbWUiOiJBa2hpdGhhIiwiZW1haWwiOiJhc21hbmppdGhhQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiJDJhJDEwJDRVTDBWdE15TWpQZUJNWXhVLi5RNk9RRHFoUlkuVmRYUVJoeUpraUUuNHE5Nk1yU2c5clRTIiwiX192IjowLCJpYXQiOjE1MjMxNTYzMTUsImV4cCI6MTUyMzc2MTExNX0.kBnzu3ajquhqx_5-6YwDqsZNqRbdHo2Tpz7waQPyFeU');
        return this.http.post('http://localhost:3000/user/profile', data, {headers: headers}).map((res: any) => res);*/
        var httpOptions = {
            headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({})
        };
        //let headers = new HttpHeaders();
        this.fetchToken();
        //headers.append('Authorization', '123456');
        //headers.append('Content-Type', 'application/json');
        //this.httpOptions.headers.Authorization =  this.authtoken.toString();
        //httpOptions.headers.set('Authorization':this.authtoken);
        return this.http.post('http://localhost:3000/user/profile', { user: "asm" }, { headers: { 'Authorization': this.authtoken } })
            .map(function (res) { return res; });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/service/partdata.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PartdataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PartdataService = /** @class */ (function () {
    function PartdataService(http) {
        this.http = http;
    }
    PartdataService.prototype.searchByVehicle_type = function (vehicle_type) {
        return this.http.post('http://localhost:3000/part/type', vehicle_type).map(function (res) { return res; });
    };
    PartdataService.prototype.searchByBrand = function (brand) {
        return this.http.post('http://localhost:3000/part/brand', brand).map(function (res) { return res; });
    };
    PartdataService.prototype.searchByCondition = function (condition) {
        return this.http.post('http://localhost:3000/part/condition', condition).map(function (res) { return res; });
    };
    PartdataService.prototype.searchById = function (id) {
        return this.http.post('http://localhost:3000/part/id', id).map(function (res) { return res; });
    };
    PartdataService.prototype.searchByAuthor = function (author) {
        return this.http.post('http://localhost:3000/part/author', author).map(function (res) { return res; });
    };
    PartdataService.prototype.savePart = function (part) {
        return this.http.post('http://localhost:3000/part/savepart', part).map(function (res) { return res; });
    };
    PartdataService.prototype.saveComment = function (part) {
        return this.http.post('http://localhost:3000/part/savecomment', part).map(function (res) { return res; });
    };
    PartdataService.prototype.saveRate = function (part) {
        console.log(part);
        return this.http.post('http://localhost:3000/part/saverate', part).map(function (res) { return res; });
    };
    PartdataService.prototype.editPart = function (part) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]();
        headers.append('Content-Type', 'application/json');
        return this.http.post('http://localhost:3000/part/update', part, { headers: headers }).map(function (res) { return res; });
    };
    PartdataService.prototype.deletePart = function (part) {
        return this.http.post('http://localhost:3000/part/delete', part).map(function (res) { return res; });
    };
    PartdataService.prototype.searchAllPart = function () {
        return this.http.post('http://localhost:3000/part/searchall', { user: "as" }).map(function (res) { return res; });
    };
    PartdataService.prototype.searchByIdMult = function (id_lis) {
        console.log(id_lis);
        return this.http.post('http://localhost:3000/part/id_mult', id_lis).map(function (res) { return res; });
    };
    PartdataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], PartdataService);
    return PartdataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map