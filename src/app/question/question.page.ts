import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-question',
    templateUrl: './question.page.html',
    styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {

    constructor(private route: Router) {
    }

    ngOnInit() {
        this.route.navigate(['./sidemenu-question/question/tab-myquestion']);
    }
}
