import { RegistroComponent } from './../componentes/registro/registro.component';
import { usuarioregistro } from './usuarioregistro';
import { Jugador } from "./jugador";
import { Juego } from "./juego";
import { JuegoStorage } from "./juegoStorage";

export class JuegoAgilidad extends Juego {
    public verificar(): boolean {
        throw new Error("Method not implemented.");
    }
   /* public verificar(): boolean {
        throw new Error("Method not implemented.");
    }*/
    numeroIngresado:number;
    gano:boolean;

    nombreJuego = "Agilidad Aritmetica";
    num1:number;
    num2:number;
    res:number;
    operadorSeleccionado:string;
    indiceOperador: number;
    resUsuario :number;
    _timer:any;
    comparacion :string;
    reloj:number =10;
    puntos:number=0;
    maximo_puntaje:number = 0;
    //1 creas el jugador
    //jugador:Jugador;
    juego:Juego;
    nivel:number = 1;
    limite:number = 10;

    listaJuegos:Array<JuegoStorage>;
    jug: Jugador;
   
    us: usuarioregistro;
    //this.us = new usuarioregistro(this.entraNombre, this.entraClave);
       // localStorage.setItem(this.entraNombre, JSON.stringify ( this.us));

    constructor(nombre?: string, gano?: boolean,jugador?:string,_puntos?: number, _hora?:Date) 
    { 
        super(nombre, gano, jugador, _puntos, _hora)
      //2.colocar nombre del juego
       this.juego = new Juego
       this.juego.nombre = "Agilidad Aritmetica";
       this.juego.cantidadPuntos =0;
       this.juego.hora = new Date();
      //console.log(this.juego);

      this.listaJuegos = new Array<Juego>();
      // this.listaJuegos = JSON.parse(localStorage.getItem('lista'));
      
      let aux : Array<Juego> =  JSON.parse(localStorage.getItem('lista'));
      for(let i =0; i < aux.length; i++) {
        this.listaJuegos.push(aux[i]);
      }

        //this.us = new usuarioregistro(nombre, )
       this.jug= new Jugador(nombre, nombre, "");
    }

    /*
    comenzar() { // esta funcion deberia estar en el componente AgilidadAritmeticaComponent
        clearInterval(this._timer);
        this.cargarNumeros();
        this._timer = setInterval(() => this.contador(), 1000);
    }
    */
   
    cargarNumeros() {

        this.num1  = Math.floor(Math.random() * this.limite);
        this.num2  = Math.floor(Math.random() * this.limite);
        this.indiceOperador = Math.floor(Math.random() * 3);
    
        if(this.indiceOperador == 0) {
          this.res = this.num1 + this.num2;
          this.operadorSeleccionado = "+";
        }
        else if(this.indiceOperador == 1) {
            this.res = this.num1 - this.num2;
            this.operadorSeleccionado = "-";
        }
        else if(this.indiceOperador == 2) {
            this.res = this.num1 * this.num2;
            this.operadorSeleccionado = "x";
        }
      }

  
      pasarSiguiente(){
        //this._timer = setInterval(() => this.contador(), 1000);
        this.cargarNumeros();
      // this.resUsuario = "";
      }

    
      
      

      finalizar(){
       
        
        
        this.juego = new Juego();
        this.juego.nombre = "Agilidad Aritmetica";
        this.juego.cantidadPuntos = this.puntos;
        this.juego.hora = new Date();
        this.juego.jugador = this.nombre;
        this.listaJuegos.push(this.juego);


       // localStorage.setItem('jugador', JSON.stringify(this.jug));
        localStorage.setItem('lista', JSON.stringify(this.listaJuegos));
        console.log(this.listaJuegos);

        
    
       }


}
