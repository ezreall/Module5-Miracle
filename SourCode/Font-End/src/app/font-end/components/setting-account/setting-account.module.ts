import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditAccountComponent } from './edit-account/edit-account.component';
import { MenuSettingComponent } from './menu-setting/menu-setting.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailAccountComponent } from '../detail-account/detail-account.component';
import { RegisterServiceComponent } from '../register-service/register-service.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterUserComponent } from '../register-user/register-user.component';
import { ServiceDetailComponent } from '../service-detail/service-detail.component';
import { ServiceUpdateComponent } from '../service-update/service-update.component';
import { MyrequestComponent } from '../myrequest/myrequest.component';


const routes: Routes = [{
  path: 'account',
  component: EditAccountComponent,
},{
  path:'edit',
  component:DetailAccountComponent
},{
  path:'player',
  component:RegisterServiceComponent,
},{
  path:'register',
  component:RegisterUserComponent
},
{
  path:'detail',
  component:ServiceDetailComponent
},
{
  path:'update/:id',
  component:ServiceUpdateComponent
},
{
  path: 'myrequest',
  component: MyrequestComponent
},



]
@NgModule({
  declarations: [
    EditAccountComponent,
    MenuSettingComponent,
    RegisterUserComponent,
    RegisterServiceComponent,
    ServiceDetailComponent,
    ServiceUpdateComponent,
    MyrequestComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class SettingAccountModule { }
