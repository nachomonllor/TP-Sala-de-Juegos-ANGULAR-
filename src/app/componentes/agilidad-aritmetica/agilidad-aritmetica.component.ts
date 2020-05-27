import { AgilityAritmeticService } from './agility-aritmetic.service';
import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
// tslint:disable-next-line: import-blacklist
import {Subscription, timer} from 'rxjs';
import { Juego } from '../../clases/juego';
import { JuegoAgilidad } from './juego-agilidad';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {
  @Output()
  enviarJuego: EventEmitter<any> = new EventEmitter<any>();
  nuevoJuego: JuegoAgilidad;
  ocultarVerificar: boolean;
  calculo: string;
  resUsuario: number;
  isValid: number = -1;
  maxTime = 10;
  reloj: number = this.maxTime;
  //repetidor:any;
  private subscription: Subscription;
  _timer: any;

  // lista :Array<Juego>;

  ngOnInit() {}
   constructor(
    private router: Router,
    public _agilityAritmeticService: AgilityAritmeticService) {
    //  this.ocultarVerificar=true;
    //  this.reloj=5;
    // this.nuevoJuego = new JuegoAgilidad();
    this.newGame(1, 10);
  }
  onSubmit() {
    this.isValid = this._agilityAritmeticService.verifyResult(this.resUsuario);
    if (this.isValid) {
      this.subirDeNivel();
      this._agilityAritmeticService.cantidadPuntos += 20;
      this._agilityAritmeticService.cantidadPuntos = this._agilityAritmeticService.cantidadPuntos <= 0
                                                      ? 0 : this._agilityAritmeticService.cantidadPuntos;
    }
  }
  newGame(nivel, limite) {
    this.reloj = this.maxTime;
    this._agilityAritmeticService.nivel = nivel;
    this._agilityAritmeticService.limite = limite; // limite de los numeros aleatorios
    this.calculo = this._agilityAritmeticService.getCalulo();
    this.resUsuario = null;
    this._agilityAritmeticService.nivel = 1;
    if (!this._timer) {
      this._timer = setInterval(() => this.checkTimeOver(), 1000);
    }
  }

  private stopTimer() {
    clearInterval(this._timer);
  }

  checkTimeOver() {
    //clearInterval(myVar);
    // clearInterval(this._timer);
    this.reloj--;
    if ( this.reloj <= 0 ) {
      this.stopTimer();
      Swal.fire({
        title: 'Game Over',
        text: '¿Quires seguir Jugando?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí',
        cancelButtonText: 'No',
      }).then((result) => {
        if (result.value) {
          this.newGame(1, 10);
        } else {
          this._agilityAritmeticService.gameOver();
          this.router.navigate(['/Principal']);
        }
      });
    }
  }

  subirDeNivel() {
    this.newGame(
      this._agilityAritmeticService.nivel++,
      this._agilityAritmeticService.limite += 20
    );
  //  this.clearTimer();
    //this.resetearColorBotones();
    if ( this._agilityAritmeticService.cantidadPuntos > this._agilityAritmeticService.maximo_puntaje) {
      this._agilityAritmeticService.maximo_puntaje = this._agilityAritmeticService.cantidadPuntos;
    }
  }

// comparar() {
//   if(this.nuevoJuego.res == this.nuevoJuego.resUsuario) {
//      this.nuevoJuego.comparacion ='CORRECTO';
//     // this.resUsuario = 0;
//      this.nuevoJuego.cantidadPuntos=this.nuevoJuego.cantidadPuntos+10;
//      if(this.nuevoJuego.cantidadPuntos % 50 == 0) {
//        this.subirDeNivel();
//      }
//      //clearInterval(this._timer);
//      this.reloj=5;
//      this.nuevoJuego.pasarSiguiente();
//   }
//   else{
//     this.nuevoJuego.comparacion ='INCORRECTO-Escriba de vuelta el resulta';

//     /*
//     if(this.reloj <= 0) {
//       this.nuevoJuego.comparacion = 'GAME OVER';
//       this.reloj =0;
//       clearInterval(this._timer);
//     }
//     */


//   }

//   console.log(this.nuevoJuego.num1 + ' ' + this.nuevoJuego.operadorSeleccionado + ' ' + this.nuevoJuego.num2);

// }

/*
  verificar()
  {
    this.ocultarVerificar=false;
   // clearInterval(this.repetidor);
  }
  */

}




