import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';
import {Location} from '@angular/common';

import {QuestionService} from '../question.service';
import {until} from 'selenium-webdriver';

@Component({
    selector: 'app-tab-question',
    templateUrl: './tab-question.page.html',
    styleUrls: ['./tab-question.page.scss'],
})
export class TabQuestionPage implements OnInit {
    Question;
    ans;
    checkbool = false;
    bool = false;


    constructor(private http: HttpClient, private router: Router, private question: QuestionService) {
    }

    ngOnInit() {

    }

    ionViewWillEnter() {
        this.bool = true;
        this.question.getQuestions(undefined, undefined, undefined);
        this.question.questionObservable.subscribe(value => {
            this.Question = value;
            this.ans = '/sidemenu-question/question/tabs/tab-question/answer/';
        });
    }

    post_question(id) {
        this.router.navigate(['/sidemenu-question/question/tabs/tab-question/postquestion'], id);
    }

    viewAnswer(id) {
        this.router.navigate(['/sidemenu-question/question/tabs/tab-question/answer/:id'], id);
    }
}