import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {SidemenuQuestionPage} from './sidemenu-question.page';

const routes: Routes = [
        {
            path: '',
            component: SidemenuQuestionPage,
            children: [
                {
                    path: 'question',
                    loadChildren: '../question/question.module#QuestionPageModule'
                },
                {
                    path: 'freelance',
                    loadChildren: '../freelance/freelance.module#FreelancePageModule'
                },
                {
                    path: 'jobs',
                    loadChildren: '../jobs/jobs.module#JobsPageModule'
                },
            ]
        },
        {
            path: '',
            redirectTo: '/sidemenu-question/question'
        }
    ]
;

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [SidemenuQuestionPage]
})
export class SidemenuQuestionPageModule {
}
