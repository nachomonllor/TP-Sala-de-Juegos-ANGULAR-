import { Component, OnInit } from '@angular/core';
import { JuegoPiedraPapelTijera } from './juego-piedra-papel-tijera';
import { PptService } from './ppt.service';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-piedrapapeltijera',
  templateUrl: './piedrapapeltijera.component.html',
  styleUrls: ['./piedrapapeltijera.component.css']
})
export class PiedrapapeltijeraComponent {
  ppt: JuegoPiedraPapelTijera;
  observador: Observable<any>;
  timer: any;
  subscription: Subscription;
  constructor(private router: Router, public _ppt: PptService) {
    this.ppt = new JuegoPiedraPapelTijera();
  }

  endGame(data) {
    Swal.fire({
      title: `La ficha ${data} ha ganado`,
      text: '¿Quires seguir Jugando?',
      icon: 'success',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
      allowOutsideClick: false
    }).then((result) => {
      if (result.value) {
        this.ppt.initialize();
        //  this.setTimer();
      } else {
        this.subscription.unsubscribe();
        //  this._pptService.saveGame(this.ppt.puntos);
        this.router.navigate(['/Principal']);
      }
    });
  }

}
