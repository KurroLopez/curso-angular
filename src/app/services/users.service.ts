import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { delay, retry, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { USERS } from '../data/users';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  urlApi = environment.urlApi + '/users';
  users: User[] = [];

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{
    const observable$ = this.http.get<User[]>(this.urlApi);
    // observable$.subscribe( resp => this.users = resp);
    return observable$;
    // return USERS;
  }

  getFiltered(filter = ''): Observable<User[]> {
    return this.http.get<User[]>(this.urlApi + '?' + filter)
    .pipe(
      retry(1),
    );
    }

  get(id: number): Observable<User> {
    return of(USERS[id - 1]);
  }

}
