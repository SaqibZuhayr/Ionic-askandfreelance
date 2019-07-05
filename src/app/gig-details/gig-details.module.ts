import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {ReactiveFormsModule} from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { GigDetailsPage } from './gig-details.page';

const routes: Routes = [
  {
    path: '',
    component: GigDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
      ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [GigDetailsPage]
})
export class GigDetailsPageModule {}
