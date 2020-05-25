import { User } from '../models/user';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;
  logged: boolean;
  constructor() {
    this.user = JSON.parse(localStorage.getItem('user'));
   }
  getUsers() {
    return JSON.parse(localStorage.getItem('usuarios')) || [];
  }

  addUser(user: User) {
    let users: User[] = JSON.parse(localStorage.getItem('usuarios')) || [];
    users.push(user);
    localStorage.setItem('usuarios', JSON.stringify( users ));
  }

  login(user) {
    const users: User[]  = this.getUsers();
    const userFilter: any = users.filter(u => {
      return u.username === user.username;
    });
    if ( userFilter[0] ) {
      if (userFilter[0].clave === user.clave) {
        this.logged = true;
        localStorage.setItem('user', JSON.stringify( user ));
        this.user = user;
        return true;
      } else {
        return false;
      }
    }
  }
  isLogged() {
    return this.logged;
  }
  logout() {
    this.user = null;
    this.logged = false;
  }
}
