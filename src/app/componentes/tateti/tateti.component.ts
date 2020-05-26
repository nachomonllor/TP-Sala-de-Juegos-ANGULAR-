import { Component, OnInit } from '@angular/core';
import { JuegoTateti } from './juego-tateti';
import { TatetiService } from './tateti.service';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.css']
})
export class TatetiComponent implements OnInit {
  tateti: JuegoTateti;
  constructor(private tatetiService : TatetiService) {
    this.tateti = new JuegoTateti();
  }

  ngOnInit(): void {
  }











}
