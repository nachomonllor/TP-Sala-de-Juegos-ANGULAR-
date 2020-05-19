import { Game } from './game.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnagramaService {
  palabras: string[] = ['computadora', 'microfono', 'mesa', 'telefono', 'anagrama'];
  palabraOrdenada: string = '';
  palabraDesordenada: string = '';
  intentos = 0;  
  puntos: number = 0;
  resultado: string = '';
  palabraIngresada: string;
  constructor() { 
    this.inicializarJuego();
  }
  inicializarJuego() {
    this.seleccionarPalabra();
    this.desordenarPalabra();
  }
  seleccionarPalabra() {
    let  indSeleccionado = Math.floor(Math.random() * this.palabras.length);
    this.palabraOrdenada = this.palabras[indSeleccionado];
    console.log(this.palabraOrdenada);
  }
  desordenarPalabra(): string {
    //algoritmo de Fisherâ€“Yates 
    //this.palabraDesordenada = shuffle
    var ch = new Array();
    var n = this.palabraOrdenada.length;

    for(let i =0; i < this.palabraOrdenada.length; i++) {
      ch.push(this.palabraOrdenada[i]);
    }

    for (let i = n - 1; i > 0; i--)
    {
          //var j = r.Next(0, i + 1);
          var j =  Math.floor(Math.random() * (i + 1));
          var temp = ch[i];
          ch[i] = ch[j];
          ch[j] = temp;
      }
      this.palabraDesordenada ="";
      for(let i =0; i<ch.length; i++) {
          this.palabraDesordenada += ch[i];
      }
      return this.palabraDesordenada;
   }

   verifyResult(palabra: string) {
      if(this.intentos < 5) {
        this.intentos++;
        if(palabra == this.palabraOrdenada ) {
            //console.log( "ACERTASTE" ); 
           // alert("ACERTASTE");
            this.resultado = "ACERTASTE";
            this.puntos += 10;
            this.seleccionarPalabra();
            this.desordenarPalabra();
            this.intentos = 0;
            this.palabraIngresada="";
        }
        else {
            this.resultado = "TE EQUIVOCASTE";
            this.puntos -= 5;
        }        
        console.log(this.intentos);
    }else{

      //this.resultado="Pasaste los 5 intentos permitidios";
      //alert("Pasaste los 5 intentos permitidos");
      this.resultado = "Pasaste los 5 intentos permitidos";
      //this.resultado = "Esperando";
      this.seleccionarPalabra();
      this.desordenarPalabra();
      //this.resultado = "";
      this.intentos = 0;
      this.palabraIngresada="";
    }
   }

   saveGame() {
    const game: Game = {
      nombre: "Anagrama",
      puntos: this.puntos,
      hora: new Date(),
      jugador: 'jj',
      gano: true
    };         

    const lista = JSON.parse(localStorage.getItem('lista')) || [];
    lista.push(game);
    localStorage.setItem('lista', JSON.stringify(lista));
    this.puntos = 0;
   }
}
