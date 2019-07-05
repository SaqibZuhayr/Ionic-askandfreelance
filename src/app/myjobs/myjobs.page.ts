import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-myjobs',
    templateUrl: './myjobs.page.html',
    styleUrls: ['./myjobs.page.scss'],
})
export class MyjobsPage implements OnInit {
    myjobs: any = undefined;

    constructor(public route: ActivatedRoute, public router: Router, private http: HttpClient) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.getMyJobs();
    }

    getMyJobs() {
        this.route.params.subscribe((params) => {
            // console.log(params.id);
            this.http.post('http://localhost:3000/myjobs', {'userid': localStorage.getItem('userid')}).subscribe((data) => {
                this.myjobs = data;
                console.log(data);
            });
        });
    }

}
