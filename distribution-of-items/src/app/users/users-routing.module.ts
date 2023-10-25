import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';
import { PostsListComponent } from './pages/posts-list/posts-list.component';
import { UserPageComponent } from './pages/user-page/user-page.component';

const routes: Routes = [
  {
    path: 'users-list',
    component: UserListComponent
  },
  {
    path: 'posts',
    component: PostsListComponent
  },
  {
    path: 'by/:id',
    component: UserPageComponent
  },
  {
    path: "**",
    redirectTo: 'posts'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }
