(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gig-details-gig-details-module"],{

/***/ "./src/app/gig-details/gig-details.module.ts":
/*!***************************************************!*\
  !*** ./src/app/gig-details/gig-details.module.ts ***!
  \***************************************************/
/*! exports provided: GigDetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GigDetailsPageModule", function() { return GigDetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _gig_details_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gig-details.page */ "./src/app/gig-details/gig-details.page.ts");








var routes = [
    {
        path: '',
        component: _gig_details_page__WEBPACK_IMPORTED_MODULE_6__["GigDetailsPage"]
    }
];
var GigDetailsPageModule = /** @class */ (function () {
    function GigDetailsPageModule() {
    }
    GigDetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_gig_details_page__WEBPACK_IMPORTED_MODULE_6__["GigDetailsPage"]]
        })
    ], GigDetailsPageModule);
    return GigDetailsPageModule;
}());



/***/ }),

/***/ "./src/app/gig-details/gig-details.page.html":
/*!***************************************************!*\
  !*** ./src/app/gig-details/gig-details.page.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n        </ion-buttons>\n        <ion-title>Gigs</ion-title>\n    </ion-toolbar>\n</ion-header>\n<ion-content>\n\n    <ion-card *ngIf=\"Gig\">\n        <ion-card-header>\n            <img src=\"{{Gig.photo}}\">\n            <ion-card-subtitle>Username: {{Gig.username}}</ion-card-subtitle>\n            <ion-card-title>Title: {{Gig.title}}</ion-card-title>\n        </ion-card-header>\n        <ion-card-content>\n            <p>Rate: {{Gig.rate}}</p>\n            <p>Description: {{Gig.description}}</p>\n        </ion-card-content>\n\n        <ion-card-content>\n            <ion-button fill=\"outline\" slot=\"end\" (click)=\"chat(Gig._id, Gig.username)\">\n                Chat\n            </ion-button>\n        </ion-card-content>\n    </ion-card>\n    <ion-card>\n        <form [formGroup]=\"gigForm\" (ngSubmit)=\"gigsForm()\">\n            <ion-item>\n                <ion-input formControlName=\"order_name\" type=\"text\" placeholder=\"Order Name\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input formControlName=\"order_price\" type=\"text\" placeholder=\"Order Rate\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input formControlName=\"order_description\" type=\"text\" placeholder=\"Order Description\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-input formControlName=\"order_delivery_time\" type=\"text\" placeholder=\"Order Delivery Time\"></ion-input>\n            </ion-item>\n            <ion-button [disabled]=\"!gigForm.valid\" type=\"submit\" color=\"success\" slot=\"end\" >\n                Create Order\n            </ion-button>\n\n        </form>\n    </ion-card>\n</ion-content>"

/***/ }),

/***/ "./src/app/gig-details/gig-details.page.scss":
/*!***************************************************!*\
  !*** ./src/app/gig-details/gig-details.page.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dpZy1kZXRhaWxzL2dpZy1kZXRhaWxzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/gig-details/gig-details.page.ts":
/*!*************************************************!*\
  !*** ./src/app/gig-details/gig-details.page.ts ***!
  \*************************************************/
/*! exports provided: GigDetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GigDetailsPage", function() { return GigDetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var GigDetailsPage = /** @class */ (function () {
    function GigDetailsPage(formBuilder, router, route, http) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.route = route;
        this.http = http;
        this.Gig = undefined;
        this.gigForm = this.formBuilder.group({
            order_name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            order_price: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            order_description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            order_delivery_time: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    }
    GigDetailsPage.prototype.ngOnInit = function () {
    };
    GigDetailsPage.prototype.ionViewWillEnter = function () {
        this.userid = localStorage.getItem('userid');
        this.fetchGigDetails();
    };
    GigDetailsPage.prototype.fetchGigDetails = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log(params.id);
            _this.http.post('http://localhost:3000/gigdetail', { 'gigid': params.id }).subscribe(function (data) {
                _this.receiverid = data['userid'];
                _this.receivername = data['username'];
                _this.Gig = data;
            });
        });
    };
    GigDetailsPage.prototype.chat = function (id, username) {
        // console.log(this.receiverid,this.receivername)
        this.router.navigate(['sidemenu-question/freelance/tabf/chatlist/chat'], { queryParams: { id: id, name: username } });
    };
    GigDetailsPage.prototype.gigsForm = function () {
        if (!localStorage.getItem('userid')) {
            alert('LOGIN REQUIRED');
            return;
        }
        this.http.post('http://localhost:3000/submitOrder', {
            'order': this.gigForm.value, 'userid': this.userid,
            'receiverid': this.receiverid, 'gigid': this.Gig._id,
        })
            .subscribe(function (data) {
            console.log(data);
        });
    };
    GigDetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gig-details',
            template: __webpack_require__(/*! ./gig-details.page.html */ "./src/app/gig-details/gig-details.page.html"),
            styles: [__webpack_require__(/*! ./gig-details.page.scss */ "./src/app/gig-details/gig-details.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]])
    ], GigDetailsPage);
    return GigDetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=gig-details-gig-details-module.js.map