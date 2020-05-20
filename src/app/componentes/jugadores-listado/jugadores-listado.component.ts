import { Component, OnInit } from '@angular/core';
import { JugadoresService } from '../../servicios/jugadores.service';
import { UserService } from '../../servicios/user.service';
import { User } from '../../models/user';
@Component({
  selector: 'app-jugadores-listado',
  templateUrl: './jugadores-listado.component.html',
  styleUrls: ['./jugadores-listado.component.css']
})
export class JugadoresListadoComponent implements OnInit {
  users: User[] = [];
  constructor(
    public _userService: UserService
  ) {}

  ngOnInit() {
    this.users = this._userService.getUsers();
  }

}
