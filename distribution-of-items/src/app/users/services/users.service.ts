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
      delay(2000),
    )
  }

  getUserPost(id: string): Observable<Post[]>{
    const urlUserPost = `${this.apiUrl}/${id}/posts`;
    return this.http.get<Post[]>(urlUserPost);
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
