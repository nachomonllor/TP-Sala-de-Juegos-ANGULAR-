import { usuarioregistro } from './../clases/usuarioregistro';
import { Component, OnInit } from '@angular/core';
import { Jugador } from '../clases/jugador';
import { Juego } from '../clases/juego';

@Component({
  selector: 'app-lista-juegos',
  templateUrl: './lista-juegos.component.html',
  styleUrls: ['./lista-juegos.component.css']
})
export class ListaJuegosComponent implements OnInit {

  jugador:usuarioregistro;
  lista :Array<Juego>;
  constructor() {
    this.jugador = JSON.parse(localStorage.getItem('admin'));
    this.lista = JSON.parse(localStorage.getItem('lista'));
   }
  ngOnInit(): void {
  }

}
