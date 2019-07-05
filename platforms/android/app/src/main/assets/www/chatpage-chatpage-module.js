(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chatpage-chatpage-module"],{

/***/ "./src/app/chatpage/chatpage.module.ts":
/*!*********************************************!*\
  !*** ./src/app/chatpage/chatpage.module.ts ***!
  \*********************************************/
/*! exports provided: ChatpagePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatpagePageModule", function() { return ChatpagePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chatpage_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chatpage.page */ "./src/app/chatpage/chatpage.page.ts");







var routes = [
    {
        path: '',
        component: _chatpage_page__WEBPACK_IMPORTED_MODULE_6__["ChatpagePage"]
    }
];
var ChatpagePageModule = /** @class */ (function () {
    function ChatpagePageModule() {
    }
    ChatpagePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chatpage_page__WEBPACK_IMPORTED_MODULE_6__["ChatpagePage"]]
        })
    ], ChatpagePageModule);
    return ChatpagePageModule;
}());



/***/ }),

/***/ "./src/app/chatpage/chatpage.page.html":
/*!*********************************************!*\
  !*** ./src/app/chatpage/chatpage.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>chatpage</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/chatpage/chatpage.page.scss":
/*!*********************************************!*\
  !*** ./src/app/chatpage/chatpage.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXRwYWdlL2NoYXRwYWdlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/chatpage/chatpage.page.ts":
/*!*******************************************!*\
  !*** ./src/app/chatpage/chatpage.page.ts ***!
  \*******************************************/
/*! exports provided: ChatpagePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatpagePage", function() { return ChatpagePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChatpagePage = /** @class */ (function () {
    function ChatpagePage() {
    }
    ChatpagePage.prototype.ngOnInit = function () {
    };
    ChatpagePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chatpage',
            template: __webpack_require__(/*! ./chatpage.page.html */ "./src/app/chatpage/chatpage.page.html"),
            styles: [__webpack_require__(/*! ./chatpage.page.scss */ "./src/app/chatpage/chatpage.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatpagePage);
    return ChatpagePage;
}());



/***/ })

}]);
//# sourceMappingURL=chatpage-chatpage-module.js.map