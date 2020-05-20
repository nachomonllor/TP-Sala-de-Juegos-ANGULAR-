import { User } from '../models/user';
import { Component, OnInit } from '@angular/core';
import { Jugador } from '../clases/jugador';
import { Juego } from '../clases/juego';

@Component({
  selector: 'app-lista-juegos',
  templateUrl: './lista-juegos.component.html',
  styleUrls: ['./lista-juegos.component.css']
})
export class ListaJuegosComponent implements OnInit {

  jugador: User;
  lista :Array<Juego>;
  constructor() {
    this.jugador = JSON.parse(localStorage.getItem('usuarios'));
    this.lista = JSON.parse(localStorage.getItem('lista'));
   }
  ngOnInit(): void {
  }

}
