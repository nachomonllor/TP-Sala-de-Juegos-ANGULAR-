import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { usuarioregistro } from '../../clases/usuarioregistro';
//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

 /* constructor( private miConstructor:FormBuilder) { }
  email=new FormControl('',[Validators.email]);
  formRegistro:FormGroup=this.miConstructor.group({
    usuario:this.email
  });*/
  entraNombre= '';
  entraClave = '';

  us : usuarioregistro;

  constructor() {
       
   }

  ngOnInit(): void {
  }

  RegistraUsuario() {
       this.us = new usuarioregistro(this.entraNombre, this.entraClave);
       localStorage.setItem('admin', JSON.stringify ( this.us));
       alert("te registraste con exito");
  }

}
