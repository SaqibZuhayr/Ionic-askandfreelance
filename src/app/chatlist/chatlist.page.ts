import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-chatlist',
    templateUrl: './chatlist.page.html',
    styleUrls: ['./chatlist.page.scss'],
})
export class ChatlistPage implements OnInit {

    conversations: any = undefined;
    constructor(private router: Router, private http: HttpClient) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.fetchConversations();
    }

    fetchConversations() {
        this.http.post('http://localhost:3000/getConversations', {'userid': localStorage.getItem('userid')})
            .subscribe((data) => {
                this.conversations = data;
                console.log(data);


            });
    }

    chat(id, username) {
        // console.log(this.receiverid,this.receivername)
        this.router.navigate(['sidemenu-question/freelance/tabf/chatlist/chat'], {queryParams: {id: id, name: username}});
    }
}
