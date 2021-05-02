import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './back-end/navbar/navbar.component';
import { MenuSettingComponent } from './font-end/components/setting-account/menu-setting/menu-setting.component';
import { MenuComponent } from './font-end/menu/menu.component';
import { LoginPageComponent } from './Login/components/login-page/login-page.component';
import { MenuLoginComponent } from './Login/components/menu-login/menu-login.component';

const routes: Routes = [
  {
    path: 'users',
    component: MenuComponent,
    children: [{
      path: '',
      loadChildren: (() => import('./font-end/font-end.module').then(m => m.FontEndModule))
    },
    {path:'setting',
    component:MenuSettingComponent,
      loadChildren:(()=>import('./font-end/components/setting-account/setting-account.module').then(m=>m.SettingAccountModule))
    }
  ]},{
    path:'admin',
    component:NavbarComponent
  },{
    path:'',
    component:MenuLoginComponent,
    children:[{
      path:'',
      loadChildren:(()=>import('./Login/login.module').then(m=>m.LoginModule))
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
