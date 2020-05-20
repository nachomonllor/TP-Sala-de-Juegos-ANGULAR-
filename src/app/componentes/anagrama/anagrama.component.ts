import { AnagramaService } from './anagrama.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css']
})
export class AnagramaComponent implements OnInit {
  palabra: string;
  palabraDesordenada: string;
  constructor(public _anagramaService: AnagramaService) { 
     // this.anagrama.cargarListaPalabras();
  }

  ngOnInit() {
    this.palabraDesordenada = this._anagramaService.desordenarPalabra();
    this.palabra = '';
    // this.anagrama.cargarListaPalabras();
     //this.anagrama.inicializarJuego();
  }
  onSubmit(form: NgForm) {
    this._anagramaService.verifyResult(this.palabra)
    this._anagramaService.inicializarJuego();
    this.ngOnInit();
    // (click)="_anagramaService.verifyResult()"
  }
  endGame() {
    this._anagramaService.saveGame();    
  }

}
