(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gigs-gigs-module"],{

/***/ "./src/app/gigs/gigs.module.ts":
/*!*************************************!*\
  !*** ./src/app/gigs/gigs.module.ts ***!
  \*************************************/
/*! exports provided: GigsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GigsPageModule", function() { return GigsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gigs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gigs.page */ "./src/app/gigs/gigs.page.ts");







var routes = [
    {
        path: '',
        component: _gigs_page__WEBPACK_IMPORTED_MODULE_6__["GigsPage"]
    }
];
var GigsPageModule = /** @class */ (function () {
    function GigsPageModule() {
    }
    GigsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_gigs_page__WEBPACK_IMPORTED_MODULE_6__["GigsPage"]]
        })
    ], GigsPageModule);
    return GigsPageModule;
}());



/***/ }),

/***/ "./src/app/gigs/gigs.page.html":
/*!*************************************!*\
  !*** ./src/app/gigs/gigs.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Gigs</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n\n    <div *ngIf=\"gigs\">\n        <ion-card *ngFor=\"let g of gigs\">\n            <ion-card-header>\n                <img src=\"{{g.photo}}\">\n                <ion-card-subtitle>{{g.username}}</ion-card-subtitle>\n                <ion-card-title>{{g.title}}</ion-card-title>\n            </ion-card-header>\n\n            <ion-card-content>\n                {{g.description}}\n            </ion-card-content>\n            <ion-card-content>\n                <ion-button fill=\"outline\" slot=\"end\"\n                            [routerLink]=\"['/sidemenu-question/freelance/tabf/tab-gigs/gig-details/', g._id]\">\n                    View Gig\n                </ion-button>\n            </ion-card-content>\n        </ion-card>\n    </div>\n</ion-content>"

/***/ }),

/***/ "./src/app/gigs/gigs.page.scss":
/*!*************************************!*\
  !*** ./src/app/gigs/gigs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpZ3MvZ2lncy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/gigs/gigs.page.ts":
/*!***********************************!*\
  !*** ./src/app/gigs/gigs.page.ts ***!
  \***********************************/
/*! exports provided: GigsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GigsPage", function() { return GigsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var GigsPage = /** @class */ (function () {
    function GigsPage(http) {
        this.http = http;
        this.gigs = undefined;
    }
    GigsPage.prototype.ngOnInit = function () {
        // this.fetchGigs();
    };
    GigsPage.prototype.ionViewWillEnter = function () {
        this.fetchGigs();
    };
    GigsPage.prototype.fetchGigs = function () {
        var _this = this;
        this.http.post('http://localhost:3000/fetchgigs', {})
            .subscribe(function (data) {
            console.log(data);
            _this.gigs = data;
        });
    };
    GigsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gigs',
            template: __webpack_require__(/*! ./gigs.page.html */ "./src/app/gigs/gigs.page.html"),
            styles: [__webpack_require__(/*! ./gigs.page.scss */ "./src/app/gigs/gigs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], GigsPage);
    return GigsPage;
}());



/***/ })

}]);
//# sourceMappingURL=gigs-gigs-module.js.map