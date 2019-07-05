import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-showjobs',
    templateUrl: './showjobs.page.html',
    styleUrls: ['./showjobs.page.scss'],
})
export class ShowjobsPage implements OnInit {

    jobs: any = undefined;
    constructor(private http: HttpClient) {
    }

    ngOnInit() {
    }

    ionViewWillEnter() {
        this.http.post('http://localhost:3000/viewjobs', {}).subscribe((data) => {
            console.log(data);
            // @ts-ignore
            this.jobs = data;

        });
    }

}
