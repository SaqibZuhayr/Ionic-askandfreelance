(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab-myquestion-tab-myquestion-module"],{

/***/ "./src/app/tab-myquestion/tab-myquestion.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/tab-myquestion/tab-myquestion.module.ts ***!
  \*********************************************************/
/*! exports provided: TabMyquestionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabMyquestionPageModule", function() { return TabMyquestionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab_myquestion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-myquestion.page */ "./src/app/tab-myquestion/tab-myquestion.page.ts");







var routes = [
    {
        path: '',
        component: _tab_myquestion_page__WEBPACK_IMPORTED_MODULE_6__["TabMyquestionPage"]
    }
];
var TabMyquestionPageModule = /** @class */ (function () {
    function TabMyquestionPageModule() {
    }
    TabMyquestionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab_myquestion_page__WEBPACK_IMPORTED_MODULE_6__["TabMyquestionPage"]]
        })
    ], TabMyquestionPageModule);
    return TabMyquestionPageModule;
}());



/***/ }),

/***/ "./src/app/tab-myquestion/tab-myquestion.page.html":
/*!*********************************************************!*\
  !*** ./src/app/tab-myquestion/tab-myquestion.page.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>My Question</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-card *ngFor=\"let q of Question\">\n        <ion-item *ngIf=\"q.user.username\">\n            <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n            <ion-label>{{q.user.username}}</ion-label>\n            <ion-button fill=\"outline\" slot=\"end\"\n                        [routerLink]=\"['/sidemenu-question/question/tabs/tab-myquestion/answer/', q._id]\">\n                View\n            </ion-button>\n        </ion-item>\n\n        <ion-card-content>\n            {{q.question.question}}\n        </ion-card-content>\n    </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/tab-myquestion/tab-myquestion.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/tab-myquestion/tab-myquestion.page.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYi1teXF1ZXN0aW9uL3RhYi1teXF1ZXN0aW9uLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/tab-myquestion/tab-myquestion.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/tab-myquestion/tab-myquestion.page.ts ***!
  \*******************************************************/
/*! exports provided: TabMyquestionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabMyquestionPage", function() { return TabMyquestionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _question_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../question.service */ "./src/app/question.service.ts");



var TabMyquestionPage = /** @class */ (function () {
    function TabMyquestionPage(question) {
        this.question = question;
        this.checkbool = false;
        this.bool = false;
    }
    TabMyquestionPage.prototype.ngOnInit = function () {
        // this.bool = true;
        // console.log(localStorage.getItem('userid'));
        // this.question.getQuestions(undefined, localStorage.getItem('userid'), undefined);
        // this.question.questionObservable.subscribe(value => {
        //     this.Question = value;
        // });
    };
    TabMyquestionPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.bool = true;
        console.log(localStorage.getItem('userid'));
        this.question.getMyQuestions(localStorage.getItem('userid'));
        this.question.questionObservable.subscribe(function (value) {
            _this.Question = value;
        });
    };
    TabMyquestionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab-myquestion',
            template: __webpack_require__(/*! ./tab-myquestion.page.html */ "./src/app/tab-myquestion/tab-myquestion.page.html"),
            styles: [__webpack_require__(/*! ./tab-myquestion.page.scss */ "./src/app/tab-myquestion/tab-myquestion.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_question_service__WEBPACK_IMPORTED_MODULE_2__["QuestionService"]])
    ], TabMyquestionPage);
    return TabMyquestionPage;
}());



/***/ })

}]);
//# sourceMappingURL=tab-myquestion-tab-myquestion-module.js.map