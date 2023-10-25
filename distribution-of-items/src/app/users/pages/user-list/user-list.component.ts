import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../interfaces/user.interfaces';

@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styles: [
  ]
})
export class UserListComponent implements OnInit{

  public users: User[] = [];
  public isLoading: boolean = false;

  constructor(private user: UsersService){}
  ngOnInit(): void {

    this.isLoading = true;

    this.user.getUsers().subscribe(
      users => {
        this.users = users;
        this.isLoading = false;
      }
    )
  }

}
