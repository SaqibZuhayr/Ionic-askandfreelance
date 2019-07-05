import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';


const routes: Routes = [
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
    {path: 'login', loadChildren: './login/login.module#LoginPageModule'},
    {path: 'signup', loadChildren: './signup/signup.module#SignupPageModule'},
    // { path: 'question', loadChildren: './question/question.module#' },
    {path: 'sidemenu-question', loadChildren: './sidemenu-question/sidemenu-question.module#SidemenuQuestionPageModule'},
    {path: 'chatpage', loadChildren: './chatpage/chatpage.module#ChatpagePageModule'},
  { path: 'myjobs', loadChildren: './myjobs/myjobs.module#MyjobsPageModule' },






    // { path: 'answer/:id', loadChildren: './answer/answer.module#AnswerPageModule' },

];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
