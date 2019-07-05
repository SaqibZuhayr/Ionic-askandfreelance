import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {JobsPage} from './jobs.page';

const routes: Routes = [
    {
        path: 'tabsj',
        component: JobsPage,
        children: [
            {
                path: 'showjobs',
                loadChildren: '../showjobs/showjobs.module#ShowjobsPageModule'
            },
            {
                path: 'showjobs/job-details/:id',
                loadChildren: '../job-details/job-details.module#JobDetailsPageModule'
            },
            {
                path: 'myjobs',
                loadChildren: '../myjobs/myjobs.module#MyjobsPageModule'
            },
            {
                path: 'myjob-applied/:id',
                loadChildren: '../myjob-applied/myjob-applied.module#MyjobAppliedPageModule'
            },
        ]
    },
    {
        path: '',
        redirectTo: 'tabsj/showjobs',
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
    declarations: [JobsPage]
})
export class JobsPageModule {
}
