import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
    selector: 'app-gigs',
    templateUrl: './gigs.page.html',
    styleUrls: ['./gigs.page.scss'],
})
export class GigsPage implements OnInit {
    gigs: any = undefined;

    constructor(private http: HttpClient) {
    }

    ngOnInit() {
       // this.fetchGigs();
    }

    ionViewWillEnter() {
        this.fetchGigs();
    }

    fetchGigs() {
        this.http.post('http://localhost:3000/fetchgigs', {})
            .subscribe((data) => {
                console.log(data);
                this.gigs = data;
            });
    }

}
