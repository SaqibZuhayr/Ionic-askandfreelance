import {Component, OnInit} from '@angular/core';
import {QuestionService} from '../question.service';

@Component({
    selector: 'app-tab-myquestion',
    templateUrl: './tab-myquestion.page.html',
    styleUrls: ['./tab-myquestion.page.scss'],
})
export class TabMyquestionPage implements OnInit {

    Question;
    ans;
    checkbool = false;
    bool = false;

    constructor(private question: QuestionService) {
    }

    ngOnInit() {
        // this.bool = true;
        // console.log(localStorage.getItem('userid'));
        // this.question.getQuestions(undefined, localStorage.getItem('userid'), undefined);
        // this.question.questionObservable.subscribe(value => {
        //     this.Question = value;
        // });
    }

    ionViewWillEnter() {
        this.bool = true;
        console.log(localStorage.getItem('userid'));
        this.question.getMyQuestions(localStorage.getItem('userid'));
        this.question.questionObservable.subscribe(value => {
            this.Question = value;
        });
    }

}
