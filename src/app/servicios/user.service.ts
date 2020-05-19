import { usuarioregistro } from './../clases/usuarioregistro';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: usuarioregistro;
  logged: boolean;
  constructor() { }

  getUsers() {
    return JSON.parse(localStorage.getItem('usuarios')) || [];
  }

  addUser(user: usuarioregistro) {
    let users: usuarioregistro[] = JSON.parse(localStorage.getItem('usuarios'));
    users.push(user);
    localStorage.setItem('usuarios', JSON.stringify( users ));
  }

  login(user) {
    const users: usuarioregistro[]  = this.getUsers();
    let userFilter: any = users.filter(u => {
      return u.nombre === user.nombre;
    });
    if( userFilter[0] ) {
      if (userFilter[0].clave === user.clave) {
        this.logged = true;
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
