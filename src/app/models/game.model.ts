export class Game {
    constructor(
        public nombre: string,
        public jugador: string,
        public cantidadPuntos: number,
        public hora: Date,
        public gano?: boolean
    )
    {}
}
