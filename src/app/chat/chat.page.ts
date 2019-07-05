import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {MessageServiceService} from '../message-service.service';
import * as io from 'socket.io-client';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.page.html',
    queries: {
        content: new ViewChild('content')
    },
    styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
    @ViewChild('content') content: any;
    tabElement: any;
    receivername: string;
    receiverid: string;
    message = '';
    username: string;
    messageArray = [];
    socket: any;
    typingMessage;
    typing = false;
    conversations: any;

    // @ViewChild('content') private content: any;

    constructor(private msgService: MessageServiceService, private route: ActivatedRoute) {
        this.socket = io('http://localhost:3000');
    }

    ngOnInit() {
        //  scroll.scrollToBottom();
        this.route.queryParams.subscribe(params => {
            this.receivername = params.name;
            this.receiverid = params.id;
            this.username = localStorage.getItem('username');
            this.GetAllMessages(localStorage.getItem('userid'), this.receiverid);
            this.socket.on('refreshPage', () => {
                this.GetAllMessages(localStorage.getItem('userid'), this.receiverid);
                setTimeout(() => {
                    this.content.scrollToBottom(); //300ms animation speed
                });
            });


        });

        this.socket.on('is_typing', data => {

            if (data.sender === this.receivername) {
                this.typing = true;
            }
        });

        this.socket.on('has_stop', data => {
            if (data.sender === this.receivername) {
                this.typing = false;
            }
        });
    }

    ionViewDidEnter() {
        this.content.scrollToBottom();//300ms animation speed
    }

    sendMessage() {
        //  this.scrollToBottomOnInit();
        if (this.message) {
            this.msgService
                .SendMessage(localStorage.getItem('userid'), localStorage.getItem('username'),
                    this.receiverid, this.receivername, this.message)
                .subscribe(data => {
                    console.log(data);
                    this.socket.emit('refresh', {});
                    this.message = '';
                    this.tabElement = document.querySelector('input');
                     this.content.scrollToBottom();
                    // this.tabElement.text = '';

                });
        }
    }

    GetAllMessages(senderid, receiverid) {
        this.msgService.GetMessage(senderid, receiverid).subscribe(data => {
                console.log(data);
                this.messageArray = data.messages.message;
            }
        );
    }

    isTyping() {
        this.socket.emit('start_typing', {
            sender: localStorage.getItem('username'),
            receiver: this.receivername
        });

        if (this.typingMessage) {
            clearTimeout(this.typingMessage);
        }

        this.typingMessage = setTimeout(() => {
            this.socket.emit('stop_typing', {
                sender: localStorage.getItem('username'),
                receiver: this.receivername
            });
        }, 500);


    }


    // scrollToBottomOnInit() {
    //     this.content.scrollToBottom(200);
    // }


}
