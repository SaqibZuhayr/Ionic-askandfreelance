(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["freelance-freelance-module"],{

/***/ "./src/app/freelance/freelance.module.ts":
/*!***********************************************!*\
  !*** ./src/app/freelance/freelance.module.ts ***!
  \***********************************************/
/*! exports provided: FreelancePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreelancePageModule", function() { return FreelancePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _freelance_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./freelance.page */ "./src/app/freelance/freelance.page.ts");







var routes = [
    {
        path: 'tabf',
        component: _freelance_page__WEBPACK_IMPORTED_MODULE_6__["FreelancePage"],
        children: [
            {
                path: 'tab-gigs',
                loadChildren: '../gigs/gigs.module#GigsPageModule'
            },
            {
                path: 'tab-mygigs',
                loadChildren: '../mygigs/mygigs.module#MygigsPageModule'
            },
            {
                path: 'chatlist',
                loadChildren: '../chatlist/chatlist.module#ChatlistPageModule'
            },
            {
                path: 'order-requests',
                loadChildren: '../order-requests/order-requests.module#OrderRequestsPageModule'
            },
            {
                path: 'freelance-profile',
                loadChildren: '../freelance-profile/freelance-profile.module#FreelanceProfilePageModule'
            },
            {
                path: 'tab-gigs/gig-details/:id',
                loadChildren: '../gig-details/gig-details.module#GigDetailsPageModule'
            },
            {
                path: 'chatlist/chat',
                loadChildren: '../chat/chat.module#ChatPageModule'
            },
            {
                path: 'tab-mygigs/add-gigs',
                loadChildren: '../add-gigs/add-gigs.module#AddGigsPageModule'
            },
        ]
    },
    {
        path: '',
        redirectTo: 'tabf/tab-gigs',
        pathMatch: 'full'
    }
];
var FreelancePageModule = /** @class */ (function () {
    function FreelancePageModule() {
    }
    FreelancePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_freelance_page__WEBPACK_IMPORTED_MODULE_6__["FreelancePage"]]
        })
    ], FreelancePageModule);
    return FreelancePageModule;
}());



/***/ }),

/***/ "./src/app/freelance/freelance.page.html":
/*!***********************************************!*\
  !*** ./src/app/freelance/freelance.page.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-tabs>\n\n    <ion-tab-bar slot=\"bottom\">\n\n        <ion-tab-button tab=\"tab-gigs\">\n            <ion-icon name=\"sunny\"></ion-icon>\n            <ion-label>Gigs</ion-label>\n        </ion-tab-button>\n\n        <ion-tab-button tab=\"tab-mygigs\">\n            <ion-icon name=\"moon\"></ion-icon>\n            <ion-label>My Gigs</ion-label>\n        </ion-tab-button>\n        <ion-tab-button tab=\"chatlist\">\n            <ion-icon name=\"chatboxes\"></ion-icon>\n            <ion-label>Chat</ion-label>\n        </ion-tab-button>\n        <ion-tab-button tab=\"freelance-profile\">\n            <ion-icon name=\"person\"></ion-icon>\n            <ion-label>Freelance Profile</ion-label>\n        </ion-tab-button>\n    </ion-tab-bar>\n\n</ion-tabs>"

/***/ }),

/***/ "./src/app/freelance/freelance.page.scss":
/*!***********************************************!*\
  !*** ./src/app/freelance/freelance.page.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-body {\n  padding-left: 15px;\n  padding-right: 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZnJlZWxhbmNlL0Q6XFxBbmd1bGFyXFxpb25pYy1hc2thbmRmL3NyY1xcYXBwXFxmcmVlbGFuY2VcXGZyZWVsYW5jZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9mcmVlbGFuY2UvZnJlZWxhbmNlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkLWJvZHl7XHJcbiAgcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/freelance/freelance.page.ts":
/*!*********************************************!*\
  !*** ./src/app/freelance/freelance.page.ts ***!
  \*********************************************/
/*! exports provided: FreelancePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreelancePage", function() { return FreelancePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FreelancePage = /** @class */ (function () {
    function FreelancePage() {
    }
    FreelancePage.prototype.ngOnInit = function () {
    };
    FreelancePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-freelance',
            template: __webpack_require__(/*! ./freelance.page.html */ "./src/app/freelance/freelance.page.html"),
            styles: [__webpack_require__(/*! ./freelance.page.scss */ "./src/app/freelance/freelance.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FreelancePage);
    return FreelancePage;
}());



/***/ })

}]);
//# sourceMappingURL=freelance-freelance-module.js.map