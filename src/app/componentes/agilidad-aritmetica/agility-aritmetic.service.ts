import { Game } from './../../models/game.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AgilityAritmeticService {
  numero1: number;
  numero2: number;
  indiceOperador: number;
  limite: number=10;
  operadorSeleccionado: string;
  result: number;
  puntos: number ;
  maximo_puntaje: number = 0;
  nivel: number;
 
  constructor() {
    this.puntos = 0;
  }

  
  getCalulo() {
    this.numero1  = Math.floor(Math.random() * this.limite);
    this.numero2  = Math.floor(Math.random() * this.limite);
    this.indiceOperador = Math.floor(Math.random() * 3);
    if(this.indiceOperador == 0) {
      this.result = this.numero1 + this.numero2;
      this.operadorSeleccionado = "+";
    }
    else if(this.indiceOperador == 1) {
        this.result = this.numero1 - this.numero2;
        this.operadorSeleccionado = "-";
    }
    else if(this.indiceOperador == 2) {
        this.result = this.numero1 * this.numero2;
        this.operadorSeleccionado = "x";
    }
    return `${this.numero1} ${this.operadorSeleccionado} ${this.numero2}`;
  }
  verifyResult(result) {
    if (result === this.result) {
      return 1;
    } else {
      return 0;
    }
  }

  gameOver() {
    const game: Game = {
      nombre: "Agilidad Aritmetica",
      puntos: this.puntos,
      hora: new Date(),
      jugador: 'jj'
    };         
    const lista = JSON.parse(localStorage.getItem('lista'));
    lista.push(game);
    localStorage.setItem('lista', JSON.stringify(lista));
    this.puntos = 0;
  }

  subirDeNivel() {
    this.limite += 20;
    this.nivel++;
    //this.resetearColorBotones();
    if(this.puntos > this.maximo_puntaje) {
      this.maximo_puntaje = this.puntos;
    }
  }
  


  // finalizar(){
   
    
    
  //   this.juego = new Juego();
  //   this.juego.nombre = "Agilidad Aritmetica";
  //   this.juego.cantidadPuntos = this.puntos;
  //   this.juego.hora = new Date();
  //   this.juego.jugador = this.nombre;
  //   this.listaJuegos.push(this.juego);


  //  // localStorage.setItem('jugador', JSON.stringify(this.jug));
  //   localStorage.setItem('lista', JSON.stringify(this.listaJuegos));
  //   console.log(this.listaJuegos);

    

  //  }
}
