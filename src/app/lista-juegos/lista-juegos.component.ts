import { User } from '../models/user';
import { Component, OnInit } from '@angular/core';
import { Jugador } from '../clases/jugador';
import { Juego } from '../clases/juego';
import { UserService } from '../servicios/user.service';

@Component({
  selector: 'app-lista-juegos',
  templateUrl: './lista-juegos.component.html',
  styleUrls: ['./lista-juegos.component.css']
})
export class ListaJuegosComponent implements OnInit {

  user: User;
  lista: Juego[] = [];
  constructor(public _userService: UserService) {
    this.user = _userService.user;
    this.lista = JSON.parse(localStorage.getItem('lista'));
   }
  ngOnInit(): void {
  }

}
