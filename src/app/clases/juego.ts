export abstract class Juego {
  public nombre = 'Sin Nombre';
  public jugador: string;
  public gano = false;
  cantidadPuntos: number;
  hora: Date;

  constructor(
    nombre?: string,
    gano?: boolean,
    jugador?: string,
    _puntos?: number,
    _hora?: Date
  ) {
    if (nombre) {
      this.nombre = nombre;
    }
    if (gano) {
      this.gano = gano;
    }
    if (jugador) {
      this.jugador = jugador;
    } else {
      this.jugador = 'natalia natalia';
    }
    this.cantidadPuntos = _puntos;
    this.hora = _hora;
  }

  abstract initialize();

  public retornarAyuda() {

    return 'NO hay Ayuda definida';
  }
}
