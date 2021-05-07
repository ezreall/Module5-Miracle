import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowlistComponent } from './components/showlist/showlist.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailComponent } from './components/detail/detail.component';
import { DetailAccountComponent } from './components/detail-account/detail-account.component';

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

]


@NgModule({
  declarations: [
    ShowlistComponent,
    DetailComponent,
    DetailAccountComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    RouterModule.forChild(routes),
  ]
})
export class FontEndModule { }
