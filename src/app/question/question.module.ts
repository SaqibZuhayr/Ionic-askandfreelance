import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {QuestionPage} from './question.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: QuestionPage,
        children: [
            {
                path: 'tab-question',
                loadChildren: '../tab-question/tab-question.module#TabQuestionPageModule'
            },
            {
                path: 'tab-myquestion',
                loadChildren: '../tab-myquestion/tab-myquestion.module#TabMyquestionPageModule'

            },
            {
                path: 'tab-question/postquestion',
                loadChildren: '../postquestion/postquestion.module#PostquestionPageModule'
            },
            {
                path: 'tab-question/answer/:id',
                loadChildren: '../answer/answer.module#AnswerPageModule'
            },
            {
                path: 'tab-myquestion/answer/:id',
                loadChildren: '../answer/answer.module#AnswerPageModule'
            },
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/tab-question',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes)
    ],
    declarations: [QuestionPage]
})
export class QuestionPageModule {
}
