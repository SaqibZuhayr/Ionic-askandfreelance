(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["chat-chat-module"],{

/***/ "./src/app/chat/chat.module.ts":
/*!*************************************!*\
  !*** ./src/app/chat/chat.module.ts ***!
  \*************************************/
/*! exports provided: ChatPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPageModule", function() { return ChatPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _chat_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./chat.page */ "./src/app/chat/chat.page.ts");







var routes = [
    {
        path: '',
        component: _chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]
    }
];
var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_chat_page__WEBPACK_IMPORTED_MODULE_6__["ChatPage"]]
        })
    ], ChatPageModule);
    return ChatPageModule;
}());



/***/ }),

/***/ "./src/app/chat/chat.page.html":
/*!*************************************!*\
  !*** ./src/app/chat/chat.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\r\n    <ion-toolbar color=\"primary\">\r\n        <ion-buttons slot=\"start\">\r\n            <ion-menu-button></ion-menu-button>\r\n            <ion-back-button defaulthref=\"\"></ion-back-button>\r\n        </ion-buttons>\r\n        <ion-title>Chat</ion-title>\r\n    </ion-toolbar>\r\n</ion-header>\r\n<ion-content #content style=\"margin-top: 10px; margin-bottom: 10px;\">\r\n    <div class=\"row\" ngx-auto-scroll lock-y-offset=\"10\" observe-attributes>\r\n        <div class=\"col-sm-12\">\r\n            <div class=\"message-wrapper\" *ngFor=\"let message of messageArray\">\r\n                <div class=\"row\">\r\n                    <ion-card class=\"row left\" *ngIf=\"username != receivername && username != message.sendername\">\r\n                        <div style=\"float: left\" class=\"col-sm-12 chat-bubble left slide-left\">\r\n                            <ion-card-content class=\"message\">\r\n                                <p>{{message.body}}</p>\r\n                            </ion-card-content>\r\n                        </div>\r\n                        <hr/>\r\n                    </ion-card>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <ion-card class=\"row right\" *ngIf=\"username === message.sendername\">\r\n                        <div style=\"float: right\" class=\"col-sm-12 chat-bubble right slide-right\">\r\n                            <ion-card-content class=\"message\">\r\n                                <p>{{message.body}}</p>\r\n                            </ion-card-content>\r\n                        </div>\r\n                        <hr/>\r\n                    </ion-card>\r\n                </div>\r\n            </div>\r\n            <div class=\"left col-sm-12\" *ngIf=\"typing\">\r\n                <ion-card class=\"chat-bubble left slide-left\">\r\n                    <div class=\"message\">\r\n                        <p>{{receivername}} is typing</p>\r\n                    </div>\r\n                </ion-card>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</ion-content>\r\n<ion-footer no-border>\r\n    <ion-item text-wrap style=\"margin-top: 0px; !important\">\r\n        <ion-textarea style=\"font-size: 16px;\" id=\"msgInput\" placeholder=\"Send a message ...\" (keypress)=\"isTyping()\"\r\n                      [(ngModel)]=\"message\" style=\"width:inherit; height: 40px;\"\r\n                      name=\"message\">\r\n        </ion-textarea>\r\n        <ion-button size=\"large\" ion-button clear item-end (click)=\"sendMessage()\">\r\n            <img src=\"../assets/icon/send.png\">\r\n        </ion-button>\r\n    </ion-item>\r\n</ion-footer>"

/***/ }),

/***/ "./src/app/chat/chat.page.scss":
/*!*************************************!*\
  !*** ./src/app/chat/chat.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-card {\n  box-shadow: none !important; }\n\n.card-body {\n  padding-top: 5px !important;\n  padding-bottom: 5px !important; }\n\n.circle {\n  border-radius: 50%; }\n\n.card-body {\n  border-radius: 15px; }\n\n.chat-body {\n  margin-top: 10px;\n  padding-top: 10px;\n  background-color: white;\n  border-radius: 15px;\n  height: 380px;\n  overflow-y: auto; }\n\n.chat-body-footer {\n  margin-top: 10px;\n  padding: 10px;\n  background-color: white;\n  border-radius: 15px; }\n\n.chat-bubble {\n  border-radius: 10px;\n  display: inline-block;\n  padding-top: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-bottom: 0px !important;\n  position: relative;\n  max-width: 80%; }\n\n.message {\n  font-size: 15px; }\n\n.chat-bubble.left {\n  background: #f1f0f0;\n  margin-left: 15px; }\n\n.chat-bubble.right {\n  background: #64b5f6;\n  margin-right: 7px;\n  color: white; }\n\n.message-wrapper {\n  position: relative; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC9EOlxcQW5ndWxhclxcaW9uaWMtYXNrYW5kZi9zcmNcXGFwcFxcY2hhdFxcY2hhdC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBMkIsRUFBQTs7QUFFN0I7RUFDRSwyQkFBMkI7RUFDM0IsOEJBQThCLEVBQUE7O0FBR2hDO0VBQ0Usa0JBQWtCLEVBQUE7O0FBR3BCO0VBQ0UsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWE7RUFDYixnQkFBZ0IsRUFBQTs7QUFHbEI7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxtQkFBbUI7RUFDbkIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixrQkFBa0I7RUFDbEIsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxtQkFBbUI7RUFDbkIsaUJBQWlCLEVBQUE7O0FBR25CO0VBQ0UsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixZQUFZLEVBQUE7O0FBR2Q7RUFDRSxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NoYXQvY2hhdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY2FyZHtcclxuICBib3gtc2hhZG93OiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmQtYm9keSB7XHJcbiAgcGFkZGluZy10b3A6IDVweCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNpcmNsZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5IHtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcblxyXG4uY2hhdC1ib2R5IHtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgaGVpZ2h0OiAzODBweDtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG59XHJcblxyXG4uY2hhdC1ib2R5LWZvb3RlciB7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuXHJcbi5jaGF0LWJ1YmJsZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDBweCAhaW1wb3J0YW50O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBtYXgtd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLm1lc3NhZ2Uge1xyXG4gIGZvbnQtc2l6ZTogMTVweDtcclxufVxyXG5cclxuLmNoYXQtYnViYmxlLmxlZnQge1xyXG4gIGJhY2tncm91bmQ6ICNmMWYwZjA7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1cHg7XHJcbn1cclxuXHJcbi5jaGF0LWJ1YmJsZS5yaWdodCB7XHJcbiAgYmFja2dyb3VuZDogIzY0YjVmNjtcclxuICBtYXJnaW4tcmlnaHQ6IDdweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tZXNzYWdlLXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/chat/chat.page.ts":
/*!***********************************!*\
  !*** ./src/app/chat/chat.page.ts ***!
  \***********************************/
/*! exports provided: ChatPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatPage", function() { return ChatPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _message_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../message-service.service */ "./src/app/message-service.service.ts");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_4__);





var ChatPage = /** @class */ (function () {
    // @ViewChild('content') private content: any;
    function ChatPage(msgService, route) {
        this.msgService = msgService;
        this.route = route;
        this.message = '';
        this.messageArray = [];
        this.typing = false;
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_4__('http://localhost:3000');
    }
    ChatPage.prototype.ngOnInit = function () {
        var _this = this;
        //  scroll.scrollToBottom();
        this.route.queryParams.subscribe(function (params) {
            _this.receivername = params.name;
            _this.receiverid = params.id;
            _this.username = localStorage.getItem('username');
            _this.GetAllMessages(localStorage.getItem('userid'), _this.receiverid);
            _this.socket.on('refreshPage', function () {
                _this.GetAllMessages(localStorage.getItem('userid'), _this.receiverid);
                setTimeout(function () {
                    _this.content.scrollToBottom(); //300ms animation speed
                });
            });
        });
        this.socket.on('is_typing', function (data) {
            if (data.sender === _this.receivername) {
                _this.typing = true;
            }
        });
        this.socket.on('has_stop', function (data) {
            if (data.sender === _this.receivername) {
                _this.typing = false;
            }
        });
    };
    ChatPage.prototype.ionViewDidEnter = function () {
        this.content.scrollToBottom(); //300ms animation speed
    };
    ChatPage.prototype.sendMessage = function () {
        var _this = this;
        //  this.scrollToBottomOnInit();
        if (this.message) {
            this.msgService
                .SendMessage(localStorage.getItem('userid'), localStorage.getItem('username'), this.receiverid, this.receivername, this.message)
                .subscribe(function (data) {
                console.log(data);
                _this.socket.emit('refresh', {});
                _this.message = '';
                _this.tabElement = document.querySelector('input');
                _this.content.scrollToBottom();
                // this.tabElement.text = '';
            });
        }
    };
    ChatPage.prototype.GetAllMessages = function (senderid, receiverid) {
        var _this = this;
        this.msgService.GetMessage(senderid, receiverid).subscribe(function (data) {
            console.log(data);
            _this.messageArray = data.messages.message;
        });
    };
    ChatPage.prototype.isTyping = function () {
        var _this = this;
        this.socket.emit('start_typing', {
            sender: localStorage.getItem('username'),
            receiver: this.receivername
        });
        if (this.typingMessage) {
            clearTimeout(this.typingMessage);
        }
        this.typingMessage = setTimeout(function () {
            _this.socket.emit('stop_typing', {
                sender: localStorage.getItem('username'),
                receiver: _this.receivername
            });
        }, 500);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('content'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ChatPage.prototype, "content", void 0);
    ChatPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.page.html */ "./src/app/chat/chat.page.html"),
            queries: {
                content: new _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"]('content')
            },
            styles: [__webpack_require__(/*! ./chat.page.scss */ "./src/app/chat/chat.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_message_service_service__WEBPACK_IMPORTED_MODULE_3__["MessageServiceService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], ChatPage);
    return ChatPage;
}());



/***/ }),

/***/ "./src/app/message-service.service.ts":
/*!********************************************!*\
  !*** ./src/app/message-service.service.ts ***!
  \********************************************/
/*! exports provided: MessageServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageServiceService", function() { return MessageServiceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var MessageServiceService = /** @class */ (function () {
    function MessageServiceService(http) {
        this.http = http;
    }
    MessageServiceService.prototype.SendMessage = function (senderId, senderName, receiverId, receiverName, message) {
        return this.http.post("http://localhost:3000/chat", {
            senderId: senderId,
            senderName: senderName,
            receiverId: receiverId,
            receiverName: receiverName,
            message: message
        });
    };
    MessageServiceService.prototype.GetMessage = function (senderId, receiverId) {
        return this.http.post("http://localhost:3000/getchat", {
            senderId: senderId,
            receiverId: receiverId,
        });
    };
    MessageServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MessageServiceService);
    return MessageServiceService;
}());



/***/ })

}]);
//# sourceMappingURL=chat-chat-module.js.map