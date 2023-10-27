import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, delay, map, of, tap } from 'rxjs';
import { User } from '../interfaces/user.interfaces';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  public apiUrl:string = 'https://gorest.co.in/public/v2/users'

  constructor(private http: HttpClient) { }

  private getUsersRequest(url: string): Observable<User[]>{
    return this.http.get<User[]>(url).pipe(
      catchError(() => of([])),
      delay(100),
    )
  }

  getUserPost(id: string): Observable<Post[]>{
    const urlUserPost = `${this.apiUrl}/${id}/posts?access-token=9bd3545f6fd3e7f31983b75c6a3e9ca386db70db9e64006048e5079a99e1f365`;
    return this.http.get<Post[]>(urlUserPost).pipe(
      map(posts => posts.slice(0, 5))
    );
  }

  getUser(id: string): Observable<User>{
    const urlUser = `${this.apiUrl}/${id}`;
    return this.http.get<User>(urlUser);
  }

  getUsers():Observable<User[]>{
    const url = `${this.apiUrl}`;
    return this.getUsersRequest(url)
  }
}
