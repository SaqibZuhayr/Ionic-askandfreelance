(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["job-details-job-details-module"],{

/***/ "./src/app/job-details/job-details.module.ts":
/*!***************************************************!*\
  !*** ./src/app/job-details/job-details.module.ts ***!
  \***************************************************/
/*! exports provided: JobDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDetailsPageModule", function() { return JobDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _job_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./job-details.page */ "./src/app/job-details/job-details.page.ts");







var routes = [
    {
        path: '',
        component: _job_details_page__WEBPACK_IMPORTED_MODULE_6__["JobDetailsPage"]
    }
];
var JobDetailsPageModule = /** @class */ (function () {
    function JobDetailsPageModule() {
    }
    JobDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_job_details_page__WEBPACK_IMPORTED_MODULE_6__["JobDetailsPage"]]
        })
    ], JobDetailsPageModule);
    return JobDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/job-details/job-details.page.html":
/*!***************************************************!*\
  !*** ./src/app/job-details/job-details.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n            <ion-back-button defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Job Details</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card *ngIf=\"jobs\">\n        <ion-item>\n            <ion-label>Position: {{jobs.title}}</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-label>Organization: {{jobs.organization}}</ion-label>\n        </ion-item>\n        <ion-item>\n\n            <ion-label>Salary: {{jobs.minSalary}}-{{jobs.maxSalary}}</ion-label>\n        </ion-item>\n\n        <ion-item>\n            <h5>Job Description:</h5>\n        </ion-item>\n        <ion-card-content>\n            <h6>{{jobs.details}}</h6>\n        </ion-card-content>\n        <ion-item>\n            <ion-label>Qualification: {{jobs.degreeLevel}}</ion-label>\n        </ion-item>\n        <ion-item>\n            <ion-label>Skills: {{jobs.skills}}</ion-label>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Experience:<span>{{jobs.experience}}</span></ion-label>\n\n        </ion-item>\n        <ion-item>\n            <ion-label>Career: <span>{{jobs.careerLevel}}</span></ion-label>\n        </ion-item>\n        <ion-card-content>\n            <ion-button fill=\"outline\" slot=\"end\"\n                        (click)=\"apply_job()\">\n                Apply\n            </ion-button>\n        </ion-card-content>\n    </ion-card>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/job-details/job-details.page.scss":
/*!***************************************************!*\
  !*** ./src/app/job-details/job-details.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2pvYi1kZXRhaWxzL2pvYi1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/job-details/job-details.page.ts":
/*!*************************************************!*\
  !*** ./src/app/job-details/job-details.page.ts ***!
  \*************************************************/
/*! exports provided: JobDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JobDetailsPage", function() { return JobDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var JobDetailsPage = /** @class */ (function () {
    function JobDetailsPage(route, http) {
        this.route = route;
        this.http = http;
        this.jobs = undefined;
    }
    JobDetailsPage.prototype.ngOnInit = function () {
    };
    JobDetailsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log(params.id);
            _this.http.post('http://localhost:3000/jobdetails', { 'jobID': params.id }).subscribe(function (data) {
                // console.log(data);
                _this.jobs = data;
                // console.log(this.answers);
            });
        });
    };
    JobDetailsPage.prototype.apply_job = function () {
        this.http.post('http://localhost:3000/applyjob', {
            'jobID': this.jobs['_id'],
            'userid': localStorage.getItem('userid')
        }).subscribe(function (data) {
            // console.log(data);
            alert(data['message']);
        });
    };
    JobDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-job-details',
            template: __webpack_require__(/*! ./job-details.page.html */ "./src/app/job-details/job-details.page.html"),
            styles: [__webpack_require__(/*! ./job-details.page.scss */ "./src/app/job-details/job-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], JobDetailsPage);
    return JobDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=job-details-job-details-module.js.map