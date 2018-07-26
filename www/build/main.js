webpackJsonp([0],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
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
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(sanitizer, navCtrl, menuCtrl, platform) {
        this.sanitizer = sanitizer;
        this.navCtrl = navCtrl;
        this.menuCtrl = menuCtrl;
        this.platform = platform;
        this.distance = 10;
        this.dualValue2 = { lower: 33, upper: 60 };
        this.text = 0;
        this.gender = "Women";
        this.showme = true;
        this.lang = "English";
        this.headrName = "FoodMe";
        this.ready = false;
        this.attendants = [];
        this.cardDirection = "xy";
        this.cardOverlay = {
            like: {
                backgroundColor: '#28e93b'
            },
            dislike: {
                backgroundColor: '#e92828'
            }
        };
        this.menuCtrl.enable(true);
        if (this.platform.is('ios' || 'android')) {
            this.headrName = "Profile";
        }
        this.food = [
            'https://buzznigeria.com/wp-content/uploads/2013/10/pounded-yam1-e1433336691247-640x480.jpg',
            'https://afrifoodnetwork.com/wp-content/uploads/2017/06/miyan-kuka.jpg',
            'http://woman.ng/wp-content/uploads/2015/11/moi-moi-rollup-1.jpg',
            'https://buzznigeria.com/wp-content/uploads/2013/10/pounded-yam1-e1433336691247-640x480.jpg',
            'https://www.kitchensanctuary.com/wp-content/uploads/2015/08/Indonesian-Fried-Rice-square.jpg',
            'https://images-gmi-pmc.edge-generalmills.com/31c6322b-e7b8-4ba8-8f59-a2b354f4e21f.jpg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhM0TSPzQYnwkOK2YcWmrMcHNA_LjRRLNOZLCIn5daIZpO0g_1',
            'https://afrifoodnetwork.com/wp-content/uploads/2017/06/miyan-kuka.jpg',
            'https://sparkpeo.hs.llnwd.net/e1/resize/630m620/e4/nw/1/6/l162893320.jpg',
            'https://buzznigeria.com/wp-content/uploads/2013/10/pounded-yam1-e1433336691247-640x480.jpg',
            'https://afrifoodnetwork.com/wp-content/uploads/2017/06/miyan-kuka.jpg',
            'http://woman.ng/wp-content/uploads/2015/11/moi-moi-rollup-1.jpg',
            'https://buzznigeria.com/wp-content/uploads/2013/10/pounded-yam1-e1433336691247-640x480.jpg',
            'https://afrifoodnetwork.com/wp-content/uploads/2017/06/miyan-kuka.jpg',
            'https://img.buzzfeed.com/buzzfeed-static/static/2015-03/27/6/enhanced/webdr04/original-21405-1427452749-4.jpg?downsize=715:*&output-format=auto&output-quality=auto',
            'https://sparkpeo.hs.llnwd.net/e1/resize/630m620/e4/nw/1/6/l162893320.jpg',
            'https://www.kitchensanctuary.com/wp-content/uploads/2015/08/Indonesian-Fried-Rice-square.jpg',
            'https://sparkpeo.hs.llnwd.net/e1/resize/630m620/e4/nw/1/6/l162893320.jpg',
            'https://img.buzzfeed.com/buzzfeed-static/static/2015-03/27/6/enhanced/webdr05/original-22418-1427453181-8.jpg?crop=667:667;167,0&downsize=715:*&output-format=auto&output-quality=auto',
            'https://images-gmi-pmc.edge-generalmills.com/31c6322b-e7b8-4ba8-8f59-a2b354f4e21f.jpg',
            'https://images-gmi-pmc.edge-generalmills.com/31c6322b-e7b8-4ba8-8f59-a2b354f4e21f.jpg',
            'https://www.kitchensanctuary.com/wp-content/uploads/2015/08/Indonesian-Fried-Rice-square.jpg',
            'https://images-gmi-pmc.edge-generalmills.com/31c6322b-e7b8-4ba8-8f59-a2b354f4e21f.jpg',
            'http://woman.ng/wp-content/uploads/2015/11/moi-moi-rollup-1.jpg'
        ];
        for (var i = 0; i < this.food.length; i++) {
            this.attendants.push({
                id: i + 1,
                likeEvent: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */](),
                destroyEvent: new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */](),
                asBg: this.sanitizer.bypassSecurityTrustStyle('url(' + this.food[i] + ')')
            });
        }
        this.ready = true;
    }
    HomePage.prototype.onCardInteract = function (event) { console.log(event); };
    HomePage.prototype.chekPlatform = function () { console.log('hello there'); };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\David Ojo\Desktop\Media\Node Projects\ConceptCodes\FoodMe\src\pages\home\home.html"*/'\n\n<ion-header class="header">\n\n  <ion-navbar>\n\n  <ion-grid>\n\n  	<ion-row>\n\n		  <ion-col col-4></ion-col>\n\n  		<ion-col col-6>	\n\n  	  <ion-title>\n\n  	   <h4> {{headrName}}</h4>\n\n  	  </ion-title>\n\n  		</ion-col>\n\n  		<ion-col col-2>\n\n			<div menuToggle item-start class="avatar" >\n\n				<img src="https://specials-images.forbesimg.com/imageserve/5a8d90fd4bbe6f2652f61c15/416x416.jpg?background=000000&cropX1=0&cropX2=1999&cropY1=159&cropY2=2159" alt="image profile" (click)="chekPlatform">\n\n			</div>\n\n  		</ion-col>\n\n  	</ion-row>\n\n  </ion-grid>  \n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div class="main-content">\n\n		<div class="card-container">\n\n			<sc-card padding *ngFor="let attendant of attendants" \n\n				[orientation]="cardDirection" \n\n				[tinder-card]="cardOverlay" \n\n				[callDestroy]="attendant.destroyEvent" \n\n				[callLike]="attendant.likeEvent" \n\n				(onLike)="onCardInteract($event)">\n\n				<div class="user_img" [style.background-image]="attendant.asBg"></div>\n\n			</sc-card>\n\n		</div>\n\n       </div>\n\n </ion-content>\n\n\n\n\n\n\n\n\n\n<div class="menu">\n\n	<ion-menu ion-menu [content]="content">\n\n   <ion-header>\n\n   	<ion-toolbar>\n\n   	 <ion-grid>\n\n   	 	<ion-row>\n\n   	 		<ion-col col-2>\n\n   	 			<button menuClose icon-only>\n\n   	 				 <ion-icon ios="ios-arrow-back" md="md-arrow-back"></ion-icon>\n\n   	 			</button>\n\n   	 		</ion-col>\n\n   	 		<ion-col col-4><h2 class="rlw">Profile</h2></ion-col>\n\n   	 		<ion-col col-6></ion-col>\n\n   	 	</ion-row>\n\n   	 </ion-grid>\n\n   	</ion-toolbar>\n\n   </ion-header>\n\n   <ion-content>\n\n   <h4>discovery settings</h4>\n\n   	<ion-list>\n\n   		<li><a href="#" ion-item>\n\n   		    <ion-label>Maximum distance</ion-label>\n\n   				<ion-range range-right pin="true" min="0" max="50" [(ngModel)]="distance">\n\n   					<ion-label range-right>{{distance}}</ion-label>\n\n   				</ion-range>\n\n   			\n\n   		</a></li>\n\n   		<li><a href="#" ion-item>\n\n   			<ion-label>Looking for {{gender}}</ion-label>\n\n   			<ion-select [(ngModel)]="gender">\n\n   				<ion-option>Women</ion-option>\n\n   				<ion-option>Men</ion-option>\n\n   				<ion-option>Men and Women</ion-option>\n\n   			</ion-select>\n\n   		</a></li>\n\n   		<li><a href="#" ion-item>\n\n   			<ion-label>Age range {{dualValue2.lower}} - {{dualValue2.upper}}</ion-label>\n\n			<ion-range dualKnobs="true" pin="true" [(ngModel)]="dualValue2" min="21" max="72" step="3" ></ion-range>\n\n   		</a></li>\n\n   		<li><a href="#" ion-item>\n\n   			<ion-label>Show Me on Tinder {{showme}}</ion-label>\n\n   			<ion-toggle [(ngModel)]="showme" value="true" checked="true"></ion-toggle>\n\n   		</a></li>\n\n   		<p>\n\n   		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n\n   		<h4>Notification</h4>\n\n   		<p>\n\n   		proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n\n   		<li><a href="#" ion-item>\n\n   			<ion-label>New match</ion-label>\n\n   			<ion-toggle [(ngModel)]="match" value="true" checked="false"></ion-toggle>\n\n   		</a></li>\n\n   		<li><a href="#" ion-item>\n\n   			<ion-label>Messages</ion-label>\n\n   			<ion-toggle [(ngModel)]="messages" value="true" checked="false"></ion-toggle>\n\n   		</a></li>\n\n   		<li><a href="#" ion-item>\n\n   			<ion-label>Message Like</ion-label>\n\n   			<ion-toggle [(ngModel)]="like" value="true" checked="false"></ion-toggle>\n\n   		</a></li>\n\n   		<h4>Language</h4>\n\n   		<li><a href="#" ion-item>\n\n   		    <ion-label>{{lang}}</ion-label>\n\n   			<ion-select [(ngModel)]="lang">\n\n   				<ion-option value="English">English</ion-option>\n\n   				<ion-option value="Arabic">Arabic</ion-option>\n\n   				<ion-option value="French">French</ion-option>\n\n   				<ion-option value="Chines">Chines</ion-option>\n\n   				<ion-option value="Germany">Germany</ion-option>\n\n   			</ion-select>\n\n   		</a></li>\n\n   		<li><a href="#"  ion-item>Logout</a></li>\n\n   		<li><a href="#" menuClose ion-item>Close</a></li>\n\n   	</ion-list>\n\n   </ion-content>\n\n</ion-menu>\n\n<ion-nav #content [root]="rootPage"></ion-nav>\n\n</div>\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\David Ojo\Desktop\Media\Node Projects\ConceptCodes\FoodMe\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* MenuController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */]) === "function" && _d || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(217);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_pro__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_pro___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__ionic_pro__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_ng2_swipe_cards__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









__WEBPACK_IMPORTED_MODULE_5__ionic_pro__["Pro"].init('8B3E371C', {
    appVersion: '0/'
});
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_8_ng2_swipe_cards__["a" /* SwipeCardsModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(193);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\David Ojo\Desktop\Media\Node Projects\ConceptCodes\FoodMe\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\David Ojo\Desktop\Media\Node Projects\ConceptCodes\FoodMe\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map