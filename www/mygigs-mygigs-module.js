(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mygigs-mygigs-module"],{

/***/ "./src/app/mygigs/mygigs.module.ts":
/*!*****************************************!*\
  !*** ./src/app/mygigs/mygigs.module.ts ***!
  \*****************************************/
/*! exports provided: MygigsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MygigsPageModule", function() { return MygigsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _mygigs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mygigs.page */ "./src/app/mygigs/mygigs.page.ts");







var routes = [
    {
        path: '',
        component: _mygigs_page__WEBPACK_IMPORTED_MODULE_6__["MygigsPage"]
    }
];
var MygigsPageModule = /** @class */ (function () {
    function MygigsPageModule() {
    }
    MygigsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_mygigs_page__WEBPACK_IMPORTED_MODULE_6__["MygigsPage"]]
        })
    ], MygigsPageModule);
    return MygigsPageModule;
}());



/***/ }),

/***/ "./src/app/mygigs/mygigs.page.html":
/*!*****************************************!*\
  !*** ./src/app/mygigs/mygigs.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Gigs</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-row>\n        <ion-button (click)=\"addGigs()\">Add Gigs</ion-button>\n    </ion-row>\n    <div *ngIf=\"userGigs\"></div>\n    <ion-card *ngFor=\"let g of userGigs\">\n        <ion-card-header>\n            <img src=\"{{g.photo}}\">\n            <ion-card-subtitle>{{g.username}}</ion-card-subtitle>\n            <ion-card-title>{{g.title}}</ion-card-title>\n        </ion-card-header>\n\n        <ion-card-content>\n            {{g.description}}\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/mygigs/mygigs.page.scss":
/*!*****************************************!*\
  !*** ./src/app/mygigs/mygigs.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215Z2lncy9teWdpZ3MucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/mygigs/mygigs.page.ts":
/*!***************************************!*\
  !*** ./src/app/mygigs/mygigs.page.ts ***!
  \***************************************/
/*! exports provided: MygigsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MygigsPage", function() { return MygigsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var MygigsPage = /** @class */ (function () {
    function MygigsPage(http, router) {
        this.http = http;
        this.router = router;
        this.userGigs = undefined;
    }
    MygigsPage.prototype.ngOnInit = function () {
        // this.fetchUserGigs();
    };
    MygigsPage.prototype.ionViewWillEnter = function () {
        this.fetchUserGigs();
    };
    MygigsPage.prototype.fetchUserGigs = function () {
        var _this = this;
        this.http.post('http://localhost:3000/fetchgigs', { 'userid': localStorage.getItem('userid') })
            .subscribe(function (data) {
            console.log(data);
            _this.userGigs = data;
        });
    };
    MygigsPage.prototype.addGigs = function () {
        this.router.navigate(['sidemenu-question/freelance/tabf/tab-mygigs/add-gigs']);
    };
    MygigsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mygigs',
            template: __webpack_require__(/*! ./mygigs.page.html */ "./src/app/mygigs/mygigs.page.html"),
            styles: [__webpack_require__(/*! ./mygigs.page.scss */ "./src/app/mygigs/mygigs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], MygigsPage);
    return MygigsPage;
}());



/***/ })

}]);
//# sourceMappingURL=mygigs-mygigs-module.js.map