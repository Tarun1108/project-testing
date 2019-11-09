import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LikeComponent } from './like/like.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'like', component: LikeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
