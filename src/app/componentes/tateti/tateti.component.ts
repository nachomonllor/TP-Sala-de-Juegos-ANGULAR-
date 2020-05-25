import { Component, OnInit } from '@angular/core';
import { JuegoTateti } from './juego-tateti';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {
  tateti: JuegoTateti;
  constructor() {
    this.tateti = new JuegoTateti();
  }

  ngOnInit(): void {
  }











}
