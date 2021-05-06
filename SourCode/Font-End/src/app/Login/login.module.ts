import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { DetailPlayerComponent } from './components/detail-player/detail-player.component';

import { HttpClientModule } from '@angular/common/http';
import { AuthGuard } from '../auth/auth.guard';
import { ResgiterComponent } from './resgiter/resgiter.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [

 {
    path: '',
    component: ShowListComponent
  }, {
    path: 'detail/:id',
    component: DetailPlayerComponent
  }
]
@NgModule({
  declarations: [
    DetailPlayerComponent,
    ResgiterComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

    HttpClientModule,

    RouterModule.forChild(routes)]


})
export class LoginModule { }
