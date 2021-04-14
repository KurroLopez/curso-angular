import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  logIn(username: string, password: string): boolean {
    if (username === 'test' && password === 'test'){
      localStorage.setItem('username',username);
    }
    return this.isLogged();
  }

  logOut(): boolean {
    localStorage.removeItem('username');
    return true;
  }

  isLogged(): boolean {
    return localStorage.getItem('username') ? true: false;
  }

  getUsername(): string{
    return localStorage.getItem('username') ?? '';
  }
}
