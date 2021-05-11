import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import {NgxPaginationModule} from 'ngx-pagination';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './font-end/menu/menu.component';
import { LoginPageComponent } from './Login/components/login-page/login-page.component';
import { ShowListComponent } from './Login/components/show-list/show-list.component';
import { MenuLoginComponent } from './Login/components/menu-login/menu-login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';





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
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
