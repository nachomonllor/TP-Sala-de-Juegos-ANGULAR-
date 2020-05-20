import { AgilityAritmeticService } from './agility-aritmetic.service';
import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
//import { JuegoAgilidad } from '../../clases/juego-agilidad'

import {Subscription} from "rxjs";
import { timer } from "rxjs";
import { Juego } from '../../clases/juego';
import { JuegoAgilidad } from '../../clases/juego-agilidad';


@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
  @Output() 
  enviarJuego :EventEmitter<any>= new EventEmitter<any>();
  nuevoJuego : JuegoAgilidad;
  ocultarVerificar: boolean;
  calculo: string;
  resUsuario: number;
  isValid: number = -1;
  maxTime = 10;
  reloj: number = this.maxTime;
  //repetidor:any;
  private subscription: Subscription;
  _timer:any;

  // lista :Array<Juego>;

  ngOnInit() {}
   constructor(public _agilityAritmeticService: AgilityAritmeticService) {
    //  this.ocultarVerificar=true;
    //  this.reloj=5; 
    // this.nuevoJuego = new JuegoAgilidad();
    this.newGame();
  }
  onSubmit() {
    this.isValid = this._agilityAritmeticService.verifyResult(this.resUsuario);    
    if (this.isValid) {
      this.subirDeNivel();
      this.newGame();
      this._agilityAritmeticService.puntos += 20;
      this._agilityAritmeticService.puntos = this._agilityAritmeticService.puntos <= 0 
                                                      ? 0 : this._agilityAritmeticService.puntos; 
    }
  }

  newGame() {
    this.calculo = this._agilityAritmeticService.getCalulo();
    this.clearTimer();
    this.resUsuario = null;
    this._agilityAritmeticService.nivel = 1;
  }

  private clearTimer() {
    clearInterval(this._timer);
    this._timer = setInterval(() => this.checkTimeOver(), 1000);
    this.reloj = this.maxTime;
    
  }
  checkTimeOver(){
    //clearInterval(myVar);
    // clearInterval(this._timer);
    this.reloj--;
    if ( this.reloj <= 0 ) {
      alert("Se te acabo el tiempo");
      this.reloj = this.maxTime;
      this._agilityAritmeticService.nivel = 1;
      this._agilityAritmeticService.limite = 10; //limite de los numeros aleatorios
      this.newGame();
      this.clearTimer();
      this._agilityAritmeticService.gameOver();
      // this.NuevoJuego();
      // this.nuevoJuego.pasarSiguiente();
    }
  }

  subirDeNivel() {
    this._agilityAritmeticService.limite += 20;
    this._agilityAritmeticService.nivel++;
    this.clearTimer();
    //this.resetearColorBotones();
    if(this._agilityAritmeticService.puntos > this._agilityAritmeticService.maximo_puntaje) {
      this._agilityAritmeticService.maximo_puntaje = this._agilityAritmeticService.puntos;
    }
  }
  
// comparar() {
//   if(this.nuevoJuego.res == this.nuevoJuego.resUsuario) {
//      this.nuevoJuego.comparacion ="CORRECTO";
//     // this.resUsuario = 0;
//      this.nuevoJuego.puntos=this.nuevoJuego.puntos+10;  
//      if(this.nuevoJuego.puntos % 50 == 0) {
//        this.subirDeNivel();
//      }      
//      //clearInterval(this._timer);  
//      this.reloj=5;
//      this.nuevoJuego.pasarSiguiente();
//   }
//   else{
//     this.nuevoJuego.comparacion ="INCORRECTO-Escriba de vuelta el resulta";
    
//     /*
//     if(this.reloj <= 0) {
//       this.nuevoJuego.comparacion = "GAME OVER";
//       this.reloj =0;
//       clearInterval(this._timer); 
//     }
//     */

      
//   }
  
//   console.log(this.nuevoJuego.num1 + " " + this.nuevoJuego.operadorSeleccionado + " " + this.nuevoJuego.num2);

// }

/*
  verificar()
  {
    this.ocultarVerificar=false;
   // clearInterval(this.repetidor);
  }
  */
 
}




