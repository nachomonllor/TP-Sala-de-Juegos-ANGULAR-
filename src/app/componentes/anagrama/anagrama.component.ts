import { Router } from '@angular/router';
import { AnagramaService } from './anagrama.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {
  palabra: string;
  palabraDesordenada: string;
  constructor(
    private router: Router,
    public _anagramaService: AnagramaService) {}

  ngOnInit() {
    this.palabraDesordenada = this._anagramaService.desordenarPalabra();
    this.palabra = '';
  }
  onSubmit(form: NgForm) {
    this._anagramaService.verifyResult(this.palabra);
    this._anagramaService.inicializarJuego();
    this.ngOnInit();
  }
  endGame() {
    Swal.fire({
      title: 'Atención',
      text: '¿Quires seguir Jugando?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sí',
      cancelButtonText: 'No',
    }).then((result) => {
      if (result.value) {
        this.ngOnInit();
      } else {
        this._anagramaService.saveGame();
        this.router.navigate(['/Principal']);
      }
    });
  }

}
