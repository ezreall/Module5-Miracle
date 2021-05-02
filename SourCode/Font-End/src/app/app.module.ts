import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './font-end/menu/menu.component';
import { LoginPageComponent } from './Login/components/login-page/login-page.component';
import { ShowListComponent } from './Login/components/show-list/show-list.component';
import { MenuLoginComponent } from './Login/components/menu-login/menu-login.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LoginPageComponent,
    ShowListComponent,
    MenuLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
