import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { NavbarComponent } from './back-end/navbar/navbar.component';
import { MenuSettingComponent } from './font-end/components/setting-account/menu-setting/menu-setting.component';
import { MenuComponent } from './font-end/menu/menu.component';
import { LoginPageComponent } from './Login/components/login-page/login-page.component';
import { MenuLoginComponent } from './Login/components/menu-login/menu-login.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'users',
    component: MenuComponent,
    children: [{
      path: '',
      loadChildren: (() => import('./font-end/font-end.module').then(m => m.FontEndModule))
    },
    {
      path: 'setting',
      component: MenuSettingComponent,
      loadChildren: (() => import('./font-end/components/setting-account/setting-account.module').then(m => m.SettingAccountModule))
    }
    ], canActivate: [AuthGuard],
  },
  {
    path: 'admin',
    component: NavbarComponent
  },

  {
    path: 'player',
    component: MenuLoginComponent,
    children: [{
      path: '',
      loadChildren: (() => import('./Login/login.module').then(m => m.LoginModule)),
    }]
  }, {
    path: 'login',
    component: LoginPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
