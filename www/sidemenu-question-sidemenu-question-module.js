(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sidemenu-question-sidemenu-question-module"],{

/***/ "./src/app/sidemenu-question/sidemenu-question.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/sidemenu-question/sidemenu-question.module.ts ***!
  \***************************************************************/
/*! exports provided: SidemenuQuestionPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuQuestionPageModule", function() { return SidemenuQuestionPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _sidemenu_question_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./sidemenu-question.page */ "./src/app/sidemenu-question/sidemenu-question.page.ts");







var routes = [
    {
        path: '',
        component: _sidemenu_question_page__WEBPACK_IMPORTED_MODULE_6__["SidemenuQuestionPage"],
        children: [
            {
                path: 'question',
                loadChildren: '../question/question.module#QuestionPageModule'
            },
            {
                path: 'freelance',
                loadChildren: '../freelance/freelance.module#FreelancePageModule'
            },
            {
                path: 'jobs',
                loadChildren: '../jobs/jobs.module#JobsPageModule'
            },
        ]
    },
    {
        path: '',
        redirectTo: '/sidemenu-question/question'
    }
];
var SidemenuQuestionPageModule = /** @class */ (function () {
    function SidemenuQuestionPageModule() {
    }
    SidemenuQuestionPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_sidemenu_question_page__WEBPACK_IMPORTED_MODULE_6__["SidemenuQuestionPage"]]
        })
    ], SidemenuQuestionPageModule);
    return SidemenuQuestionPageModule;
}());



/***/ }),

/***/ "./src/app/sidemenu-question/sidemenu-question.page.html":
/*!***************************************************************!*\
  !*** ./src/app/sidemenu-question/sidemenu-question.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-split-pane>\n    <ion-menu contentId=\"content\">\n\n        <ion-header>\n            <ion-toolbar color=\"primary\">\n                <ion-buttons slot=\"start\">\n                    <ion-menu-button></ion-menu-button>\n                </ion-buttons>\n                <ion-title>Menu</ion-title>\n            </ion-toolbar>\n        </ion-header>\n\n        <ion-content>\n            <ion-list>\n                <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of pages\">\n                    <ion-item [routerLink]=\"p.url\" routerDirection=\"root\"\n                              [class.active-item]=\"selectedPath.startsWith(p.url)\">\n                        <ion-label>\n                            {{ p.title }}\n                        </ion-label>\n                    </ion-item>\n                </ion-menu-toggle>\n\n                <ion-item tappable routerLink=\"/login\" routerDirection=\"root\">\n                    <ion-icon name=\"log-out\" slot=\"start\"></ion-icon>\n                    Logout\n                </ion-item>\n\n            </ion-list>\n\n        </ion-content>\n\n    </ion-menu>\n\n    <ion-router-outlet id=\"content\" main></ion-router-outlet>\n\n</ion-split-pane>"

/***/ }),

/***/ "./src/app/sidemenu-question/sidemenu-question.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/sidemenu-question/sidemenu-question.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".active-item {\n  border-left: 8px solid var(--ion-color-primary); }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZW1lbnUtcXVlc3Rpb24vRDpcXEFuZ3VsYXJcXGlvbmljLWFza2FuZGYvc3JjXFxhcHBcXHNpZGVtZW51LXF1ZXN0aW9uXFxzaWRlbWVudS1xdWVzdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQ0FBK0MsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3NpZGVtZW51LXF1ZXN0aW9uL3NpZGVtZW51LXF1ZXN0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3RpdmUtaXRlbSB7XHJcbiAgYm9yZGVyLWxlZnQ6IDhweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/sidemenu-question/sidemenu-question.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/sidemenu-question/sidemenu-question.page.ts ***!
  \*************************************************************/
/*! exports provided: SidemenuQuestionPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidemenuQuestionPage", function() { return SidemenuQuestionPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var SidemenuQuestionPage = /** @class */ (function () {
    function SidemenuQuestionPage(router) {
        var _this = this;
        this.router = router;
        this.selectedPath = '';
        this.pages = [
            {
                title: 'Question',
                url: '/sidemenu-question/question'
            },
            {
                title: 'Freelance',
                url: '/sidemenu-question/freelance'
            },
            {
                title: 'Jobs',
                url: '/sidemenu-question/jobs'
            }
        ];
        this.router.events.subscribe(function (event) {
            if (event && event.url) {
                _this.selectedPath = event.url;
            }
        });
    }
    SidemenuQuestionPage.prototype.ngOnInit = function () {
        this.router.navigate(['/sidemenu-question/question']);
    };
    SidemenuQuestionPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidemenu-question',
            template: __webpack_require__(/*! ./sidemenu-question.page.html */ "./src/app/sidemenu-question/sidemenu-question.page.html"),
            styles: [__webpack_require__(/*! ./sidemenu-question.page.scss */ "./src/app/sidemenu-question/sidemenu-question.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SidemenuQuestionPage);
    return SidemenuQuestionPage;
}());



/***/ })

}]);
//# sourceMappingURL=sidemenu-question-sidemenu-question-module.js.map