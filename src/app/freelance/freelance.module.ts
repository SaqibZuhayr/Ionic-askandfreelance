import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';

import {IonicModule} from '@ionic/angular';

import {FreelancePage} from './freelance.page';

const routes: Routes = [
    {
        path: 'tabf',
        component: FreelancePage,
        children: [
            {
                path: 'tab-gigs',
                loadChildren: '../gigs/gigs.module#GigsPageModule'
            },
            {
                path: 'tab-mygigs',
                loadChildren: '../mygigs/mygigs.module#MygigsPageModule'
            },
            {
                path: 'chatlist',
                loadChildren: '../chatlist/chatlist.module#ChatlistPageModule'
            },
            {
                path: 'order-requests',
                loadChildren: '../order-requests/order-requests.module#OrderRequestsPageModule'
            },
            {
                path: 'freelance-profile',
                loadChildren: '../freelance-profile/freelance-profile.module#FreelanceProfilePageModule'
            },
            {
                path: 'tab-gigs/gig-details/:id',
                loadChildren: '../gig-details/gig-details.module#GigDetailsPageModule'
            },
            {
                path: 'chatlist/chat',
                loadChildren: '../chat/chat.module#ChatPageModule'
            },
            {
                path: 'tab-mygigs/add-gigs',
                loadChildren: '../add-gigs/add-gigs.module#AddGigsPageModule'
            },
        ]
    },
    {
        path: '',
        redirectTo: 'tabf/tab-gigs',
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
    declarations: [FreelancePage]
})
export class FreelancePageModule {
}
