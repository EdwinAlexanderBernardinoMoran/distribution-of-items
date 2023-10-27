import { User } from './../../interfaces/user.interfaces';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../../services/users.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styles: [
  ]
})
export class UserDetailComponent implements OnInit {
  public user?:User;

  constructor(
    private ActivatedRoute: ActivatedRoute,
    private router: Router,
    private UserService: UsersService
  ){}
  ngOnInit(): void {
    this.ActivatedRoute.params.pipe(
      switchMap(({id}) => this.UserService.getUser(id)),
    ).subscribe(
      (user) => {
        if(!user) return this.router.navigateByUrl('')

        console.log(user);
      return this.user = user;
      }
    )
  }
}
