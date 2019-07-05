(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["question-question-module"],{

/***/ "./src/app/question/question.module.ts":
/*!*********************************************!*\
  !*** ./src/app/question/question.module.ts ***!
  \*********************************************/
/*! exports provided: QuestionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionPageModule", function() { return QuestionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _question_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./question.page */ "./src/app/question/question.page.ts");







var routes = [
    {
        path: 'tabs',
        component: _question_page__WEBPACK_IMPORTED_MODULE_6__["QuestionPage"],
        children: [
            {
                path: 'tab-question',
                loadChildren: '../tab-question/tab-question.module#TabQuestionPageModule'
            },
            {
                path: 'tab-myquestion',
                loadChildren: '../tab-myquestion/tab-myquestion.module#TabMyquestionPageModule'
            },
            {
                path: 'tab-question/postquestion',
                loadChildren: '../postquestion/postquestion.module#PostquestionPageModule'
            },
            {
                path: 'tab-question/answer/:id',
                loadChildren: '../answer/answer.module#AnswerPageModule'
            },
            {
                path: 'tab-myquestion/answer/:id',
                loadChildren: '../answer/answer.module#AnswerPageModule'
            },
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/tab-question',
        pathMatch: 'full'
    }
];
var QuestionPageModule = /** @class */ (function () {
    function QuestionPageModule() {
    }
    QuestionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_question_page__WEBPACK_IMPORTED_MODULE_6__["QuestionPage"]]
        })
    ], QuestionPageModule);
    return QuestionPageModule;
}());



/***/ }),

/***/ "./src/app/question/question.page.html":
/*!*********************************************!*\
  !*** ./src/app/question/question.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n\n    <ion-tab-bar slot=\"bottom\">\n\n        <ion-tab-button tab=\"tab-question\">\n            <ion-icon name=\"sunny\"></ion-icon>\n            <ion-label>Questions</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"tab-myquestion\">\n            <ion-icon name=\"moon\"></ion-icon>\n            <ion-label>My Questions</ion-label>\n        </ion-tab-button>\n    </ion-tab-bar>\n\n</ion-tabs>"

/***/ }),

/***/ "./src/app/question/question.page.scss":
/*!*********************************************!*\
  !*** ./src/app/question/question.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3F1ZXN0aW9uL3F1ZXN0aW9uLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/question/question.page.ts":
/*!*******************************************!*\
  !*** ./src/app/question/question.page.ts ***!
  \*******************************************/
/*! exports provided: QuestionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionPage", function() { return QuestionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var QuestionPage = /** @class */ (function () {
    function QuestionPage(route) {
        this.route = route;
    }
    QuestionPage.prototype.ngOnInit = function () {
        this.route.navigate(['./sidemenu-question/question/tab-myquestion']);
    };
    QuestionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-question',
            template: __webpack_require__(/*! ./question.page.html */ "./src/app/question/question.page.html"),
            styles: [__webpack_require__(/*! ./question.page.scss */ "./src/app/question/question.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], QuestionPage);
    return QuestionPage;
}());



/***/ })

}]);
//# sourceMappingURL=question-question-module.js.map