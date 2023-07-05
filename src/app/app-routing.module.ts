import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import {ViewUserComponent} from './view-user/view-user.component';

const routes: Routes = [
  { path: 'dashboard', component: UserListComponent },
  { path: 'user', component: ViewUserComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
