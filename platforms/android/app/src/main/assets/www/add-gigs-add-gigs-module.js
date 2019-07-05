(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["add-gigs-add-gigs-module"],{

/***/ "./src/app/add-gigs/add-gigs.module.ts":
/*!*********************************************!*\
  !*** ./src/app/add-gigs/add-gigs.module.ts ***!
  \*********************************************/
/*! exports provided: AddGigsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGigsPageModule", function() { return AddGigsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _add_gigs_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./add-gigs.page */ "./src/app/add-gigs/add-gigs.page.ts");








var routes = [
    {
        path: '',
        component: _add_gigs_page__WEBPACK_IMPORTED_MODULE_6__["AddGigsPage"]
    }
];
var AddGigsPageModule = /** @class */ (function () {
    function AddGigsPageModule() {
    }
    AddGigsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_add_gigs_page__WEBPACK_IMPORTED_MODULE_6__["AddGigsPage"]]
        })
    ], AddGigsPageModule);
    return AddGigsPageModule;
}());



/***/ }),

/***/ "./src/app/add-gigs/add-gigs.page.html":
/*!*********************************************!*\
  !*** ./src/app/add-gigs/add-gigs.page.html ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar color=\"primary\">\n        <ion-buttons slot=\"start\">\n            <ion-menu-button></ion-menu-button>\n            <ion-back-button defaulthref=\"\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Add Gig</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <form [formGroup]=\"addForm\" (ngSubmit)=\"gigForm()\">\n        <ion-item>\n            <ion-input formControlName=\"gig_title\" type=\"text\" placeholder=\"Title\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-input formControlName=\"gig_description\" type=\"text\" placeholder=\"Description\"></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-input formControlName=\"gig_rate\" type=\"text\" placeholder=\"Gig Rate\"></ion-input>\n        </ion-item>\n        <ion-item>\n\n            <ion-button type=\"button\" class=\"btn btn-primary\" (click)=\"filepicker.click()\">Add Image</ion-button>\n            <input type=\"file\" #filepicker (change)=\"onImagePicked($event)\"\n                   accept=\"image/*\" style=\"visibility: hidden\">\n            <!--<img  [src=]\"imagePreview\" [style.visibility]=\"visible\" >-->\n        </ion-item>\n        <ion-button [disabled]=\"!addForm.valid\" type=\"submit\" shape=\"round\" size=\"default\" color=\"primary\"\n                    expand=\"block\">Post Gig\n        </ion-button>\n\n    </form>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/add-gigs/add-gigs.page.scss":
/*!*********************************************!*\
  !*** ./src/app/add-gigs/add-gigs.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1naWdzL2FkZC1naWdzLnBhZ2Uuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/add-gigs/add-gigs.page.ts":
/*!*******************************************!*\
  !*** ./src/app/add-gigs/add-gigs.page.ts ***!
  \*******************************************/
/*! exports provided: AddGigsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGigsPage", function() { return AddGigsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var AddGigsPage = /** @class */ (function () {
    function AddGigsPage(http, router, formBuilder) {
        this.http = http;
        this.router = router;
        this.formBuilder = formBuilder;
        this.visible = 'hidden';
    }
    AddGigsPage.prototype.ngOnInit = function () {
        this.addForm = this.formBuilder.group({
            gig_title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            gig_description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            gig_rate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
        });
    };
    AddGigsPage.prototype.gigForm = function () {
        var _this = this;
        if (!localStorage.getItem('userid')) {
            alert('LOGIN REQUIRED');
            return;
        }
        console.log('answer');
        this.http.post('http://localhost:3000/addgig', {
            'gig': this.addForm.value,
            'userid': localStorage.getItem('userid'),
            'username': localStorage.getItem('username'),
            'image': this.imagePreview,
        })
            .subscribe(function (data) {
            // console.log(data);
            _this.router.navigateByUrl('/sidemenu-question/freelance/tabf/tab-mygigs');
        });
    };
    AddGigsPage.prototype.onImagePicked = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.addForm.patchValue({ image: file });
        var reader = new FileReader();
        reader.onload = function () {
            // @ts-ignore
            _this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
        this.visible = 'visible';
        // a.style.visibility = 'visible';
    };
    AddGigsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-gigs',
            template: __webpack_require__(/*! ./add-gigs.page.html */ "./src/app/add-gigs/add-gigs.page.html"),
            styles: [__webpack_require__(/*! ./add-gigs.page.scss */ "./src/app/add-gigs/add-gigs.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], AddGigsPage);
    return AddGigsPage;
}());



/***/ })

}]);
//# sourceMappingURL=add-gigs-add-gigs-module.js.map