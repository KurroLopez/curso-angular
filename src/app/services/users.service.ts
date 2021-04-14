import { Injectable } from '@angular/core';
import { USERS } from '../data/users';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getUsers(): User[]{
    return USERS;
  }

  get(id: number): User {
    // return USERS.find(x => x.id === id);
    return USERS[id - 1];
  }
}
