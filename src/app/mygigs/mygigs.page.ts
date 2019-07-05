import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
    selector: 'app-mygigs',
    templateUrl: './mygigs.page.html',
    styleUrls: ['./mygigs.page.scss'],
})
export class MygigsPage implements OnInit {
    userGigs: any = undefined;

    constructor(private http: HttpClient, private router: Router) {
    }

    ngOnInit() {
        // this.fetchUserGigs();
    }

    ionViewWillEnter() {
        this.fetchUserGigs();
    }

    fetchUserGigs() {
        this.http.post('http://localhost:3000/fetchgigs', {'userid': localStorage.getItem('userid')})
            .subscribe((data) => {
                console.log(data);
                this.userGigs = data;
            });
    }

    addGigs() {
        this.router.navigate(['sidemenu-question/freelance/tabf/tab-mygigs/add-gigs']);
    }


}
