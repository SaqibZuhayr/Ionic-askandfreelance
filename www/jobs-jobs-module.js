(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["jobs-jobs-module"],{

/***/ "./src/app/jobs/jobs.module.ts":
/*!*************************************!*\
  !*** ./src/app/jobs/jobs.module.ts ***!
  \*************************************/
/*! exports provided: JobsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsPageModule", function() { return JobsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _jobs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./jobs.page */ "./src/app/jobs/jobs.page.ts");







var routes = [
    {
        path: 'tabsj',
        component: _jobs_page__WEBPACK_IMPORTED_MODULE_6__["JobsPage"],
        children: [
            {
                path: 'showjobs',
                loadChildren: '../showjobs/showjobs.module#ShowjobsPageModule'
            },
            {
                path: 'showjobs/job-details/:id',
                loadChildren: '../job-details/job-details.module#JobDetailsPageModule'
            },
            {
                path: 'myjobs',
                loadChildren: '../myjobs/myjobs.module#MyjobsPageModule'
            },
            {
                path: 'myjob-applied/:id',
                loadChildren: '../myjob-applied/myjob-applied.module#MyjobAppliedPageModule'
            },
        ]
    },
    {
        path: '',
        redirectTo: 'tabsj/showjobs',
        pathMatch: 'full'
    }
];
var JobsPageModule = /** @class */ (function () {
    function JobsPageModule() {
    }
    JobsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_jobs_page__WEBPACK_IMPORTED_MODULE_6__["JobsPage"]]
        })
    ], JobsPageModule);
    return JobsPageModule;
}());



/***/ }),

/***/ "./src/app/jobs/jobs.page.html":
/*!*************************************!*\
  !*** ./src/app/jobs/jobs.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n\n    <ion-tab-bar slot=\"bottom\">\n\n        <ion-tab-button tab=\"showjobs\">\n            <ion-icon name=\"sunny\"></ion-icon>\n            <ion-label>Jobs</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"myjobs\">\n            <ion-icon name=\"moon\"></ion-icon>\n            <ion-label>My Jobs</ion-label>\n        </ion-tab-button>\n    </ion-tab-bar>\n\n</ion-tabs>"

/***/ }),

/***/ "./src/app/jobs/jobs.page.scss":
/*!*************************************!*\
  !*** ./src/app/jobs/jobs.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYnMvam9icy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/jobs/jobs.page.ts":
/*!***********************************!*\
  !*** ./src/app/jobs/jobs.page.ts ***!
  \***********************************/
/*! exports provided: JobsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobsPage", function() { return JobsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var JobsPage = /** @class */ (function () {
    function JobsPage(route) {
        this.route = route;
    }
    JobsPage.prototype.ngOnInit = function () {
    };
    JobsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-jobs',
            template: __webpack_require__(/*! ./jobs.page.html */ "./src/app/jobs/jobs.page.html"),
            styles: [__webpack_require__(/*! ./jobs.page.scss */ "./src/app/jobs/jobs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], JobsPage);
    return JobsPage;
}());



/***/ })

}]);
//# sourceMappingURL=jobs-jobs-module.js.map