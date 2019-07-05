import {Component, OnInit} from '@angular/core';
import {FormGroup, FormBuilder, FormControl, Validators} from '@angular/forms';
import {UserService} from '../user.service';
import {Router} from '@angular/router';


@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
    loginForm: FormGroup;

    constructor(public formBuilder: FormBuilder, private user: UserService, private route: Router) {
        this.loginForm = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
    }

    logForm() {
        this.user.login(this.loginForm).subscribe((data) => {
            console.log(data);
            if (data[0]['_id']) {
                localStorage.setItem('userid', data[0]['_id']);
                localStorage.setItem('username', data[0]['username']);
                 this.route.navigate(['./sidemenu-question/question']);
                console.log('login Succesful');
                // return;
            } else {
                alert('wrong credentails');
                // return;

            }
        });


    }

    ngOnInit() {
    }

}





