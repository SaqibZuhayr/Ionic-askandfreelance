(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["myjob-applied-myjob-applied-module"],{

/***/ "./src/app/myjob-applied/myjob-applied.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/myjob-applied/myjob-applied.module.ts ***!
  \*******************************************************/
/*! exports provided: MyjobAppliedPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyjobAppliedPageModule", function() { return MyjobAppliedPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _myjob_applied_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myjob-applied.page */ "./src/app/myjob-applied/myjob-applied.page.ts");







var routes = [
    {
        path: '',
        component: _myjob_applied_page__WEBPACK_IMPORTED_MODULE_6__["MyjobAppliedPage"]
    }
];
var MyjobAppliedPageModule = /** @class */ (function () {
    function MyjobAppliedPageModule() {
    }
    MyjobAppliedPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_myjob_applied_page__WEBPACK_IMPORTED_MODULE_6__["MyjobAppliedPage"]]
        })
    ], MyjobAppliedPageModule);
    return MyjobAppliedPageModule;
}());



/***/ }),

/***/ "./src/app/myjob-applied/myjob-applied.page.html":
/*!*******************************************************!*\
  !*** ./src/app/myjob-applied/myjob-applied.page.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n            <ion-back-button defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Applicants Applied</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card *ngFor=\"let user of applicants\">\n        <ion-card-title>\n            {{user.first_name}} Details:\n        </ion-card-title>\n        <ion-card-content>\n            <ion-item>\n                <ion-label>Total Gigs :{{user.gigs.length}}</ion-label>\n            </ion-item>\n            <ion-item>\n                <ion-label>Orders Completed : {{user.ordersAccepted.length}}</ion-label>\n            </ion-item>\n            <ion-item>\n                <ion-label>Questions Posted : {{user.questions.length}}</ion-label>\n            </ion-item>\n            <ion-item>\n                <ion-label>Answer Posted :{{user.answers.length}}</ion-label>\n            </ion-item>\n            <ion-item>\n                <ion-label>Total Gigs :{{user.gigs.length}}</ion-label>\n            </ion-item>\n        </ion-card-content>\n    </ion-card>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/myjob-applied/myjob-applied.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/myjob-applied/myjob-applied.page.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215am9iLWFwcGxpZWQvbXlqb2ItYXBwbGllZC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/myjob-applied/myjob-applied.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/myjob-applied/myjob-applied.page.ts ***!
  \*****************************************************/
/*! exports provided: MyjobAppliedPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyjobAppliedPage", function() { return MyjobAppliedPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var MyjobAppliedPage = /** @class */ (function () {
    function MyjobAppliedPage(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.applicants = undefined;
    }
    MyjobAppliedPage.prototype.ngOnInit = function () {
    };
    MyjobAppliedPage.prototype.ionViewWillEnter = function () {
        this.viewApplications();
    };
    MyjobAppliedPage.prototype.viewApplications = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log(params.id);
            _this.http.post('http://localhost:3000/getapplicants', { 'jobID': params.id }).subscribe(function (data) {
                _this.applicants = data;
                console.log(data);
            });
        });
    };
    MyjobAppliedPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-myjob-applied',
            template: __webpack_require__(/*! ./myjob-applied.page.html */ "./src/app/myjob-applied/myjob-applied.page.html"),
            styles: [__webpack_require__(/*! ./myjob-applied.page.scss */ "./src/app/myjob-applied/myjob-applied.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], MyjobAppliedPage);
    return MyjobAppliedPage;
}());



/***/ })

}]);
//# sourceMappingURL=myjob-applied-myjob-applied-module.js.map