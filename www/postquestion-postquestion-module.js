(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["postquestion-postquestion-module"],{

/***/ "./src/app/postquestion/postquestion.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/postquestion/postquestion.module.ts ***!
  \*****************************************************/
/*! exports provided: PostquestionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostquestionPageModule", function() { return PostquestionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _postquestion_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./postquestion.page */ "./src/app/postquestion/postquestion.page.ts");








var routes = [
    {
        path: '',
        component: _postquestion_page__WEBPACK_IMPORTED_MODULE_6__["PostquestionPage"]
    }
];
var PostquestionPageModule = /** @class */ (function () {
    function PostquestionPageModule() {
    }
    PostquestionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_postquestion_page__WEBPACK_IMPORTED_MODULE_6__["PostquestionPage"]]
        })
    ], PostquestionPageModule);
    return PostquestionPageModule;
}());



/***/ }),

/***/ "./src/app/postquestion/postquestion.page.html":
/*!*****************************************************!*\
  !*** ./src/app/postquestion/postquestion.page.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n            <ion-back-button defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Post Question</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <form [formGroup]=\"qForm\" (ngSubmit)=\"questionForm()\">\n        <ion-item>\n            <ion-input formControlName=\"title\" type=\"text\" placeholder=\"Title\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-textarea [rows]=\"6\" formControlName=\"question\" type=\"text\" placeholder=\"Question\"></ion-textarea>\n        </ion-item>\n        <ion-button [disabled]=\"!qForm.valid\" type=\"submit\" shape=\"round\" size=\"default\" color=\"primary\"\n                    expand=\"block\">Post Question\n        </ion-button>\n\n    </form>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/postquestion/postquestion.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/postquestion/postquestion.page.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Bvc3RxdWVzdGlvbi9wb3N0cXVlc3Rpb24ucGFnZS5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/postquestion/postquestion.page.ts":
/*!***************************************************!*\
  !*** ./src/app/postquestion/postquestion.page.ts ***!
  \***************************************************/
/*! exports provided: PostquestionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostquestionPage", function() { return PostquestionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var PostquestionPage = /** @class */ (function () {
    function PostquestionPage(formBuilder, route, http) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.http = http;
        this.qForm = this.formBuilder.group({
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            question: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
        });
    }
    PostquestionPage.prototype.ngOnInit = function () {
    };
    PostquestionPage.prototype.questionForm = function () {
        var _this = this;
        if (!localStorage.getItem('userid')) {
            alert('LOGIN REQUIRED');
            return;
        }
        console.log('answer');
        this.http.post('http://localhost:3000/postquestion', {
            'category': this.qForm.value.title,
            'question': this.qForm.value.question,
            'userid': localStorage.getItem('userid'),
            'askedBy': localStorage.getItem('username')
        })
            .subscribe(function (data) {
            console.log(data);
            _this.route.navigateByUrl('/sidemenu-question/question');
        });
    };
    PostquestionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-postquestion',
            template: __webpack_require__(/*! ./postquestion.page.html */ "./src/app/postquestion/postquestion.page.html"),
            styles: [__webpack_require__(/*! ./postquestion.page.scss */ "./src/app/postquestion/postquestion.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]])
    ], PostquestionPage);
    return PostquestionPage;
}());



/***/ })

}]);
//# sourceMappingURL=postquestion-postquestion-module.js.map