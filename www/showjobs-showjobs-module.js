(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["showjobs-showjobs-module"],{

/***/ "./src/app/showjobs/showjobs.module.ts":
/*!*********************************************!*\
  !*** ./src/app/showjobs/showjobs.module.ts ***!
  \*********************************************/
/*! exports provided: ShowjobsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowjobsPageModule", function() { return ShowjobsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _showjobs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./showjobs.page */ "./src/app/showjobs/showjobs.page.ts");







var routes = [
    {
        path: '',
        component: _showjobs_page__WEBPACK_IMPORTED_MODULE_6__["ShowjobsPage"],
    }
];
var ShowjobsPageModule = /** @class */ (function () {
    function ShowjobsPageModule() {
    }
    ShowjobsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_showjobs_page__WEBPACK_IMPORTED_MODULE_6__["ShowjobsPage"]]
        })
    ], ShowjobsPageModule);
    return ShowjobsPageModule;
}());



/***/ }),

/***/ "./src/app/showjobs/showjobs.page.html":
/*!*********************************************!*\
  !*** ./src/app/showjobs/showjobs.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Jobs</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content *ngIf=\"jobs\">\n    <ion-card *ngFor=\"let j of jobs\">\n        <ion-item>\n            <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n            <ion-label>{{j.category}}</ion-label>\n            <ion-button fill=\"outline\" slot=\"end\"\n                        [routerLink]=\"['/sidemenu-question/jobs/tabsj/showjobs/job-details/', j._id]\">\n                View\n            </ion-button>\n        </ion-item>\n\n        <ion-card-content>\n            {{j.details}}\n        </ion-card-content>\n    </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/showjobs/showjobs.page.scss":
/*!*********************************************!*\
  !*** ./src/app/showjobs/showjobs.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Nob3dqb2JzL3Nob3dqb2JzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/showjobs/showjobs.page.ts":
/*!*******************************************!*\
  !*** ./src/app/showjobs/showjobs.page.ts ***!
  \*******************************************/
/*! exports provided: ShowjobsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowjobsPage", function() { return ShowjobsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ShowjobsPage = /** @class */ (function () {
    function ShowjobsPage(http) {
        this.http = http;
        this.jobs = undefined;
    }
    ShowjobsPage.prototype.ngOnInit = function () {
    };
    ShowjobsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.http.post('http://localhost:3000/viewjobs', {}).subscribe(function (data) {
            console.log(data);
            // @ts-ignore
            _this.jobs = data;
        });
    };
    ShowjobsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-showjobs',
            template: __webpack_require__(/*! ./showjobs.page.html */ "./src/app/showjobs/showjobs.page.html"),
            styles: [__webpack_require__(/*! ./showjobs.page.scss */ "./src/app/showjobs/showjobs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ShowjobsPage);
    return ShowjobsPage;
}());



/***/ })

}]);
//# sourceMappingURL=showjobs-showjobs-module.js.map