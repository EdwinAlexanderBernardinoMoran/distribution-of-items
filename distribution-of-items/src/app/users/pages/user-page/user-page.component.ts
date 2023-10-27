import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Post } from '../../interfaces/post.interface';
import { User } from '../../interfaces/user.interfaces';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styles: [
  ]
})
export class UserPageComponent implements OnInit{

  public user?: User;
  public posts: Post[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private UserService: UsersService,
  ){
  }
  ngOnInit(): void {



    this.activatedRoute.params.pipe(
      switchMap(({id}) => this.UserService.getUserPost(id)),
    ).subscribe(
      (posts) => {
        if(!posts) return this.router.navigateByUrl('')
      console.log(posts);
        if (posts) {
          this.activatedRoute.params.pipe(
            switchMap(({id}) => this.UserService.getUser(id)),
          ).subscribe(
            (user) => {
              if(!user) return this.router.navigateByUrl('')
            console.log(user);
              return this.user = user
            }
          )
        }
        return this.posts = posts
      }
    )


    // this.activatedRoute.params.pipe(
    //   switchMap( ({id}) => this.UserService.getUserPost(id)),
    // ).subscribe(
    //   (post) => {

    //     // this.searchCountry(id)

    //     // this.CountriesService.searchContryByAlphaCode(id).subscribe(
    //     //   country => {
    //     //     console.log({country});
    //     //   }
    //     // )
    //     // console.log({params: id});


    //     // Si country no existe entonces lo sacare de la pagina
    //     if (!post) return this.router.navigateByUrl('')
    //     return this.posts = post;
    //   }
    // )
  }

}
