import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-postquestion',
    templateUrl: './postquestion.page.html',
    styleUrls: ['./postquestion.page.scss'],
})
export class PostquestionPage implements OnInit {
    qForm: FormGroup;

    constructor(public formBuilder: FormBuilder, private route: Router, private http: HttpClient) {
        this.qForm = this.formBuilder.group({
            title: ['', Validators.required],
            question: ['', Validators.required],
        });
    }

    ngOnInit() {

    }

    questionForm() {
        if (!localStorage.getItem('userid')) {
            alert('LOGIN REQUIRED');
            return;
        }
        console.log('answer');
        this.http.post('http://localhost:3000/postquestion', {
            'category': this.qForm.value.title,
            'question': this.qForm.value.question,
            'userid': localStorage.getItem('userid'),
            'askedBy': localStorage.getItem('username')

        })
            .subscribe((data) => {
                console.log(data);
                this.route.navigateByUrl('/sidemenu-question/question');
            });

    }

}
