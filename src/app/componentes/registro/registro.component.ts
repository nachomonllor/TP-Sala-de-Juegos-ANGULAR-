import { FormGroup, FormControl, Validators } from '@angular/forms';
import { usuarioregistro } from './../../clases/usuarioregistro';
import { UserService } from './../../servicios/user.service';
import { Component, OnInit } from '@angular/core';
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

  form: FormGroup;
  user : usuarioregistro;
  constructor(public _userService: UserService) {
    this.form = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      clave: new FormControl(null, Validators.required),
      cuit: new FormControl(null, Validators.required),
      sexo: new FormControl(null, Validators.required)
    }) 
  }

  ngOnInit(): void {
  }

  registraUsuario() {
       const user: usuarioregistro = {
          nombre: this.form.get('nombre').value,
          clave: this.form.get('clave').value,
          cuit: this.form.get('cuit').value,
          sexo: this.form.get('sexo').value
       }   
       this._userService.addUser(user);
       alert("te registraste con exito");
  }

}
