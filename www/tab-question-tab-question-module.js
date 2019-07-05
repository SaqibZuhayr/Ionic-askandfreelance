(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab-question-tab-question-module"],{

/***/ "./src/app/tab-question/tab-question.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/tab-question/tab-question.module.ts ***!
  \*****************************************************/
/*! exports provided: TabQuestionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabQuestionPageModule", function() { return TabQuestionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _tab_question_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab-question.page */ "./src/app/tab-question/tab-question.page.ts");







var routes = [
    {
        path: '',
        component: _tab_question_page__WEBPACK_IMPORTED_MODULE_6__["TabQuestionPage"],
        children: []
    }
];
var TabQuestionPageModule = /** @class */ (function () {
    function TabQuestionPageModule() {
    }
    TabQuestionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_tab_question_page__WEBPACK_IMPORTED_MODULE_6__["TabQuestionPage"]]
        })
    ], TabQuestionPageModule);
    return TabQuestionPageModule;
}());



/***/ }),

/***/ "./src/app/tab-question/tab-question.page.html":
/*!*****************************************************!*\
  !*** ./src/app/tab-question/tab-question.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Question</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n    <ion-row>\n        <ion-button (click)=\"post_question('as')\">Ask Question</ion-button>\n    </ion-row>\n\n    <ion-card *ngFor=\"let q of Question\">\n            <ion-item *ngIf=\"q.user\">\n            <ion-icon name=\"pin\" slot=\"start\"></ion-icon>\n            <ion-label>{{q.user.username}}</ion-label>\n            <ion-button  fill=\"outline\" slot=\"end\" [routerLink]=\"['/sidemenu-question/question/tabs/tab-question/answer/', q.question._id]\"  >\n                View\n            </ion-button>\n        </ion-item>\n\n        <ion-card-content>\n            {{q.question.question}}\n        </ion-card-content>\n    </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/tab-question/tab-question.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/tab-question/tab-question.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYi1xdWVzdGlvbi90YWItcXVlc3Rpb24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/tab-question/tab-question.page.ts":
/*!***************************************************!*\
  !*** ./src/app/tab-question/tab-question.page.ts ***!
  \***************************************************/
/*! exports provided: TabQuestionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabQuestionPage", function() { return TabQuestionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _question_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../question.service */ "./src/app/question.service.ts");





var TabQuestionPage = /** @class */ (function () {
    function TabQuestionPage(http, router, question) {
        this.http = http;
        this.router = router;
        this.question = question;
        this.checkbool = false;
        this.bool = false;
    }
    TabQuestionPage.prototype.ngOnInit = function () {
    };
    TabQuestionPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.bool = true;
        this.question.getQuestions(undefined, undefined, undefined);
        this.question.questionObservable.subscribe(function (value) {
            _this.Question = value;
            _this.ans = '/sidemenu-question/question/tabs/tab-question/answer/';
        });
    };
    TabQuestionPage.prototype.post_question = function (id) {
        this.router.navigate(['/sidemenu-question/question/tabs/tab-question/postquestion'], id);
    };
    TabQuestionPage.prototype.viewAnswer = function (id) {
        this.router.navigate(['/sidemenu-question/question/tabs/tab-question/answer/:id'], id);
    };
    TabQuestionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab-question',
            template: __webpack_require__(/*! ./tab-question.page.html */ "./src/app/tab-question/tab-question.page.html"),
            styles: [__webpack_require__(/*! ./tab-question.page.scss */ "./src/app/tab-question/tab-question.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _question_service__WEBPACK_IMPORTED_MODULE_4__["QuestionService"]])
    ], TabQuestionPage);
    return TabQuestionPage;
}());



/***/ })

}]);
//# sourceMappingURL=tab-question-tab-question-module.js.map