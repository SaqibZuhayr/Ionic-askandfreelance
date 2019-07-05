import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-job-details',
    templateUrl: './job-details.page.html',
    styleUrls: ['./job-details.page.scss'],
})
export class JobDetailsPage implements OnInit {
    jobs: any = undefined;

    constructor(public route: ActivatedRoute, private http: HttpClient) {
    }

    ngOnInit() {

    }

    ionViewWillEnter() {
        this.route.params.subscribe((params) => {
            console.log(params.id);
            this.http.post('http://localhost:3000/jobdetails', {'jobID': params.id}).subscribe((data) => {
                // console.log(data);
                this.jobs = data;
                // console.log(this.answers);


            });
        });
    }

    apply_job() {
        this.http.post('http://localhost:3000/applyjob', {
            'jobID': this.jobs['_id'],
            'userid': localStorage.getItem('userid')
        }).subscribe((data) => {
            // console.log(data);
            alert(data['message']);
        });
    }

}
