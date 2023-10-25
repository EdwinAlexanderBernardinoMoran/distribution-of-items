import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './pages/user-list/user-list.component';
import { PostsListComponent } from './pages/posts-list/posts-list.component';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';
import { UserTableComponent } from './components/user-table/user-table.component';
import { UserPageComponent } from './pages/user-page/user-page.component';



@NgModule({
  declarations: [
    UserListComponent,
    PostsListComponent,
    UserTableComponent,
    UserPageComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ]
})
export class UsersModule { }
