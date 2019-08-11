import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './_pages/home-page/home-page.component';
import { UserDetailsComponent } from './_pages/user-details/user-details.component';
import { FollowersComponent } from './_pages/followers/followers.component'
import { from } from 'rxjs';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },{
    path: 'userDetails',
    component: UserDetailsComponent
  },{
    path: 'showFollowers',
    component: FollowersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
