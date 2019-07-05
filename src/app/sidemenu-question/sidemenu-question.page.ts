import {Component, OnInit} from '@angular/core';
import {Router, RouterEvent} from '@angular/router';

@Component({
    selector: 'app-sidemenu-question',
    templateUrl: './sidemenu-question.page.html',
    styleUrls: ['./sidemenu-question.page.scss'],
})
export class SidemenuQuestionPage implements OnInit {

    selectedPath = '';
    pages = [
        {
            title: 'Question',
            url: '/sidemenu-question/question'
        },
        {
            title: 'Freelance',
            url: '/sidemenu-question/freelance'
        },
        {
            title: 'Jobs',
            url: '/sidemenu-question/jobs'
        }
    ];

    constructor(private router: Router) {
        this.router.events.subscribe((event: RouterEvent) => {
            if (event && event.url) {
                this.selectedPath = event.url;
            }
        });
    }

    ngOnInit() {
        this.router.navigate(['/sidemenu-question/question']);
    }

}
