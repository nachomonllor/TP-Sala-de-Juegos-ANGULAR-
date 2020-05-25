import { Component, OnInit } from '@angular/core';
import { JuegoPiedraPapelTijera } from './juego-piedra-papel-tijera';

@Component({
  selector: 'app-piedrapapeltijera',
  templateUrl: './piedrapapeltijera.component.html',
  styleUrls: ['./piedrapapeltijera.component.css']
})
export class PiedrapapeltijeraComponent {

  ppt : JuegoPiedraPapelTijera;
  tamImagenes = 500;
  constructor()
  {
     this.ppt = new JuegoPiedraPapelTijera();
  }



}
