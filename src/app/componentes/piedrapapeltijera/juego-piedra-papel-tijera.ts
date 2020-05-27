import { Juego } from '../../clases/juego';
import { JuegoStorage } from '../../clases/juegoStorage';
import { JuegoAdivina } from '../../clases/juego-adivina';

export class JuegoPiedraPapelTijera extends Juego {
  indiceElementoSeleccionado: number;
  // podria ser un array de urls con imagnes de piedra, papel y tijera
  arrayElementos = new Array<string>('piedra', 'papel', 'tijera');
  elementoSeleccionado: string;
  palabraIngresada: string;
  puntajeHumano: number = 0;
  puntajeCompu: number = 0;
  rondas: number = 0;
  resultadoParcial: string = '';
  resultadoFinal: string = '';
  mostrarSeleccionado: string = '';
  cantidadPuntos = 0;
  listaJuegos: Array<Juego>;
  juego: Juego;
  public verificar(): boolean {
    throw new Error('Method not implemented.');
  }

  constructor(
    _nombre?: string,
    _gano?: boolean,
    _jugador?: string,
    _puntos?: number,
    _hora?: Date
  ) {
    super(_nombre, _gano, _jugador, _puntos, _hora)
    this.initialize();
    this.listaJuegos = new Array<Juego>();
    //  this.listaJuegos = JSON.parse(localStorage.getItem('lista'));
    let aux: Array<Juego> = JSON.parse(localStorage.getItem('lista'));
    if (aux != null) {
      for (let i = 0; i < aux.length; i++) {
        this.listaJuegos.push(aux[i]);
      }
    }
  }
  // ngOnInit() {
  // this.jugador = JSON.parse(localStorage.getItem('admin'));
  // console.log(this.jugador);
  // }
  initialize() {
    this.seleccionarElemento();
    this.cantidadPuntos = 0;
  }
  seleccionarElemento() {
    this.indiceElementoSeleccionado = Math.floor(Math.random() * 3);
    //  console.log(this.indiceElementoSeleccionado);
    this.elementoSeleccionado = this.arrayElementos[this.indiceElementoSeleccionado];
    console.log('la compu eligio: ' + this.elementoSeleccionado);
    console.log('vos elegiste: ' + this.palabraIngresada);
    console.log('Puntos Humano: ' + this.puntajeHumano);
  }
  comparar() {
    if (this.elementoSeleccionado === 'piedra') {
      if (this.palabraIngresada === 'piedra') {
        this.resultadoParcial = 'EMPATE';
      } else if (this.palabraIngresada === 'papel') {
        this.resultadoParcial = 'GANO EL USUARIO';
        this.puntajeHumano += 10;
      } else {
        this.resultadoParcial = 'GANA LA COMPU';
        this.puntajeCompu += 10;
      }
    } else if (this.elementoSeleccionado === 'papel') {
      if (this.palabraIngresada === 'piedra') {
        this.resultadoParcial = 'GANA LA COMPU';
        this.puntajeCompu += 10;
      } else if (this.palabraIngresada === 'papel') {
        this.resultadoParcial = 'EMPATE';
      } else {
        this.resultadoParcial = 'GANA EL USUARIO';
        this.puntajeHumano += 10;
      }
    } else if (this.elementoSeleccionado === 'tijera') {
      if (this.palabraIngresada === 'piedra') {
        this.resultadoParcial = 'GANA EL USUARIO';
        this.puntajeHumano += 10;
      } else if (this.palabraIngresada === 'papel') {
        this.resultadoParcial = 'GANA LA COMPU';
        this.puntajeCompu += 10;
      } else {
        this.resultadoParcial = 'EMPATE';
      }
    }
    this.rondas++;
    if (this.rondas % 3 === 0) {
      if (this.puntajeCompu > this.puntajeHumano) {
        this.resultadoFinal = 'RESULTADO FINAL: GANO LA COMPU';
      } else if (this.puntajeCompu < this.puntajeHumano) {
        this.resultadoFinal = 'RESULTADO FINAL: GANASTE';
      } else {
        this.resultadoFinal = 'RESULTADO FINAL: EMPATE';
      }
      this.finalizar();
      this.initialize();
      this.puntajeCompu = 0;
      //   this.puntajeHumano =0;
      this.resultadoFinal = '';
      //  this.rondas =0;
    }
  }
  clickPapel() {
    this.palabraIngresada = 'papel';
    this.comparar();
    // this.elementoSeleccionado ='';
    this.mostrarSeleccionado = '';
    this.seleccionarElemento();
    this.mostrarSeleccionado = this.elementoSeleccionado;
    this.elementoSeleccionado = '';
    // Primer asignarpuntaje a la compu y al usuario
    // contador de cantidad rondas
    // puntaje para la compu y el humano.
  }
  clickPiedra() {
    this.palabraIngresada = 'piedra';
    this.comparar();
    this.mostrarSeleccionado = '';
    this.seleccionarElemento();
    this.mostrarSeleccionado = this.elementoSeleccionado;
    this.elementoSeleccionado = '';
  }
  clickTijera() {
    this.palabraIngresada = 'tijera';
    this.comparar();
    this.mostrarSeleccionado = '';
    this.seleccionarElemento();
    this.mostrarSeleccionado = this.elementoSeleccionado;
    this.elementoSeleccionado = '';
  }
  finalizar() {
    this.juego = new JuegoAdivina();
    this.juego.nombre = 'Piedra Papel tijera';
    this.juego.cantidadPuntos = this.puntajeHumano;
    this.juego.hora = new Date();
    this.juego.jugador = this.nombre;
    this.listaJuegos.push(this.juego);

    localStorage.setItem('lista', JSON.stringify(this.listaJuegos));
    console.log(this.listaJuegos);
  }
}
