import { Injectable } from '@angular/core';

import { Juego } from '../clases/juego';
import { Jugador } from '../clases/jugador';

@Injectable({
  providedIn: 'root'
})
export class BasedatosService {
   // _juegos: Juego[] = [];
        usuarios: Jugador[] = [
        {
        nombre: 'Juan Perez ',
        juegos: new Array<Juego>(),
        usuario: 'jjperez ',
        contras: '123456 '
       },
       {
           nombre: 'Ignacio Monllor ',
           juegos: new Array<Juego>(),
           usuario: 'imonllor ',
           contras: '123456 '
       },
       {
           nombre: 'Ana Lopez ',
           juegos: new Array<Juego>(),
           usuario: 'alopez ',
           contras: '123456 '
       },
       {
         nombre:  'admin ',
         juegos: new Array<Juego>(),
         usuario:  'admin ',
         contras:  'admin '

       }
    ];

  constructor() { }


  agregarJugador(jugador:Jugador){
    this.usuarios.push(jugador);
  }
}
