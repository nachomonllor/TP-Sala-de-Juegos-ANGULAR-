import { Juego } from "./juego";
import { Jugador } from "./jugador";
import { JuegoStorage } from "./juegoStorage";

export class JuegoAnagrama extends Juego {
    public verificar(): boolean {
        throw new Error("Method not implemented.");
    }

    private palabras : Array<string>  ;

  palabraOrdenada :string; //palabra original del arreglo
  palabraDesordenada:string; //desordena algoritmo
  palabraIngresada:string; //ingresa usuario
  intentos:number =0;
  resultado :string ="Esperando: ";
  juego: Juego;
  //jugador:Jugador;
  puntos: number = 0;  

  listaJuegos:Array<Juego>;
 
    jug :Jugador;

  constructor(_nombre?: string, _gano?: boolean,_jugador?:string,_puntos?: number, _hora?:Date) {
      super(_nombre, _gano, _jugador, _puntos, _hora )
    /*
      this.palabras = new Array<string>();
      this.palabras.push("computadora");
      this.palabras.push("microfono");
      this.palabras.push("mesa");
      this.palabras.push("telefono");
      this.palabras.push("anagrama");

      this.inicializarJuego();
*/

      this.juego = new Juego
      this.juego.nombre = "Anagrama";
      this.juego.cantidadPuntos =0;
      this.juego.hora = new Date();
      //console.log(this.juego);
      
      this.listaJuegos = new Array<Juego>();
      // this.listaJuegos = JSON.parse(localStorage.getItem('lista'));
      
      let aux : Array<Juego> =  JSON.parse(localStorage.getItem('lista'));
      for(let i =0; i < aux.length; i++) {
        this.listaJuegos.push(aux[i]);
      }
     
      this.jug = new Jugador(_nombre, _nombre, "");

   }


    cargarListaPalabras() {
        this.palabras = new Array<string>();
      this.palabras.push("computadora");
      this.palabras.push("microfono");
      this.palabras.push("mesa");
      this.palabras.push("telefono");
      this.palabras.push("anagrama");

      //this.inicializarJuego();
    }


   ngOnInit() {

    this.jugador = JSON.parse(localStorage.getItem('admin'));
    console.log(this.jugador); 
    this.seleccionarPalabra();
    this.desordenarPalabra();
  }

  inicializarJuego() {
   // this.juego = new Juego();
   // this.juego.nombre = "Anagrama";
   // this.juego.cantidadPuntos =0;
   // this.juego.hora = new Date();
    this.cargarListaPalabras();
    this.seleccionarPalabra();
    this.desordenarPalabra();

  }
  
  JugarOtraVez() {
    this.puntos = 0;
  }
   

   seleccionarPalabra() {
       var indSeleccionado = Math.floor(Math.random() * this.palabras.length);
       //console.log(indSeleccionado);
       //console.log(  this.palabras[indSeleccionado]);
        this.palabraOrdenada = this.palabras[indSeleccionado];
        console.log(this.palabraOrdenada);
   }

   desordenarPalabra() {//algoritmo de Fisherâ€“Yates 

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

        console.log(this.palabraDesordenada);

   }

   

   comparar() {

      if(this.intentos < 5) {
        this.intentos++;
        if(this.palabraOrdenada == this.palabraIngresada ) {
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
            console.log( "TE EQUIVOCASTE" );
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

    //console.log("PERDISTE");
     
   }


  
 
   finalizar(){
    
    
    
    this.juego = new Juego();
    this.juego.nombre = "Anagrama";
    this.juego.cantidadPuntos = this.puntos;
    this.juego.hora = new Date();
    this.juego.jugador = this.nombre;
    this.listaJuegos.push(this.juego);

    localStorage.setItem('lista', JSON.stringify(this.listaJuegos));
    console.log(this.listaJuegos);

    

   }

}
