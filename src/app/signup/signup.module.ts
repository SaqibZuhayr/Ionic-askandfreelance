import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {Routes, RouterModule} from '@angular/router';
import {ReactiveFormsModule} from '@angular/forms';


import {IonicModule} from '@ionic/angular';

import {SignupPage} from './signup.page';

const routes: Routes = [
    {
        path: '',
        component: SignupPage
    }
];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule
    ],
    declarations: [SignupPage]
})
export class SignupPageModule {
}
