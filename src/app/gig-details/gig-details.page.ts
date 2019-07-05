import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../user.service';

@Component({
    selector: 'app-gig-details',
    templateUrl: './gig-details.page.html',
    styleUrls: ['./gig-details.page.scss'],
})
export class GigDetailsPage implements OnInit {
    receivername: string;
    receiverid: string;
    userid: string;
    Gig = undefined;
    gigForm: FormGroup;

    constructor(public formBuilder: FormBuilder, private router: Router, private route: ActivatedRoute, private http: HttpClient) {
        this.gigForm = this.formBuilder.group({
            order_name: ['', Validators.required],
            order_price: ['', Validators.required],
            order_description: ['', Validators.required],
            order_delivery_time: ['', Validators.required],
        });
    }


    ngOnInit() {
    }

    ionViewWillEnter() {
        this.userid = localStorage.getItem('userid');
        this.fetchGigDetails();
    }

    fetchGigDetails() {

        this.route.params.subscribe((params) => {
            console.log(params.id);
            this.http.post('http://localhost:3000/gigdetail', {'gigid': params.id}).subscribe((data) => {
                this.receiverid = data['userid'];
                this.receivername = data['username'];
                this.Gig = data;


            });
        });
    }

    chat(id, username) {
        // console.log(this.receiverid,this.receivername)
        this.router.navigate(['sidemenu-question/freelance/tabf/chatlist/chat'], {queryParams: {id: id, name: username}});
    }

    gigsForm() {

        if (!localStorage.getItem('userid')) {
            alert('LOGIN REQUIRED');
            return;
        }
        this.http.post('http://localhost:3000/submitOrder', {
            'order': this.gigForm.value, 'userid': this.userid,
            'receiverid': this.receiverid, 'gigid': this.Gig._id,
        })
            .subscribe((data) => {
                console.log(data);
            });
    }


}
