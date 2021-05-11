import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowlistComponent } from './components/showlist/showlist.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { DetailAccountComponent } from './components/detail-account/detail-account.component';
import { RequestComponent } from './components/request/request.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProviderDetailComponent } from './components/provider/provider-detail/provider-detail.component';
import { MyrequestComponent } from './components/myrequest/myrequest.component';

const routes: Routes = [{
  path: '',
  component: ShowlistComponent,
}, {
  path: 'detail/:id',
  component: DetailComponent,
}, {
  path: 'account',
  component: DetailAccountComponent,

},
{
  path: 'myrequest',
  component: MyrequestComponent
},

]


@NgModule({
  declarations: [
    ShowlistComponent,
    DetailComponent,
    DetailAccountComponent,
    RequestComponent,
    ProviderDetailComponent,
    MyrequestComponent,
  
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FontEndModule { }
