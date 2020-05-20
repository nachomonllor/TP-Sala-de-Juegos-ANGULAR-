export class Game {
    constructor(
        public nombre: string, 
        public jugador: string,
        public puntos: number,
        public hora: Date,
        public gano?: boolean
    )
    {}
}
