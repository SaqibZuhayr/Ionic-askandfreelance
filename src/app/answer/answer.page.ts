import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-answer',
    templateUrl: './answer.page.html',
    styleUrls: ['./answer.page.scss'],
})
export class AnswerPage implements OnInit {

    pAnswer: FormGroup;
    questionID: string;
    question: any = undefined;
    userid = ' ';
    username = ' ';

    constructor(public formBuilder: FormBuilder, public route: ActivatedRoute, public router: Router, private http: HttpClient) {
        this.pAnswer = this.formBuilder.group({
            answer: ['', Validators.required],
        });

    }

    ngOnInit() {
        this.userid = localStorage.getItem('userid');
        this.username = localStorage.getItem('username');
        this.questionID = this.route.snapshot.paramMap.get('id');
        console.log(this.questionID);
        this.fetchAnswer();

    }

    onPostAnswer() {
        // this.pAnswer = new FormGroup({
        //     answer: new FormControl()
        // });


    }

    fetchAnswer() {
        this.route.params.subscribe((params) => {
            this.http.post('http://localhost:3000/answers', {'questionID': params.id}).subscribe((data) => {
                this.question = data;
                console.log(data);
            });
        });
    }

    onBack() {
        console.log('asdasd');
        this.router.navigate(['/main']);
    }

    addScore(answerId) {
        this.ratingAnswer('add', answerId);

    }

    subScore(answerId) {
        this.ratingAnswer('sub', answerId);
    }


    ratingAnswer(rate, answerId) {
        if (!localStorage.getItem('userid')) {
            alert('LOGIN REQUIRED');
            return;
        }
        this.http.post('http://localhost:3000/rateanswer', {
            rate: rate, answerId: answerId, qId: this.questionID
            , userid: this.userid
        })
            .subscribe((data) => {
                console.log(data);
                if (data['message']) {
                    alert('You have already rated this answer');
                }
                this.fetchAnswer();
            });
    }

    panswer() {
        if (!localStorage.getItem('userid')) {
            alert('LOGIN REQUIRED');
            return;
        }
        console.log('answer');
        this.http.post('http://localhost:3000/postanswer', {
             'answer': this.pAnswer.value.answer,
            'questionID': this.question['questionid'],
            'userid': this.userid,
            'answeredBy': this.username
        })
            .subscribe((data) => {
                console.log(data);
                this.fetchAnswer();
            });

    }

}
