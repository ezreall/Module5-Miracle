import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { MenuSettingComponent } from './menu-setting/menu-setting.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailAccountComponent } from '../detail-account/detail-account.component';
import { RegisterServiceComponent } from '../register-service/register-service.component';


const routes: Routes = [{
  path: 'account',
  component: EditAccountComponent,
},{
  path:'edit',
  component:DetailAccountComponent
},{
  path:'player',
  component:RegisterServiceComponent,
}

]
@NgModule({
  declarations: [
    EditAccountComponent,
    MenuSettingComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SettingAccountModule { }
