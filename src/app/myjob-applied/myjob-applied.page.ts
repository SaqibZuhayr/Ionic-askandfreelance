import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-myjob-applied',
    templateUrl: './myjob-applied.page.html',
    styleUrls: ['./myjob-applied.page.scss'],
})
export class MyjobAppliedPage implements OnInit {
    applicants: any = undefined;

    constructor(public route: ActivatedRoute, public router: Router, private http: HttpClient) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.viewApplications();
    }

    viewApplications() {
        this.route.params.subscribe((params) => {
            console.log(params.id);
            this.http.post('http://localhost:3000/getapplicants', {'jobID': params.id}).subscribe((data) => {
                this.applicants = data;
                console.log(data);
            });
        });
    }

}
