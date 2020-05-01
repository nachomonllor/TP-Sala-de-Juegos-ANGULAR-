import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { USUARIOS } from '../clases/usuarios';
import { Jugador } from '../clases/jugador';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  usuarios= USUARIOS;
  constructor() { }
  isLoggedIn = false;
  jugador:Jugador;

  // store the URL so we can redirect after logging in
  redirectUrl: string;

  login(usuario:string, clave:string):boolean{
 
      //delay(1000),
     // tap(val => this.isLoggedIn = true)
     for(let i =0; i<this.usuarios.length; i++) {
       if(usuario === this.usuarios[i].usuario &&
          clave === this.usuarios[i].contras ) {
              
              localStorage.setItem('jugador', JSON.stringify(this.usuarios[i]));
              
              this.isLoggedIn = true;
              return true;
          }  
      }
      this.isLoggedIn = false;
      return false;
   }

  logout(): void {
    this.isLoggedIn = false;
  }

  
  
   estaAutorizado() :boolean{
    this.jugador = JSON.parse(localStorage.getItem('jugador'));
     if(this.jugador != null){
          return true;
     } else{
       return false;
     }
  
  }
   
  }
