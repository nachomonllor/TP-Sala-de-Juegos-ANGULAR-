import { Component, OnInit } from '@angular/core';
import { JuegoPrimos } from '../../clases/juego-primos';

@Component({
  selector: 'app-primos',
  templateUrl: './primos.component.html',
  styleUrls: ['./primos.component.css']
})
export class PrimosComponent implements OnInit {

  primos = new JuegoPrimos();
  constructor() { 
    this.primos.IniciarJuego();
  }

  ngOnInit(): void {
    this.primos.IniciarJuego();
  }

}
