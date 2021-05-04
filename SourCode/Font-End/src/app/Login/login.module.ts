import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { ShowListComponent } from './components/show-list/show-list.component';
import { DetailPlayerComponent } from './components/detail-player/detail-player.component';


const routes: Routes = [{
  path: 'login',
  component: LoginPageComponent,
},{
  path:'players',
  component:ShowListComponent
},{
  path:'detail',
  component:DetailPlayerComponent
}
]
@NgModule({
  declarations: [
    DetailPlayerComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),

  ]
})
export class LoginModule { }
