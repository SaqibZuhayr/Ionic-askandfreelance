import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.page.html',
    styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
    signupForm: FormGroup;

    constructor(public formBuilder: FormBuilder, private http: HttpClient, private router: Router) {
        this.signupForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            email: ['', Validators.required],
            password: ['', Validators.required],
            repassword: ['', Validators.required],
        });
    }

    signup() {
        this.http.post('http://localhost:3000/user', {
            'first_name': this.signupForm.value.firstName,
            'last_name': this.signupForm.value.lastName,
            'email': this.signupForm.value.email,
            'username': this.signupForm.value.username,
            'password': this.signupForm.value.password
        }).subscribe((data) => {
            console.log(data);
            this.router.navigate(['/login']);
        });

    }

    ngOnInit() {
    }

}
