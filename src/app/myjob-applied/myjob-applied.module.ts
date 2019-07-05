import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MyjobAppliedPage } from './myjob-applied.page';

const routes: Routes = [
  {
    path: '',
    component: MyjobAppliedPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MyjobAppliedPage]
})
export class MyjobAppliedPageModule {}
