(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["answer-answer-module"],{

/***/ "./src/app/answer/answer.module.ts":
/*!*****************************************!*\
  !*** ./src/app/answer/answer.module.ts ***!
  \*****************************************/
/*! exports provided: AnswerPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerPageModule", function() { return AnswerPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _answer_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./answer.page */ "./src/app/answer/answer.page.ts");








var routes = [
    {
        path: '',
        component: _answer_page__WEBPACK_IMPORTED_MODULE_6__["AnswerPage"]
    }
];
var AnswerPageModule = /** @class */ (function () {
    function AnswerPageModule() {
    }
    AnswerPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_answer_page__WEBPACK_IMPORTED_MODULE_6__["AnswerPage"]]
        })
    ], AnswerPageModule);
    return AnswerPageModule;
}());



/***/ }),

/***/ "./src/app/answer/answer.page.html":
/*!*****************************************!*\
  !*** ./src/app/answer/answer.page.html ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n            <ion-back-button defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Answer</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-card *ngIf=\"question\">\n        <ion-card-header>\n            <ion-card-subtitle>{{question.askedBy}}</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n            <ion-card-title>{{question.question}}</ion-card-title>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <ion-card-header>\n            <ion-card-subtitle>Post Answer</ion-card-subtitle>\n        </ion-card-header>\n        <ion-card-content>\n            <form [formGroup]=\"pAnswer\" (ngSubmit)=\"panswer()\">\n                <ion-item>\n                    <ion-textarea [rows]=\"3\" formControlName=\"answer\" type=\"text\" placeholder=\"answer\"></ion-textarea>\n                </ion-item>\n                <ion-button [disabled]=\"!pAnswer.valid\" type=\"submit\" shape=\"round\" size=\"default\" color=\"primary\"\n                            expand=\"block\"> Post Answer\n                </ion-button>\n            </form>\n        </ion-card-content>\n    </ion-card>\n    <div *ngIf=\"question\">\n        <ion-card *ngFor=\"let a of question.answers\">\n            <ion-grid>\n                <ion-row>\n                    <ion-col class=\"vertical-align\" size=\"1\">\n                        <ion-row>\n                            <img style=\"width: 30px;\" class=\"image\"\n                                 src=\"https://img.icons8.com/ios/30/000000/sort-up.png\"\n                                 (click)=\"addScore(a.answer._id)\">\n                        </ion-row>\n                        <ion-row class=\"text\">\n                            <h6>{{a.score}}</h6>\n                        </ion-row>\n\n                        <ion-row>\n                            <img style=\"width: 30px;\" src=\"https://img.icons8.com/color/30/000000/checkmark.png\"\n                                 *ngIf=\"a.answer.approved; else notShow\"\n                                 (click)=\"approveAnswer(a.answer._id, a.answer.user_id)\">\n                        </ion-row>\n                        <ng-template #notShow>\n                            <ion-row>\n                                <img style=\"width: 30px;\"\n                                     src=\"https://img.icons8.com/ios/30/000000/unchecked-checkbox.png\">\n                            </ion-row>\n                        </ng-template>\n                        <ion-row (click)=\"subScore(a.answer._id)\">\n                            <img style=\"width: 30px;\" class=\"image\"\n                                 src=\"https://img.icons8.com/ios/30/000000/sort-down.png\">\n                        </ion-row>\n                    </ion-col>\n                    <ion-col>\n                        <ion-card-header>\n                            <ion-card-subtitle>{{a.answer.answeredBy}}</ion-card-subtitle>\n                        </ion-card-header>\n                        <ion-card-content>\n                            <ion-card-title>{{a.answer.answer}}</ion-card-title>\n                        </ion-card-content>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </ion-card>\n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/answer/answer.page.scss":
/*!*****************************************!*\
  !*** ./src/app/answer/answer.page.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text {\n  text-align: center;\n  padding-left: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYW5zd2VyL0Q6XFxBbmd1bGFyXFxpb25pYy1hc2thbmRmL3NyY1xcYXBwXFxhbnN3ZXJcXGFuc3dlci5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hbnN3ZXIvYW5zd2VyLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZXh0e1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/answer/answer.page.ts":
/*!***************************************!*\
  !*** ./src/app/answer/answer.page.ts ***!
  \***************************************/
/*! exports provided: AnswerPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerPage", function() { return AnswerPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var AnswerPage = /** @class */ (function () {
    function AnswerPage(formBuilder, route, router, http) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.router = router;
        this.http = http;
        this.question = undefined;
        this.userid = ' ';
        this.username = ' ';
        this.pAnswer = this.formBuilder.group({
            answer: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    AnswerPage.prototype.ngOnInit = function () {
        this.userid = localStorage.getItem('userid');
        this.username = localStorage.getItem('username');
        this.questionID = this.route.snapshot.paramMap.get('id');
        console.log(this.questionID);
        this.fetchAnswer();
    };
    AnswerPage.prototype.onPostAnswer = function () {
        // this.pAnswer = new FormGroup({
        //     answer: new FormControl()
        // });
    };
    AnswerPage.prototype.fetchAnswer = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.http.post('http://localhost:3000/answers', { 'questionID': params.id }).subscribe(function (data) {
                _this.question = data;
                console.log(data);
            });
        });
    };
    AnswerPage.prototype.onBack = function () {
        console.log('asdasd');
        this.router.navigate(['/main']);
    };
    AnswerPage.prototype.addScore = function (answerId) {
        this.ratingAnswer('add', answerId);
    };
    AnswerPage.prototype.subScore = function (answerId) {
        this.ratingAnswer('sub', answerId);
    };
    AnswerPage.prototype.ratingAnswer = function (rate, answerId) {
        var _this = this;
        if (!localStorage.getItem('userid')) {
            alert('LOGIN REQUIRED');
            return;
        }
        this.http.post('http://localhost:3000/rateanswer', {
            rate: rate, answerId: answerId, qId: this.questionID,
            userid: this.userid
        })
            .subscribe(function (data) {
            console.log(data);
            if (data['message']) {
                alert('You have already rated this answer');
            }
            _this.fetchAnswer();
        });
    };
    AnswerPage.prototype.panswer = function () {
        var _this = this;
        if (!localStorage.getItem('userid')) {
            alert('LOGIN REQUIRED');
            return;
        }
        console.log('answer');
        this.http.post('http://localhost:3000/postanswer', {
            'answer': this.pAnswer.value.answer,
            'questionID': this.question['questionid'],
            'userid': this.userid,
            'answeredBy': this.username
        })
            .subscribe(function (data) {
            console.log(data);
            _this.fetchAnswer();
        });
    };
    AnswerPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-answer',
            template: __webpack_require__(/*! ./answer.page.html */ "./src/app/answer/answer.page.html"),
            styles: [__webpack_require__(/*! ./answer.page.scss */ "./src/app/answer/answer.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], AnswerPage);
    return AnswerPage;
}());



/***/ })

}]);
//# sourceMappingURL=answer-answer-module.js.map