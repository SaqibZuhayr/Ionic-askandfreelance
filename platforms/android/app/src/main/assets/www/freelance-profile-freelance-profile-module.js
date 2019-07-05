(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["freelance-profile-freelance-profile-module"],{

/***/ "./src/app/freelance-profile/freelance-profile.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/freelance-profile/freelance-profile.module.ts ***!
  \***************************************************************/
/*! exports provided: FreelanceProfilePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreelanceProfilePageModule", function() { return FreelanceProfilePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _freelance_profile_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./freelance-profile.page */ "./src/app/freelance-profile/freelance-profile.page.ts");








var routes = [
    {
        path: '',
        component: _freelance_profile_page__WEBPACK_IMPORTED_MODULE_6__["FreelanceProfilePage"]
    }
];
var FreelanceProfilePageModule = /** @class */ (function () {
    function FreelanceProfilePageModule() {
    }
    FreelanceProfilePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_freelance_profile_page__WEBPACK_IMPORTED_MODULE_6__["FreelanceProfilePage"]]
        })
    ], FreelanceProfilePageModule);
    return FreelanceProfilePageModule;
}());



/***/ }),

/***/ "./src/app/freelance-profile/freelance-profile.page.html":
/*!***************************************************************!*\
  !*** ./src/app/freelance-profile/freelance-profile.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n            <ion-back-button defaulthref=\"\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Freelance Profile</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content>\r\n    <div *ngIf=\"orderRequests\">\r\n        <ion-card>\r\n            <ion-card-header>Order Requests</ion-card-header>\r\n            <ion-card-content>\r\n                <ion-card class=\"card\" *ngFor=\"let order of orderRequests\">\r\n                    <ion-card-content>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"card-header\">\r\n                                <h6 class=\"card-link\">\r\n                                    Title: {{order.title}}\r\n                                </h6>\r\n                            </div>\r\n                            <h6>Order Price: <a>{{order.amount}}</a></h6>\r\n                            <hr>\r\n                            <h6>Order Description: </h6>\r\n                            <p>{{order.description}}</p>\r\n                            <hr>\r\n                            <h6>Order Delivery Time: </h6>\r\n                            <p>{{order.time_limit}}</p>\r\n                            <hr>\r\n\r\n                            <ion-button type=\"button\" color=\"success\" (click)=\"accept(order._id)\">Accept</ion-button>\r\n                            <ion-button type=\"button\" color=\"danger\" style=\"float: right\" (click)=\"discard(order._id)\">\r\n                                Discard\r\n                            </ion-button>\r\n                        </div>\r\n\r\n                    </ion-card-content>\r\n                </ion-card>\r\n            </ion-card-content>\r\n        </ion-card>\r\n    </div>\r\n    <div *ngIf=\"pendingOrders\">\r\n        <ion-card>\r\n            <ion-card-header>Pending Requests</ion-card-header>\r\n            <ion-card-content>\r\n                <ion-card class=\"card\" *ngFor=\"let order of pendingOrders\">\r\n                    <ion-card-content>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"card-header\">\r\n                                <h6 class=\"card-link\">\r\n                                    Title: {{order.title}}\r\n                                </h6>\r\n                            </div>\r\n                            <h6>Order Price: <a>{{order.amount}}</a></h6>\r\n                            <hr>\r\n                            <h6>Order Description: </h6>\r\n                            <p>{{order.description}}</p>\r\n                            <hr>\r\n                            <h6>Order Delivery Time: </h6>\r\n                            <p>{{order.time_limit}}</p>\r\n                            <hr>\r\n                            <h6>Order Status: </h6>\r\n                            <p>{{order.completed}}</p>\r\n                            <hr>\r\n                            <ion-button type=\"button\" color=\"success\"\r\n                                        (click)=\"onComplete(order.userid,order._id,order.gig_id)\">Complete\r\n                            </ion-button>\r\n                            <input type=\"file\"\r\n                                   id=\"file\"\r\n                                   (change)=\"handleFileInput($event.target.files)\">\r\n                            <ion-button type=\"button\" class=\"btn btn-primary\" style=\"float: right\" (click)=\"onCancel()\">\r\n                                Cancel\r\n                                Order\r\n                            </ion-button>\r\n                        </div>\r\n\r\n                    </ion-card-content>\r\n                </ion-card>\r\n            </ion-card-content>\r\n        </ion-card>\r\n    </div>\r\n    <div *ngIf=\"myorders\">\r\n        <ion-card>\r\n            <ion-card-header>Buyer Order</ion-card-header>\r\n            <ion-card-content>\r\n                <ion-card class=\"card\" *ngFor=\"let order of myorders.ordersAccepted\">\r\n                    <ion-card-content>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"card-header\">\r\n                                <h6 class=\"card-link\">\r\n                                    Title: {{order.title}}\r\n                                </h6>\r\n                            </div>\r\n                            <h6>Order Price: <a>{{order.amount}}</a></h6>\r\n                            <hr>\r\n                            <h6>Order Description: </h6>\r\n                            <p>{{order.description}}</p>\r\n                            <hr>\r\n                            <h6>Order Delivery Time: </h6>\r\n                            <p>{{order.time_limit}}</p>\r\n                            <hr>\r\n\r\n                            <ion-button type=\"button\" color=\"success\" (click)=\"accept(order._id)\"\r\n                            >\r\n                                Payment\r\n                            </ion-button>\r\n                            <!--routerLink=\"/main/userprofile/payment/{{order.amount}}/{{order._id}}/{{order.gig_id}}\"-->\r\n\r\n                        </div>\r\n\r\n                    </ion-card-content>\r\n                </ion-card>\r\n                <ion-card-header>Order Received</ion-card-header>\r\n                <ion-card class=\"card\" *ngFor=\"let order of myorders.ordersReceived\">\r\n                    <ion-card-content>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"card-header\">\r\n                                <h6 class=\"card-link\">\r\n                                    Title: {{order.orderName}}\r\n                                </h6>\r\n                            </div>\r\n                            <a href=\"http://localhost:3000{{order.orderFile}}\">\r\n                                <button (click)=\"download(order.orderFile)\">Download</button>\r\n                            </a>\r\n                            <form [formGroup]=\"reviewForm\" (ngSubmit)=\"reviewsForm(order.gig_id, order.orderid)\">\r\n                                <ion-item>\r\n                                    <ion-input formControlName=\"review\" type=\"text\" placeholder=\"Review\"></ion-input>\r\n                                </ion-item>\r\n                                <ion-button [disabled]=\"!reviewForm.valid\" type=\"submit\" shape=\"round\" size=\"default\"\r\n                                            color=\"primary\"\r\n                                            expand=\"block\">Review\r\n                                </ion-button>\r\n                            </form>\r\n                        </div>\r\n\r\n                    </ion-card-content>\r\n                </ion-card>\r\n            </ion-card-content>\r\n        </ion-card>\r\n    </div>\r\n</ion-content>\r\n"

/***/ }),

/***/ "./src/app/freelance-profile/freelance-profile.page.scss":
/*!***************************************************************!*\
  !*** ./src/app/freelance-profile/freelance-profile.page.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZyZWVsYW5jZS1wcm9maWxlL2ZyZWVsYW5jZS1wcm9maWxlLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/freelance-profile/freelance-profile.page.ts":
/*!*************************************************************!*\
  !*** ./src/app/freelance-profile/freelance-profile.page.ts ***!
  \*************************************************************/
/*! exports provided: FreelanceProfilePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FreelanceProfilePage", function() { return FreelanceProfilePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var FreelanceProfilePage = /** @class */ (function () {
    function FreelanceProfilePage(formBuilder, route, http, router) {
        this.formBuilder = formBuilder;
        this.route = route;
        this.http = http;
        this.router = router;
        this.orderRequests = undefined;
        this.fileToUpload = null;
        this.pendingOrders = undefined;
        this.comment = undefined;
        this.myorders = undefined;
        this.checkArray = [];
        this.checkArray2 = [];
    }
    FreelanceProfilePage.prototype.ngOnInit = function () {
    };
    FreelanceProfilePage.prototype.ionViewWillEnter = function () {
        this.fetchOrderRequests();
        this.getPendingOrders();
        this.fetchMyOrders();
        this.comment = '';
        this.reviewForm = this.formBuilder.group({
            review: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        });
    };
    FreelanceProfilePage.prototype.accept = function (id) {
        this.acceptOrDiscardOrder('accept', id);
    };
    FreelanceProfilePage.prototype.discard = function (id) {
        this.acceptOrDiscardOrder('discard', id);
    };
    FreelanceProfilePage.prototype.fetchOrderRequests = function () {
        var _this = this;
        this.http.post('http://localhost:3000/getOrderRequests', { 'userid': localStorage.getItem('userid') })
            .subscribe(function (data) {
            _this.checkArray = data;
            if (_this.checkArray.length > 0) {
                _this.orderRequests = data;
            }
        });
    };
    FreelanceProfilePage.prototype.acceptOrDiscardOrder = function (request, orderid) {
        var _this = this;
        this.http.post('http://localhost:3000/acceptOrder', {
            'userid': localStorage.getItem('userid'),
            'orderid': orderid,
            'requestType': request
        })
            .subscribe(function (data) {
            _this.fetchOrderRequests();
        });
    };
    FreelanceProfilePage.prototype.onCancel = function () {
        console.log('asdasd');
    };
    FreelanceProfilePage.prototype.getPendingOrders = function () {
        var _this = this;
        this.http.post('http://localhost:3000/getPendingOrders', { 'userid': localStorage.getItem('userid') })
            .subscribe(function (data) {
            _this.checkArray2 = data;
            if (_this.checkArray2.length > 0) {
                //   console.log(data, 'Pending Orders');
                _this.pendingOrders = data;
            }
        });
    };
    FreelanceProfilePage.prototype.onComplete = function (id, orderid, gigid) {
        var _this = this;
        if (this.fileToUpload) {
            this.formData.append('userid', id);
            this.formData.append('myid', localStorage.getItem('userid'));
            this.formData.append('orderid', orderid);
            this.formData.append('gigid', gigid);
            this.http.post('http://localhost:3000/deliverOrder', this.formData)
                .subscribe(function (data) {
                console.log(data);
                _this.getPendingOrders();
            });
        }
    };
    FreelanceProfilePage.prototype.handleFileInput = function (files) {
        this.formData = new FormData();
        this.fileToUpload = files.item(0);
        this.formData.append('file', this.fileToUpload);
        console.log(this.fileToUpload);
    };
    FreelanceProfilePage.prototype.fetchMyOrders = function () {
        var _this = this;
        this.http.post('http://localhost:3000/getMyOrders', { 'userid': localStorage.getItem('userid') })
            .subscribe(function (data) {
            console.log(data);
            if (data['ordersAccepted'].length > 0) {
                _this.myorders = data;
            }
        });
    };
    FreelanceProfilePage.prototype.reviewsForm = function (gigid, orderid) {
        var _this = this;
        if (!localStorage.getItem('userid')) {
            alert('LOGIN REQUIRED');
            return;
        }
        this.http.post('http://localhost:3000/addreview', {
            order_id: orderid,
            client_id: localStorage.getItem('userid'),
            reviews_rating: 4,
            comment: this.reviewForm.value.review,
            gigid: gigid
        })
            .subscribe(function (data) {
            _this.comment = '';
            if (data['message']) {
                alert('Review posted');
            }
        });
    };
    FreelanceProfilePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-freelance-profile',
            template: __webpack_require__(/*! ./freelance-profile.page.html */ "./src/app/freelance-profile/freelance-profile.page.html"),
            styles: [__webpack_require__(/*! ./freelance-profile.page.scss */ "./src/app/freelance-profile/freelance-profile.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], FreelanceProfilePage);
    return FreelanceProfilePage;
}());



/***/ })

}]);
//# sourceMappingURL=freelance-profile-freelance-profile-module.js.map