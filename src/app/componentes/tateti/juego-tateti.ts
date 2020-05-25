import { Juego } from '../../clases/juego';

export class JuegoTateti extends Juego {

  listaPrimos = [];
  posiciones;

  constructor(nombre?: string, gano?: boolean, jugador?: string, _puntos?: number, _hora?: Date) {
    super(nombre, gano, jugador, _puntos, _hora)
    this.initialize();
  }
  initialize() {
    this.posiciones = [
      ['-', '-', '-'],
      ['-', '-', '-'],
      ['-', '-', '-']
    ];
  }

  presion(fila: number, columna: number) {
    if (this.posiciones[fila][columna] === '-') {
      this.posiciones[fila][columna] = this.jugador;
      this.verificarGano('X');
      this.verificarGano('O');
      this.cambiarJugador();
    }
  }

  cambiarJugador() {
    if (this.jugador === 'O')
      this.jugador = 'X';
    else
      this.jugador = 'O';
  }


  verificarGano(ficha: string) {
    if (this.posiciones[0][0] === ficha
      && this.posiciones[0][1] === ficha
      && this.posiciones[0][2] === ficha
    ) {
      alert('Gano:' + ficha);
    }
    if (this.posiciones[1][0] === ficha
      && this.posiciones[1][1] === ficha && this.posiciones[1][2] === ficha) {
      alert('Gano:' + ficha);
    }
    if (this.posiciones[2][0] === ficha && this.posiciones[2][1] === ficha && this.posiciones[2][2] === ficha)
      alert('Gano:' + ficha);
    if (this.posiciones[0][0] === ficha && this.posiciones[1][0] === ficha && this.posiciones[2][0] === ficha)
      alert('Gano:' + ficha);
    if (this.posiciones[0][1] === ficha && this.posiciones[1][1] === ficha && this.posiciones[2][1] === ficha)
      alert('Gano:' + ficha);
    if (this.posiciones[0][2] === ficha && this.posiciones[1][2] === ficha && this.posiciones[2][2] === ficha)
      alert('Gano:' + ficha);
    if (this.posiciones[0][0] === ficha && this.posiciones[1][1] === ficha && this.posiciones[2][2] === ficha)
      alert('Gano:' + ficha);
    if (this.posiciones[0][2] === ficha && this.posiciones[1][1] === ficha && this.posiciones[2][0] === ficha)
      alert('Gano:' + ficha);
  }
}
