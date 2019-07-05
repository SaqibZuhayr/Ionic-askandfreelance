(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chatlist-chatlist-module"],{

/***/ "./src/app/chatlist/chatlist.module.ts":
/*!*********************************************!*\
  !*** ./src/app/chatlist/chatlist.module.ts ***!
  \*********************************************/
/*! exports provided: ChatlistPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatlistPageModule", function() { return ChatlistPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chatlist_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chatlist.page */ "./src/app/chatlist/chatlist.page.ts");







var routes = [
    {
        path: '',
        component: _chatlist_page__WEBPACK_IMPORTED_MODULE_6__["ChatlistPage"]
    }
];
var ChatlistPageModule = /** @class */ (function () {
    function ChatlistPageModule() {
    }
    ChatlistPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chatlist_page__WEBPACK_IMPORTED_MODULE_6__["ChatlistPage"]]
        })
    ], ChatlistPageModule);
    return ChatlistPageModule;
}());



/***/ }),

/***/ "./src/app/chatlist/chatlist.page.html":
/*!*********************************************!*\
  !*** ./src/app/chatlist/chatlist.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n        </ion-buttons>\r\n        <ion-title>Chat List</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <div *ngIf=\"conversations\">\r\n        <ion-card *ngFor=\"let user of conversations\">\r\n            <ion-item>\r\n                <ion-avatar class=\"ionAvatar\" itemstart>\r\n                    <img src=\"http://placehold.it/50*50\">\r\n                </ion-avatar>\r\n                <ion-grid>\r\n                    <ion-row>\r\n                        <ion-col>\r\n                            <h5><a (click)=\"chat(user._id, user.username)\">{{user.username}}</a></h5>\r\n                        </ion-col>\r\n\r\n                    </ion-row>\r\n                </ion-grid>\r\n            </ion-item>\r\n        </ion-card>\r\n    </div>\r\n</ion-content>"

/***/ }),

/***/ "./src/app/chatlist/chatlist.page.scss":
/*!*********************************************!*\
  !*** ./src/app/chatlist/chatlist.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXRsaXN0L2NoYXRsaXN0LnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/chatlist/chatlist.page.ts":
/*!*******************************************!*\
  !*** ./src/app/chatlist/chatlist.page.ts ***!
  \*******************************************/
/*! exports provided: ChatlistPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatlistPage", function() { return ChatlistPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var ChatlistPage = /** @class */ (function () {
    function ChatlistPage(router, http) {
        this.router = router;
        this.http = http;
        this.conversations = undefined;
    }
    ChatlistPage.prototype.ngOnInit = function () {
    };
    ChatlistPage.prototype.ionViewWillEnter = function () {
        this.fetchConversations();
    };
    ChatlistPage.prototype.fetchConversations = function () {
        var _this = this;
        this.http.post('http://localhost:3000/getConversations', { 'userid': localStorage.getItem('userid') })
            .subscribe(function (data) {
            _this.conversations = data;
            console.log(data);
        });
    };
    ChatlistPage.prototype.chat = function (id, username) {
        // console.log(this.receiverid,this.receivername)
        this.router.navigate(['sidemenu-question/freelance/tabf/chatlist/chat'], { queryParams: { id: id, name: username } });
    };
    ChatlistPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chatlist',
            template: __webpack_require__(/*! ./chatlist.page.html */ "./src/app/chatlist/chatlist.page.html"),
            styles: [__webpack_require__(/*! ./chatlist.page.scss */ "./src/app/chatlist/chatlist.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], ChatlistPage);
    return ChatlistPage;
}());



/***/ })

}]);
//# sourceMappingURL=chatlist-chatlist-module.js.map