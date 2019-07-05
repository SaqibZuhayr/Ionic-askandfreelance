(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["myjobs-myjobs-module"],{

/***/ "./src/app/myjobs/myjobs.module.ts":
/*!*****************************************!*\
  !*** ./src/app/myjobs/myjobs.module.ts ***!
  \*****************************************/
/*! exports provided: MyjobsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyjobsPageModule", function() { return MyjobsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _myjobs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./myjobs.page */ "./src/app/myjobs/myjobs.page.ts");







var routes = [
    {
        path: '',
        component: _myjobs_page__WEBPACK_IMPORTED_MODULE_6__["MyjobsPage"]
    }
];
var MyjobsPageModule = /** @class */ (function () {
    function MyjobsPageModule() {
    }
    MyjobsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_myjobs_page__WEBPACK_IMPORTED_MODULE_6__["MyjobsPage"]]
        })
    ], MyjobsPageModule);
    return MyjobsPageModule;
}());



/***/ }),

/***/ "./src/app/myjobs/myjobs.page.html":
/*!*****************************************!*\
  !*** ./src/app/myjobs/myjobs.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n            <ion-back-button defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>My Jobs</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n    <ion-card *ngFor=\"let j of myjobs\" class=\"card border-info mb-3 \">\n        <ion-card-content class=\"card \">\n            <div class=\"row\">\n                <div class=\"col-md-3\">\n                    <p class=\"card-text small question\">{{j.category}}</p>\n                </div>\n                <div class=\"col-md-9\">\n                    <p><a class=\"card-link\">{{j.title}}</a></p>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-11\">\n                    <p>{{j.details}}</p>\n                </div>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-10\"></div>\n                <div class=\"col-sm-2 btn-margin\">\n                    <ion-button routerLink=\"/sidemenu-question/jobs/tabsj/myjob-applied/{{j._id}}\" type=\"button\"\n                            class=\"btn btn-primary\">\n                        View Applications\n                    </ion-button>\n                </div>\n            </div>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/myjobs/myjobs.page.scss":
/*!*****************************************!*\
  !*** ./src/app/myjobs/myjobs.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215am9icy9teWpvYnMucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/myjobs/myjobs.page.ts":
/*!***************************************!*\
  !*** ./src/app/myjobs/myjobs.page.ts ***!
  \***************************************/
/*! exports provided: MyjobsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyjobsPage", function() { return MyjobsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var MyjobsPage = /** @class */ (function () {
    function MyjobsPage(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
        this.myjobs = undefined;
    }
    MyjobsPage.prototype.ngOnInit = function () {
    };
    MyjobsPage.prototype.ionViewWillEnter = function () {
        this.getMyJobs();
    };
    MyjobsPage.prototype.getMyJobs = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            // console.log(params.id);
            _this.http.post('http://localhost:3000/myjobs', { 'userid': localStorage.getItem('userid') }).subscribe(function (data) {
                _this.myjobs = data;
                console.log(data);
            });
        });
    };
    MyjobsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-myjobs',
            template: __webpack_require__(/*! ./myjobs.page.html */ "./src/app/myjobs/myjobs.page.html"),
            styles: [__webpack_require__(/*! ./myjobs.page.scss */ "./src/app/myjobs/myjobs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], MyjobsPage);
    return MyjobsPage;
}());



/***/ })

}]);
//# sourceMappingURL=myjobs-myjobs-module.js.map