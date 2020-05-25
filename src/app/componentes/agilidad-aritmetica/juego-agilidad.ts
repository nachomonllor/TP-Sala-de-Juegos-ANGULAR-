import { RegistroComponent } from '../registro/registro.component';
import { User } from '../../models/user';
import { Jugador } from '../../clases/jugador';
import { Juego } from '../../clases/juego';
import { JuegoStorage } from '../../clases/juegoStorage';

export class JuegoAgilidad extends Juego {

  numeroIngresado: number;
  gano: boolean;

  nombreJuego = 'Agilidad Aritmetica';
  num1: number;
  num2: number;
  res: number;
  operadorSeleccionado: string;
  indiceOperador: number;
  resUsuario: number;
  _timer: any;
  comparacion: string;
  reloj: number = 10;
  puntos: number = 0;
  maximo_puntaje: number = 0;
  juego: Juego;
  nivel: number = 1;
  limite: number = 10;
  listaJuegos: Array<JuegoStorage>;
  jug: Jugador;
  us: User;


  /* public verificar(): boolean {
       throw new Error('Method not implemented.');
   }*/

  // this.us = new usuarioregistro(this.entraNombre, this.entraClave);
  // localStorage.setItem(this.entraNombre, JSON.stringify ( this.us));

  constructor(nombre?: string, gano?: boolean, jugador?: string, _puntos?: number, _hora?: Date) {
    super(nombre, gano, jugador, _puntos, _hora)
    // 2.colocar nombre del juego
    this.juego = new JuegoAgilidad();
    this.juego.nombre = 'Agilidad Aritmetica';
    this.juego.cantidadPuntos = 0;
    this.juego.hora = new Date();
    // console.log(this.juego);

    this.listaJuegos = new Array<Juego>();
    // this.listaJuegos = JSON.parse(localStorage.getItem('lista'));

    let aux: Array<Juego> = JSON.parse(localStorage.getItem('lista'));
    if (aux != null) {
      for (let i = 0; i < aux.length; i++) {
        this.listaJuegos.push(aux[i]);
      }
    }

    //this.us = new usuarioregistro(nombre, )
    this.jug = new Jugador(nombre, nombre, '');
  }
  public verificar(): boolean {
    throw new Error('Method not implemented.');
  }
  initialize() {
    throw new Error('Method not implemented.');
  }
  /*
  comenzar() { // esta funcion deberia estar en el componente AgilidadAritmeticaComponent
      clearInterval(this._timer);
      this.cargarNumeros();
      this._timer = setInterval(() => this.contador(), 1000);
  }
  */




}
